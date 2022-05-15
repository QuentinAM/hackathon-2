import { c as create_ssr_component, o as onMount, v as validate_component, a as each } from "../../chunks/index-a6d130cc.js";
import { N as Navbar, B as Background, F as Footer } from "../../chunks/background-6af39b7c.js";
import { P as Project_card } from "../../chunks/project_card-dc6d3f9f.js";
import "focus-options-polyfill";
var title_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".text-line.svelte-1dx7ird text.svelte-1dx7ird{stroke-dasharray:500;stroke-dashoffset:500;animation:svelte-1dx7ird-dash 5s linear forwards, svelte-1dx7ird-filling 4s ease-in forwards}@keyframes svelte-1dx7ird-dash{to{stroke-dashoffset:0}}@keyframes svelte-1dx7ird-filling{from{fill:#2A4A73;fill-opacity:0}to{fill:#2A4A73;fill-opacity:1}}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var isSmallScreen = false;
  onMount(() => {
    isSmallScreen = window.innerWidth < 768;
  });
  $$result.css.add(css$1);
  return `${isSmallScreen ? `<svg height="${"100"}" width="${"320"}" stroke="${"#2A4A73"}" stroke-width="${"2"}" class="${"text-line svelte-1dx7ird"}"><text style="${"font-family: 'Baloo Tamma', georgia, times, serif; font-weight: normal; font-style: normal"}" x="${"50"}" y="${"90"}" fill="${"none"}" font-size="${"65"}" class="${"svelte-1dx7ird"}">\u{1F400}RatPonzi</text></svg>` : `<svg height="${"100"}" width="${"1000"}" stroke="${"#2A4A73"}" stroke-width="${"2"}" class="${"text-line svelte-1dx7ird"}"><text style="${"font-family: 'Baloo Tamma', georgia, times, serif; font-weight: normal; font-style: normal"}" x="${"50"}" y="${"90"}" fill="${"none"}" font-size="${"100"}" class="${"svelte-1dx7ird"}">\u{1F400}RatPonzi</text></svg>`}`;
});
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {
}
var Parallax_svelte_svelte_type_style_lang = "";
var ParallaxLayer_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-focus-in.svelte-x9tjes{-webkit-animation:svelte-x9tjes-text-focus-in 4s ease-in-out both;animation:svelte-x9tjes-text-focus-in 4s ease-in-out both}@-webkit-keyframes svelte-x9tjes-text-focus-in{0%{-webkit-filter:blur(12px);filter:blur(12px);opacity:0}100%{-webkit-filter:blur(0px);filter:blur(0px);opacity:1}}@keyframes svelte-x9tjes-text-focus-in{0%{-webkit-filter:blur(12px);filter:blur(12px);opacity:0}100%{-webkit-filter:blur(0px);filter:blur(0px);opacity:1}}.text-focus-in2.svelte-x9tjes{-webkit-animation:svelte-x9tjes-text-focus-in2 1.6s ease-in both;animation:svelte-x9tjes-text-focus-in2 1.6s ease-in both}@-webkit-keyframes svelte-x9tjes-text-focus-in2{0%{-webkit-filter:blur(12px);filter:blur(12px);opacity:0}100%{-webkit-filter:blur(0px);filter:blur(0px);opacity:1}}@keyframes svelte-x9tjes-text-focus-in2{0%{-webkit-filter:blur(12px);filter:blur(12px);opacity:0}100%{-webkit-filter:blur(0px);filter:blur(0px);opacity:1}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      id: 3453,
      title: "Lucky Block",
      rating: "4.2",
      description: "Une plateforme mondiale de jeux et de comp\xE9titions avec des joueurs se servant des protocoles de la blockchain.",
      crypto_used: "LBLOCK",
      crypto_link: "./images/LBLOCK.png",
      money_earned: 3e3,
      goal: 1e4,
      total_contributor: 11,
      day_left: 84,
      img_src: "./images/LBLOCK_bg.png"
    },
    {
      id: 50,
      title: "Galaxy",
      crypto_used: "GAL",
      crypto_link: "./images/GAL.png",
      rating: "4.8",
      description: " Le projet Galaxy repose sur une infrastructure ouverte et collaborative dont la mission est d'aider les d\xE9veloppeurs Web 3 \xE0 utiliser les donn\xE9es d 'accr\xE9ditation num\xE9rique et les NFT pour cr\xE9er de meilleurs produits et communaut\xE9s. ",
      money_earned: 1e3,
      goal: 7e3,
      total_contributor: 841,
      day_left: 2,
      img_src: "./images/GAL_bg.jpg"
    },
    {
      id: 46,
      title: "SCOPULY",
      crypto_used: "SCOP",
      crypto_link: "./images/SCOP.jpg",
      rating: "0.6",
      description: "Scopuly is a new DeFi-style digital banking ecosystem built to promote digital lifestyles and enable people to manage their money online \u2013 quickly and with minimal fees.",
      money_earned: 300,
      goal: 5e3,
      total_contributor: 13,
      day_left: 107,
      img_src: "./images/SCOP_bg.jpeg"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}



${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
<div class="${"pt-20 pb-[8rem] lg:pb-10"}"><div class="${"ml-3 md:ml-64"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}
        <h2 class="${"text-focus-in text-lg md:ml-14 ml-10 font-semibold leading-tight svelte-x9tjes"}"><span class="${"text-slate-300"}">Your new cypto launching platform.
          </span></h2>
        <div class="${"flex text-focus-in2 pt-10 svelte-x9tjes"}"><span class="${"text-slate-300 mt-10 ml-20"}">Explore a large selection of projects and start your own.
          </span>
          <div class="${"h-[40rem] w-[20rem] ml-40 overflow-scroll"}">${each(projects, (project) => {
    return `${validate_component(Project_card, "ProjectCard").$$render($$result, {
      id: project.id,
      rating: project.rating,
      title: project.title,
      description: project.description,
      crypto: project.crypto_used,
      goal: project.goal,
      money_earned: project.money_earned,
      img_src: project.img_src,
      main_page: true
    }, {}, {})}`;
  })}</div></div></div></div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
