<svelte:head>
  <title>{title}</title>
</svelte:head>

<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import Statscard from "../components/statscard.svelte";
    import { RingLoader } from 'svelte-loading-spinners'
    import { onMount } from "svelte";

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    let title;
    let description;
    let money_earned;
    let total_contributor;
    let day_left;
    let crypto_used;
    let crypto_link;
    let goal;
    let img_src;
    let id_front = '';

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
            img_src: './images/ICOM_bg.jpg'
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
            img_src: './images/ECOREAL_bg.png'
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
            img_src: './images/GAL_bg.jpg'
        },
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
            description:"Le rat, discret, prudent, intelligent et très proche de l'homme. 'Tema la taille du rat'",
            money_earned: 1000,
            goal: 7000,
            total_contributor: 841,
            day_left: 2,
            img_src: './images/RAT_bg.png'
        },
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
            img_src: './images/LBLOCK_bg.png'
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
            img_src: './images/ZKS_bg.jpeg'
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
            img_src: './images/DEFY_bg.jpg'
        }
    ];

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
        crypto_used = prjt.crypto_used;
        crypto_link = prjt.crypto_link;
        img_src = prjt.img_src;

        ShowUnshow();

        progress.set(money_earned / goal);
    });

    function ShowUnshow()
    {
        document.getElementsByClassName('card')[0].classList.remove('hidden');
        document.getElementsByClassName('loader')[0].classList.add('hidden');   
    }

</script>

<Navbar/>
<Background/>
<div class="pt-10 pb-0 md:pb-64">
    <!--Center -->
    <div class='container mx-auto ml-5 md:mx-64 md:mt-10 lg:px-4'>
        <div class="flex flex-wrap justify-center">
            <div class="w-3/4 md:w-3/4 lg:w-2/3 lg:p-4">
                <div class="dark:bg-gray-800 border dark:border-gray-700 shadow-md rounded pt-6 pb-6 mb-4">
                    <div class="loader flex">
                        <RingLoader/>
                        <div class="w-full">
                            <h2 class="text-white p-2 pt-4 pl-4 text-xl">
                                Loading
                            </h2>
                        </div>  
                    </div>
                    <div class="card hidden">
                        <img class="w-full h-52 rounded-tl object-cover -my-6" src={img_src} alt="">
                        <div class="flex px-6 flex-wrap">
                            <div class="w-full">
                                <h1 class="text-2xl text-white font-bold text-center dark:bg-gray-800 dark:border-gray-700 p-4 rounded-3xl">
                                    {title}
                                </h1>
                            </div>
                        </div>
                        <div class="flex px-6 flex-wrap">
                            <div class="w-full">
                                <p class="text-gray-500 dark:text-gray-400 text-center">
                                    {description}
                                </p>
                            </div>
                        </div>
                        
                        <Statscard {goal} {money_earned} {total_contributor} {day_left} {crypto_used} {crypto_link}/>
                        <div class='px-6'>
                            <progress value={$progress}></progress>
                        </div>
                        <button type="button" class="ml-5 px-6 active:bg-blue-900 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none mt-4 font-medium rounded-full text-sm py-2.5 text-center mb-2">
                            Invest
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>

<style>
    progress {
		display: block;
		width: 100%;
	}
</style>