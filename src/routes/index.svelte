<svelte:head>
  <title>Home</title>
</svelte:head>

<script>
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
  import Background from "../components/background.svelte";
  import ConnectWallet from "../components/connect_wallet.svelte";
  import Title from "../components/title.svelte";
</script>

<Navbar/>
<Background/>
<div class="pt-20 pb-64">
    <div class="mx-64">
        <Title/>
        <ConnectWallet/>
    </div>
</div>
<Footer class='mt-14'/>