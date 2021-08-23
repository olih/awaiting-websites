gen:
	mkdir -p websites/fe3l_com
	ts-node generator/awaiting/generate.ts
	prettier --write websites/*/index.html