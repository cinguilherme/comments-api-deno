import { superoak } from "https://deno.land/x/superoak@master/mod.ts";
import app from "./app.ts";

Deno.test("it should return status code 200 for the health check", async () => {
  const request = await superoak(app);
  await request.get("/health")
    .expect(200)
    .expect("UP");
});
