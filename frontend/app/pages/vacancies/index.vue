<script setup>
import Breadcrumbs from '~/components/Breadcrumbs.vue';
const { find } = useStrapi();
const vacancyResponse = await find("vacancies", {
  populate: "deep",
});
const vacancies = vacancyResponse.data;
</script>
<template>
  <div class="container page-padding">
    <Breadcrumbs :items="[{ label: 'Головна', href: '/' },
    { label: 'Вакансії', href: '/vacancies' }
    ]" />
    <div v-if="vacancies">
      <h1>Всі вакансії</h1>
      <ul>
        <li v-for="v in vacancies" :key="v.id" class="py-5 border-border border-b">
          <a :href="`/vacancies/${v.id}`" class="flex justify-between items-center group">
            <h3>{{ v.attributes.title }}</h3>
            <div
              class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center gap-1">
              <a href="">Дізнатися більше</a>
              <Icon name="lucide:arrow-up-right" style="color: white;" />
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="flex items-center justify-center flex-col">
      <h3>Зараз немає відкритих вакансій.</h3>
      <div class="btn btn-dash">Головна сторінка</div>
    </div>
  </div>
</template>
<style lang="css" scoped>
p {
  white-space: pre;
}
</style>