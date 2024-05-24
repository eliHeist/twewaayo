<script lang="ts">
    import Testimonials from "$lib/components/testimonials.svelte";

</script>

<section class="full-width content-grid pt-20">
    <h1 class="text-3xl sm:text-4xl lg:text-5xl text-primary-950 font-bold text-center" style="line-height: 1.5;">Cultivating A Sustainable Future <br> Through Modern Agriculture.</h1>
    <p class="text-center mt-8 mx-auto max-w-2xl">We guide you through all the steps of the Modern Farming Process, from Training, to construction, to inputs, to marketing and delivery.</p>
</section>

<section class="py-32">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 xl:grid-cols-9 gap-4">
        <div class="rounded-xl overflow-hidden min-h-96 bg-cover relative group col-span-2 row-span-2 lg:row-start-1 xl:col-span-3 xl:aspect-square" style="background-image: url('/images/poultry.webp');">
            <div class="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] z-[1] transition-all duration-500 opacity-60 group-hover:opacity-100"></div>
            <div class="absolute top-0 left-0 bottom-0 right-0 h-full w-full content p-4 z-[2] grid content-end">
                <h3 class="font-semibold text-white text-2xl transition-all duration-500 translate-y-10 group-hover:translate-y-0">Poultry Farming</h3>
                <p class="text-gray-200 mt-4 transition-all duration-500 delay-75 translate-y-10 group-hover:translate-y-0">Poultry house construction, feeds and products.</p>
                <footer class="relative opacity-0 transition-all duration-500 delay-150 mt-4 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100">
                    <a href="/services/#fish-farming" class="next-button w-fit">
                        <span class="hover-underline-animation text-white"> Read more </span>
                        <svg id="arrow-horizontal" width="30" height="10" viewBox="0 0 46 16" class="fill-white">
                            <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </a>
                </footer>
            </div>
        </div>
        <div class="rounded-xl overflow-hidden p-6 transition-all duration-500 bg-teal-800 hover:bg-teal-900 grid xl:col-span-2 xl:col-start-4">
            <div class="grid content-between gap-8">
                <p class=" text-teal-100">
                    Equiping farmers with the latest techniques in modern farming.
                </p>
                <h3 class="font-semibold text-teal-50 text-2xl">Agro Training</h3>
            </div>
        </div>
        <div class="rounded-xl overflow-hidden p-6 transition-all duration-500 bg-primary-900 hover:bg-primary-950 grid lg:col-start-3 xl:col-span-2 xl:col-start-4">
            <div class="grid content-between gap-8">
                <p class=" text-primary-200">
                    Construction of Farm structures tailored to the unique needs of each farm.
                </p>
                <h3 class="font-semibold text-primary-50 text-2xl">Farm Structure Setup</h3>
            </div>
        </div>
        <div class="rounded-xl overflow-hidden p-6 transition-all duration-500 bg-cyan-800 hover:bg-cyan-900 grid col-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2 xl:col-span-2 xl:col-start-6">
            <div class="grid grid-flow-col lg:grid-flow-row content-center items-center justify-between gap-x-8 sm:gap-x-40 lg:gap-y-40 lg:content-between">
                <p class=" text-cyan-100">
                    Our team processes, packages, and markets your produce, ensuring it reaches consumers in its best form.
                </p>
                <h3 class="font-semibold text-cyan-50 text-2xl w-min lg:w-fit">Value Addition and Marketing</h3>
            </div>
        </div>
        <div class="rounded-xl overflow-hidden p-6 transition-all duration-500 hidden xl:grid bg-teal-500 hover:bg-teal-600 bg-center bg-cover row-start-1 col-start-8 row-span-2 col-span-2 group relative" style="background-image: url('/images/girl-produce.webp');">
            <div class="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] z-[1] transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
            <div class="absolute top-0 left-0 bottom-0 right-0 h-full w-full content p-4 z-[2] grid content-end">
                <h3 class="font-semibold text-white text-2xl transition-all duration-500 translate-y-10 group-hover:translate-y-0">Agro Products</h3>
                <p class="text-gray-200 mt-4 transition-all duration-500 delay-75 translate-y-10 group-hover:translate-y-0">Various Agriculture products like fish, eggs, chicken, beef etc.</p>
                <footer class="relative opacity-0 transition-all duration-500 delay-150 mt-4 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100">
                    <a href="/services/#fish-farming" class="next-button w-fit">
                        <span class="hover-underline-animation text-white"> Read more </span>
                        <svg id="arrow-horizontal" width="30" height="10" viewBox="0 0 46 16" class="fill-white">
                            <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </a>
                </footer>
            </div>
        </div>
    </div>
</section>

<div class="full-width content-grid py-32 bg-gradient-to-br from-dark-100 via-dark-50 via-50% to-white">
    <div class="breakouts">
        <h2 class="sm:text-4xl text-3xl font-bold text-center text-primary-950">Revolutionize Fish Farming with our Robust Approach.</h2>
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

<div class="mt-12 mb-32 px-4 text-center">
    <div class="w-full max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold mt-2 mb-6">Ready to transform your agri business?</h2>
        <p class="px-4 leading-relaxed">
            At Twewaayo Agri Business, we’re more than just a company—we’re your partners in growth. <br>Our passion for sustainable agriculture drives us to provide tailored solutions, quality inputs, and agile collaboration. From constructing efficient fish ponds to delivering nutritious feeds, we’re committed to your success. Let’s sow the seeds of abundance and transform your agri business into a thriving venture.
        </p>
        <p class="mb-8 mt-4 px-4 leading-relaxed">
            Click <span class="text-pink-600 font-bold">“Get in Touch”</span> and let’s cultivate prosperity together!</p>
        <div>
            <a class="inline-block py-4 px-8 leading-none text-white bg-primary-800 hover:bg-secondary-600 rounded shadow text-sm font-bold"
                href="/signup">Get in touch</a>
        </div>
    </div>
</div>

<style lang="scss">
</style>