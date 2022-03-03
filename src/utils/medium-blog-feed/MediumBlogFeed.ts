import axios from "axios";
import { MediumFeedProps } from "../../props-def/PropDef";

/**
 * Get feed from medium blog
 * @param username user name or account
 * @returns blog feed
 */
export const getMediumBlogFeed = async (
  username: string
): Promise<MediumFeedProps> => {
  try {
    if (!username) throw Error("Invalid username");

    //reference https://medium.com/@KonradDaWo/how-to-display-medium-posts-on-a-website-with-plain-vanilla-js-basic-api-usage-example-865507848c2
    const feed = await axios.get<MediumFeedProps>(
      ` https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );

    const regex = /(?:<figure>)(.*?)(?:<\/figure>)/g;
    const slicedItems = feed.data.items.slice(0, 10);
    feed.data.items = slicedItems.map((item) => {
      const cleanFigure = item.content.replace(regex, "");
      return {
        ...item,
        description: cleanFigure,
        content: cleanFigure,
      };
    });
    return feed.data;
  } catch (error: any) {
    return error;
  }
};
