<script setup>
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import { useRoute } from "vue-router";
const { find } = useStrapi();
const route = useRoute();

const categorySlug = route.params.slug;
const categoryNames = {
    rear: "Тилові",
    medical: "Медичні",
    combat: "Бойові",
};

const vacancyResponse = await find("vacancies", {
    populate: "deep",
});
const allVacancies = vacancyResponse.data;
const vacancies = allVacancies.filter(v => {
    return v.attributes.category?.toLowerCase() === categorySlug?.toLowerCase();
});


console.log(vacancies);
</script>
<template>
    <section class="page-padding">
        <div class="container">
            <Breadcrumbs :items="[
                { label: 'Головна', href: '/' },
                { label: 'Вакансії', href: '/vacancies' },
                { label: `${categoryNames[categorySlug]} вакансії` || 'Категорія', href: `/vacancies/category/${categorySlug}` }
            ]" />
            <div v-if="vacancies.length">
                <ul>
                    <li v-for="v in vacancies" :key="v.id" class="py-5 border-border border-b">
                        <a :href="`/vacancies/${v.id}`" class="flex justify-between items-center group">
                            <h3>{{ v.attributes.title }}</h3>
                            <div
                                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center gap-1">
                                <span>Дізнатися більше</span>
                                <Icon name="lucide:arrow-up-right" style="color: white;" />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-else class="py-10 flex items-center justify-center text-center flex-col">
                <h3 class="max-w-2xl mb-6">Зараз немає відкритих вакансій у цій категорії.</h3>
                <a href="/" class="btn btn-dash">Головна сторінка</a>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped></style>