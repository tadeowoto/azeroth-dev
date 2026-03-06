export const getPaths = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/path");
    const paths = await res.json();

    return paths;
  } catch (error) {
    //TODO post the error to the database
    console.log(error);
  }
};

export const getPathBySlug = async (slug) => {
  try {
    const res = await fetch(`http://localhost:8080/api/path/${slug}`);
    const path = await res.json();

    return path;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSlugs = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/path/all");
    const slugs = await res.json();

    return slugs;
  } catch (error) {
    console.log(error);
  }
};
