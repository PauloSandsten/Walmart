import express from "express";
import mockData from "./mocks/data/stores.json";
import { storesController } from "./controllers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/stores", storesController);
app.get("/api/stores/mock", (_req, res) => res.json(mockData));

export default app;
