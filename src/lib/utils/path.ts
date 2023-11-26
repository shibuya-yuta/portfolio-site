const base = "/portfolio-site";

export const path = (path: string) => {
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  // @ts-ignore
  if (base === "/") {
    return path;
  }
  return `${base}${path}`;
};
