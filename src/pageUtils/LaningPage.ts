import axios from "axios";

export type LaningPageProps = {
    common:{
      name:{
        first: string,
        last: string,
      },
      contact:{
        location: string,
        phone: string,
        mobile: string,
        email: string,
      },
      socialLinks:{
        github: string,
        linkedIn: string,
        medium: string,
        facebook: string,
      }
    },
    menu:{
      links:{
        title:string,
        id:string,
      }[]
    },
    hero:{
      heroBgImageURL: string,
    },
    about:About,
    skill:Skill,
    portfolios:Portfolios[],
    blog:Blog
}

export type About = {
  personName: string,
  occupation: string,
  brief: string,
  age: string,
  location: string,
  email: string,
  experiences: {
    number: number,
    suffix: string,
    title: string,
  }[]
}

export type Skill = {
  group:{
    title: string,
    skills:{
        title: string,
        value: number,
    }[]
  }[]
}
export type Blog = {
  data:MediumFeed,
  error:any,
}

export type Portfolios = {
  title: string,
  image: string,
  categories: string[],
  imageSlides: string[],
}

/**
 * Type of MediumFeed
 * 
 * Refer to https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40tomneo2004
 */
export type MediumFeed = {
  feed:{
    url:string,
    title:string,
    link:string,
    author:string,
    description:string,
    image:string,
  },
  items:{
    title:string,
    pubDate:string,
    link:string,
    guid:string,
    author:string,
    thumbnail:string,
    description:string,
    content:string,
    categories:string[],
  }[]
}

/**
 * Get feed from medium blog
 * @param username user name or account
 * @returns blog feed
 */
export const mediumFeed = async (username:string):Promise<MediumFeed>=>{
  try{
    if(!username) throw Error('Invalid username');
    
    //reference https://medium.com/@KonradDaWo/how-to-display-medium-posts-on-a-website-with-plain-vanilla-js-basic-api-usage-example-865507848c2
    const feed = await axios.get<MediumFeed>(` https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);

    const regex = /(?:<figure>)(.*?)(?:<\/figure>)/g;
    const slicedItems = feed.data.items.slice(0, 10);
    feed.data.items = slicedItems.map(item=>{
      const cleanFigure = item.content.replace(regex, '');
      return {
        ...item,
        description:cleanFigure,
        content:cleanFigure,
      }
    })
    return feed.data;
  }
  catch(error){
    return error;
  }
}

