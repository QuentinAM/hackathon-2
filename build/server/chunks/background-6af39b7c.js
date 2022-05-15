import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "./index-a6d130cc.js";
var navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".bg.svelte-12621w4{background:#ffffff50}.hover-bg.svelte-12621w4:hover{background:#ffffff6e}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const routes = [
    { name: "Home", route: "/", icon: "\u{1F400}" },
    { name: "ICO", route: "/ico", icon: "\u{1F5A5}\uFE0F" },
    { name: "IEO", route: "/ieo", icon: "\u{1F587}\uFE0F" },
    { name: "IDO", route: "/ido", icon: "\u26A1" }
  ];
  const sub_routes = [
    {
      name: "Account",
      route: "/account",
      icon: "\u{1F4DD}"
    }
  ];
  const sub_sub_routes = [
    {
      name: "About",
      route: "/about  ",
      icon: "\u{1F4DC}"
    }
  ];
  $$result.css.add(css$1);
  return `<aside class="${"z-10"}" aria-label="${"Sidebar"}"><div class="${"overflow-y-auto py-4 px-3 bg absolute h-full w-[2.9rem] md:w-40 inline-block svelte-12621w4"}"><ul class="${"space-y-2"}">${each(routes, (route) => {
    return `<li><a${add_attribute("href", route.route, 0)} class="${"transition-all flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover-bg svelte-12621w4"}"><span class="${"ml-3 text-xl"}">${escape(route.icon)} ${escape(route.name)}</span></a>
        </li>`;
  })}</ul>
     <ul class="${"pt-4 mt-4 space-y-2 border-t border-gray-200 "}">${each(sub_routes, (route) => {
    return `<li><a${add_attribute("href", route.route, 0)} class="${"transition-all flex items-center p-2 text-base font-normal text-gray-900 rounded-lg duration-75 hover-bg group svelte-12621w4"}"><span class="${"ml-3 text-xl"}">${escape(route.icon)} ${escape(route.name)}</span></a>
        </li>`;
  })}</ul>
     <ul class="${"pt-4 mt-4 space-y-2 border-t border-gray-200 "}">${each(sub_sub_routes, (route) => {
    return `<li><a${add_attribute("href", route.route, 0)} class="${"transition-all flex items-center p-2 text-base font-normal text-gray-900 rounded-lg duration-75 hover-bg group svelte-12621w4"}"><span class="${"ml-3 text-xl"}">${escape(route.icon)} ${escape(route.name)}</span></a>
      </li>`;
  })}</ul></div>
</aside>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_attribute("class", $$props.class, 0)}><footer class="${"z-20 relative p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"}"><span class="${"text-sm text-gray-500 sm:text-center dark:text-gray-400"}">\xA9 2022
            <a href="${"/"}" class="${"hover:underline"}">RAT.
            </a>All Rights Reserved.
        </span></footer></div>`;
});
var background_svelte_svelte_type_style_lang = "";
const css = {
  code: ".space.svelte-12hemko{background:#1A0000;width:100%;height:100%;-webkit-animation-name:svelte-12hemko-starField;-webkit-animation-duration:40s;-webkit-animation-iteration-count:infinite;-webkit-animation-delay:0s;-webkit-animation-timing-function:linear;animation-name:svelte-12hemko-starField;animation-duration:50s;animation-iteration-count:infinite;animation-delay:0s;animation-timing-function:linear;-moz-animation-name:svelte-12hemko-starField;-moz-animation-duration:50s;-moz-animation-iteration-count:infinite;-moz-animation-delay:0s;-moz-animation-timing-function:linear;-o-animation-name:svelte-12hemko-starField;-o-animation-duration:50s;-o-animation-iteration-count:infinite;-o-animation-delay:0s;-o-animation-timing-function:linear;z-index:-10\r\n}@keyframes svelte-12hemko-starField{from{-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg);-moz-filter:hue-rotate(0deg);-o-filter:hue-rotate(0deg)}to{-webkit-filter:hue-rotate(360deg);filter:hue-rotate(360deg);-moz-filter:hue-rotate(360deg);-o-filter:hue-rotate(360deg)}}.space.svelte-12hemko,.stars.svelte-12hemko{overflow:hidden;position:fixed;top:0px;left:0px;background:cover;width:auto;height:auto;min-width:100%;min-height:100%;z-index:-2}.stars.svelte-12hemko{background-image:radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));background-repeat:repeat;background-size:200px 200px;animation:svelte-12hemko-zoom 10s infinite;opacity:0}.stars.svelte-12hemko:nth-child(1){background-position:50% 50%;animation-delay:0s}.stars.svelte-12hemko:nth-child(2){background-position:20% 60%;animation-delay:1s}.stars.svelte-12hemko:nth-child(3){background-position:-20% -30%;animation-delay:2s}.stars.svelte-12hemko:nth-child(4){background-position:40% -80%;animation-delay:3s}.stars.svelte-12hemko:nth-child(5){background-position:-20% 30%;animation-delay:4s}@keyframes svelte-12hemko-zoom{0%{opacity:0;transform:scale(0.5);animation-timing-function:ease-in}85%{opacity:1;transform:scale(2.8);animation-timing-function:linear}100%{opacity:0;transform:scale(3.5)}}",
  map: null
};
let number_of_stars = 2;
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"space svelte-12hemko"}">${each(Array(number_of_stars), (i) => {
    return `<div class="${"stars svelte-12hemko"}"></div>`;
  })}
  </div>`;
});
export { Background as B, Footer as F, Navbar as N };
