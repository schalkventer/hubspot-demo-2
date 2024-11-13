import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: "https://hubspot-demo-2-api.vercel.app/api/list",
    allowMethods: ["GET"],
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  })
);

app.get("/list", (c) => {
  return c.json(["A", "B", "Hello", "World", "Schalk", "C"]);
});

export default handle(app);
