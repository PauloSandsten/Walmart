import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`[server] Listening on port: ${PORT}`);
});

export default app;
