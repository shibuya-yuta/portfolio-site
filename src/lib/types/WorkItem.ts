export type WorkItemType = {
  link?: string;
  path: string;
  title: string;
  description: string;
  development_tyle: 1 | 2; // 1:個人、2:複数人
  thumbnail: string;
  publish: boolean;
};
