all: test

install: install-deps install-gats

install-deps:
	sudo apt install curl git -y
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && source ~/.bashrc
	nvm --version
	nvm install 18
	nvm use 18

install-gats:
	npm install -g gatsby-cli
	gatsby --version

test:
	gatsby develop

upgrade:
	npm update

upgrade-clean:
	rm -rf node_modules
	rm -rf package-lock.json
	npm install
	npm audit fix