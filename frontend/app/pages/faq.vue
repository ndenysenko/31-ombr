<script setup>
import Breadcrumbs from '~/components/Breadcrumbs.vue';
const { find } = useStrapi();

const faqResponse = await find('faqs', { populate: 'deep' });
const faqList = faqResponse.data;
</script>
<template>
    <section class="page-padding">
        <div class="container">
            <Breadcrumbs :items="[{ label: 'Головна', href: '/' },
            { label: 'FAQ', href: '/faq' }
            ]" />
            <h2>FAQ</h2>
            <p class="subheading">Відповіді на Ваші запитання</p>
            <div v-for="faq in faqList" :key="faq.id"
                class="collapse collapse-plus bg-base-100 border-b-[.1px] border-[var(--color-border)]">
                <input type="radio" name="my-accordion-1" checked="checked">
                <div class="collapse-title font-semibold">{{ faq.attributes.question }}</div>
                <div class="collapse-content text-sm">{{ faq.attributes.answer }}</div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped></style>