<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import Statscard from "../components/statscard.svelte";
    import { onMount } from "svelte";

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    let title;
    let description;
    let money_earned;
    let total_contributor;
    let day_left;
    let goal;
    let id_front = '';

    const projects = [
        {
            id: 45,
            title: "Project 1",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            money_earned: 3000,
            goal: 10000,
            total_contributor: 13,
            day_left: 84,
        },
        {
            id: 46,
            title: "Project 2",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            money_earned: 300,
            goal: 5000,
            total_contributor: 13,
            day_left: 84,
        }
    ]

    let progress = tweened(0, {
		    duration: 800,
		    easing: cubicOut
	    });

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Check if an id is set otherwise return to home page
        if (!id || projects.find(project => project.id == id) === undefined) {
            window.location.href = '/';
        }
        id_front = id;
        let prjt = projects.find(project => project.id == id);

        title = prjt.title;
        description = prjt.description;
        money_earned = prjt.money_earned;
        total_contributor = prjt.total_contributor;
        day_left = prjt.day_left;
        goal = prjt.goal;

        progress.set(money_earned / goal);
    });

</script>

<Navbar/>
<Background/>
<div class="pt-20 pb-64">
    <!--Center -->
    <div class='container mx-auto px-4'>
        <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-3/4 lg:w-2/3 p-4">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <h1 class="text-2xl font-bold text-center text-gray-800">{title}</h1>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <img class="w-1/2" src="https://source.unsplash.com/random/400x400" alt="">
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <p class="text-gray-700 text-center">
                                {description}
                            </p>
                        </div>
                    </div>
                    
                    <Statscard {goal} {money_earned} {total_contributor} {day_left}/>
                    <progress value={$progress}></progress>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer class=" mt-96"/>

<style>
    progress {
		display: block;
		width: 100%;
	}
</style>