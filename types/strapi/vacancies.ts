export interface VacancyAttributes {
  title: string;
  active: boolean;
  requirements: string;
  conditions: string;
  publishedAt?: string;
}

export interface Vacancy {
  id: number;
  attributes: VacancyAttributes;
}

export interface VacanciesResponse {
  data: Vacancy[];
  meta: any;
}
