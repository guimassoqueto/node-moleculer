install:
	npx husky install && npm install

build:
	npm run build

ts:
	npm run ts

js:
	npm run build && npm run js