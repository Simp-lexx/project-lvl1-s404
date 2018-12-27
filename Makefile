install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npx eslint /home/lexx/jscode/proj-one/src