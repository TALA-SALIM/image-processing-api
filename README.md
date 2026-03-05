Image_Processing_API

## Description
This project resizes images using width and height parameters for udacity

## Installation ==> npm install

## Build ==> npm run build

## Start Server ==>  npm start

Server runs on:http://localhost:8000

## Run Tests ==> npm test

## Cached Images Resized images are stored in:

assets/thumb ==>   The server will reuse the cached image if the same width and height were requested before.

## API Endpoint

Resize an image using the following endpoint:

http://localhost:8000/api/images?filename=fjord&width=400&height=400

Example response:
Returns a resized image of "fjord.jpg" with dimensions 400x400 pixels.
If the image was already processed before, the cached version will be returned.