<script setup>
import VacancyByCategoryCard from '~/components/VacancyByCategoryCard.vue';

const categories = [
    { id: 1, name: "Медичні", slug: "medical" },
    { id: 2, name: "Бойові", slug: "combat" },
    { id: 3, name: "Тилові", slug: "rear" }
]
</script>
<template>
    <section class="py-16 bg-base-200">
        <div class="mx-auto px-4 container">
            <!-- Header -->
            <div class="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 class="text-3xl md:text-4xl font-bold text-base-content">Вакансії</h2>
                <a href="/vacancies" class="btn btn-primary btn-dash"> Всі вакансії </a>
            </div>
            <!-- Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <VacancyByCategoryCard v-for="category in categories" :key="category.id" :category="category" />
            </div>
        </div>
    </section>
</template>
