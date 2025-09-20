<script setup>

</script>
<template>
    <header class="border-b-[var(--color-border)] border-b-[.1px] bg-base-100">
        <div class="container uppercase">
            <nav class="navbar flex-wrap py-4">
                <div class="basis-[100%] lg:basis-auto navbar-start"> <a href="/"
                        class="font-branding flex items-center gap-2"><img src="/logo.svg" class="w-8" alt="Logo">31
                        окрема механізована бригада</a></div>
                <div class="basis-[100%] lg:basis-auto navbar-end">
                    <ul class="nav_list flex gap-4 items-center justify-end flex-wrap md:flex-nowrap">
                        <li class="nav_item"><a href="/" class="nav_link">Головна</a></li>
                        <li class="nav_item text-nowrap"><a href="/about" class="nav_link">Про бригаду</a></li>
                        <li class="nav_item"><a href="/vacancies" class="nav_link">Вакансії</a></li>
                        <li class="nav_item"><a href="/faq" class="nav_link">FAQ</a></li>
                        <li class="nav_item"><a href="/contacts" class="nav_link btn btn-outline">Приєднатися</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<style lang="css" scoped>
.nav_link:hover {
    opacity: 50%;
}
</style>