export interface ApplicationForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string | null;
  birthDate: string | null;
  vacancy: string;
  comment: string | null;
  militaryService: "" | "yes" | "no";
}

export interface ApplicationPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string | null;
  birthDate: string | null;
  vacancy: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comment: any; // Rich text blocks
  militaryService: boolean;
}

// Vacancy from Strapi
export interface Vacancy {
  id: number;
  attributes: {
    title: string;
  };
}
