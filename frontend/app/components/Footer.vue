<template>
    <footer class="bg-base-200 px-4">
        <div class="container">
            <div class="pt-10 pb-5 mx-auto flex-col md:flex-row flex justify-between items-start gap-4">
                <a href="/" class="font-branding md:max-w-1/4">31 окрема механізована бригада</a>
                <nav class="flex items-center justify-end text-lg flex-wrap gap-4 text-base-content">
                    <a class="link link-hover" href="/">Головна</a>
                    <a class="link link-hover" href="/about">Про нас</a>
                    <a class="link link-hover" href="/vacancies">Вакансії</a>
                    <a class="link link-hover" href="/blog">Блог</a>
                    <a class="link link-hover" href="/faq">FAQ</a>
                </nav>
            </div>
            <p class="divider divider-end uppercase opacity-30 text-sm text-stretch mb-10">// Зв'язок з нами </p>
            <div class="flex flex-wrap justify-center gap-6 sm:gap-20 text-center">
                <div>
                    <p class="uppercase opacity-30 text-sm mb-2">[ Номер телефону ]</p>
                    <a class="btn btn-primary btn-dash btn-lg border-white" href="tel:098 314 7401">
                        <Icon name="mdi:phone" size="18" class="" /> 098 314 7401
                    </a>
                </div>
                <div>
                    <p class="uppercase opacity-30 text-sm mb-4">[ Соціальні мережі ]</p>
                    <div class="flex justify-center items-center gap-2">
                        <a href="https://www.instagram.com/31ombr/"
                            class="hover:opacity-50 transition-opacity duration-300 easy-in-out">
                            <Icon name="mdi:instagram" size="32" class="" />
                        </a>
                        <a href="https://www.facebook.com/31ombr/"
                            class="hover:opacity-50 transition-opacity duration-300 easy-in-out">
                            <Icon name="mdi:facebook" size="32" class="" />
                        </a>
                    </div>
                </div>
            </div>
            <!-- <Icon name="lucide:instagram" style="color: white" /> -->
            <div
                class="footer text-base-content border-[var(--color-border)] border-t mt-12 pt-4 pb-2 opacity-30 justify-items-end gap-0">
                <h2 class="uppercase font-branding opacity-30"> Ferro et igne </h2>
                <span>@ {{ currentYear }}.</span>
            </div>
        </div>
    </footer>
</template>
<script setup>
const currentYear = new Date().getFullYear();

</script>
<style lang="scss" scoped></style>