.PHONY: deps build dev resume

deps:
	(cd portfolio && npm install)

build: deps
	(cd portfolio && npm run build)

dev: deps
	(cd portfolio && npm start)

resume:
	(cd resume && pdflatex resume.tex)

