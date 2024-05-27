<script>
</script>

<!-- component -->
<header class="border-t-8 border-primary-900 full-width">
    <nav class="content-grid mx-auto px-6 py-3">
        <div class="flex items-center justify-between bg-green-00 mt-8">
            <div class="hidden md:block">
                <ul class="flex items-center space-x-8 text-lg font-medium">
                    <li><a href="/" class="">Home</a></li>
                    <li><a href="/about" class="">About</a></li>
                    <li><a href="/services" class="">Services</a></li>
                    <!-- <li><a href="#" class="">Contact</a></li> -->
                </ul>
            </div>
            <div>
                <a href="/">
                    <img src="/images/logo.png" alt="">
                </a>
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
</style>
