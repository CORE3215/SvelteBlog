import { g as getBlog } from "../../../chunks/index3.js";
const load = () => {
  const texts = getBlog();
  return {
    texts
  };
};
export {
  load
};
