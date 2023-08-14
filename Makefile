# if lyou are running this on windows, please key in the cmd to spin up the docker container:(
# for convenience, you can install make for windows and run the cmd below
docker-dev:
	# cmd: make docker-dev in root directory
	# Build docker image and run docker container in development mode.
	docker-compose -f docker-compose.dev.yml up --build --force-recreate

docker-stg:
	# cmd: make docker-stg in root directory
	# Build docker image and run docker container in staging mode.
	docker-compose -f docker-compose.stg.yml up --build --force-recreate

docker-prod:
	# cmd: make docker-prod in root directory
	# Build docker image and run docker container in production mode.
	docker-compose -f docker-compose.prod.yml up --build --force-recreate