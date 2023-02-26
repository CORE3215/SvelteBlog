import { c as create_ssr_component, e as each, b as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#blogtextarr.svelte-lznu7h{text-decoration:none;color:rgb(27, 27, 27)}.h.svelte-lznu7h{text-align:center;margin-top:50px;margin-bottom:50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<p></p>
<body><h1 class="${"h svelte-lznu7h"}">BLOG</h1>
<div class="${"container text-center"}" id="${"con1"}"><div class="${"row"}">${each(data.texts, (dt) => {
    return `<div class="${"col"}"><a href="${"/blog/" + escape(dt.id, true)}" id="${"blogtextarr"}" class="${"svelte-lznu7h"}"><img src="${"img/blog1.png"}" alt="${"I LOVE WOO WAK GOOD"}" width="${"360px"}"><br>
                
                <h3>${escape(dt.name)}</h3></a>
            </div>`;
  })}</div></div>
</body>`;
});
export {
  Page as default
};
