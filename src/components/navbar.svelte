<script>
    const routes = [
      {
        name: 'Home',
        route: '/'
      },
      {
        name: 'About',
        route: '/about'
      }
    ];

    let navbarOpen = false;
    function ShowHideNavbar(){
        navbarOpen = !navbarOpen;
    }
</script>

<aside class="w-64" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 bg rounded absolute h-full">
     <ul class="space-y-2">
       {#each routes as route}
        <li>
          <a href={route.route} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
            <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="ml-3 text-xl">{route.name}</span>
          </a>
        </li>
       {/each}
     </ul>
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
        <li>
           <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
              <span class="ml-3 text-xl">Upgrade to Pro</span>
           </a>
        </li>

     </ul>
  </div>
</aside>

<style>
  .bg{
    background: #ffffff50;
  }
</style>