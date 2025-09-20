<script setup>
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import Form from '~/components/Form.vue';
</script>
<template>
    <div class="container page-padding">
        <Breadcrumbs :items="[{ label: 'Головна', href: '/' },
        { label: 'Контакти', href: '/contacts' }
        ]" />
        <Form />
    </div>
</template>
<style lang="scss" scoped></style>