import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

export function useGraphql() {
  return new ApolloClient({
    uri: `${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}/graphql`,
    cache: new InMemoryCache(),
  });
}

export const GET_VACANCIES = gql`
  query {
    vacancies {
      data {
        id
        attributes {
          title
          requirements
          conditions
        }
      }
    }
  }
`;

export const GET_VACANCY_BY_ID = gql`
  query VacancyById($id: ID!) {
    vacancy(id: $id) {
      data {
        id
        attributes {
          title
          conditions
          requirements
        }
      }
    }
  }
`;
