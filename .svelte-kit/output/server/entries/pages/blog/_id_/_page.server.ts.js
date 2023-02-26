import { g as getBlog } from "../../../../chunks/index3.js";
const load = ({ params }) => {
  const texts = getBlog();
  return {
    texts,
    params
  };
};
export {
  load
};
