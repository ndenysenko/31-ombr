<script setup>
const { find } = useStrapi();

const faqResponse = await find('faqs', { populate: 'deep' });
const faqList = faqResponse.data;
const mainQuestions = faqList.filter(item => item.attributes.main)
</script>
<template>
    <div v-for="faq in mainQuestions" :key="faq.id"
        class="collapse collapse-plus bg-base-100 border-b-[.1px] border-[var(--color-border)]">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div class="collapse-title font-semibold">{{ faq.attributes.question }}</div>
        <div class="collapse-content text-sm">{{ faq.attributes.answer }}</div>
    </div>
</template>
<style scoped lang="scss"></style>
