<script lang="ts">
    import Nav from "$lib/nav.svelte";
    import Footer from "$lib/footer.svelte";
    import "../app.scss";
    import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<Nav />
<slot></slot>
<Footer/>
