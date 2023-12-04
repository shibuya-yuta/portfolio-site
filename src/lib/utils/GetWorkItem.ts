import { work_list_items } from "@lib/data/WorkItem";
import { path } from "./path";

export const GetWorkItem = () => {
  return work_list_items
    .filter((item) => item.publish === true)
    .map((item) => ({
      ...item,
      link: `${path(`work/${item.path}`)}`,
      thumbnail: `${path(`assets/${item.thumbnail}`)}`,
    }));
};
