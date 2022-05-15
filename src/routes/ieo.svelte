<svelte:head>
  <title>IEO</title>
</svelte:head>

<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import ProjectCard from "../components/project_card.svelte";

    const projects = [
        {
            id: 48,
            title: "iCommunity",
            rating: "1.5",
            description: "iBS is a cloud platform service that provides notarization, electronic signature, traceability and authenticity verification tools by means of different blockchain technologies.",
            crypto_used : "ICOM",
            crypto_link: './images/ICOM.jpg',
            money_earned: 3000,
            goal: 10000,
            total_contributor: 11,
            day_left: 84,
            img_src: './images/ICOM_bg.jpg',
            tag: 'Com'
        },
        {
            id: 49,
            title: "Ecoreal Estate",
            crypto_used : "ECOREAL",
            crypto_link: './images/ECOREAL.pngg',
            rating : "3.9",
            description: "ECOREAL is widely used as a payment Token for the Arts, NFT, Real Estate and Boat market for buy, sell and rent. Thousands of Artists, Galleries and collectors around the world are making its Community, are and will be using ECOREAL to buy and sell artworks and NFT's.",
            money_earned: 300,
            goal: 5000,
            total_contributor: 13,
            day_left: 107,
            img_src: './images/ECOREAL_bg.png',
            tag: 'Payments'
        },
        {
            id: 50,
            title: "Galaxy",
            crypto_used : "GAL",
            crypto_link: './images/GAL.png',
            rating : "4.8",
            description: ' Le projet Galaxy repose sur une infrastructure ouverte et collaborative dont la mission est d\'aider les développeurs Web 3 à utiliser les données d \'accréditation numérique et les NFT pour créer de meilleurs produits et communautés. ',
            money_earned: 1000,
            goal: 7000,
            total_contributor: 841,
            day_left: 2,
            img_src: './images/GAL_bg.jpg',
            tag: 'Marketing'
        }
    ]

</script>

<Navbar/>
<Background/>
<div class="pt-20 pb-[8rem] lg:pb-64">
    <div class="ml-10 md:ml-64">
        <h1 class="text-4xl md:ml-0 ml-10 font-bold leading-tight">
            <span class="text-slate-300">IEO</span>
        </h1>
        <h2 class="text-lg md:ml-0 ml-10 font-semibold leading-tight">
            <span class="text-slate-300">Initial exchange offering</span>
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
                    tag={project.tag}
                />
            {/each}  
        </div>

    </div>
</div>
<Footer/>

