import { c as create_ssr_component, a as each, e as escape, b as add_attribute, v as validate_component } from "./index-a6d130cc.js";
const Project_rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { percentage } = $$props;
  let percentage_rounded = Math.round(percentage);
  if ($$props.percentage === void 0 && $$bindings.percentage && percentage !== void 0)
    $$bindings.percentage(percentage);
  return `<div class="${"flex items-center"}">${each(Array(percentage_rounded), (i) => {
    return `<svg class="${"w-5 h-5 text-yellow-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>`;
  })}
    
    ${percentage_rounded < 5 ? `${each(Array(5 - percentage_rounded), (i) => {
    return `<svg class="${"w-5 h-5 text-gray-300 dark:text-gray-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>`;
  })}` : ``}

     <p class="${"ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"}">${escape(percentage)} out of 5</p></div>`;
});
const Project_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { crypto } = $$props;
  let { goal } = $$props;
  let { money_earned } = $$props;
  let { rating } = $$props;
  let { img_src = "https://picsum.photos/300" } = $$props;
  let { main_page = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.crypto === void 0 && $$bindings.crypto && crypto !== void 0)
    $$bindings.crypto(crypto);
  if ($$props.goal === void 0 && $$bindings.goal && goal !== void 0)
    $$bindings.goal(goal);
  if ($$props.money_earned === void 0 && $$bindings.money_earned && money_earned !== void 0)
    $$bindings.money_earned(money_earned);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.img_src === void 0 && $$bindings.img_src && img_src !== void 0)
    $$bindings.img_src(img_src);
  if ($$props.main_page === void 0 && $$bindings.main_page && main_page !== void 0)
    $$bindings.main_page(main_page);
  return `<div${add_attribute("class", main_page ? "rounded my-10 w-full md:3/5 bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700" : "rounded w-2/3 md:3/5 bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700", 0)}><img class="${"w-full h-40 rounded-t hover:cursor-pointer"}"${add_attribute("src", img_src, 0)} alt="${""}">
    <div class="${"px-6 py-4"}"><div class="${"font-bold text-white text-xl mb-2"}">${escape(title)}</div>
      <p class="${"text-gray-500 dark:text-gray-400 text-base h-20 overflow-scroll"}">${escape(description)}</p></div>
    <div class="${"px-6 pt-4 pb-2"}"><span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}">${escape(crypto)}</span>
        <span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}">${escape(goal)}</span>
        <span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}">${escape(money_earned)}</span></div>
    <div class="${"p-2"}">${validate_component(Project_rating, "ProjectRating").$$render($$result, { percentage: rating }, {}, {})}</div></div>`;
});
export { Project_card as P };
