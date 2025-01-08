<script lang="ts">
    import Nav from "$lib/nav.svelte";
    import Footer from "$lib/footer.svelte";
    import "../app.scss";
    import "@fortawesome/fontawesome-free/css/all.min.css";

    import Lenis from 'lenis'

    import { onMount } from 'svelte';

    
    onMount(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            autoRaf: true,
        });
    });
</script>

<svelte:head>
<title>Twewaayo Agri Business</title>
</svelte:head>

<Nav />
<slot/>
<Footer/>
