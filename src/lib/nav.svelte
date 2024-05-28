<script lang="ts">
    import { gsap } from "gsap";

    function handleClick(event: PointerEvent) {
        // console.log(event.x)
        // console.log(event.y)
        
        const island = document.querySelector(".island") as HTMLDivElement

        let timeline = gsap.timeline({ repeat: 0 })

        timeline.to(island, {
            scale: 1.2,
            duration: 0.1
        }).to(island, {
            scale: 1,
            duration: 0.1
        })
        timeline.play()
    }
</script>

<!-- component -->
<header class="full-width sticky top-0 z-[999999]">
    <nav class="flex justify-center content-grid px-6 pt-4">
        <div on:click="{handleClick}" class="island flex gap-x-16 items-center w-fit mx-auto p-2 rounded-full">
            <div class="rounded-full transition-all hover:scale-150">
                <a href="/">
                    <img src="/images/logo.png" alt="" class="h-16">
                </a>
            </div>
            <div class="hidden md:block">
                <ul class="flex items-center space-x-8 text-lg font-medium">
                    <li><a href="/" id="home" class="transition-all hover:text-primary-600">Home</a></li>
                    <li><a href="/about" id="about" class="transition-all hover:text-primary-600">About</a></li>
                    <li><a href="/services" id="services" class="transition-all hover:text-primary-600">Services</a></li>
                    <li><a href="/gallery" id="gallery" class="transition-all hover:text-primary-600">Gallery</a></li>
                    <!-- <li><a href="#" class="">Contact</a></li> -->
                </ul>
            </div>
            <div class="hidden md:block">
                <a href="/contact/" class="arrow-button">
                    Contact
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
                </a>
            </div>
            <div class="md:hidden">
                <button class="outline-none mobile-menu-button">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="mobile-menu hidden md:hidden">
            <ul class="mt-4 space-y-4">
                <li>
                    <a href="#" class="block px-4 py-2 bg-gray-900 rounded"
                        >Home</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 bg-gray-900 rounded"
                        >About</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 bg-gray-900 rounded"
                        >Services</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 bg-gray-900 rounded"
                        >Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</header>

<style lang="scss">
    .island{
        backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(241, 243, 246, 0.75);
        border: 1px solid rgba(255, 255, 255, 0.389);
        transition: all .4s cubic-bezier(0.54,0.89,0.47,1.67);

        &:hover {
            column-gap: 5rem;
        }
    }
</style>
