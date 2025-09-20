// stores/vacancies.ts
import { defineStore } from 'pinia'

interface Vacancy {
  id: number
  attributes: { title: string }
}

interface VacanciesState {
  vacancies: Vacancy[]
  isLoading: boolean
  error: string | null
}

export const useVacanciesStore = defineStore('vacancies', {
  state: (): VacanciesState => ({
    vacancies: [],
    isLoading: false,
    error: null
  }),
  actions: {
    async fetchVacancies(find: any) {
      if (this.vacancies.length > 0) return
      this.isLoading = true
      this.error = null

      try {
        const res = await find('vacancies', { populate: 'deep' })
        this.vacancies = res.data || []
      } catch (err: any) {
        this.error = 'Не вдалося завантажити вакансії'
        console.error(err)
      } finally {
        this.isLoading = false;
        console.log("Вакансії завантажені")
      }
    }
  }
})
