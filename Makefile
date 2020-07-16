install: 
	npm install
run: 
	node bin/brain-even.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .