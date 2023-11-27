import { nav_list_items } from "@lib/data/Nav";
import { base, path } from "./path";

export const GetNav = () => {
  return nav_list_items
    .filter((item) => item.publish === true)
    .map((item) => ({
      ...item,
      link: `${path(item.path)}`,
    }));
};
