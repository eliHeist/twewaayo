<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let image: HTMLImageElement | null = null;

    onMount(() => {
        if (!image) return;

        gsap.registerPlugin(ScrollTrigger);

        // Animation to center (0%) when the image reaches 30% from top
        gsap.to(image, {
            objectPosition: "70% 0%",
            scrollTrigger: {
                trigger: image,
                start: "top 90%", // Start when image is 30% from top
                end: "top 20%", // End when image is near the top
                scrub: false, // Smooth animation tied to scroll
            },
        });
    });
</script>

<section class="py-16">
    <div class="grid gap-4 max-w-screen-md mx-auto">
        <div>
            <h2 class="font-bold text-primary-950 text-3xl mb-8 md:text-center">
                Company Background
            </h2>
            <div>
                <p>
                    The company started as a mobile agriculture extension
                    service unit in 2018 by <span title="Managing Director"
                        >Mr. Kikoyo Micheal.</span> <br /><br />Initially only
                    fish farming projects were handled until 2020 when adoption
                    of integrated farming system was done and poultry farming
                    was included successfully. <br /><br />
                    Due to lack of quality poultry and fish feeds with mpigi district,a
                    poultry and animal feeds store was started in 2022 and registered
                    with Uganda Registration Service Bureau (URSB) as TOFA QUALITY
                    FEEDS. <br /><br />
                    Later the company was registered and licensed in 2023 with registration
                    number 80034119838567.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="pb-16 lg:pt-16">
    <div class="grid lg:grid-cols-2 gap-4 items-center">
        <figure>
            <img
                src="/images/director.jpg"
                alt="Managing Director"
                class="object-cover object-right max-h-[70vh] mx-auto aspect-square transition-all duration-[2s]"
                bind:this="{image}" />
        </figure>
        <div>
            <h2 class="font-bold text-primary-950 text-3xl mb-8">
                Featured Message
            </h2>
            <div>
                <p>
                    Greetings from the Twewayo Agribusiness Company Limited
                    Team.
                    <br /><br />
                    As global population growth strains our limited land resources,
                    the demand for food is rising. <br />To meet this challenge,
                    highly trained agriculturalists are essential to help
                    farmers adopt innovative farming techniques that maximize
                    limited space and ensure the production of high-quality,
                    safe food.
                    <br /><br />
                    Twewayo Agribusiness is committed to supporting farmers in profitable
                    farming. We train farmers in integrated agriculture systems,
                    provide quality inputs for poultry and fish farming, and enhance
                    value addition and marketing. This has made us a leading company
                    in central Uganda.
                    <br /><br />
                    Our goal is to increase farmers' production capacities and expand
                    their markets through value addition and exports. Our team is
                    dedicated to serving Ugandan farmers, especially smallholder
                    farmers, to help them succeed.
                </p>
            </div>
            <div
                class="grid border-l-4 border-primary-950 w-fit px-8 py-2 mt-8 bg-gradient-to-r from-primary-50 to-white">
                <h3 class="font-semibold text-primary-950">Kikoyo Michael</h3>
                <p class="italic text-sm">Managing Director</p>
            </div>
        </div>
    </div>
</section>

<section class="py-16">
    <div class="container grid gap-8 md:grid-cols-2 lg:gap-12">
        <div class="grid justify-center">
            <figure>
                <img
                    src="/images/financial-manager.jpg"
                    alt="Finance Director"
                    class="object-cover object-right max-h-[70vh] mx-auto aspect-square transition-all duration-[2s]" />
            </figure>
            <p class="text-xl">Financial Director</p>
        </div>
        <div class="grid justify-center">
            <figure>
                <img
                    src="/images/operations-manager.jpg"
                    alt="Managing Director"
                    class="object-cover object-right max-h-[70vh] mx-auto aspect-square transition-all duration-[2s]" />
            </figure>
            <p class="text-xl">Operations Director</p>
        </div>
    </div>
</section>
