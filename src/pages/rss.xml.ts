import rss from "@astrojs/rss";
import { SITE_AUTHOR, SITE_DESC, SITE_URL } from "../consts";

export function get() {
    return rss({
        title: SITE_AUTHOR,
        description: SITE_DESC,
        site: SITE_URL,
        items: [],
        customData: `<language>en-us</language>`,
    });
}