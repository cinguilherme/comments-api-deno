FROM hayd/alpine-deno:latest

EXPOSE 3000

WORKDIR /app

COPY . .

CMD [ "run", "--unstable", "--allow-net", "--allow-env", "--allow-read", "src/app.ts" ]