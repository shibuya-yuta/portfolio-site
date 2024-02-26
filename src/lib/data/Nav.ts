import type { NavType } from "@lib/types/Nav";

export const nav_list_items: NavType[] = [
  {
    path: "",
    title: "HOME",
    publish: true,
  },
  // WORK --------------------
  {
    path: "festa25-main",
    title: "第25回神大フェスタ 本番サイト",
    publish: false,
  },
  {
    path: "festa25-teaser",
    title: "第25回神大フェスタ 募集サイト",
    publish: false,
  },
  {
    path: "festa25-shinkan",
    title: "神大フェスタ 新歓サイト",
    publish: false,
  },
  {
    path: "calculator",
    title: "電卓",
    publish: false,
  },
  {
    path: "memorandum",
    title: "メモ帳",
    publish: true,
  },
  {
    path: "ox-game",
    title: "ox-game",
    publish: false,
  },
  {
    path: "reversi",
    title: "reversi",
    publish: false,
  },
];
