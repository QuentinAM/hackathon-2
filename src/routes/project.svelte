<svelte:head>
  <title>{title}</title>
</svelte:head>

<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import Statscard from "../components/statscard.svelte";
    import Review from "../components/review.svelte";
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
    let reviews = [];

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
            reviews : [
                {
                    name: "Emil Peltola",
                    joined_on: "November 2021",
                    title: "Skeptical",
                    rating: 2,
                    date: "26 February 2022",
                    description: "Read the whitepaper and I am still skeptical about the project. We will see",
                    peoples: 19,
                    img_src: 'https://randomuser.me/api/portraits/med/men/14.jpg'
                }
            ]
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
            reviews : [
                {
                    name: "Ivonne Stemmer",
                    joined_on: "July 2020",
                    title: "Like Paypal but for crypto",
                    rating: 4,
                    date: "26 February 2022",
                    description: "I can't wait to pay for my next painting in crypto thanks to this project",
                    peoples: 5,
                    img_src: 'https://randomuser.me/api/portraits/med/women/72.jpg'
                }
            ]

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
            img_src: './images/CDFI_bg.png',
            reviews : [
                {
                    name: "Olivia Morales",
                    joined_on: "May 2018",
                    title: "One of the most exciting",
                    rating: 5,
                    date: "26 February 2022",
                    description: "Possible X100 in this project",
                    peoples: 42,
                    img_src: 'https://randomuser.me/api/portraits/med/women/80.jpg'
                }
            ]
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
            img_src: './images/SCOP_bg.jpeg',
            reviews : [
                {
                    name: "Suzann Lee",
                    joined_on: "March 2022",
                    title: "One of the worst project I have seen",
                    rating: 0.6 ,
                    date: "1 April 2022",
                    description: "I don't understand the project",
                    peoples: 0,
                    img_src: 'https://randomuser.me/api/portraits/women/27.jpg'
                }
            ]
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
            img_src: './images/RAT_bg.png',
            reviews : [
                {
                    name: "Joe mama",
                    joined_on: "November 2021",
                    title: "Can't wait it to be launched",
                    rating: 5,
                    date: "21 March 2022",
                    description: "Seems very cool",
                    peoples: 20,
                    img_src: 'https://randomuser.me/api/portraits/med/men/61.jpg'
                },
                {
                    name: "Huapala Pilis",
                    joined_on: "December 2020",
                    title: "RatDAO in my veins",
                    rating: 5,
                    date: "May 2022",
                    description: "To the Moon",
                    peoples: 20,
                    img_src: 'https://randomuser.me/api/portraits/med/men/33.jpg'
                },
                {
                    name: "Huapala Pilis",
                    joined_on: "December 2020",
                    title: "RatDAO in my veins",
                    rating: 5,
                    date: "May 2022",
                    description: "To the Moon",
                    peoples: 17,
                    img_src: 'https://randomuser.me/api/portraits/med/women/13.jpg'
                },
            ]
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
            img_src: './images/LBLOCK_bg.png',
            reviews : [
                {
                    name: "Jasmine Lewis",
                    joined_on: "March 2021",
                    title: "Future for Game developers",
                    rating: 4,
                    date: " 27 January 2021",
                    description: "I believe that plateform will be used for e-sport in the next 5 years",
                    peoples: 5,
                    img_src: 'https://randomuser.me/api/portraits/women/77.jpg'
                }
            ]
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
            total_contributor: 21,
            day_left: 107,
            img_src: './images/ZKS_bg.jpeg',
            reviews : [
                {
                    name: "Juho Lasko",
                    joined_on: "June 2019",
                    title: "Zk proof are the future",
                    rating: 5,
                    date: " 27 January 2021",
                    description: "I don't understand why people rate this project this low",
                    peoples: 11,
                    img_src: 'https://randomuser.me/api/portraits/med/men/14.jpg'
                }
            ]
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
        },
        {
            id: 4545,
            title: "Peermoon",
            crypto_used : "PM",
            crypto_link: 'https://cryptototem.com/wp-content/uploads/2022/01/Peermoon-logo.jpg',
            rating : "4.8",
            description: 'Peermoon is a DeFi mobile wallet that allows you investing and managing your finance conveniently in one app.',
            money_earned: 2500,
            goal: 7000,
            total_contributor: 642,
            day_left: 7,
            img_src: 'https://peermoon.io/wp-content/uploads/2021/12/earth6.png'
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
        reviews = prjt.reviews;

        ShowUnshow();

        progress.set(money_earned / goal);
    });

    function ShowUnshow()
    {
        const card = document.getElementsByClassName('card');
        for (const c of card)
        {
            c.classList.remove('hidden');
        }

        document.getElementsByClassName('loader')[0].classList.add('hidden');   
    }

</script>

<Navbar/>
<Background/>
<div class="pt-4 pb-0 ">
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
                        <img loading='lazy' class="w-full h-52 rounded-tl object-cover -my-6" src={img_src} alt="">
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
                    <hr class="border border-solid bg-slate-200 my-2 mx-3 card hidden">

                    <div class="p-4 h-64 overflow-scroll card hidden">

                        {#each reviews as review}
                            <Review
                                name={review.name}
                                joined_on={review.joined_on}
                                title={review.title}
                                rating={review.rating}
                                date={review.date}
                                description={review.description}
                                peoples={review.peoples}
                                img_src={review.img_src}
                            />
                            <hr class="border border-solid bg-slate-600 my-3 mx-5">
                        {/each}
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