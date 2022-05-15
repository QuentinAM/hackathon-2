<script>
    export let name;
    export let joined_on;
    export let title;
    export let rating; // 0 to 5
    const rating_rounded = Math.round(rating);
    export let date;
    export let description;
    export let peoples;
    export let img_src;
</script>


<article>
    <div class="flex items-center mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src={img_src} alt="">
        <div class="space-y-1 font-medium dark:text-white">
            <p>{name}<time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">
                Joined on {joined_on}
            </time></p>
        </div>
    </div>
    <div class="flex items-center mb-1">
        {#each Array(rating_rounded) as i}
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        {/each}
        
        {#if rating_rounded < 5}
            {#each Array(5 - rating_rounded) as i }
                <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            {/each}
        {/if}
    <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
            {title}
        </h3>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>{date}</p>
    </footer>
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
        {description}
    </p>
<aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{peoples} people found this interesting</p>
        <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="/" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Interested</a>
            <a href="/" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
        </div>
    </aside>
</article>