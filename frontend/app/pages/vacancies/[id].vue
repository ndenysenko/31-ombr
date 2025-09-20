<script setup>
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import { useRoute } from "vue-router";
import { parseStrapiRichText } from '~/utils/strapiRichTextParser'

const route = useRoute();
const id = route.params.id;
const { findOne } = useStrapi();

const vacancyResponse = await findOne('vacancies', id, {
    populate: "deep",
});
const vacancyItem = vacancyResponse.data;

const requirements = parseStrapiRichText(vacancyItem.attributes.requirements);
const conditions = parseStrapiRichText(vacancyItem.attributes.conditions);
const responsibilities = parseStrapiRichText(vacancyItem.attributes.responsibilities);

const error = !vacancyItem;

const breadcrumbItems = [
    { label: 'Головна', href: '/' },
    { label: 'Вакансії', href: '/vacancies' },
    { label: vacancyItem?.attributes.title || 'Завантаження...', href: '' }
];
</script>
<template>
    <div class="container page-padding">
        <Breadcrumbs :items="breadcrumbItems" />
        <div v-if="error" class="flex items-center justify-center flex-col">
            <h3>Вакансія недоступна.</h3>
            <div class="btn btn-dash">
                <a href="/">Головна сторінка</a>
            </div>
        </div>
        <div v-else-if="vacancyItem">
            <h1>{{ vacancyItem.attributes.title }}</h1>
            <h3>Вимоги</h3>
            <div class="mb-3">
                <p v-for="(paragraph, index) in requirements" :key="`req-${index}`"> {{ paragraph }} </p>
            </div>
            <h3 class="mb-3">Умови роботи</h3>
            <div>
                <p v-for="(paragraph, index) in conditions" :key="`cond-${index}`"> {{ paragraph }} </p>
            </div>
            <h3>Обов'язки</h3>
            <div class="mb-6">
                <p v-for="(paragraph, index) in responsibilities" :key="`resp-${index}`"> {{ paragraph }} </p>
            </div>
            <a :href="`/contacts?vacancy=${vacancyItem.id}`" class="btn btn-primary btn-dash">Заповнити анкету</a>
        </div>
        <div v-else class="flex items-center justify-center flex-col">
            <h3>Вакансія недоступна.</h3>
            <div class="btn btn-dash">
                <a href="/">Головна сторінка</a>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
h3 {
    margin-top: 2rem;
}

p {
    margin-top: .5rem;
}
</style>
