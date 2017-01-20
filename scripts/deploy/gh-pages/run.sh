# Provide environment variables here

IMAGE_NAME=react-app-boilerplate

docker build -t $IMAGE_NAME . && \
	docker run --rm $IMAGE_NAME npm run deploy:gh-pages
