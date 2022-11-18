const HOST = "https://www.reddit.com";
const GET_ALL_URL = "/r/all";
const fetchURL = (url: string) => fetch(`${HOST}${url}.json`).then(res => res.json());

export const fetchPosts = () => fetchURL(GET_ALL_URL);

export const fetchPost = (postURL: string) => () => fetchURL(postURL);