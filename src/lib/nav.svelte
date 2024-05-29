<script lang="ts">
    import { gsap } from "gsap";

    let collapse_mobile_nav = false;

    function handleClick(event: PointerEvent) {
        // console.log(event.x)
        // console.log(event.y)

        const island = document.querySelector(".island") as HTMLDivElement;

        let timeline = gsap.timeline({ repeat: 0 });

        timeline
            .to(island, {
                scale: 1.2,
                duration: 0.1,
            })
            .to(island, {
                scale: 1,
                duration: 0.1,
            });
        timeline.play();
    }
</script>

<!-- component -->
<header class="full-width sticky top-0 z-[999999]">
    <nav class="flex justify-center content-grid px-6 pt-4">
        <div
            on:click="{handleClick}"
            class="island flex gap-x-16 items-center w-fit mx-auto p-2 rounded-full">
            <div class="rounded-full transition-all hover:scale-150">
                <a href="/">
                    <img src="/images/logo.png" alt="" class="h-16" />
                </a>
            </div>
            <div class="hidden md:block">
                <ul class="flex items-center space-x-8 text-lg font-medium">
                    <li>
                        <a
                            href="/"
                            id="home"
                            class="transition-all hover:text-primary-600"
                            >Home</a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            id="about"
                            class="transition-all hover:text-primary-600"
                            >About</a>
                    </li>
                    <li>
                        <a
                            href="/services"
                            id="services"
                            class="transition-all hover:text-primary-600"
                            >Services</a>
                    </li>
                    <li>
                        <a
                            href="/gallery"
                            id="gallery"
                            class="transition-all hover:text-primary-600"
                            >Gallery</a>
                    </li>
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
            <div class="md:hidden hamburger">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox" class="toggle" on:click="{() => {collapse_mobile_nav=!collapse_mobile_nav}}">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                </label>
            </div>
        </div>
    </nav>
</header>
<div aria-expanded="{collapse_mobile_nav}" class="mobile-sm md:hidden">
    <div class="wrapper">
        <menu>
            <a class="link" href="/">Home</a>
            <a class="link" href="/about">About</a>
            <a class="link" href="/services">Services</a>
            <a class="link" href="/gallery">Gallery</a>
            <a href="/contact" class="arrow-button">
                Contact
                <div class="arrow-wrapper">
                    <div class="arrow"></div>
                </div>
            </a>
        </menu>
    </div>
</div>

<style lang="scss">
    .island {
        backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(241, 243, 246, 0.75);
        border: 1px solid rgba(255, 255, 255, 0.389);
        transition: all 0.4s cubic-bezier(0.54, 0.89, 0.47, 1.67);

        &:hover {
            column-gap: 5rem;
        }
    }

    .hamburger {
        #checkbox {
            display: none;
        }
        .toggle {
            position: relative;
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition-duration: 0.5s;

            .bars {
                width: 100%;
                height: 4px;
                background-color: var(--clr-primary-600);
                border-radius: 4px;
            }
        }
        #bar2 {
            transition-duration: 0.8s;
        }

        #bar1,
        #bar3 {
            width: 70%;
        }

        #checkbox:checked + .toggle .bars {
            position: absolute;
            transition-duration: 0.5s;
        }

        #checkbox:checked + .toggle #bar2 {
            transform: scaleX(0);
            transition-duration: 0.5s;
        }

        #checkbox:checked + .toggle #bar1 {
            width: 100%;
            transform: rotate(45deg);
            transition-duration: 0.5s;
        }

        #checkbox:checked + .toggle #bar3 {
            width: 100%;
            transform: rotate(-45deg);
            transition-duration: 0.5s;
        }

        #checkbox:checked + .toggle {
            transition-duration: 0.5s;
            transform: rotate(180deg);
        }
    }

    .mobile-sm {
        position: fixed;
        inset: 0;
        background-image: linear-gradient(to bottom right, var(--clr-primary-500), var(--clr-primary-700));
        z-index: 999;
        transition: clip-path 500ms cubic-bezier(0.54, 0.89, 0.47, 1.67);

        &[aria-expanded="false"] {
            clip-path: inset(0 0 100% 0);
        }

        &[aria-expanded="true"] {
            clip-path: inset(0 0 0 0);
        }

        .wrapper {
            height: 100%;
            display: grid;
            align-content: end;
            padding-bottom: 5rem;

            menu {
                display: grid;
                justify-content: center;
                padding: 2rem 0;
                row-gap: 1rem;

                .link {
                    color: var(--clr-primary-50);
                    font-weight: 700;
                    padding: 0.5rem 1.25rem;
                    border-radius: 0.25rem;
                    transition: all 200ms ease-in-out;

                    &:hover,
                    &:focus {
                        color: var(--clr-primary-950);
                        background-color: var(--clr-primary-50);
                    }
                }

                .arrow-button {
                    color: var(--clr-primary-900);
                    background-color: var(--clr-primary-100);

                    &:hover {
                        .arrow{
                            background: var(--clr-primary-900);
                        }
                    }
                    
                    .arrow {
                        background: var(--clr-white);
                        &::before {
                            border-color: var(--clr-primary-900);
                        }
                    }
                }
            }
        }
    }
</style>
