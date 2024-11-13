import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/list", (c) => {
  return c.json(["A", "B", "Hello", "World", "Schalk", "C"]);
});

export default handle(app);
