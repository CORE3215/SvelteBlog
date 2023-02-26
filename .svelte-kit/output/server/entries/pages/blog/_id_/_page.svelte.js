import { c as create_ssr_component, d as subscribe, f as add_attribute, b as escape, v as validate_component } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
const defaultValue = "icy-dark";
const utterancesTheme = writable(defaultValue);
utterancesTheme.subscribe((value) => {
});
const Utterances = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $utterancesTheme, $$unsubscribe_utterancesTheme;
  $$unsubscribe_utterancesTheme = subscribe(utterancesTheme, (value) => $utterancesTheme = value);
  let { reponame } = $$props;
  let { issueTerm = "pathname" } = $$props;
  let { label = "comments" } = $$props;
  let { theme = $utterancesTheme } = $$props;
  let divElm;
  let browser = false;
  if ($$props.reponame === void 0 && $$bindings.reponame && reponame !== void 0)
    $$bindings.reponame(reponame);
  if ($$props.issueTerm === void 0 && $$bindings.issueTerm && issueTerm !== void 0)
    $$bindings.issueTerm(issueTerm);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  {
    {
      try {
        const iFrame = browser && divElm.getElementsByClassName("utterances-frame")[0];
        if (iFrame)
          ;
      } catch (e) {
        console.log("error", e);
      }
    }
  }
  $$unsubscribe_utterancesTheme();
  return `<div${add_attribute("this", divElm, 0)}></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".canvas3d1.svelte-3aesge{display:flex;left:0;right:0;margin:auto}p.svelte-3aesge{text-align:center;font-size:large}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let text = data.texts;
  let stid = data.params.id;
  let id = parseInt(stid) - 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body id="${"bodyabcd"}"><h1 style="${"text-align: center; font-size: 60px; margin-top: 15px; margin-bottom: 20px; "}">${escape(text[id].name)}</h1>
    <p class="${"svelte-3aesge"}"><!-- HTML_TAG_START -->${text[id].text}<!-- HTML_TAG_END --></p>
    <canvas class="${"canvas3d1 svelte-3aesge"}" width="${"200"}" height="${"200"}"></canvas>
    ${validate_component(Utterances, "Utterances").$$render(
    $$result,
    {
      reponame: "CORE3215/SvelteBlog",
      issueTerm: "title",
      theme: "icy-dark"
    },
    {},
    {}
  )}
    <title>${escape(text[id].name)}</title>
</body>`;
});
export {
  Page as default
};
