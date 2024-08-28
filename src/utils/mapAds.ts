import { Ad, FetchedAds, PlatformAd, GoogleAnalyticsAd } from "../entities";

// Field Helper Methods
const mapCampaign = (ad: PlatformAd): string => {
  return "campaign_name" in ad ? ad.campaign_name : ad.campaign;
};

const mapClicks = (ad: PlatformAd): number => {
  return "clicks" in ad ? ad.clicks : ad.post_clicks;
};

const mapSpend = (ad: PlatformAd): number => {
  return "spend" in ad ? ad.spend : ad.cost;
};

const mapAdSet = (ad: PlatformAd): string => {
  if ("media_buy_name" in ad) return ad.media_buy_name;
  else if ("ad_squad_name" in ad) return ad.ad_squad_name;

  return ad.ad_group;
};

const mapCreative = (ad: PlatformAd): string => {
  if ("ad_name" in ad) return ad.ad_name;
  else if ("creative_name" in ad) return ad.creative_name;
  return ad.image_name;
};

const mapImpressions = (ad: PlatformAd): number => {
  return ad.impressions;
};

const findMatchingAd = (
  ads: Ad[],
  googleAd: GoogleAnalyticsAd
): Ad | undefined => {
  return ads.find(
    (ad) =>
      ad.campaign === googleAd.utm_campaign &&
      ad.adSet === googleAd.utm_medium &&
      ad.creative === googleAd.utm_content
  );
};

// Map Fetched Ads to Standardized Format Ads
const mapAds = (ads: FetchedAds): Ad[] => {
  // Separate platform ads and google analytics ads
  const platformAds: PlatformAd[] = [
    ...ads["facebook_ads"],
    ...ads["twitter_ads"],
    ...ads["snapchat_ads"],
  ];
  const googleAnalyticsAds: GoogleAnalyticsAd[] = [...ads["google_analytics"]];

  // Map platform ads first
  const mappedAds: Ad[] = platformAds.map((ad: PlatformAd) => ({
    campaign: mapCampaign(ad),
    adSet: mapAdSet(ad),
    creative: mapCreative(ad),
    spend: mapSpend(ad),
    impressions: mapImpressions(ad),
    clicks: mapClicks(ad),
  }));

  // Map google analytics adds to platform ads within mappedAds
  googleAnalyticsAds.forEach((googleAd) => {
    // Check if an ad with the unique combination of campaign, adset, and creative exists and get it
    const matchingAd = findMatchingAd(mappedAds, googleAd);

    if (matchingAd) {
      matchingAd.results = googleAd.results;
    }
  });

  return mappedAds;
};

export default mapAds;
