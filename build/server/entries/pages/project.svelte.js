import { n as noop, d as safe_not_equal, f as assign, g as now, l as loop, i as identity, c as create_ssr_component, e as escape, b as add_attribute, a as each, h as subscribe, v as validate_component } from "../../chunks/index-a6d130cc.js";
import { N as Navbar, B as Background, F as Footer } from "../../chunks/background-6af39b7c.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
var statscard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".stats-card.svelte-atbp1f.svelte-atbp1f{position:relative;margin:1.5rem 0;display:flex;flex-direction:column;grid-column:content-start/content-end;grid-row:info-end/stat-end}.stats-card.svelte-atbp1f .stats.svelte-atbp1f{position:relative;display:flex;justify-content:space-between;align-items:flex-start}.stats-card.svelte-atbp1f .stats .each-stat.svelte-atbp1f{flex-basis:30%}.stats-card.svelte-atbp1f .stats .each-stat h1.svelte-atbp1f{font-size:2rem}.stats-card.svelte-atbp1f .stats .each-stat p.svelte-atbp1f{padding-top:0.4rem}.stats-card.svelte-atbp1f .stats .vert-line1.svelte-atbp1f{border-left:2px solid darkgrey;position:absolute;top:0;bottom:0;left:17%;opacity:0.2}.stats-card.svelte-atbp1f .stats .vert-line2.svelte-atbp1f{border-left:2px solid darkgrey;position:absolute;top:0;bottom:0;left:44%;opacity:0.2}.stats-card.svelte-atbp1f .stats .vert-line3.svelte-atbp1f{border-left:2px solid darkgrey;position:absolute;top:0;bottom:0;left:67%;opacity:0.2}@media(max-width: 700px){.stats-card.svelte-atbp1f .stats.svelte-atbp1f{flex-direction:column;align-items:center;justify-content:center}.stats-card.svelte-atbp1f .stats .each-stat.svelte-atbp1f{display:flex;flex-direction:column;align-items:center}.stats-card.svelte-atbp1f .stats .vert-line1.svelte-atbp1f{margin:1rem 0;border-left:none;border-bottom:2px solid darkgrey;position:static;width:30%;opacity:0.2}.stats-card.svelte-atbp1f .stats .vert-line2.svelte-atbp1f{margin:1rem 0;border-left:none;border-bottom:2px solid darkgrey;position:static;width:30%;opacity:0.2}.stats-card.svelte-atbp1f .stats .vert-line3.svelte-atbp1f{margin:1rem 0;border-left:none;border-bottom:2px solid darkgrey;position:static;width:30%;opacity:0.2}}",
  map: null
};
const Statscard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { money_earned } = $$props;
  let { goal } = $$props;
  let { total_contributor } = $$props;
  let { day_left } = $$props;
  let { crypto_used } = $$props;
  let { crypto_link } = $$props;
  if ($$props.money_earned === void 0 && $$bindings.money_earned && money_earned !== void 0)
    $$bindings.money_earned(money_earned);
  if ($$props.goal === void 0 && $$bindings.goal && goal !== void 0)
    $$bindings.goal(goal);
  if ($$props.total_contributor === void 0 && $$bindings.total_contributor && total_contributor !== void 0)
    $$bindings.total_contributor(total_contributor);
  if ($$props.day_left === void 0 && $$bindings.day_left && day_left !== void 0)
    $$bindings.day_left(day_left);
  if ($$props.crypto_used === void 0 && $$bindings.crypto_used && crypto_used !== void 0)
    $$bindings.crypto_used(crypto_used);
  if ($$props.crypto_link === void 0 && $$bindings.crypto_link && crypto_link !== void 0)
    $$bindings.crypto_link(crypto_link);
  $$result.css.add(css$2);
  return `<section class="${"stats-card px-6 svelte-atbp1f"}"><div class="${"stats svelte-atbp1f"}"><div class="${"each-stat svelte-atbp1f"}"><h1 class="${"top text-slate-200 svelte-atbp1f"}">${escape(money_earned)}</h1>
        <p class="${"bot text-gray-500 dark:text-gray-400 svelte-atbp1f"}">/${escape(goal)} usdc</p></div>
      <div class="${"vert-line1 svelte-atbp1f"}"></div>
      <div class="${"each-stat svelte-atbp1f"}"><h1 class="${"top text-slate-200 svelte-atbp1f"}">${escape(total_contributor)}</h1>
        <p class="${"bot text-gray-500 dark:text-gray-400 svelte-atbp1f"}">total backers</p></div>
      <div class="${"vert-line2 svelte-atbp1f"}"></div>
      <div class="${"each-stat svelte-atbp1f"}"><h1 class="${"top text-slate-200 svelte-atbp1f"}">${escape(day_left)}</h1>
        <p class="${"bot text-gray-500 dark:text-gray-400 svelte-atbp1f"}">days left</p></div>
      <div class="${"vert-line3 svelte-atbp1f"}"></div>
      <div class="${"each-stat svelte-atbp1f"}"><h1 class="${"top text-slate-200 svelte-atbp1f"}">${escape(crypto_used)}</h1>
        <p class="${"bot svelte-atbp1f"}"><img class="${"w-6 h-6"}"${add_attribute("src", crypto_link, 0)} alt="${""}"></p></div></div>
  </section>`;
});
const Review = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { joined_on } = $$props;
  let { title } = $$props;
  let { rating } = $$props;
  const rating_rounded = Math.round(rating);
  let { date } = $$props;
  let { description } = $$props;
  let { peoples } = $$props;
  let { img_src } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.joined_on === void 0 && $$bindings.joined_on && joined_on !== void 0)
    $$bindings.joined_on(joined_on);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.peoples === void 0 && $$bindings.peoples && peoples !== void 0)
    $$bindings.peoples(peoples);
  if ($$props.img_src === void 0 && $$bindings.img_src && img_src !== void 0)
    $$bindings.img_src(img_src);
  return `<article><div class="${"flex items-center mb-4 space-x-4"}"><img class="${"w-10 h-10 rounded-full"}"${add_attribute("src", img_src, 0)} alt="${""}">
        <div class="${"space-y-1 font-medium dark:text-white"}"><p>${escape(name)}<time datetime="${"2014-08-16 19:00"}" class="${"block text-sm text-gray-500 dark:text-gray-400"}">Joined on ${escape(joined_on)}</time></p></div></div>
    <div class="${"flex items-center mb-1"}">${each(Array(rating_rounded), (i) => {
    return `<svg class="${"w-5 h-5 text-yellow-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>`;
  })}
        
        ${rating_rounded < 5 ? `${each(Array(5 - rating_rounded), (i) => {
    return `<svg class="${"w-5 h-5 text-gray-300 dark:text-gray-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>`;
  })}` : ``}
    <h3 class="${"ml-2 text-sm font-semibold text-gray-900 dark:text-white"}">${escape(title)}</h3></div>
    <footer class="${"mb-5 text-sm text-gray-500 dark:text-gray-400"}"><p>${escape(date)}</p></footer>
    <p class="${"mb-2 font-light text-gray-500 dark:text-gray-400"}">${escape(description)}</p>
<aside><p class="${"mt-1 text-xs text-gray-500 dark:text-gray-400"}">${escape(peoples)} people found this interesting</p>
        <div class="${"flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600"}"><a href="${"/"}" class="${"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}">Interested</a>
            <a href="${"/"}" class="${"pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"}">Report abuse</a></div></aside></article>`;
});
var Circle_svelte_svelte_type_style_lang = "";
var Circle2_svelte_svelte_type_style_lang = "";
var Circle3_svelte_svelte_type_style_lang = "";
const range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
var DoubleBounce_svelte_svelte_type_style_lang = "";
var GoogleSpin_svelte_svelte_type_style_lang = "";
var ScaleOut_svelte_svelte_type_style_lang = "";
var SpinLine_svelte_svelte_type_style_lang = "";
var Stretch_svelte_svelte_type_style_lang = "";
var BarLoader_svelte_svelte_type_style_lang = "";
var Jumper_svelte_svelte_type_style_lang = "";
var RingLoader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-17ey38u{position:relative;width:var(--size);height:var(--size)}.border.svelte-17ey38u{border-color:var(--color);position:absolute;top:0px;left:0px;width:var(--size);height:var(--size);opacity:0.4;perspective:800px;border-width:6px;border-style:solid;border-image:initial;border-radius:100%}.border.\\31 .svelte-17ey38u{animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringOne}.border.\\32 .svelte-17ey38u{animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringTwo}@keyframes svelte-17ey38u-ringOne{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(360deg) rotateY(180deg) rotateZ(360deg)}}@keyframes svelte-17ey38u-ringTwo{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(180deg) rotateY(360deg) rotateZ(360deg)}}",
  map: null
};
const RingLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "2s" } = $$props;
  let { size = "60" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-17ey38u"}" style="${"--size: " + escape(size) + escape(unit) + "; --color: " + escape(color) + "; --duration: " + escape(duration) + ";"}">${each(range(2, 1), (version) => {
    return `<div class="${"border " + escape(version) + " svelte-17ey38u"}"></div>`;
  })}</div>`;
});
var SyncLoader_svelte_svelte_type_style_lang = "";
var Rainbow_svelte_svelte_type_style_lang = "";
var Wave_svelte_svelte_type_style_lang = "";
var Firework_svelte_svelte_type_style_lang = "";
var Pulse_svelte_svelte_type_style_lang = "";
var Jellyfish_svelte_svelte_type_style_lang = "";
var Chasing_svelte_svelte_type_style_lang = "";
var Shadow_svelte_svelte_type_style_lang = "";
var Square_svelte_svelte_type_style_lang = "";
var Moon_svelte_svelte_type_style_lang = "";
var Plane_svelte_svelte_type_style_lang = "";
var Diamonds_svelte_svelte_type_style_lang = "";
var Clock_svelte_svelte_type_style_lang = "";
var project_svelte_svelte_type_style_lang = "";
const css = {
  code: "progress.svelte-1m6x4ps{display:block;width:100%}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let title;
  let description;
  let money_earned;
  let total_contributor;
  let day_left;
  let crypto_used;
  let crypto_link;
  let goal;
  let img_src;
  let reviews = [];
  let progress = tweened(0, { duration: 800, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  $$result.css.add(css);
  $$unsubscribe_progress();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}



${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
<div class="${"pt-4 pb-0 "}">
    <div class="${"container mx-auto ml-5 md:mx-64 md:mt-10 lg:px-4"}"><div class="${"flex flex-wrap justify-center"}"><div class="${"w-3/4 md:w-3/4 lg:w-2/3 lg:p-4"}"><div class="${"dark:bg-gray-800 border dark:border-gray-700 shadow-md rounded pt-6 pb-6 mb-4"}"><div class="${"loader flex"}">${validate_component(RingLoader, "RingLoader").$$render($$result, {}, {}, {})}
                        <div class="${"w-full"}"><h2 class="${"text-white p-2 pt-4 pl-4 text-xl"}">Loading
                            </h2></div></div>
                    <div class="${"card hidden"}"><img class="${"w-full h-52 rounded-tl object-cover -my-6"}"${add_attribute("src", img_src, 0)} alt="${""}">
                        <div class="${"flex px-6 flex-wrap"}"><div class="${"w-full"}"><h1 class="${"text-2xl text-white font-bold text-center dark:bg-gray-800 dark:border-gray-700 p-4 rounded-3xl"}">${escape(title)}</h1></div></div>
                        <div class="${"flex px-6 flex-wrap"}"><div class="${"w-full"}"><p class="${"text-gray-500 dark:text-gray-400 text-center"}">${escape(description)}</p></div></div>
                        
                        ${validate_component(Statscard, "Statscard").$$render($$result, {
    goal,
    money_earned,
    total_contributor,
    day_left,
    crypto_used,
    crypto_link
  }, {}, {})}
                        <div class="${"px-6"}"><progress${add_attribute("value", $progress, 0)} class="${"svelte-1m6x4ps"}"></progress></div>
                        <button type="${"button"}" class="${"ml-5 px-6 active:bg-blue-900 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none mt-4 font-medium rounded-full text-sm py-2.5 text-center mb-2"}">Invest
                        </button></div>
                    <hr class="${"border border-solid bg-slate-200 my-2 mx-3 card hidden"}">

                    <div class="${"p-4 h-64 overflow-scroll card hidden"}">${each(reviews, (review) => {
    return `${validate_component(Review, "Review").$$render($$result, {
      name: review.name,
      joined_on: review.joined_on,
      title: review.title,
      rating: review.rating,
      date: review.date,
      description: review.description,
      peoples: review.peoples,
      img_src: review.img_src
    }, {}, {})}
                            <hr class="${"border border-solid bg-slate-600 my-3 mx-5"}">`;
  })}</div></div></div></div></div></div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { Project as default };
