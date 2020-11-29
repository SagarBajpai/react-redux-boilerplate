import Axios from "axios";

export const fetchSomething = async () => {
  try {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
