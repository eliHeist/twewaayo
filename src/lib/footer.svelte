<script lang="ts">
    import Logo from '$lib/components/logo.svelte';
</script>

<footer class=" bg-primary-900 text-white pt-12 full-width content-grid">
    
    <!-- links and about -->
    <div class="py-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-between">
        <!-- contact info -->
        <div class="contacts lg:col-span-3 xl:col-span-3 xl:order-2">
            <div class="flex lg:justify-evenly flex-wrap xl:grid xl:grid-cols-3">
                <div class="flex gap-4 py-3">
                    <div class="icon aspect-square w-16 bg-grey-900 rounded-lg grid place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-10" viewBox="0 0 67.475 88.785">
                            <g id="location-dot" transform="translate(1.5 1.5)">
                            <path id="location-dot-2" data-name="location-dot" d="M28.258,83.858C19.494,73.073,0,46.935,0,32.253a32.237,32.237,0,1,1,64.475,0c0,14.682-19.645,40.82-28.258,51.6a5.071,5.071,0,0,1-7.959,0ZM32.237,43A10.751,10.751,0,1,0,21.492,32.253,10.758,10.758,0,0,0,32.237,43Z" fill="none" stroke="#46e317" stroke-width="3"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="text grid content-start text-white my-auto">
                        <p class="font-semibold">Visit Us:</p>
                        <p>Mpigi Town <br>behind Centenary Bank</p>
                    </div>
                </div>
                <div class="flex gap-4 py-3">
                    <div class="icon aspect-square w-16 bg-grey-900 rounded-lg grid place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="my-auto w-10" viewBox="0 0 86.382 65.536">
                            <g id="envelope" transform="translate(1.5 1.5)">
                            <path id="envelope-2" data-name="envelope" d="M75.564,64a7.817,7.817,0,0,1,4.69,14.071L44.818,104.648a5.228,5.228,0,0,1-6.254,0L3.127,78.071A7.817,7.817,0,0,1,7.817,64ZM35.437,108.818a10.406,10.406,0,0,0,12.507,0L83.382,82.24v33.874a10.432,10.432,0,0,1-10.423,10.423H10.423A10.427,10.427,0,0,1,0,116.113V82.24Z" transform="translate(0 -64)" fill="none" stroke="#46e317" stroke-width="3"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="text grid content-start text-white my-auto">
                        <p class="font-semibold">Email us:</p>
                        <a href="mailto:twewayofarmers@yahoo.com">twewayofarmers@yahoo.com</a>
                    </div>
                </div>
                <div class="flex gap-4 py-3">
                    <div class="icon aspect-square w-16 h-16 bg-grey-900 rounded-lg grid place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-12" viewBox="0 0 106.763 108.267">
                            <g id="phone-volume" transform="translate(2.215 2.229)">
                            <path id="phone-volume-2" data-name="phone-volume" d="M45.09,28.961a3.754,3.754,0,1,0-4.747,5.815A7.617,7.617,0,0,1,43.2,40.6a7.36,7.36,0,0,1-2.763,5.778,3.753,3.753,0,0,0-.491,5.31,3.825,3.825,0,0,0,2.937,1.409,3.736,3.736,0,0,0,2.388-.832,14.756,14.756,0,0,0,5.5-11.605A15.3,15.3,0,0,0,45.09,28.961Zm9.447-11.693a3.751,3.751,0,1,0-4.753,5.8,22.91,22.91,0,0,1,8.539,17.51,22.159,22.159,0,0,1-8.269,17.38,3.757,3.757,0,0,0-.486,5.31,3.843,3.843,0,0,0,2.937,1.4,3.725,3.725,0,0,0,2.393-.837,29.128,29.128,0,0,0,11-23.2A30.53,30.53,0,0,0,54.537,17.268ZM24.067,27.65a3.842,3.842,0,0,0,3.876-2.33L33.16,12.088a3.969,3.969,0,0,0-1.541-4.63L20.931.742a3.779,3.779,0,0,0-4.7.5C-5.233,22.658-4.959,57.8,16.839,79.549a3.793,3.793,0,0,0,4.694.571l10.587-6.555a3.747,3.747,0,0,0,1.477-4.6l-5.42-13.3A3.845,3.845,0,0,0,24.26,53.28l-8.387.771a42.271,42.271,0,0,1-.207-27.3Z" transform="translate(-0.33 43.121) rotate(-41)" fill="none" stroke="#46e317" stroke-width="3"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="text grid content-start text-white my-auto">
                        <p class="font-semibold">Call us:</p>
                        <p class="grid">
                            <a href="tel:+256752382640">+256 752 382 640</a>
                            <a href="tel:+256784055217">+256 784 055 217</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="logo lg:flex lg:gap-4 xl:grid items-center lg:col-span-2 xl:col-span-1 xl:row-span-2 xl:order-1">
            <div class="">
                <Logo/>
            </div>
            <div class="">
                <p class="my-8">
                    The company started in 2018 as a mobile agriculture extension service focusing on fish farming.
                </p>
                <div class="grid grid-flow-col w-fit gap-4">
                    <div class="bg-secondary-600 rounded-full w-fit aspect-square grid place-content-center p-2">
                        <a href="https://facebook.com">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                    <div class="bg-secondary-600 rounded-full w-fit aspect-square grid place-content-center p-2">
                        <a href="https://facebook.com">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                    <div class="bg-secondary-600 rounded-full w-fit aspect-square grid place-content-center p-2">
                        <a href="https://facebook.com">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div class="bg-secondary-600 rounded-full w-fit aspect-square grid place-content-center p-2">
                        <a href="https://facebook.com">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- quick links -->
        <div class="quick-links xl:order-3">
            <h3 class="title text-lg text-white font-medium mb-8">Quick Links</h3>
            <ul class="grid grid-cols-2 gap-3">
                <li><a href="/about/" class="">About Us</a></li>
                <li><a href="/services/" class="">Services</a></li>
                <li><a href="/contact/" class="">Contact Us</a></li>
                <li><a href="/gallery/" class="">Gallery</a></li>
            </ul>
        </div>
        <!-- recent -->
        <div class="services xl:order-4">
            <h3 class="title text-lg text-white font-medium py-1 mb-8">Recent</h3>
            <ul class="grid gap-3">
                <li>
                    <a href="/services/#building">
                        <div class="flex gap-4">
                            <img src="/img/IMG-20240422-WA0002.jpg" alt="" class="object-cover aspect-[4/3] h-20 rounded-md bg-primary-400">
                            <div class="grid content-between">
                                <h4>How to plan and construct your...</h4>
                                <p class="flex text-xs italic text-primary-100 gap-2">
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <span>August 2nd, 2024</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Newsletter -->
        <div class="newsletter xl:order-5">
            <h3 class="title text-lg text-white font-medium mb-8">Newsletter</h3>
            <p>Be the first to know what's new and our offers</p>
            <!-- Form ====================================== -->
            <form method="POST" class="grid gap-4 accent-primary-500 mt-4">
                <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                    <button
                    class="!absolute right-1 top-1 z-10 select-none rounded bg-secondary-500 py-1 px-3 text-center align-middle text-s font-bold uppercase text-white shadow-md shadow-secondary-500/20 transition-all hover:shadow-lg hover:shadow-secondary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                    type="button"
                    data-ripple-light="true"
                    >
                    <i class="fa-regular fa-envelope"></i>
                    </button>
                    <input
                    type="email"
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-secondary-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    required
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-secondary-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-secondary-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email Address
                    </label>
                </div>
                <div class="fixed top-32 left-1/2 -translate-x-1/2 w-fit rounded-lg z-30 bg-grey-900">
                    <div class="relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-b from-primary-100 to-primary-500 rounded-lg blur-md"></div>
                    <div x-show="status.toggle" id="status-pill" class="relative py-4 px-8 bg-grey-100 rounded-lg text-black transition-all" style="display: none;">
                        <span x-text="status.message"></span>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- copyright -->
    <div class="bg-black full-width">
       <div class="flex flex-wrap gap-4 text-center sm:justify-between p-5 container mx-auto">
          <span class="mx-auto">Copyright 2023 Twewaayo Agribusiness U Ltd</span>
          <span class="mx-auto text-grey-500">Powered by DakDot</span>
       </div>
    </div>
 </footer>