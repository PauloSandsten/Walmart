import "isomorphic-fetch";
import { stores } from "../common/queries";

const API_URL =
  "https://developer.api.stg.walmart.com/api-proxy/service/Store-Services/Store-GraphQL-API/v1/graphql";

interface FindStoresByQuery {
  query: string;
  maxResults?: number;
  radius?: number;
}
const findStoresByQuery = async ({
  query,
  maxResults,
  radius,
}: FindStoresByQuery) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: stores(query, maxResults, radius) }),
    });
    const responseJSON = await response.json();
    return responseJSON.data.storesBySearchTerm.stores;
  } catch (error) {
    console.error("error:", error.response.body);
    return error;
  }
};

export { findStoresByQuery };
