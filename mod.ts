import { Hono } from "npm:hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World!");
});

export default app.fetch;
