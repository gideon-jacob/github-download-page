export interface SiteConfiguration {
  application: {
    name: string;
    tagName?: string;
    description: string;
    logo?: string;
    screenshots?: string[];
    downloadLink?: string;
    website?: string;
    github: `${string}/${string}`;
    bugs?: string;
    info: {
      minimumRequirement?: string;
      releasedOn: Date;
    };
    aboutJson?: { [x: string]: string | number };
  };
  developer: {
    name: string;
    logo?: string;
    website?: string;
  };
  site: {
    primaryColor: `#${string}`;
    links?: {
      name: string;
      href: string;
    }[];
  };
  privacyPolicy?: string | {
    lastUpdated: Date;
    body: {
      heading: string;
      content: string[];
    }[];
  };
}

export interface ExtendedSiteConfiguration extends SiteConfiguration {
  application: SiteConfiguration['application'] & {
    downloads?: number;
    size?: number;
    info: {
      minimumRequirement?: string | null;
      releasedOnString: string;
      updatedOnString?: string;
    };
  };
  site: SiteConfiguration['site'] & {
    statusCode: number;
    basePath: string;
  };
  privacyPolicy?: string | {
    lastUpdated: Date;
    lastUpdatedString: string;
    body: {
      heading: string;
      content: string[];
    }[];
  };
}

declare global {
  interface Window {
    siteConfiguration: ExtendedSiteConfiguration;
  }
}