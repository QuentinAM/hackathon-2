<script>
    export let id;
    export let title;
    export let description;
    export let crypto;
    export let goal;
    export let money_earned;
    export let rating;
    export let img_src = 'https://picsum.photos/300';
    import ProjectRating from "./project_rating.svelte";

    function Redirect()
    {
        window.location.href = `/project?id=${id}`;
    }

</script>

<div class="rounded w-2/3 md:3/5 bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
    <img class="w-full h-40 rounded-t hover:cursor-pointer" on:click={Redirect} src={img_src} alt="">
    <div class="px-6 py-4">
      <div class="font-bold text-white text-xl mb-2">
          {title}
      </div>
      <p class="text-gray-500 dark:text-gray-400 text-base h-20 overflow-scroll">
        {description}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {crypto}    
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {goal}    
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {money_earned}    
        </span>
    </div>
    <div class="p-2">
        <ProjectRating percentage={rating}/>
    </div>
</div>