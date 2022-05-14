<svelte:head>
  <title>IDO</title>
</svelte:head>

<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import ProjectCard from "../components/project_card.svelte";

    const projects = [
        {
            id: 51,
            title: "CleanDefi token",
            rating: "4.2",
            description: "CleanDefi is an innovative decentralized AMM, Incubator, Yield Farming & NFT Launch solution governed by the community and powered by SOLANA",
            crypto_used : "CDFI",
            crypto_link: './images/CDFI.jpg',
            money_earned: 3000,
            goal: 10000,
            total_contributor: 11,
            day_left: 84,
            img_src: './images/CDFI_bg.png'
        },
        {
            id: 46,
            title: "SCOPULY",
            crypto_used : "SCOP",
            crypto_link: './images/SCOP.jpg',
            rating : "0.6",
            description: 'Scopuly is a new DeFi-style digital banking ecosystem built to promote digital lifestyles and enable people to manage their money online – quickly and with minimal fees.',
            money_earned: 300,
            goal: 5000,
            total_contributor: 13,
            day_left: 107,
            img_src: './images/SCOP_bg.jpeg'
        },
        {
            id: 47,
            title: "RatDAO",
            crypto_used : "RAT",
            crypto_link: './images/RAT.png',
            rating : "5",
            description:"Le rat, discret, prudent, intelligent et très proche de l'homme. Tema la taille du rat",
            money_earned: 1000,
            goal: 7000,
            total_contributor: 841,
            day_left: 2,
            img_src: './images/RAT_bg.png'
        }
    ];  

</script>

<Navbar/>
<Background/>
<div class="pt-20 pb-[8rem] lg:pb-64">
    <div class="ml-10 md:ml-64">
        <h1 class="text-4xl md:ml-0 ml-10 font-bold leading-tight">
            <span class="text-slate-300">IDO</span>
        </h1>
        <h2 class="text-lg md:ml-0 ml-10 font-semibold leading-tight">
            <span class="text-slate-300">Initial Dex Offering</span>
        </h2>

        <div class="p-10 -mb-40 overflow-scroll h-[40rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {#each projects as project}
                <ProjectCard 
                    id={project.id}
                    rating={project.rating}
                    title={project.title}
                    description={project.description}
                    crypto={project.crypto_used}
                    goal={project.goal}
                    money_earned={project.money_earned}
                    img_src={project.img_src}
                />
            {/each}  
        </div>

    </div>
</div>
<Footer/>

