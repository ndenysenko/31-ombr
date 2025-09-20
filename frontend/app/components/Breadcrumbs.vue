<template>
    <nav class="breadcrumbs text-sm" aria-label="Breadcrumb">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <template v-if="index !== items.length - 1">
                    <a :href="item.href">{{ item.label }}</a>
                </template>
                <template v-else>
                    <span>{{ item.label }}</span>
                </template>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
    items: {
        type: Array,
        required: true,
        // Expected structure: [{ label: "Home", href: "/" }, { label: "Vacancies", href: "/vacancies" }]
    }
});
</script>
<style scoped>
.breadcrumbs {
    margin-bottom: 1rem;
}

.breadcrumbs li a {
    opacity: 30%;
}

.breadcrumbs li a:hover {
    opacity: 100%;
    text-decoration: none;

}

.breadcrumbs ul li:hover span {
    text-decoration: none;
}
</style>
