<svelte:head>
  <title>Home</title>
</svelte:head>

<script>
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";

  import Radar from "svelte-chartjs/src/Radar.svelte"

  let dataRadar= {
    labels: [
      'BTC',
      'ETH',
      'XRP',
      'BNB',
      'LTC',
      'EOS',
      'XLM',
      'ADA',
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 100, 81, 56, 55, 40, 50]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [0, 90, 100, 19, 96, 27, 100, 90]
      }
    ]
  }
</script>

<Navbar actual_route='Home'/>

<div class="bg p-4">
  <div class="w-1/2 h-1/2 bg-slate-300 border-2 border-slate-500 rounded justify-center items-center align-middle">
      <Radar data={dataRadar} options={{ responsive: true }} />
  </div>
</div>

<Footer/>

<style>
  .bg{
    background: linear-gradient(#e66465, #9198e5);
  }
</style>