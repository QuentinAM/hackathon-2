<svelte:head>
  <title>ICO</title>
</svelte:head>

<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import ProjectCard from "../components/project_card.svelte";

    const projects = [
        {
            id: 3453,
            title: "Lucky Block",
            rating: "4.2",
            description: 'Une plateforme mondiale de jeux et de compétitions avec des joueurs se servant des protocoles de la blockchain.',
            crypto_used : "LBLOCK",
            crypto_link: './images/LBLOCK.png',
            money_earned: 3000,
            goal: 10000,
            total_contributor: 11,
            day_left: 84,
            img_src: './images/LBLOCK_bg.png',
            tag: 'Gaming'
        },
        {
            id: 4436,
            title: "ZKSpace",
            crypto_used : "ZKS",
            crypto_link: './images/ZKS.png',
            rating : "3",
            description: 'La plateforme ZKSpace se compose de trois parties principales : un DEX AMM de couche 2 utilisant la technologie ZK-Rollups ZKSwap v3, un service de paiement appelé ZKSquare et une place de marché NFT appelée ZKSea.',
            money_earned: 300,
            goal: 5000,
            total_contributor: 13,
            day_left: 107,
            img_src: './images/ZKS_bg.jpeg',
            tag: 'Payments'
        },
        {
            id: 4346,
            title: "Defy Trends",
            crypto_used : "DEFY",
            crypto_link: 'https://www.cryptocompare.com/media/19633/btc.png',
            rating : "1.3",
            description: "Defy Trends uses on-chain analysis and high tech data science algorithms to provide data insights based on fundamentals and sentiment.",
            money_earned: 1000,
            goal: 7000,
            total_contributor: 841,
            day_left: 2,
            img_src: './images/DEFY_bg.jpg',
            tag: 'Science'
        },
        {
            id: 4545,
            title: "Peermoon",
            crypto_used : "PM",
            crypto_link: 'https://cryptototem.com/wp-content/uploads/2022/01/Peermoon-logo.jpg',
            rating : "4.3",
            description: 'Peermoon is a DeFi mobile wallet that allows you investing and managing your finance conveniently in one app.',
            money_earned: 2500,
            goal: 7000,
            total_contributor: 642,
            day_left: 7,
            img_src: 'https://peermoon.io/wp-content/uploads/2021/12/earth6.png',
            tag: 'Wallet'
        }
    ];

</script>

<Navbar/>
<Background/>
<div class="pt-20 pb-[8rem] lg:pb-64">
    <div class="ml-10 md:ml-64">
        <h1 class="text-4xl md:ml-0 ml-10 font-bold leading-tight">
            <span class="text-slate-300">ICO</span>
        </h1>
        <h2 class="text-lg md:ml-0 ml-10 font-semibold leading-tight">
            <span class="text-slate-300">Initial coin offering</span>
        </h2>

        <div class="p-10 -mb-40 overflow-auto h-[40rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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
                    tag={project.tag}
                />
            {/each}  
        </div>

    </div>
</div>
<Footer/>

