import { defineNuxtPlugin } from '#app'
import { useVacanciesStore } from '@/stores/vacancies'

export default defineNuxtPlugin(async (nuxtApp) => {
  const vacanciesStore = useVacanciesStore()
  const { find } = useStrapi()

  // Фонове завантаження вакансій, якщо ще не завантажені
  if (!vacanciesStore.vacancies.length) {
    vacanciesStore.fetchVacancies(find)
  }
})
