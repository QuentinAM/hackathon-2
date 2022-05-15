import { c as create_ssr_component, v as validate_component, a as each } from "../../chunks/index-a6d130cc.js";
import { N as Navbar, B as Background, F as Footer } from "../../chunks/background-6af39b7c.js";
import { P as Project_card } from "../../chunks/project_card-dc6d3f9f.js";
const Ico = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      id: 4436,
      title: "ZKSpace",
      crypto_used: "ZKS",
      crypto_link: "./images/ZKS.png",
      rating: "3",
      description: "La plateforme ZKSpace se compose de trois parties principales : un DEX AMM de couche 2 utilisant la technologie ZK-Rollups ZKSwap v3, un service de paiement appel\xE9 ZKSquare et une place de march\xE9 NFT appel\xE9e ZKSea.",
      money_earned: 300,
      goal: 5e3,
      total_contributor: 13,
      day_left: 107,
      img_src: "./images/ZKS_bg.jpeg"
    },
    {
      id: 4346,
      title: "Defy Trends",
      crypto_used: "DEFY",
      crypto_link: "https://www.cryptocompare.com/media/19633/btc.png",
      rating: "1.3",
      description: "Defy Trends uses on-chain analysis and high tech data science algorithms to provide data insights based on fundamentals and sentiment.",
      money_earned: 1e3,
      goal: 7e3,
      total_contributor: 841,
      day_left: 2,
      img_src: "./images/DEFY_bg.jpg"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>ICO</title>`, ""}`, ""}



${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
<div class="${"pt-20 pb-[8rem] lg:pb-64"}"><div class="${"ml-10 md:ml-64"}"><h1 class="${"text-4xl md:ml-0 ml-10 font-bold leading-tight"}"><span class="${"text-slate-300"}">ICO</span></h1>
        <h2 class="${"text-lg md:ml-0 ml-10 font-semibold leading-tight"}"><span class="${"text-slate-300"}">Initial coin offering</span></h2>

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
export { Ico as default };
