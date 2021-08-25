gen:
	mkdir -p websites/fe3l_com
	mkdir -p websites/fe3l_net
	mkdir -p websites/sle3k_com
	mkdir -p websites/sle3k_net
	mkdir -p websites/swe3t_com
	mkdir -p websites/swe3t_net
	mkdir -p websites/m96w_com
	mkdir -p websites/m96w_net
	mkdir -p websites/olivierhuin_com
	ts-node generator/awaiting/generate.ts
	prettier --write websites/*/index.html
	cp websites/olivierhuin_com/index.html websites/olivierhuin_com/home.html