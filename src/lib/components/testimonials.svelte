<script lang="ts">
    let testimonials = [
        {
            name: "Mr. Katweere William",
            title: "Fish Farmer in Mpigi",
            comment: `For years I tried to do fish farming but failed to yield results until when my friend Mr. Ssemwogerere visited me recommended me Twewayo Agribusiness Company Limited for fish farming technical support. For their first filed visit it was an amazing and resourceful lecture that I got at zero cost. We made work plan and they offered quality services to my fish farming venture and it was my first time to get profits out of it after many years of struggle. I kept 1000 catfish and I sold them at 8 months with 1.3kg average body weight. I got UG.shs 1200,000 profits. I am happy and since then I am in real business.`,
        },
        {
            name: "Mr. Ssema Charles",
            title: "Fish Farmer in Wakiso",
            comment: `I wanted to start fish farming in cages, went to Masese landing site in eastern Uganda, hired already made cages and started but made losses only. One of my employees called Chris told me about Michael his high school OB that he’s a technical in fish farming. I invited him and we had a field visit all day. He then offered technical advice and we started again by digging ponds a work the team did professionally and I was satisfied. I stocked 2,000 catfish and now they are weighing on average 1.6kg. Twewayo Agribusiness Company limited has done it well for me. Thanks for the dedicated services we appreciate`,
        },
    ];

    let number = testimonials.length
    let counter = number
    let current_index = number%counter
    let testimonial = testimonials[current_index]
    setInterval(() => {
        counter++
        handleChange()
    }, 20000)

    function handleChange(){
        current_index = counter%number
        testimonial = testimonials[current_index]
    }

    function handleBack(){
        counter--
        handleChange()
    }
    function handleNext() {
        counter++
        handleChange()
    }

</script>

<section class="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
    <div class="relative flex justify-center">
        <div class="relative w-full pb-16 xl:pb-0">
            <div class="flex-no-wrap snap flex h-auto w-full overflow-hidden transition-all">
                <div class="h-full sm:p-6">
                    <div class="w-full md:flex">
                        <div class="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16">
                            <img src="/images/women-working-together.webp" alt="image" class="w-full" />
                        </div>
                        <div class="w-full">
                            <div>
                                <p class="mb-11 text-base leading-[1.81] font-normal italic sm:text-xl">{testimonial.comment}</p>
                                <h4 class="mb-2 leading-[27px] text-sm font-semibold">{testimonial.name}</h4>
                                <p class="text-base">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute left-0 right-0 -bottom-7 sm:bottom-0 2xl:bottom-8 flex items-center gap-5 justify-center lg:pl-[120px] 2xl:pl-[78px]">
                <button class="border border-stroke flex h-16 w-16 items-center justify-center rounded-full transition-all hover:border-transparent text-xl" on:click="{handleBack}">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="border border-stroke flex h-16 w-16 items-center justify-center rounded-full transition-all hover:border-transparent text-xl" on:click="{handleNext}">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
</section>
