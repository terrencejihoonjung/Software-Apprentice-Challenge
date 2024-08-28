export type Ad = {
  campaign: string;
  adSet: string;
  creative: string;
  spend: number;
  impressions: number;
  clicks: number;
  results?: number;
};

export type FetchedAds = {
  facebook_ads: PlatformAd[];
  twitter_ads: PlatformAd[];
  snapchat_ads: PlatformAd[];
  google_analytics: GoogleAnalyticsAd[];
};

export type PlatformAd = FacebookAd | SnapchatAd | TwitterAd;

export type FacebookAd = {
  ad_name: string;
  campaign_name: string;
  clicks: number;
  impressions: number;
  media_buy_name: string;
  spend: number;
};

export type SnapchatAd = {
  ad_squad_name: string;
  campaign_name: string;
  cost: number;
  creative_name: string;
  impressions: number;
  post_clicks: number;
};

export type TwitterAd = {
  ad_group: string;
  campaign: string;
  image_name: string;
  impressions: number;
  post_clicks: number;
  spend: number;
};

export type GoogleAnalyticsAd = {
  utm_campaign: string;
  utm_medium: string;
  utm_content: string;
  results: number;
};
