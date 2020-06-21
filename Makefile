info:
	which deno

run:
	deno run  --allow-net --allow-read  src/app.ts

run-2:
	deno run --allow-net --allow-read -c tsconfig.json src/server.ts

test:
	deno test --allow-read --allow-net  src/app.test.ts  

build-image:
	docker build . -t comments-deno-api:latest