import { c as create_ssr_component } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-9yew5u{backdrop-filter:blur(10px);transition:transform .3s ease-in-out;z-index:2;color:rgb(227, 227, 227)}#nav.svelte-9yew5u{background-color:rgba(0, 66, 127, .4);border-radius:10px}#i1.svelte-9yew5u{color:aliceblue}#i2.svelte-9yew5u{color:aliceblue}#i3.svelte-9yew5u{color:aliceblue}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"back"}"><nav class="${"navbar navbar-expand-lg svelte-9yew5u"}" style="${"position:sticky; top:0;"}" id="${"nav"}"><div class="${"container-fluid"}"><a class="${"navbar-brand"}" href="${"/"}" style="${"margin-left: 12px;"}"><img src="${"/img/V.png"}" alt="${"Bootstrap"}" width="${"30"}" height="${"30"}"></a>
      <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
      <div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0"}"><li class="${"nav-item"}"><a class="${"nav-link active svelte-9yew5u"}" id="${"i1"}" aria-current="${"page"}" href="${"/"}">Home</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link active svelte-9yew5u"}" id="${"i2"}" href="${"/blog"}">Blog</a></li>
          <li class="${"nav-item svelte-9yew5u"}" id="${"i3"}"><a class="${"nav-link active  svelte-9yew5u"}" id="${"i3"}" href="${"/portfolio"}">Portfolio</a></li></ul></div></div></nav>
  <link href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"}" rel="${"stylesheet"}" integrity="${"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"}" crossorigin="${"anonymous"}">
  <script src="${"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"}" integrity="${"sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"}" crossorigin="${"anonymous"}">let src = "img/V.png";
    import Icon from "$lib/asset/icon.png"
  <\/script>

  ${slots.default ? slots.default({}) : ``}

  <div class="${"container"}"><footer class="${"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"}"><p class="${"col-md-4 mb-0"}" id="${"abc"}">© 2022 Company, Inc</p>
  
      <a href="${"/"}" class="${"col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"}"><img class="${"bi me-2"}" width="${"40"}" height="${"40"}" src="${"/img/V.png"}" alt="${"logo"}"></a>
  
      <ul class="${"nav col-md-4 justify-content-end"}"><li class="${"nav-item"}"><a href="${"/"}" class="${"nav-link px-2"}" id="${"abcd"}">Home</a></li>
        <li class="${"nav-item"}"><a href="${"/blog"}" class="${"nav-link px-2"}" id="${"abcde"}">Blog</a></li></ul></footer></div>
</div>`;
});
export {
  Layout as default
};
