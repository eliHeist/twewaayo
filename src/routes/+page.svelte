<script lang="ts">
    import Testimonials from "$lib/components/testimonials.svelte";

</script>

<section class="full-width content-grid py-16">
    <div class="grid place-items-center md:grid-cols-2 lg:grid-cols-3">
        <div class="sm:text-5xl text-3xl uppercase font-bold lg:col-span-2">
            <h2 class=" text-primary-900">Revolutionizing Fish Farming</h2>
            <p class=" text-secondary-600">A New Pattern Language for Aquaculture</p>
        </div>
        <div>
            <img src="/images/fish.webp" alt="Fish" class=" scale-125">
        </div>
    </div>
</section>

<section class="full-width relative">
    <img src="/images/maizegarden.webp" class="w-full" alt="maize">
    <div class="absolute inset-0 z-10 grid content-center">
        <div class="content-grid">
            <h2 class="sm:text-5xl text-3xl font-bold text-white text-center">Redefining farms and green environment</h2>
            <div class="grid">
                <div class="md:grid-cols-3"></div>
            </div>
        </div>
    </div>
</section>

<div class="full-width content-grid py-32 bg-gradient-to-b from-dark-200 via-dark-50 via-50% to-white">
    <div class="breakouts">
        <h2 class="sm:text-5xl text-3xl font-bold text-center">Revolutionize Fish Farming with our Robust Approach.</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-7 gap-4 mt-16">
            <div class="lg:col-span-2 hover-card">
                <img src="/images/fish-pond-net.webp" alt="Fish Pond" class="image-cover">
                <div class="top-drop"></div>
                <div class="over-drop">
                    <h3 class="title">Fish Pond Construction</h3>
                    <figure class="spacer">
                    </figure>
                    <p class="text-body">
                        A well-designed fish pond is crucial for successful fish farming. Choose suitable land, ensure a reliable water source, and construct pond walls (dykes) with proper water controls. Our expert team at Twewaayo Agri Business creates customized ponds that optimize space, ventilation, and access for efficient management
                    </p>
                    <div class="footer">
                        <a href="/services/#fish-farming" class="next-button">
                            <span class="hover-underline-animation text-white"> Read more </span>
                            <svg id="arrow-horizontal" width="30" height="10" viewBox="0 0 46 16" class="fill-white">
                                <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </a>                  
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2 hover-card">
                <img src="/images/fish-feeds.webp" alt="Fish Pond" class="image-cover">
                <div class="top-drop"></div>
                <div class="over-drop">
                    <h3 class="title">Fish Feeds and Materials</h3>
                    <figure class="spacer">
                    </figure>
                    <p class="text-body">
                        Proper nutrition is essential for fish growth. We offer high-quality fish feeds, including both moisture feeds (seasonal) and pellet/extruder feeds (year-round). Our feeds are carefully produced through grinding, mixing, pelleting, and packaging, ensuring consistent nutritional content for healthy fish populations.
                    </p>
                    <div class="footer">
                        <a href="/services/#fish-farming" class="next-button">
                            <span class="hover-underline-animation text-white"> Read more </span>
                            <svg id="arrow-horizontal" width="30" height="10" viewBox="0 0 46 16" class="fill-white">
                                <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </a>                  
                    </div>
                </div>
            </div>
            <div class="md:col-span-2 lg:col-span-3 relative hidden lg:grid">
                <img src="/images/full-fish.webp" alt="Fish" class="w-full absolutes right-0">
            </div>
        </div>
    </div>
</div>

<Testimonials/>

<style lang="scss">
</style>