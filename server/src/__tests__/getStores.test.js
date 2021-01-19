import request from "supertest";
import app from "../server";

describe("Get stores endpoint", () => {
  it("should get json from the Walmart GraphQL api", async () => {
    const response = await request(app)
      .get("/api/stores")
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });
});
