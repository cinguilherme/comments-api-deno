run:
	deno run  --allow-net --allow-read  src/app.ts

test:
	deno test --allow-read --allow-net  src/app.test.ts  

build-image:
	docker build . -t comments-deno-api:latest