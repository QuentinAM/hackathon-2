<script>
    const routes = [
      {
        name: 'Home',
        route: '/',
        icon: '🐀'
      },
      {
        name: 'ICO',
        route: '/ico',
        icon: '🖥️'
      },
      {
        name: 'IEO',
        route: '/ieo',
        icon: '🖇️'
      },
      {
        name: 'IDO',
        route: '/ido',
        icon: '⚡'
      }
    ];

    const sub_routes = [
      {
        name: 'Account',
        route: '/account',
        icon: '📝'
      }
    ];

    const sub_sub_routes = [
      {
        name: 'About',
        route: '/about  ',
        icon: '📜'
      }
    ];
</script>

<aside class="z-10" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 bg absolute h-full w-[2.9rem] md:w-40 inline-block">
     <ul class="space-y-2">
       {#each routes as route}
        <li>
          <a href={route.route} class="transition-all flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover-bg">  
          <span class="ml-3 text-xl">{route.icon} {route.name}</span>
          </a>
        </li>
       {/each}
     </ul>
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
        {#each sub_routes as route}
          <li>
          <a href={route.route} class="transition-all flex items-center p-2 text-base font-normal text-gray-900 rounded-lg duration-75 hover-bg group">
           <span class="ml-3 text-xl">{route.icon} {route.name}</span>
          </a>
        </li>
      {/each}
     </ul>
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
      {#each sub_sub_routes as route}
        <li>
        <a href={route.route} class="transition-all flex items-center p-2 text-base font-normal text-gray-900 rounded-lg duration-75 hover-bg group">
         <span class="ml-3 text-xl">{route.icon} {route.name}</span>
        </a>
      </li>
    {/each}
   </ul>
  </div>
</aside>

<style>
  .bg{
    background: #ffffff50;
  }
  .hover-bg:hover{
    background: #ffffff6e;
  }
</style>