export const getPaths = async () => {
  const res = await fetch("http://localhost:8080/api/path");
  const paths = await res.json();

  return paths;
};

export const getPathBySlug = async (slug) => {
  const res = await fetch(`http://localhost:8080/api/path/${slug}`);
  const path = await res.json();

  return path;
};

export const getAllSlugs = async () => {
  const res = await fetch("http://localhost:8080/api/path/all");
  const slugs = await res.json();

  return slugs;
};
