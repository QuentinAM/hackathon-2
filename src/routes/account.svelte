<svelte:head>
  <title>Account</title>
</svelte:head>

<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Background from "../components/background.svelte";
    import Login from "../components/login.svelte";
</script>

<Navbar/>
<Background/>
<div class="pt-20 pb-[4.3rem] lg:pb-64">
    <div class="mx-20 lg:mx-64">
        <h1 class="text-4xl font-bold leading-tight">
            <span class="text-slate-300">Account</span>
        </h1>
        <h2 class="text-lg font-semibold leading-tight">
            <span class="text-slate-300">Sign in to access your projects on our platform.</span>
        </h2>
        <Login class='mt-12'/>
    </div>
</div>
<Footer/>