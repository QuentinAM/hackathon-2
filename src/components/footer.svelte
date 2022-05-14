<script>
    const routes = [
        {
            name: 'About',
            route: '/about'
        }
    ]
</script>

<div class={$$props.class}>
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022
            <a href="/" class="hover:underline">
                RAT.
            </a>All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            {#each routes as route}
                <li>
                    <a href={route.route} class="mr-4 hover:underline md:mr-6 ">
                        {route.name}
                    </a>
                </li>
            {/each}
        </ul>
    </footer>
</div>