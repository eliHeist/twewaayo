<script lang="ts">
    import { gsap } from "gsap";

    const images = [
        "IMG-20240422-WA0002.jpg",
        "IMG-20240422-WA0012.jpg",
        "IMG-20240422-WA0022.jpg",
        "IMG-20240422-WA0032.jpg",
        "IMG-20240422-WA0003.jpg",
        "IMG-20240422-WA0013.jpg",
        "IMG-20240422-WA0023.jpg",
        "IMG-20240422-WA0033.jpg",
        "IMG-20240422-WA0004.jpg",
        "IMG-20240422-WA0014.jpg",
        "IMG-20240422-WA0024.jpg",
        "IMG-20240422-WA0034.jpg",
        "IMG-20240422-WA0005.jpg",
        "IMG-20240422-WA0015.jpg",
        "IMG-20240422-WA0025.jpg",
        "IMG-20240422-WA0035.jpg",
        "IMG-20240422-WA0006.jpg",
        "IMG-20240422-WA0016.jpg",
        "IMG-20240422-WA0026.jpg",
        "IMG-20240422-WA0036.jpg",
        "IMG-20240422-WA0007.jpg",
        "IMG-20240422-WA0017.jpg",
        "IMG-20240422-WA0027.jpg",
        "IMG-20240422-WA0037.jpg",
        "IMG-20240422-WA0008.jpg",
        "IMG-20240422-WA0018.jpg",
        "IMG-20240422-WA0028.jpg",
        "IMG-20240422-WA0086.jpg",
        "IMG-20240422-WA0009.jpg",
        "IMG-20240422-WA0019.jpg",
        "IMG-20240422-WA0029.jpg",
        "IMG-20240422-WA0010.jpg",
        "IMG-20240422-WA0020.jpg",
        "IMG-20240422-WA0030.jpg",
        "IMG-20240422-WA0011.jpg",
        "IMG-20240422-WA0021.jpg",
        "IMG-20240422-WA0031.jpg",
    ];

    function showFullImage(event: Event) {
        const image = event.target as HTMLImageElement;
    }
</script>

<section class="pt-16 pb-32">
    <h1 class="text-3xl sm:text-4xl lg:text-5xl text-primary-950 font-bold text-center mb-16">Gallery</h1>
    <div class="gallery">
        {#each images as image}
            <img class="image" src="/img/{image}" alt="Image" on:click="{showFullImage}" />
        {/each}
    </div>
</section>

<dialog class="modal">
    <img src="" alt="Image" class="image" />
</dialog>

<style lang="scss">
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 4/3;
            border-radius: .5rem;
            transition: all .5s ease-in-out;
            filter: brightness(.9);
            background-color: var(--clr-primary-100);
            
            &:hover {
                box-shadow: .15rem .25rem .25rem rgba(126, 136, 143, 0.3);
                filter: brightness(1);
                scale: 1.05;
                rotate: 1deg;
            }
        }
    }
</style>
