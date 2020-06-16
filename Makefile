run:
	deno run  --allow-net --allow-read  src/app.ts

build-image:
	docker build . -t comments-deno-api:latest