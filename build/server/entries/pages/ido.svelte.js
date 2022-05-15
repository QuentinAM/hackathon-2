import { c as create_ssr_component, v as validate_component, a as each } from "../../chunks/index-a6d130cc.js";
import { N as Navbar, B as Background, F as Footer } from "../../chunks/background-6af39b7c.js";
import { P as Project_card } from "../../chunks/project_card-dc6d3f9f.js";
const Ido = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      id: 51,
      title: "CleanDefi token",
      rating: "4.2",
      description: "CleanDefi is an innovative decentralized AMM, Incubator, Yield Farming & NFT Launch solution governed by the community and powered by SOLANA",
      crypto_used: "CDFI",
      crypto_link: "./images/CDFI.jpg",
      money_earned: 3e3,
      goal: 1e4,
      total_contributor: 11,
      day_left: 84,
      img_src: "./images/CDFI_bg.png"
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
    },
    {
      id: 47,
      title: "RatDAO",
      crypto_used: "RAT",
      crypto_link: "./images/RAT.png",
      rating: "5",
      description: "Le rat, discret, prudent, intelligent et tr\xE8s proche de l'homme. Tema la taille du rat",
      money_earned: 1e3,
      goal: 7e3,
      total_contributor: 841,
      day_left: 2,
      img_src: "./images/RAT_bg.png"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>IDO</title>`, ""}`, ""}



${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
<div class="${"pt-20 pb-[8rem] lg:pb-64"}"><div class="${"ml-10 md:ml-64"}"><h1 class="${"text-4xl md:ml-0 ml-10 font-bold leading-tight"}"><span class="${"text-slate-300"}">IDO</span></h1>
        <h2 class="${"text-lg md:ml-0 ml-10 font-semibold leading-tight"}"><span class="${"text-slate-300"}">Initial Dex Offering</span></h2>

        <div class="${"p-10 -mb-40 overflow-scroll h-[40rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"}">${each(projects, (project) => {
    return `${validate_component(Project_card, "ProjectCard").$$render($$result, {
      id: project.id,
      rating: project.rating,
      title: project.title,
      description: project.description,
      crypto: project.crypto_used,
      goal: project.goal,
      money_earned: project.money_earned,
      img_src: project.img_src
    }, {}, {})}`;
  })}</div></div></div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { Ido as default };
