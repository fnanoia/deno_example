import { Application } from "./deps.ts";
import { userRouter } from "./routes/user.routes.ts";

const app = new Application();

app.use(userRouter.routes());

console.log(`server Oak on port 8000`);

await app.listen({ port: 8000 });
