import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./routes/routes.ts";
import logger from "./middleware/logger.ts";
import timer from "./middleware/timer.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.use(logger);
app.use(timer);

export default app;
