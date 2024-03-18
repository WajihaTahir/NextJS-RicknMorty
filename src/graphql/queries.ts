import { gql } from "@apollo/client";

export const GETALLCHARACTERS = gql`
  query getAll($page: Int!) {
    characters(page: $page) {
      results {
        name
        id
        status
        species
      }
    }
  }
`;
