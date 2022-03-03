export type ViewProps = {
  common: CommonProps;
  menu: MenuProps;
  home: HomeProps;
  hero: HeroProps;
  about: AboutProps;
  skill: SkillProps;
  portfolios: PortfolioProps[];
  blog: BlogProps;
};

export type CommonProps = {
  name: {
    first: string;
    last: string;
  };
  contact: {
    location: string;
    phone: string;
    mobile: string;
    email: string;
  };
  socialLinks: {
    github: string;
    linkedIn: string;
    medium: string;
    facebook: string;
  };
  cvURL: string;
};

export type MenuProps = {
  links: {
    title: string;
    id: string;
  }[];
};

export type HomeProps = {
  greeting: string;
  country: string;
  city: string;
};

export type AboutProps = {
  personName: string;
  occupation: string;
  brief: string;
  age: string;
  location: string;
  email: string;
  experiences: {
    number: number;
    suffix: string;
    title: string;
  }[];
};

export type HeroProps = {
  heroBgImageURL: string;
};

export type SkillProps = {
  group: {
    title: string;
    skills: {
      title: string;
      value: number;
    }[];
  }[];
  certificates: {
    title: string;
    url: string;
  }[];
};

export type BlogProps = {
  data: MediumFeedProps;
  error: any;
};

export type PortfolioProps = {
  title: string;
  image: string;
  categories: string[];
  imageSlides: string[];
  description: string;
  platform: string;
  technologies: string;
  url?: string;
  links: {
    [key: string]: string;
  };
};

/**
 * Type of MediumFeed
 *
 * Refer to https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40tomneo2004
 */
export type MediumFeedProps = {
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
  }[];
};
