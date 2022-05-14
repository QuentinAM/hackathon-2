<script>
    import Fa from 'svelte-fa'
    import { faBahai, faBarsProgress, faBoltLightning, faBriefcase, faDiamond, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

    const routes = [
      {
        name: 'Home',
        route: '/',
        icon: faBriefcase
      },
      {
        name: 'ICO',
        route: '/ico',
        icon: faBoltLightning
      },
      {
        name: 'IEO',
        route: '/ieo',
        icon: faBarsProgress
      },
      {
        name: 'IDO',
        route: '/ido',
        icon: faBahai
      }
    ];

    const sub_routes = [
      {
        name: 'Account',
        route: '/account',
        icon: faPeopleGroup
      }
    ];

    let navbarOpen = false;
    function ShowHideNavbar(){
        navbarOpen = !navbarOpen;
    }
</script>

<aside class=" z-10 w-64" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 bg absolute h-full">
     <ul class="space-y-2">
       {#each routes as route}
        <li>
          <a href={route.route} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover-bg">  
          <Fa icon={route.icon}/>
          <span class="ml-3 text-xl">{route.name}</span>
          </a>
        </li>
       {/each}
     </ul>
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
        {#each sub_routes as route}
          <li>
          <a href={route.route} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover-bg group">
           <Fa icon={route.icon}/>
           <span class="ml-3 text-xl">{route.name}</span>
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