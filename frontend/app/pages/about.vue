<script setup>
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import MilitaryAssets from '~/components/MilitaryAssets.vue';
import Spacer from '~/components/Spacer.vue';

let id = 1;
const structure = [{ id: id++, name: "1-й механізований батальйон" }, { id: id++, name: "2-й механізований батальйон" }, { id: id++, name: "3-й механізований батальйон" }, { id: id++, name: "2-й стрілецький батальйон" }, { id: id++, name: "Батальйон БпС “Martlet”" }, { id: id++, name: "Розвідувальний взвод" }, { id: id++, name: "Служби охорони держтаємниці" }, { id: id++, name: "Група секретного документального забезпечення" }, { id: id++, name: "Відділення комунікації" }, { id: id++, name: "Медична рота" }];
const addZero = (val) => val < 10 ? `0${val}` : val;

</script>
<template>
    <section class="page-padding">
        <div class="container">
            <Breadcrumbs :items="[{ label: 'Головна', href: '/' },
            { label: 'Про нас', href: '/about' }
            ]" />
            <h2>31-ша окрема механізована бригада (31 омбр) — механізоване з'єднання Сухопутних військ Збройних сил
                України чисельністю у бригаду. Входить до складу Оперативного командування «Північ». Створена 17 лютого
                2023 року.</h2>
            <p>У 2023-2024 роках виконувала бойові завдання на території Донецької та Запорізької областей. Брала участь
                у контрнаступі влітку 2023 року. </p>
            <Spacer size="12" />
            <h3 class="mt-4"> Структура </h3>
            <ul class="list grid grid-cols-2 bg-base-100 rounded-box shadow-md col-2">
                <li v-for="item in structure" :key="item.id" class="list-row items-center">
                    <div class="text-2xl font-thin tabular-nums text-primary">{{ addZero(item.id) }}</div>
                    <div>
                        <div class="text-m uppercase font-semibold opacity-90">{{ item.name }}</div>
                    </div>
                </li>
            </ul>
            <Spacer size="12" />
            <div class="divider"></div>
            <Spacer size="12" />
            <MilitaryAssets />
        </div>
    </section>
</template>
<style lang="scss" scoped></style>