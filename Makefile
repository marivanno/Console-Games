install: 
	npm install

run calc: 
	node bin/brain-calc.js

run even: 
	node bin/brain-even.js

run gcd: 
	node bin/brain-gcd.js

run prime: 
	node bin/brain-prime.js	

run prime: 
	node bin/brain-progression.js	

publish: 
	npm publish --dry-run
	
lint: 
	npx eslint .