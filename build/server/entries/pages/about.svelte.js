import { c as create_ssr_component, v as validate_component } from "../../chunks/index-a6d130cc.js";
import { N as Navbar, B as Background, F as Footer } from "../../chunks/background-6af39b7c.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}



${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
<div class="${"pt-20 pb-[8rem] lg:pb-64"}"><div class="${"ml-3 md:ml-64"}"></div></div>
${validate_component(Footer, "Footer").$$render($$result, { class: "mt-14" }, {}, {})}`;
});
export { About as default };
