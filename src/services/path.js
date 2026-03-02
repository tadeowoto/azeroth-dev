const res = await fetch("http://localhost:8080/api/path");
const paths = await res.json();

export default paths;
