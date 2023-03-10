import { reactive } from 'vue'

export const store = reactive({
      carta: {},
      fltArcano: "",
      fltCabala: "",
      fltNumero: "",
      fltNaipe: "",
      fltPlaneta: "",
      fltSigno: "",
      fltMundo: "",
      fltPalavrasChaves: "",
      filterKey: "",
      deck: [
            { id:0, nome: "Louco", numero: "n0n", letra: "Aleph", caminho: "c11c", img: "Thot-T-00.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:1, nome: "Mago", numero: "n1n", letra: "Bet", caminho: "c12c", img: "Thot-T-01.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:2, nome: "Sacerdotisa", numero: "n2n", letra: "Gimel", caminho: "c13c", img: "Thot-T-02.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:3, nome: "Imperatriz", numero: "n3n", letra: "Daleth", caminho: "c14c", img: "Thot-T-03.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:4, nome: "Imperador", numero: "n4n", letra: "Tzaddi", caminho: "c15c", img: "Thot-T-04.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:5, nome: "Hierofante", numero: "n5n", letra: "Vau", caminho: "c16c", img: "Thot-T-05.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:6, nome: "Amantes", numero: "n6n", letra: "Zayin", caminho: "c17c", img: "Thot-T-06.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:7, nome: "Carro", numero: "n7n", letra: "Chet", caminho: "c18c", img: "Thot-T-07.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:8, nome: "Ajustamento", numero: "n8n", letra: "Lamed", caminho: "c19c", img: "Thot-T-08.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:9, nome: "Eremita", numero: "n9n", letra: "Yod", caminho: "c20c", img: "Thot-T-09.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:10, nome: "Fortuna", numero: "n10n", letra: "Kaph", caminho: "c21c", img: "Thot-T-10.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:11, nome: "Lux??ria", numero: "n11n", letra: "Teth", caminho: "c22c", img: "Thot-T-11.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:12, nome: "Enforcado", numero: "n12n", letra: "Mem", caminho: "c23c", img: "Thot-T-12.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:13, nome: "Morte", numero: "n13n", letra: "Nun", caminho: "c24c", img: "Thot-T-13.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:14, nome: "Arte", numero: "n14n", letra: "Samekh", caminho: "c25c", img: "Thot-T-14.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:15, nome: "Diabo", numero: "n15n", letra: "Ayin", caminho: "c26c", img: "Thot-T-15.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:16, nome: "Torre", numero: "n16n", letra: "P??", caminho: "c27c", img: "Thot-T-16.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:17, nome: "Estrela", numero: "n17n", letra: "Heh", caminho: "c28c", img: "Thot-T-17.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:18, nome: "Lua", numero: "n18n", letra: "Qoph", caminho: "c29c", img: "Thot-T-18.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:19, nome: "Sol", numero: "n19n", letra: "Resh", caminho: "c30c", img: "Thot-T-19.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:20, nome: "Aeon", numero: "n20n", letra: "Shin", caminho: "c31c", img: "Thot-T-20.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:21, nome: "O Universo", numero: "n21n", letra: "Tau", caminho: "c32c", img: "Thot-T-21.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:22, nome: "A Raiz Dos Poderes De Fogo - ??s De Bast??es", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-W-0A.png", cabala: ["Kether"], naipe: "bast??es", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:23, nome: "Dom??nio - Dois De Bast??es", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-W-02.png", cabala: ["Chokmah"], naipe: "bast??es", planeta: "Marte", signo: "??ries", decanato: "Marte em ??ries", tipo: "menor", },
            { id:24, nome: "Virtude - Tr??s De Bast??es", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-W-03.png", cabala: ["Binah"], naipe: "bast??es", planeta: "Sol", signo: "??ries", decanato: "Sol em ??ries", tipo: "menor", },
            { id:25, nome: "Conclus??o - Quatro De Bast??es", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-W-04.png", cabala: ["Chesed"], naipe: "bast??es", planeta: "Venus", signo: "??ries", decanato: "Venus em ??ries", tipo: "menor", },
            { id:26, nome: "Disputa - Cinco De Bast??es", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-W-05.png", cabala: ["Geburah"], naipe: "bast??es", planeta: "Saturno", signo: "Le??o", decanato: "Saturno em Le??o", tipo: "menor", },
            { id:27, nome: "Vit??ria - Seis De Bast??es", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-W-06.png", cabala: ["Tipheret"], naipe: "bast??es", planeta: "Jupiter", signo: "Le??o", decanato: "Jupiter em Le??o", tipo: "menor", },
            { id:28, nome: "Valor - Sete De Bast??es", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-W-07.png", cabala: ["Netzach"], naipe: "bast??es", planeta: "Marte", signo: "Le??o", decanato: "Marte em Le??o", tipo: "menor", },
            { id:29, nome: "Rapidez - Oito De Bast??es", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-W-08.png", cabala: ["Hod"], naipe: "bast??es", planeta: "Mercurio", signo: "Sagit??rio", decanato: "Mercurio em Sagit??rio", tipo: "menor", },
            { id:30, nome: "For??a - Nove De Bast??es", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-W-09.png", cabala: ["Yesod"], naipe: "bast??es", planeta: "Lua", signo: "Sagit??rio", decanato: "Lua em Sagit??rio", tipo: "menor", },
            { id:31, nome: "Opress??o - Dez De Bast??es", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-W-10.png", cabala: ["Malkuth"], naipe: "bast??es", planeta: "Saturno", signo: "Sagit??rio", decanato: "Saturno em Sagit??rio", tipo: "menor", },
            { id:32, nome: "Cavaleiro De Bast??es", numero: "nn", letra: "", caminho: "c2c", img: "Thot-W-KI.png", cabala: ["Chokmah"], naipe: "bast??es", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:33, nome: "Rainha De Bast??es", numero: "nn", letra: "", caminho: "c3c", img: "Thot-W-QU.png", cabala: ["Binah"], naipe: "bast??es", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:34, nome: "Pr??ncipe De Bast??es", numero: "nn", letra: "", caminho: "c6c", img: "Thot-W-J2.png", cabala: ["Tipheret"], naipe: "bast??es", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:35, nome: "Princesa De Bast??es", numero: "nn", letra: "", caminho: "c10c", img: "Thot-W-J1.png", cabala: ["Malkuth"], naipe: "bast??es", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:36, nome: "A Raiz Dos Poderes Da ??gua - ??s De Copas", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-C-0A.png", cabala: ["Kether"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:37, nome: "Amor - Dois De Copas", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-C-02.png", cabala: ["Chokmah"], naipe: "Copas", planeta: "Venus", signo: "C??ncer", decanato: "Venus em C??ncer", tipo: "menor", },
            { id:38, nome: "Abund??ncia - Tr??s De Copas", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-C-03.png", cabala: ["Binah"], naipe: "Copas", planeta: "Mercurio", signo: "C??ncer", decanato: "Mercurio em C??ncer", tipo: "menor", },
            { id:39, nome: "Lux??ria - Quatro De Copas", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-C-04.png", cabala: ["Chesed"], naipe: "Copas", planeta: "Lua", signo: "C??ncer", decanato: "Lua em C??ncer", tipo: "menor", },
            { id:40, nome: "Desapontamento - Cinco De Copas", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-C-05.png", cabala: ["Geburah"], naipe: "Copas", planeta: "Marte", signo: "Escorpi??o", decanato: "Marte em Escorpi??o", tipo: "menor", },
            { id:41, nome: "Prazer - Seis De Copas", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-C-06.png", cabala: ["Tipheret"], naipe: "Copas", planeta: "Sol", signo: "Escorpi??o", decanato: "Sol em Escorpi??o", tipo: "menor", },
            { id:42, nome: "Deboche (Corrup????o) - Sete De Copas", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-C-07.png", cabala: ["Netzach"], naipe: "Copas", planeta: "Venus", signo: "Escorpi??o", decanato: "Venus em Escorpi??o", tipo: "menor", },
            { id:43, nome: "Indol??ncia - Oito De Copas", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-C-08.png", cabala: ["Hod"], naipe: "Copas", planeta: "Saturno", signo: "Peixes", decanato: "Saturno em Peixes", tipo: "menor", },
            { id:44, nome: "Felicidade - Nove De Copas", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-C-09.png", cabala: ["Yesod"], naipe: "Copas", planeta: "Jupiter", signo: "Peixes", decanato: "Jupiter em Peixes", tipo: "menor", },
            { id:45, nome: "Saciedade - Dez De Copas", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-C-10.png", cabala: ["Malkuth"], naipe: "Copas", planeta: "Marte", signo: "Peixes", decanato: "Marte em Peixes", tipo: "menor", },
            { id:46, nome: "Cavaleiro De Copas", numero: "nn", letra: "", caminho: "c2c", img: "Thot-C-KI.png", cabala: ["Chokmah"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:47, nome: "Rainha De Copas", numero: "nn", letra: "", caminho: "c3c", img: "Thot-C-QU.png", cabala: ["Binah"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:48, nome: "Pr??ncipe De Copas", numero: "nn", letra: "", caminho: "c6c", img: "Thot-C-J2.png", cabala: ["Tipheret"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:49, nome: "Princesa De Copas", numero: "nn", letra: "", caminho: "c10c", img: "Thot-C-J1.png", cabala: ["Malkuth"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:50, nome: "A Raiz Dos Poderes Do Ar - ??s De Espadas", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-S-0A.png", cabala: ["Kether"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:51, nome: "Paz - Dois De Espadas", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-S-02.png", cabala: ["Chokmah"], naipe: "Espadas", planeta: "Lua", signo: "Libra", decanato: "Lua em Libra", tipo: "menor", },
            { id:52, nome: "Dor - Tr??s De Espadas", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-S-03.png", cabala: ["Binah"], naipe: "Espadas", planeta: "Saturno", signo: "Libra", decanato: "Saturno em Libra", tipo: "menor", },
            { id:53, nome: "Tr??gua - Quatro De Espadas", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-S-04.png", cabala: ["Chesed"], naipe: "Espadas", planeta: "Jupiter", signo: "Libra", decanato: "Jupiter em Libra", tipo: "menor", },
            { id:54, nome: "Derrota - Cinco De Espadas", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-S-05.png", cabala: ["Geburah"], naipe: "Espadas", planeta: "Venus", signo: "Aqu??rio", decanato: "Venus em Aqu??rio", tipo: "menor", },
            { id:55, nome: "Ci??ncia - Seis De Espadas", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-S-06.png", cabala: ["Tipheret"], naipe: "Espadas", planeta: "Mercurio", signo: "Aqu??rio", decanato: "Mercurio em Aqu??rio", tipo: "menor", },
            { id:56, nome: "Futilidade - Sete De Espadas", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-S-07.png", cabala: ["Netzach"], naipe: "Espadas", planeta: "Lua", signo: "Aqu??rio", decanato: "Lua em Aqu??rio", tipo: "menor", },
            { id:57, nome: "Interfer??ncia - Oito De Espadas", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-S-08.png", cabala: ["Hod"], naipe: "Espadas", planeta: "Jupiter", signo: "G??meos", decanato: "Jupiter em G??meos", tipo: "menor", },
            { id:58, nome: "Crueldade - Nove De Espadas", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-S-09.png", cabala: ["Yesod"], naipe: "Espadas", planeta: "Marte", signo: "G??meos", decanato: "Marte em G??meos", tipo: "menor", },
            { id:59, nome: "Ru??na - Dez De Espadas", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-S-10.png", cabala: ["Malkuth"], naipe: "Espadas", planeta: "Sol", signo: "G??meos", decanato: "Sol em G??meos", tipo: "menor", },
            { id:60, nome: "Rainha De Espadas", numero: "nn", letra: "", caminho: "c2c", img: "Thot-S-KI.png", cabala: ["Chokmah"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:61, nome: "Cavaleiro De Espadas", numero: "nn", letra: "", caminho: "c3c", img: "Thot-S-QU.png", cabala: ["Binah"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:62, nome: "Pr??ncipe De Espadas", numero: "nn", letra: "", caminho: "c6c", img: "Thot-S-J2.png", cabala: ["Tipheret"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:63, nome: "Princesa De Espadas", numero: "nn", letra: "", caminho: "c10c", img: "Thot-S-J1.png", cabala: ["Malkuth"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:64, nome: "A Raiz Dos Poderes Da Terra - ??s De Discos", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-D-0A.png", cabala: ["Kether"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:65, nome: "Mudan??a - Dois De Discos", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-D-02.png", cabala: ["Chokmah"], naipe: "Discos", planeta: "Jupiter", signo: "Capric??rnio", decanato: "Jupiter em Capric??rnio", tipo: "menor", },
            { id:66, nome: "Trabalho - Tr??s De Discos", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-D-03.png", cabala: ["Binah"], naipe: "Discos", planeta: "Marte", signo: "Capric??rnio", decanato: "Marte em Capric??rnio", tipo: "menor", },
            { id:67, nome: "Poder - Quatro De Discos", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-D-04.png", cabala: ["Chesed"], naipe: "Discos", planeta: "Sol", signo: "Capric??rnio", decanato: "Sol em Capric??rnio", tipo: "menor", },
            { id:68, nome: "Preocupa????o - Cinco De Discos", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-D-05.png", cabala: ["Geburah"], naipe: "Discos", planeta: "Mercurio", signo: "Touro", decanato: "Mercurio em Touro", tipo: "menor", },
            { id:69, nome: "Sucesso - Seis De Discos", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-D-06.png", cabala: ["Tipheret"], naipe: "Discos", planeta: "Lua", signo: "Touro", decanato: "Lua em Touro", tipo: "menor", },
            { id:70, nome: "Fracasso - Sete De Discos", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-D-07.png", cabala: ["Netzach"], naipe: "Discos", planeta: "Saturno", signo: "Touro", decanato: "Saturno em Touro", tipo: "menor", },
            { id:71, nome: "Prud??ncia - Oito De Discos", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-D-08.png", cabala: ["Hod"], naipe: "Discos", planeta: "Sol", signo: "Virgem", decanato: "Sol em Virgem", tipo: "menor", },
            { id:72, nome: "Ganho - Nove De Discos", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-D-09.png", cabala: ["Yesod"], naipe: "Discos", planeta: "Venus", signo: "Virgem", decanato: "Venus em Virgem", tipo: "menor", },
            { id:73, nome: "Riqueza - Dez De Discos", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-D-10.png", cabala: ["Malkuth"], naipe: "Discos", planeta: "Mercurio", signo: "Virgem", decanato: "Mercurio em Virgem", tipo: "menor", },
            { id:74, nome: "Rainha De Discos", numero: "nn", letra: "", caminho: "c2c", img: "Thot-D-KI.png", cabala: ["Chokmah"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:75, nome: "Cavaleiro De Discos", numero: "nn", letra: "", caminho: "c3c", img: "Thot-D-QU.png", cabala: ["Binah"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:76, nome: "Pr??ncipe De Discos", numero: "nn", letra: "", caminho: "c6c", img: "Thot-D-J2.png", cabala: ["Tipheret"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:77, nome: "Princesa De Discos", numero: "nn", letra: "", caminho: "c10c", img: "Thot-D-J1.png", cabala: ["Malkuth"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", }
      ],
      palavras_chaves :[
            { id: 0, nome: "Louco", palavras_chaves: ["In??cio da Jornada", "Come??ar um novo projeto, Aventura", "Brainstorming, Brincar com as mais diversas possibilidades", "Busca", "Caos Criativo", "Come??ar do zero", "Conviv??ncia Afetuosa", "Coringa", "Desapego", "Descontra????o", "Despreocupa????o", "Encontro novo e revigorante", "Estar aberto para novas atividades", "Experimentar algo novo de uma forma descontra??da e divertida", "Falta de responsabilidade", "Indecis??o", "Inexperi??ncia profissional", "Ingenuidade", "Inoc??ncia", "Insensatez", "Irresponsabilidade", "leviandade", "Liberdade", "Liberta????o", "Rein??cio", "Novos Come??os", "Oportunidade", "Paquera", "Partida para desconhecido", "Pausa produtiva", "Planos ca??ticos", "Potencial original", "Relacionamento aberto", "Vontade de curtir a vida."], },
            { id: 1, nome: "Mago", palavras_chaves: ["Verdadeira Vontade", "Poder Criador", "A????o", "Aceitar a si e aos outros", "Aprendizagem", "Atividade", "Atitude", "Auto- realiza????o", "Capacidade de imposi????o", "Concentra????o Consci??ncia", "Conscientiza????o profunda", "a Casa de Deus", "Dar primeiro passo", "Demonstrar concentra????o e habilidade", "Destreza", "Experi??ncia", "Fascina????o", "For??a de atra????o", "For??a de vontade", "Habilidade", "Impulso inicial", "Juventude", "ludibriar os outros", "Maestria", "Negociar com agilidade e esperteza", "Passar em provas", "Penetrar no consciente da totalidade.", "Perspic??cia", "Poder de Convic????o", "Poder de resolu????o", "Realizar tarefas com maestria", "Solucionar problemas com compet??ncia", "Ter ??xito", "Tomar iniciativa", "Vitalidade."], },
            { id: 2, nome: "Sacerdotisa", palavras_chaves: ["A virgem", "Alma g??mea", "Aptid??o medi??nica e inspiradora", "Aquilo que est?? invis??vel", "Atividades terap??uticas", "Atra????o profunda", "Capacidade", "Ciclos naturais", "Compreens??o", "Compreens??o da mensagem dos sonhos", "Conex??o total", "Confian??a", "Confian??a m??tua", "Confiar na sua voz interior, Consci??ncia", "Conselheira", "Dedica????o", "Deixar-se encontrar, Discri????o", "Disposi????o passiva", "Empatia", "Entender o Outro", "Equilibrada", "Espiritualidade", "Estabilidade", "Fantasia", "For??a Interior", "Guia interior, Inconsciente", "Intui????o", "Lucidez", "Mist??rio Mulher de idade e Madura ou Experiente", "Paci??ncia", "Pessoa Reservada", "Pol??tica", "Presun????o", "Profundidade", "Prud??ncia", "Sabedoria", "Segredos", "Seguran??a instintiva", "Sensibilidade", "Solidariedade", "Uni??o espiritual", "Vis??es", "Vivenciar experi??ncias espirituais"], },
            { id: 3, nome: "Imperatriz", palavras_chaves: ["A m??e", "Abund??ncia", "Atividade criativa", "Aumento da fam??lia", "Bem estar Material", "Boas chances de crescimento e desenvolvimento", "Bom senso", "Car??cter, Comando Amoroso", "Comunica????o", "Confiar na capacidade de crescimento da vida e estar aberto a mudan??as", "Crescimento", "Cria????o", "Cria????o de novos conceitos", "Criatividade", "Cuidar com carinho do que foi confiado, Cultivo", "Desenvolvimento intenso", "Esposa", "Evolu????o", "Fecundidade", "Fertilidade", "For??a intuitiva", "Gravidez", "Independ??ncia", "Inova????es", "Intelig??ncia", "M??e de Fam??lia", "Maternidade", "Mulher Apaixonada", "Nascimento", "Nutri????o", "Objetividade", "Perspectivas novas e boas", "Poder natural", "Possessividade", "Potencial criativo", "Profunda confian??a", "Prote????o e aconchego", "Realiza????o", "Reativa????o de um v??nculo antigo", "Seguran??a", "Senso apurado para as tend??ncias e ciclos nos neg??cios", "Sensualidade", "Sensualidade ben??fica", "Sentimentos Generosos e Positivos", "Solicitude", "Superprote????o", "Ter uma vis??o do eterno ciclo de nascimento e morte", "Transforma????es profissionais."], },
            { id: 4, nome: "Imperador", palavras_chaves: ["O Pai", "O Chefe", "O L??der", "Acordos claros", "Autoridade", "Certeza", "Ceticismo", "Chefe", "Comando", "Consolida????o", "Continuidade", "Desenvolvimento de projetos com clareza", "Dire????o", "Disciplina", "Disciplina e perseveran??a", "Disposi????o para assumir responsabilidades", "Energia", "Estabilidade", "Estabilidade e estruturas claras", "Estrutura", "Estruturas no relacionamento de efic??cia j?? comprovada", "For??a", "For??a de Car??cter", "Fundamento est??vel", "Lideran??a", "Pai de Fam??lia", "Paternidade", "Perfeccionismo", "Persist??ncia", "Poder", "Poder Material", "Posi????o de lideran??a", "Prepot??ncia", "Protetor, Realiza????o de objetivos comuns", "Realiza????o de planos", "Realizar inten????es e planos com perseveran??a", "Regras", "Regulamento", "Rela????es ordenadas", "Retid??o de car??ter", "Rigidez", "Seguran??a", "Senso de realidade", "Senso pr??tico", "Sucesso", "Valorizar tanto estruturas organizacionais como tamb??m racioc??nio l??gico e realista."], },
            { id: 5, nome: "Hierofante", palavras_chaves: ["O Professor", "Ampliar sua vis??o de mundo", "Aperfei??oamento", "Aprendizado", "As leis", "Atividade que tenha um sentido", "Busca da verdade", "Casamento", "Confian??a", "Confian??a nas pr??prias capacidades", "Confian??a profunda", "Conformidade", "Cren??a", "Cren??a Religiosa", "Declara????o de amor", "Desenvolver confian??a em Deus", "Diplomacia", "Ensino", "Espiritualidade", "Estabilidade", "??tica de trabalho elevada", "Exame de consci??ncia", "Expans??o da consci??ncia", "Fanatismo", "F??", "F?? Interior", "Fidelidade", "For??a da f??", "For??a persuasiva", "Gentileza", "Harmonia", "Hipocrisia", "Intui????o (carta de prote????o)", "Mestre", "O santo", "Passar por uma experi??ncia profunda que leve ?? compreens??o do sentido das coisas", "Percep????o", "Percep????o do sentido das coisas", "Poder Intelectual, Moral, Social, Pol??tico e Religioso", "Princ??pios morais s??lidos", "Prote????o", "Reconhecer e estimar sentido e valor do relacionamento", "Rigor", "Sabedoria", "Sair em busca de sentido e fazer algo significativo", "Seguir uma voca????o", "Tradi????o", "Virtude", "Voca????o."], },
            { id: 6, nome: "Amantes", palavras_chaves: ["Escolhas", "A escolha do caminho", "Adaptabilidade", "Alian??a", "Amor", "Boa coopera????o", "Capacidade de assumir compromissos", "Casamento", "Contrato", "Cren??as Pessoais", "Decis??es tomadas com cora????o", "Desejo de relacionar-se", "D??vidas", "Encruzilhada", "Estresse", "Fechar contratos", "Fidelidade", "Fus??es nos neg??cios", "Indecis??o", "Inseguran??a", "Juntar-se a outras pessoas e envolver-se em um projeto com todo o cora????o", "Juntar-se aos outros", "Livre-arb??trio", "Obsess??o", "Op????es", "Parceria", "Raz??o x Emo????o", "Reconcilia????o", "Reconhecer a rela????o entre as coisas", "Relacionamento Amoroso", "Reunir detalhes", "Sensualidade", "Sentir-se atra??do por uma tarefa", "Seriedade na rela????o", "Sexualidade", "Sorte no amor", "Supera????o de diferen??as", "Tomar uma decis??o com clareza", "Trabalho com prazer", "Transa????es arrojadas", "Uni??o", "Valores."], },
            { id: 7, nome: "Carro", palavras_chaves: ["A????o direcionada", "Alinhar-se a um objetivo comum", "Ambi????o", "Aproveitar imediatamente a oportunidade com determina????o e objetividade.", "Aproxima????o amorosa", "Ardor Combativo", "Assumir novas fun????es", "Atmosfera de partida", "Aud??cia", "Avan??o", "Confian??a em si", "Conquista", "Coragem", "Dar um grande salto adiante", "Dar um salto na carreira", "Desejo de aventura", "Desloca????o", "Determina????o", "Dire????o", "Disposi????o de correr riscos", "Distin????o", "Dom??nio", "??xito", "Firmeza de prop??sito", "For??a de Vontade", "??mpeto", "Impulsos estimulantes", "Independ??ncia", "Iniciativa", "Neglig??ncia", "Not??cia", "Novas rela????es", "Novos relacionamentos", "O Her??i", "Perseveran??a Progresso", "Promo????o", "Rigor", "Sintonizar-se internamente com um objetivo", "Sucesso", "Triunfo", "Viagem", "Visar a novos projetos", "Vitoria", "Vit??ria", "Vontade de impor-se."], },
            { id: 8, nome: "Ajustamento", palavras_chaves: ["O Juiz", "A Balan??a", "A????o e Rea????o", "Acordos justos", "Ajustamento", "Analisar algo com objetividade e sobriedade e reconhecer a sua pr??pria responsabilidade na situa????o", "Arcar com as consequ??ncias", "Autocr??tica", "Boa capacidade de julgamento", "Clareza", "Colher o que se semeou", "Compreens??o s??bria", "Consequ??ncia", "Contas equilibradas", "Contrato", "Contratos justos", "Decis??o", "Equil??brio", "Equil??brio de ideias e nas a????es", "??tica", "Honestidade", "Igualdade", "Imparcialidade", "Integridade", "Justi??a", "Karma", "Lei", "Leis", "L??gica", "Moralidade", "Objetividade", "Parceria motivada por interesses comuns", "Parcialidade", "Plantar para colher", "Racionalidade", "Raz??o", "Reconhecer a nossa pr??pria responsabilidade em tudo o que vivenciamos", "Retid??o", "Regras", "Relacionamento comercial", "Relacionamento equilibrado", "Respeito m??tuo", "Responsabilidade", "Rigor", "Ter clareza sobre os seus objetivos profissionais", "Ter responsabilidade por si mesmo."], },
            { id: 9, nome: "Eremita", palavras_chaves: ["Afastar-se temporariamente para ponderar sobre o relacionamento", "Agir com seriedade", "Apostar em objetivos que j?? foram comprovados", "Avalia????o de objetivos", "Busca de Verdade", "Cansa??o", "Cautela", "Clausura", "Concentra????o no que ?? essencial", "Conhecer-se e ser fiel a si mesmo.", "Deixar algo amadurecer e levar-se a s??rio, Estabilidade", "Evolu????o lenta e Profunda", "Examinar as coisas a fundo", "Experi??ncia de vida", "Homem idoso e s??bio, Honestidade", "Introspec????o", "Introspec????o", "Isolamento", "Lucidez", "Mover-se com seguran??a", "Olhar-se por dentro", "Orienta????o", "Paci??ncia", "Pesquisas", "Projetos amadurecidos", "Prud??ncia", "Reconhecer a sua verdadeira voca????o", "Recuo", "Reflex??o", "Respeito", "Retirar-se da vida profissional", "Retiro.", "Sabedoria", "Seguir o seu pr??prio caminho", "Ser fiel a si mesmo em vez de assumir compromissos duvidosos", "Seriedade", "Sil??ncio, Solid??o", "Ter uma atitude madura", "Tomada de consci??ncia", "Trabalho ??rduo e demorado", "Transmitir experi??ncias"], },
            { id: 10, nome: "Fortuna", palavras_chaves: ["Altos e baixos", "Acontecimentos determinados pelo destino", "Agita????o", "Altera????o de rotinas", "Aproveitar o momento", "Ciclos", "Compreens??o e aceita????o de for??as que s??o maiores que o ego humano", "Desenlace", "Desenvolvimento satisfat??rio no relacionamento", "Destino", "Encontrar a sua voca????o", "Encontrar o parceiro certo", "Encontros marcados pelo destino", "Evolu????o, ??xito ef??mero", "Expans??o", "Instabilidade", "Karma", "Liga????o determinada pelo destino.", "Miss??o na vida", "Movimento", "Mudan??a", "Mudan??as", "Mudan??as inesperadas", "Mudan??as na profiss??o", "Novo ciclo de vida", "O que o destino reserva, das quais n??o se pode fugir", "Oportunidade, Oportunidade de compreens??o do padr??o de relacionamento", "Recome??o", "Reconhecer o seu destino e fazer dele a sua miss??o de vida", "Repeti????o", "Revolu????o", "Ser guiado pelo destino", "Situa????o em vias de Evolu????o", "Sorte", "Sorte Moment??nea", "Sorte ou Azar", "Transfer??ncia", "Transforma????es", "V??nculo k??rmico."], },
            { id: 11, nome: "Lux??ria", palavras_chaves: ["Amplia????o", "Acreditar no poder", "Afirma????o", "Agressividade", "nimo para o trabalho", "Atra????o", "Autoconfian??a", "Capacidade produtiva", "Cobran??as", "Compet??ncia", "Contato Superior", "Controle", "Convic????o", "Coragem", "Criatividade", "Destemor", "Disposi????o", "Disposi????o para correr riscos", "Domina????o", "Empoderamento", "Energia", "Enfrentar a sua fera interior e dom??-la carinhosamente", "Engajamento", "Entregar-se apaixonadamente a uma pessoa, a uma tarefa ou a uma experi??ncia", "Excessos sexuais e excessos em geral", "Fascina????o", "Firmeza", "For??a da Intelig??ncia", "Instinto", "Intensidade", "Liga????o apaixonada", "Luta", "Miseric??rdia", "Motiva????o intensa", "Paix??o", "Poder", "Prazer em viver, Raz??o", "Rela????o intensa", "Resist??ncia", "Sucesso", "Supera????o de obst??culos", "Tes??o", "Toler??ncia", "Triunfo, Valor", "Vitalidade."], },
            { id: 12, nome: "Enforcado", palavras_chaves: ["Abandono", "Acomoda????o", "Aprendizado involunt??rio", "Aprisionamento da alma", "Aus??ncia", "Auto-sacrif??cio", "Beco sem saida", "Crise", "Dar uma virada e abrir- se a novas percep????es", "Desapego", "Desgastar-se entre dois p??los", "Desistir, Dilema", "Esfor??os in??teis", "Estagna????o", "Estar dividido entre contradi????es e reconhecer a sa??da em uma mudan??a de dire????o", "Estar imobilizado sem saber que fazer para prosseguir", "Estar preso a um dilema do qual apenas se pode sair por meio do sacrif??cio", "Falta de perspectivas futuras", "Falta de sucesso", "Falta dire????o e objetividade", "Impot??ncia", "Incapacidade de discernir, Indol??ncias", "In??rcia", "Insatisfa????o", "Mover-se em c??rculos", "Mudan??a de vis??o", "Mudan??a para pior, Nova Perspectiva", "Olhar para o Alto", "Parado", "Pausa for??ada", "Planos arrastados", "Preso ao passado", "Pris??o", "Procura de trabalho que parece ser in??til", "Prova de paci??ncia", "Rendi????o, Restrito", "Sacrif??cio", "Situa????o Bloqueada e sem Sa??da, que resulta dos seus atos equivocados", "Sofrimento", "Suspens??o", "Ter de fazer sacrif??cios", "Trabalhos cansativos", "Transcend??ncia", "Vitimismo."], },
            { id: 13, nome: "Morte", palavras_chaves: ["Fim de um Ciclo", "A morte", "Agarrar-se a algo inutilmente", "Aposentadoria", "Ceifa", "Conclus??o", "Conclus??o L??gica", "Confrontar-se com a sua pr??pria efemeridade", "Corte", "Deixar que algo chegue ao fim", "Demiss??o", "Desapego Necess??rio", "Despedida", "Despedidas", "Desprender-se", "Deten????o", "Elimina????o", "Encerramento", "Encerramento de atividades", "Enterrar objetivos e projetos profissionais", "Fim de um relacionamento", "Ganhos e Perdas", "Medo da perda", "Medo da vida", "Metamorfose", "Morte de Algo ou Algu??m", "Mudan??a", "Mudan??a de pa??s", "Mudan??a fundamental no relacionamento", "Nova safra, Perdas", "Regenera????o", "Renova????o", "Ren??ncia", "Sentimentos mortos", "Separa????o", "Ter cumprido seu trabalho", "Ter de desprender-se", "T??rmino de uma atividade profissional", "Transfer??ncia", "Transforma????o", "Transforma????o interior, Transi????o."], },
            { id: 14, nome: "Arte", palavras_chaves: ["A Espera", "A mistura certa", "Ambiente favor??vel", "Autocontrole", "Aux??lio Divino", "Bem estar a dois", "Calma", "Compromissos", "Concilia????o bem-sucedida de interesses", "Conviv??ncia com direitos iguais", "Coopera????o agrad??vel e produtiva", "Cura", "Dar melhor de si para superar contradi????es e diferen??as", "Dissolver contradi????es e resist??ncias", "Dominar as tens??es interiores e encontrar a sa??da para um dilema", "Encerrar conflitos", "Encontrar a medida certa", "Encontrar equil??brio entre trabalho e tempo livre", "Equil??brio Mental", "Equil??brio de for??as Estabilidade", "Harmonia", "Medita????o", "Modera????o", "Mover se para a frente", "Negocia????es", "O Tempo", "Paci??ncia", "Paz", "Perfei????o", "Prote????o", "Rela????o t??ntrica", "Rela????es Agrad??veis", "Relaxamento", "Renova????o", "Satisfa????o no trabalho", "Sa??de", "Serenidade", "Sintonia", "Supera????o dos opostos", "Tranquilidade", "V??nculo profundo."], },
            { id: 15, nome: "Diabo", palavras_chaves: ["Agita????o", "Animosidades", "Apego a Bens Mundanos", "Apre??o pelo proibido", "Aproveitar-se de rela????es de depend??ncia", "Atividades proibidas", "Cobi??a", "Coisas escondidas", "Concupisc??ncia", "Confrontar-se com a sua pr??pria sombra", "Confus??o", "Corrup????o", "Depend??ncias", "Desejo de satisfa????o a todo o Custo", "Desencontros", "Desordem Material", "Doen??as Ven??reas", "Envolvimento emocional", "Escravid??o", "Excessos", "Explora????o", "Falsidade", "Fascina????o", "Feiti??o", "For??as inconscientes", "Iluminar a escurid??o", "Impulsividade", "Impulsos", "Intrigas", "Licenciosidade", "Liga????o K??rmica Luta pelo poder", "Luxuria", "Malicia", "Manobras n??o transparentes", "Materialismo", "Mentiras", "Neg??cios ilegais ou obscuros", "??dio", "Ostenta????o", "Pacto de amor", "Paix??o", "Poder tempor??rio ou fr??gil", "Prazer", "Proje????es", "Rapidez", "Realiza????es materiais", "Sede de poder, Sedu????o", "Sensualidade", "Servid??o", "Sexo", "Sombra", "Tend??ncia a corrup????o", "Tenta????o", "Trai????o", "V??cios de toda a ordem."], },
            { id: 16, nome: "Torre", palavras_chaves: ["Acidentes", "Acontecimento Imprevis??vel", "Afli????o", "Brigas", "Compreens??o s??bita", "Conflito", "Crise", "Crise conjugal", "Demiss??o", "Demonstra????o de for??a", "Desgaste Desilus??o", "Desmoronamentos", "Destrui????o", "Dificuldades de maneira geral", "Discuss??es", "Explos??o de sentimentos", "Fal??ncia", "Fragilidade", "Golpe do destino", "Ilumina????o", "Incapacidade", "Inseguran??a", "Liberta????o", "Mudan??a brusca", "Mudan??a radical", "Mudan??a s??bita e M??", "O caos que precede o recome??o", "Perdas", "Perigo", "Possibilidade de demiss??o", "Queda", "Reconhecer suas pr??prias ideias fixas e romper com no????es ultrapassadas", "Reconstru????o", "Reestrutura????o", "Reformas", "Romper com amarras limitantes", "Rompimento de um v??nculo limitante", "Ru??na", "Ruptura", "Separa????o", "Separa????o repentina", "Tempestades purificadoras no relacionamento", "Terremoto", "Transforma????o."], },
            { id: 17, nome: "Estrela", palavras_chaves: ["Abertura", "Amor inspirador", "Boas perspectivas", "Come??o de uma carreira com grandes perspectivas", "Comodismo", "Conex??o", "Confian??a", "Confiar na favorabilidade do momento e olhar com esperan??a para o futuro", "Cria????o", "Encontro que traz muitas esperan??as", "Energia", "Esperan??a", "F??", "Felicidade", "Generosidade", "Harmonia", "Inspira????o", "Inspira????o divina", "Liga????o com boas perspectivas", "Limpeza", "Luz", "Mudan??a de profiss??o", "Oportunidade", "Orienta????o superior, ??tima rela????o no trabalho", "Otimismo", "Planos para um futuro comum", "Prazeres", "Profunda compreens??o e confian??a nas leis do Cosmo", "Projetos muito promissores", "Recome??o", "Reconhecimento", "Renova????o", "Satisfa????o", "Seguir a sua voca????o", "Sensibilidade", "Serenidade", "Situa????o Nova e Positiva", "Sorte", "Sucesso", "Surpresa", "Uni??o feliz."], },
            { id: 18, nome: "Lua", palavras_chaves: ["A noite", "Ansiedade", "Apar??ncia", "Aug??rio", "Cautela", "Circunst??ncias confusas", "Ci??me corrosivo", "Ci??mes", "Compreender o significado orientador do medo", "Confus??o Mental", "Desconhecido", "Desengano", "Desilus??o", "Desilus??es", "Dif??cil comunica????o", "Dificuldades", "Engano", "Fase cr??tica", "For??as ocultas", "Fraude", "Ilus??o", "Imagina????o", "Incertezas", "Inconsciente", "Inseguran??a", "Inseguran??a no emprego", "Intrigas", "Inveja", "Lembran??as amea??adoras", "Magia", "M??s influ??ncias", "M??scaras", "Medo", "Medo de dar um passo importante", "Medo de fracasso", "Medo de provas Medo do limiar que antecede um passo importante", "Mist??rios", "Nervosismo", "Obscuridade", "Oculto, Pesadelos, Pressentimentos sombrios", "Relacionamento n??o confi??vel ou sinistro", "Sa??de M??", "Sonhos de Mentira", "Timidez", "Ultrapassar limiar do medo para alcan??ar terras novas que se encontram por tr??s dele."], },
            { id: 19, nome: "Sol", palavras_chaves: ["Abnega????o Sincera", "Abundancia", "Alegria", "Amor", "Associa????o", "Autoconfian??a", "Auto-realiza????o", "Boa coopera????o", "Brilho", "Celebra????o", "Clareza", "Confian??a", "Crian??a Interior", "Criatividade", "Cuidado", "Cumplicidade", "Desenvolvimento pessoal", "Desfrutar amor", "Desfrutar o lado ensolarado da vida", "Direcionar-se para um ponto culminante", "Empenhar-se em alcan??ar ??pice", "Encontrar alegria de viver no estado de despreocupa????o original", "Energia positiva", "Esclarecimento", "??xito", "Felicidade ", "For??a de persuas??o", "Frivolidade", "Generosidade", "Grandiosidade", "Ilumina????o", "Inspira????o", "Mimar um ao outro generosamente", "O dia, a luz", "??timas perspectivas para planos futuros", "Paix??o", "Positividade", "Promo????es", "Pureza de Sentimentos", "Recome??o", "Reconcilia????o", "Renascimento", "Respeito", "Satisfa????o", "Seguran??a", "Sinceridade", "Sucesso", "Sucesso profissional", "Superar as dificuldades", "Tempos felizes", "Topo", "Um objetivo elevado, com confian??a e firmeza", "Uni??o", "Vigor", "Vitalidade", "Vontade de viver."], },
            { id: 20, nome: "Aeon", palavras_chaves: ["Ju??zo Final", "Mea Culpa", "Abrir-se para novos m??todos de trabalho", "Abrir-se para um novo processo e lev??-lo cuidadosamente adiante", "Aperfei??oamento", "Avalia????o", "Boa Not??cia", "Concretiza????o", "Crescimento", "Cura", "Deixar-se envolver pelo esp??rito de uma Nova Era", "Desenvolvimento espiritual", "Despertar", "Encontrar a si mesmo", "Envolvimento", "Esperan??a", "Espiritualidade", "Experimentar caminhos novos", "Falta de atitude", "Gratifica????o", "Impulsos estimulantes", "Liberta????o", "Mudan??a de emprego ou de cargo", "Mudan??as r??pidas", "Novas rela????es", "Novo amor", "Objetividade", "Passos direcionadores", "Perd??o", "Ponderar", "Promo????o", "Proposta, Reavalia????o", "Recome??o", "Recompensas", "Renascimento", "Renova????o", "Renova????o de relacionamentos existentes", "Reorganiza????o", "Repensar as possibilidades", "Ressurrei????o", "Revis??o", "Transmuta????o", "Trazer um esp??rito novo para a vida profissional", "Uni??o perfeita", "Valoriza????o."], },
            { id: 21, nome: "O Universo", palavras_chaves: ["Alcan??ar uma meta", "Alegria", "Alegria de viver", "Alegria por realizar um trabalho", "Ambi????o", "Amor correspondido", "Amor incondicional e repleto de entusiasmo", "Conclus??o", "Concretiza????o de desejos", "Contemplar o todo, no qual in??cio e fim formam uma unidade", "Dons", "Encontrar a sua voca????o", "Encontrar parceiro certo", "Envolvimento", "Equil??brio", "Estar centrado em si mesmo", "Estar no lugar certo", "??xito Total", "Expans??o", "Felicidade total", "Final de Ciclo", "Fusio e realiza????o sexual", "Holismo", "Idealismo", "Integra????o Liberdade", "Longas viagens", "Materialismo", "Miss??o", "Momento Feliz", "O Paraiso", "Ocupar seu lugar e alegrar- se por sua vida", "Plenitude", "Realiza????o", "Realiza????o plena", "Reconcilia????o", "Retorno ao lar", "Seguran??a", "Ser criativo e ter entusiasmo", "Sorte", "Sucesso", "Uni??o plena", "Viagem Longinqua", "Vit??ria", "Voca????o."], },
            { id: 22, nome: "A Raiz Dos Poderes De Fogo - ??s De Bast??es", palavras_chaves: ["intui????o", "energia", "Um renascimento do esp??rito", "As paix??es s??o despertadas e a criatividade ?? assegurada", "Atividade expansiva e for??a de vontade em prol de seus objetivos", "Um dom de for??a, poder, grande energia sexual e do amor ?? vida", "Novos e positivos come??os e ideias no elemento de fogo", "Criatividade, energia e iniciativa", "Pode simbolizar uma nova empreitada comercial, um novo empreendimento, nova funda????o e poder criativo com muito potencial e ambi????o para progredir e vencer", "Fogo/Luz", "Uma luz universal de uma frequ??ncia mais alta", "A energia de ser", "Um poder equilibrador e seguro", "Uma energia aumentando de pot??ncia", "O deus da luz em harmonia e equilibrio com o poder do drag??o", "Cria????o, inven????o, empreendimento e os poderes que resultam nisso", "princ??pio, come??o, fonte", "nascimento, familia, origem e o sentido de virilidade que est?? por tr??s destes", "O ponto de come??o de empreendimentos", "Poder e Elemento masculino do fogo com suas conex??es com o calor, vigor, aspira????o, contexto", "Ilumina????o e avidez para consumir", "Pureza, claridade e honestidade", "Estado de ilumina????o", "Entendimento", "Ter coragem de mudar e expandir, Conhecer o que lhe d?? energia e vitalidade", "Auto-organiza????o oculta", "O Espirito surgindo de dentro", "O nascimento do desejo, paix??o, entusiasmo, criatividade", "Indica alguma forma de Eu desejo."], },
            { id: 23, nome: "Dom??nio - Dois De Bast??es", palavras_chaves: ["?? o momento em que uma ideia j?? come??a a ser colocada em movimento", "Hockmah representa todas as possibilidades que est??o sendo ponderadas neste momento", "O Projeto j?? come??ou! Agora ?? a hora de explorar todas as possibilidades do Planejamento", "Nos Neg??cios representa um projeto come??ando a engatilhar, mas que ainda ?? necess??rio estabelecer todos os par??metros para que ele seja colocado em movimento o mais r??pido poss??vel.", "No Amor representa um momento onde os pratos est??o sendo tra??ados para uma conviv??ncia ou um projeto conjunto do casal."], },
            { id: 24, nome: "Virtude - Tr??s De Bast??es", palavras_chaves: ["Contabilizar as propostas", "Integridade Espiritual", "Honestidade", "Os tr??s aspectos do eu corpo, mente e esp??rito conjugados", "Colocar os Pensamentos em A????o", "Suas ideias est??o firmes e voc?? agora est?? pronto para test??-las na vida", "O Senhor da Virtude", "O estabelecimento da energia primeva do fogo", "A Vontade foi transmitida ?? M??e, que agora concebe, prepara e d?? ?? luz a sua manifesta????o", "Compar??vel ao come??o da Primavera, seu sentido ?? a harmonia", "Nascimento de Luz", "Permanecer no rumo certo", "Manter as atividades presentes", "O equil??brio total das propostas", "Definir e Esclarecer a Identidade", "Compreender e ver-se com mais clareza", "Capacidade de visualizar as possibilidades antes delas se tornarem reais", "Sintese de ideias por meio da previs??o e do planejamento", "Comunica????o e a alegria da auto-express??o", "Combina????es e realiza????es", "Uma base s??lida enquanto continua a abrir novas ??reas de interesse", "Tomar uma decis??o e ir adiante", "Satisfa????o e desafio ao mesmo tempo", "Embora uma coisa seja alcan??ada, h?? muito mais ainda a fazer", "Inten????o", "Compreens??o de Fogo", "Vontade e energia crescente", "Poder espiritual inerente em nossos corpos", "For??a estabelecida", "Empreendimento", "Esfor??o, Neg??cio, Com??rcio", "Descoberta", "Parcerias Comerciais", "A colabora????o favorecer?? o empreendimento", "Destino", "Compaix??o", "Aceita????o", "Compreens??o e toler??ncia com os outros s??cios", "Expressar-se", "Desenvolvimento ampliado de sua vontade", "Nos Neg??cios representa um projeto que j?? est?? em andamento", "Qualquer mudan??a a ser feita a partir de agora ter?? um custo em energia, tempo ou dinheiro", "No Amor representa um momento em que os planos tra??ados come??am a se desenrolar."], },
            { id: 25, nome: "Conclus??o - Quatro De Bast??es", palavras_chaves: ["Prepare as tarefas antes de entrar em Combate", "Conclus??o Espiritual e Hol??stica", "A capacidade de olhar para seu eu e para as situa????es externas de uma maneira completa", "Alguma coisa est?? sendo conclu??da, e existe o desejo de come??ar algo novo", "Ideias Firmemente Enraizadas", "Ideias foram testadas e floresceram", "Agora ?? hora de comemorar a recompensa que trouxeram", "O Senhor da Conclus??o", "O Senhor de todo Poder ativo manifesto", "A Vontade original do Dois ?? transmitida por meio do Tr??s e agora ?? utilizada em um sistema s??lido", "Ordem, Lei, Governo", "Chama do Espirito, Uma fase de desenvolvimento est?? completa, solidificada e foi bem-sucedida, e um novo come??o em breve ocorrer??", "Agir com um sentido de dire????o", "Fazer algo definido e agir baseado em quem voc?? ??", "Sentido de conclus??o derivada da harmonia de energias opostas", "Celebra????o e agradecimento ap??s trabalho ??rduo", "Otimismo", "Conclus??o de uma empreitada", "Ritos de passagem", "Liberdade", "Revelar-se em uma situa????o", "Celebra????o e recompensa ap??s o trabalho", "uma pausa nas atividades e um momento tranquilo de repouso", "F??rias pr??ximas, ou um tempo de lazer", "Generosidade", "Fogo de Compaix??o", "O potencial de dar que vem de uma total aus??ncia de egoismo", "uma energia estabelecida, sintonizada com o poder universal de Miseric??rdia", "Vida campestre", "ref??gio", "uma esp??cie de lar dom??stico", "Repouso", "Harmonia", "Sorte inesperada", "Sucesso", "A recompensa do esfor??o", "o primeiro estabelecer de uma posi????o segura no projeto", "Realiza????o", "Status quo", "Atingir um est??gio de satisfa????o, aprecia-lo e sentir-se bem com rela????o a sua situa????o",], },
            { id: 26, nome: "Disputa - Cinco De Bast??es", palavras_chaves: ["Batalha", "Conflito", "Frustra????o Espiritual", "Ansiedade sendo sentida em rela????o ?? express??o criativa", "H?? um sentimento de ter a express??o criativa restringida", "Confus??o de Ideias", "A mente tem muitas ideias circulando e elas se tornaram confusas", "O Senhor da rivalidade", "Uma for??a apenas ativa", "A Luta", "Um sentimento de luta e estar imobilizado ao mesmo tempo", "Desistir daquilo que se tornou obsoleto", "Ajustar a Identidade", "Ser desafiado a adaptar e mudar", "Talvez duvidar de si mesmo", "Ideias testadas por meio de conflitos e desentendimentos", "Troca de ideias", "Jogos energ??ticos e competitivos", "Partes do eu com diferentes necessidades e desejos", "Luta e rivalidade sem dor", "Concorr??ncia pela alegria da a????o", "Obst??culos e chatea????es insignificantes", "dificuldades de curta dura????o na comunica????o que, uma vez superadas, podem mudar as coisas para melhor", "A curto prazo, parece como se nada funcionasse bem no trabalho e no lazer", "Retribui????o", "Pentagrama em Chamas", "O poder criativo do reequil??brio", "busca por riquezas", "Sucesso na especula????o financeira", "Impasse", "Um tempo de julgamento e dificuldade", "Opress??o", "Opress??o autocriada por meio da pr??pria ignor??ncia", "Atividade", "Estar ocupado", "Atividades em excesso ou algumas vezes justamente a quantidade certa", "Nos Neg??cios representa um conflito ou disputa", "No Amor representa um momento de disputas e brigas conjugais."], },
            { id: 27, nome: "Vit??ria - Seis De Bast??es", palavras_chaves: ["Vit??ria", "Triunfo", "Revitaliza????o e Expans??o Espiritual", "Uma indica????o de que alguma conquista maior aconteceu em rela????o ?? criatividade, discernimento ou percep????o", "A Vit??ria ?? Assegurada", "??s ideias do indiv??duo ser??o vitoriosas", "Momento de Colocar ideias em pr??tica", "O Senhor da Vit??ria", "J??piter em Le??o", "A Energia do fogo em manifesta????o completamente equilibrada", "O Cinco quebrou as for??as est??ticas do Quatro e um casamento aconteceu entre eles, resultando em estabiliza????o, recep????o e reflex??o de auto-apoio", "Gl??ria", "O fruto da batalha", "Um estado de harmonia e beleza", "Sentir a maturidade do Entendimento", "A realiza????o de que bem no fundo de voc?? h?? uma chama"], },
            { id: 28, nome: "Valor - Sete De Bast??es", palavras_chaves: ["interna harmoniosa que n??o pode ser sufocada", "Uma Personalidade Previs??vel", "Estar seguro de sua identidade e possuir um sentido de objetivo ou dire????o", "O dom da vit??ria que vem do trabalho com os outros para atingir um objetivo", "Autoconfian??a em sua capacidade de lideran??a", "Estabelecer uma dire????o", "Uma carta alegre, expansiva e afetuosa", "Um ??cone do poder criativo pessoal", "Autoconfian??a", "Equil??brio", "Lideran??a", "Gl??ria", "Unifica????o com o Fogo", "O otimismo que produz o sucesso que deseja e espera", "O Fogo acredita na vida que o naipe de paus d?? ??queles a seu redor. Uma profecia que se cumpre", "Fa??anha", "Realiza????o de Esperan??as e Desejos", "Grande satisfa????o na carreira", "Adula????o recebida de outros e reconhecimento merecido atribu??do pelo sucesso", "Promo????o ap??s bom trabalho", "Recompensa pelos esfor??os investidos em uma boa causa", "Iluminar a Beleza e o Fogo Perfeito", "A vit??ria triunfa", "Grande novidades, tais como poderiam ser levadas com grande cerim??nia pelo mensageiro do Rei", "Sensa????o de Vit??ria", "Expectativa coroada com seu pr??prio desejo", "Barreiras superadas", "A coroa da esperan??a", "Confian??a em si mesmo", "Confiar nos pr??prios instintos e intui????es", "Nos Neg??cios representa uma vit??ria", "No Amor representa uma conquista."], },
            { id: 29, nome: "Rapidez - Oito De Bast??es", palavras_chaves: ["Hora de defender o seu ponto de vista", "Prepare-se para a batalha", "Preste aten????o aos inimigos pr??ximos", "Coragem Espiritual", "Bravura", "Surgimento de coragem individual, a vontade de assumir riscos em prol do crescimento espiritual", "Necessidade de ter mais confian??a em si mesmo e em suas ideias", "O est??mulo da energia espiritual, todos desejando uma sa??da criativa", "O Senhor do Valor", "Marte em Le??o", "Desenvolver for??as e uma sensa????o de autoconfian??a que continuar?? a crescer se voc?? tiver a coragem de manter suas convic????es", "Experimentar Pap??is Diferentes", "Explorar novos aspectos de si mesmo", "A necessidade de se restar de provar-se contra os concorrentes", "Enfrentar uma situa????o e manter a postura", "Firmeza frente ?? oposi????o", "Responsabilidade", "Estar completamente s?? e confiar em si mesmo para saber como lidar com as mais dif??ceis situa????es", "Conflito emocionante", "Determina????o e valor profundos", "Uma mudan??a bem-sucedida de projeto, Capacidade", "Fogo Vitorioso e Triunfo da Ilumina????o", "Fus??o da inten????o e dos sentimentos", "Valor", "No plano intelectual, significa discuss??o e luta verbal", "Nos neg??cios, negocia????es, guerra comercial, escambo, concorr??ncia", "Uma carta de sucesso como combatente por cima onde seus inimigos n??o conseguem atingi-lo", "Desafio", "Assegurar a vit??ria contra os desafios", "A coragem para enfrentar e estudar seus medos", "Onde h?? medo, h?? coragem", "Os resultados dos esfor??os feitos ainda n??o s??o vis??veis", "Uma vit??ria certa ontem, hoje j?? pode n??o mais estar t??o certa assim", "Cuidado com traidores", "Nos Neg??cios representa um momento de se preocupar com pessoas pr??ximas ou dentro", "No Amor representa o momento de expor tudo aquilo que voc?? est?? pensando de verdade"], },
            { id: 30, nome: "For??a - Nove De Bast??es", palavras_chaves: ["Aguente mais um pouco", "N??o ?? o momento de relaxar", "Poder Espiritual", "Pot??ncia", "For??a", "For??a interna", "For??a em comunica????es, percep????o, intui????o e vis??o", "H?? consci??ncia e confian??a em suas pr??prias for??as internas e externas", "Defender suas Ideias", "Acreditar em suas posi????es e ter a for??a de suas convic????es mas ??s vezes ter que defend??-las", "O Senhor da For??a, Lua em Sagit??rio", "Energia que retorna ao equilibrio", "Mudan??a ?? estabilidade", "Chegar a uma experi??ncia de pico", "Atingir o ponto certo, a corrente certa, sintonizado com a frequ??ncia certa", "Agir de acordo com a Verdadeira Vontade", "N??o desistir ainda", "Ver as coisas claras e acuradamente, o que leva a cria????es s??lidas com durabilidade", "O Eu Integrado", "A oportunidade para enfrentar seus maiores medos com o dom de for??a de vontade", "Sabedoria e disciplina oriundas da experi??ncia, Independ??ncia", "Dedica????o", "Conhecimento de reten????o de energia que leva a seu armazenamento s??bio e uso competente", "Poder fisico e alerta mental ao lidar com problemas", "For??a e determina????o", "Mesmo quando voc?? sente como se tivesse chegado ao fim de suas for??as, h?? reserva de for??as", "Estar numa posi????o forte que sugere a vit??ria por meio de coragem e resist??ncia", "Tenha Resili??ncia", "Fogo Resistente ou Fundamento Imut??vel", "A resist??ncia da vontade para a qual apelamos em todos os infortunios", "For??a na Oposi????o", "A vontade criando imagens na luz interna", "Fus??o de vontade e imagina????o", "Se atacada, a pessoa resistir?? com coragem", "Defesa", "Uma barreira que mant??m as coisas dentro ou fora, dependendo de qualquer dada situa????o", "Autodetermina????o indom??vel", "A vis??o, aspira????o e for??a de car??ter para expressar a verdade", "Obter a confian??a e conhecimento das pr??prias percep????es e estar confort??vel com elas", "Resista", "No Amor e nos neg??cios", "momento de aguentar mais um pouco e dar mais uma chance ao seu projeto ou relacionamento."], },
            { id: 31, nome: "Opress??o - Dez De Bast??es", palavras_chaves: ["Sobrecarga", "Muitos assuntos materiais para resolver, em detrimento dos seus projetos espirituais", "Restri????o Espiritual", "Repress??o", "Auto-opress??o", "Conten????o de comunica????es por medo da forma como seriam recebidas", "Ideias em demasia", "A mente est?? t??o ocupada pensando sobre muitas coisas que se tornou seu pior inimigo", "O caminhante n??o pode enxergar a floresta por causa das ??rvores", "O Senhor da Opress??o", "Saturno em Sagit??rio, A For??a destacada de suas fontes espirituais", "Fogo em seu aspecto mais destrutivo, Uma for??a cega que sugere opress??o e repress??o", "?? o que ocorre quando se usa a for??a, for??a, e apenas a for??a todo o tempo", "A Jaula", "Sentir-se preso numa armadilha ou oprimido", "Ou uma tremenda oportunidade para se tornar um co- criador com a for??a primordial em um plano fisico", "Criatividade bloqueada por responsabilidades em excesso", "Fardos", "Uma libera????o de todas as energias que se constru??ram com o tempo e que de vez em quando tomam conta da personalidade", "Fardo e opress??o pela vida, sobretudo pela responsabilidade", "O fardo pode ser fisico, mental ou emocional, e ??, com frequ??ncia, auto- imposto, mas alguma coisa pode ser feita para aliviar o peso agora", "Responsabilidade", "Poder Manifesto", "A????o e Rea????o", "O aglomerado de uma vontade manifesta", "Se a inten????o for alinhada com a vontade da Luz, uma for??a potente de equilibrio e controle", "Muitas a????es ao mesmo tempo", "Muitas coisas para se fazer, Ambi????o", "Crescimento", "Crescimento acelerado por meio do esfor??o consciente", "Aspirar a patamares mais elevados", "Testar os limites e se expandir", "Atingir a consci??ncia mais elevada por meio da manifesta????o de seus sonhos e paix??es", "Energia ao Extremo", "Atingir a gia plena do fogo-paix??o, intui????o, espirito e alegria de viver ou atingir o extremo oposto do fogo", "a extin????o", "Muito Elemento Terra sobre o Elemento Fogo."], },
            { id: 32, nome: "Cavaleiro De Bast??es", palavras_chaves: ["O Inventor", "O Professor Pardal", "O Evolucion??rio Espiritual", "Hora de Projetar Ideias", "Evolu????o e mudan??as ocorrem num n??vel central profundo", "impress??es antigas s??o abandonadas para que se tenha uma nova percep????o e um nascimento espiritual mais extensos", "Pessoa de opini??es equilibradas, derivadas de impress??es e proje????es do futuro bem elaboradas", "A parte fogosa do Fogo", "As qualidades morais de atividade, generosidade, ferocidade, impetuosidade, impulsividade e rapidez em a????es imprevis??veis", "O Esp??rito da Chama", "Momento de experimentar um sentimento de convic????o", "Muito movimento, energia e poder de lideran??a", "Ir rapidamente em dire????o a uma nova maneira de saber, um novo ponto de vista ou uma perspectiva nova sobre as quest??es", "Momento de estabelecer o EU", "A capacidade de ser voc?? mesmo", "Orientado para o sucesso, criativo e auto-expressivo", "Poder masculino positivo", "Uma personalidade poderosa capaz de atingir metas de longo prazo e lidar com situa????es extremamente complexas", "Uma pessoa decidida capaz de dominar os outros pela sua for??a de vontade", "A energia dos bast??es controlada e transformada em projetos ??teis ou carreiras de longa dura????o", "O mestre da rapidez de racioc??nio e do charme", "Caloroso e generoso com um bom senso de humor e enorme prazer em se divertir", "Abund??ncia de vis??o e capacidade de previs??o", "Um homem maduro em quem o potencial dos seres interior e exterior est?? bem sintonizado", "Honestidade, Poderoso, criativo, voluntarioso e de energia inesgot??vel", "Pode ser uma pessoa muito espiritual e poderosa, mas ?? necess??rio ter cautela com esta interpreta????o", "Valraven. O deus que deu aos homens os segredos da magia e, de acordo com os dinamarqueses, tornou-se rei de Hel e senhor do submundo", "Uma pessoa poderosa de natureza fogosa, cheio de energia, ativo, dif??cil de controlar, atraente, mas ??s vezes perigoso", "Intui????o Extrovertida com Intelig??ncia (ENTP)", "O Realizador, Capaz de delegar responsabilidades a terceiros para alcan??ar sua pr??pria meta", "Um l??der natural porque percebe os pontos de vista dos outros e tem a capacidade de demonstrar autoconfian??a ao agir"], },
            { id: 33, nome: "Rainha De Bast??es", palavras_chaves: ["O C??rebro Mestre", "A Rainha conselheira", "O Samurai Zen", "O Auto-Explorador Espiritual/ Descobridor", "Algu??m em meio a um processo de autodescoberta com o desejo profundo de se conhecer e compreender melhor", "Adapt??vel, energia persistente, autoridade tranquila, bondosa e generosa, mas impaciente com oposi????es", "Ela tem enorme capacidade para a amizade e para o amor, mas sempre por iniciativa pr??pria", "Condutor, Uma sensa????o de ser um lider procurado sobretudo nas quest??es do esp??rito", "Buscar lideran??a tranquila por??m consistente que age de acordo com as leis da natureza", "Uma Identidade Madura", "Um alto n??vel de integridade pessoal, maturidade e respeito pr??prio", "Um sentimento de autosufici??ncia e confian??a", "Amor pela Felicidade", "Momento de reconhecer seu poder pessoal", "Utiliza as pr??prias energias criativas e as inspira nos outros", "O poder pessoal feminino em a????o", "Uma autoconfian??a calorosa e uma for??a de vontade forte", "Uma personalidade carism??tica, apaixonada e em geral, feliz por estar viva", "Uma aprecia????o fogosa da vida", "Calorosa, apaixonada, honesta e sincera, n??o v?? sentido em maldades e mentiras", "Oferece conselhos, apoio emocional e ama a vida e as pessoas", "Um individuo cheio de amor pela vida e consegue cuidar bem da casa e da fam??lia e assim mesmo encontrar tempo e energia para dedicar aos pr??prios interesses", "Pessoa habilidosa", "Uma mulher madura e poderosa, muitas vezes de grande atra????o sexual", "Esta energia pode ser direcionada para trabalhos criativos tais como a arte ou a m??sica, uma carreira, ou a dedica????o duradoura para dar exist??ncia a algo de valor", "Se a carta ao seu lado significar um homem, ela estar?? bem disposta em rela????o a ele", "se for mulher, ela estar?? interessada no consulente", "Tamb??m amor pelo dinheiro, ou um certo sucesso nos neg??cios", "Uma boa colheita", "Hel. Deusa e governante da regenera????o no submundo, para onde os mortos iam para serem purificados, purgados das mem??rias de suas vidas passadas, e limpos para o renascimento espiritual", "Caracter??sticas fogosas de entusiasmo, inspira????o, benevol??ncia, paix??es quentes e a intelig??ncia agu??ada", "Senhora da Coragem e da Pureza", "Sensibilidade e esp??ritos fogosos, precisamente afinados para sentir e detectar", "Intui????o Introvertida com Pensamento (INTJ)", "Vidente", "Intensamente individualista e capaz de inspirar individualismo e confian??a nos outros", "Tem o dom da percep????o interior agu??ada no sentido mais profundo do mundo."], },
            { id: 34, nome: "Pr??ncipe De Bast??es", palavras_chaves: ["O Defensor de Causas", "Criatividade Espiritual", "Uma paix??o espiritual profunda para liberar a criatividade e express??-la no mundo", "Hora de colocar as Ideias em Pr??tica", "uma pessoa que est?? pondo em pr??tica suas ideias", "Esteja preparada para lutar pela sobreviv??ncia de suas ideias", "O Chefe dos Escoteiros", "Ele ?? forte e veloz, intensamente nobre e generoso, rom??ntico, e tem enorme capacidade para o trabalho, que ele exercita pelo trabalho em si sem sede de resultados", "Guerreiro do Sol", "Aspira????o do esp??rito interno-como uma chama procurando os c??us", "Pessoa que possui a percep????o de grandes qualidades de for??a, velocidade, intelig??ncia e agilidade", "Momento de se concentrar no Eu", "Concentrar atentamente em apresentar uma certa imagem ao mundo ou em dar exist??ncia ?? energia e descobrir-se, talvez chegando ao ponto do egocentrismo", "Colocar energia no autocrescimento, em perspectivas futuras e novos direcionamentos", "Entusiasmo inspirado", "Poder direcionado a servi??o e vida", "Uma maneira alegre, en??rgica de estar presente no mundo", "Anima????o", "A personalidade ?? animada e delicia-se em divertir, agradar e atrair os outros", "A????o, movimento pelo movimento", "aventura e viagem", "Uma pessoa com ideias espl??ndidas e um bom gosto pela aventura", "Um amigo ou amante caloroso e generoso, embora seja imprevis??vel e precipitado no julgamento, Se ele representar um acontecimento, em geral refere-se a uma mudan??a de resid??ncia ou uma viagem longa, at?? mesmo imigra????o", "Uma pessoa que da adolesc??ncia at?? seus vinte anos tem uma vitalidade sem fim, atividade incessante, e capacidade", "Uma pessoa que possui percep????o intuitiva e espont??nea", "Um facilitador h??bil que ?? capaz de enxergar o cora????o de qualquer pessoa ou uma situa????o", "Sugere um clima de precipita????o, ou coisas ligadas a isso", "Dagon", "Um Deus transmutador de formas conhecido no Cristianismo como um dem??nio por sua oposi????o ao culto de Yahweh", "Tudo que ?? inesperado, surpreendente, imprevis??vel, ou pouco covencional. Muitas vezes parece irracional, mas tem uma profunda consist??ncia subjacente", "S??bio, Vidente", "A luz de infinita radiante do esp??rito queima at?? chegar- se a ver as verdades eternas", "A luz do esp??rito", "Intui????o Extrovertida com Sentimento (ENFP)", "O Esp??rito Despreocupado", "Inspira????es s??bitas de m??ltiplas possibilidades que frequentemente resultam em uma sucess??o de novos projetos e ideias, sem necessariamente lev??-los a cabo."] },
            { id: 35, nome: "Princesa De Bast??es", palavras_chaves: ["Um Disc??pulo", "Um Aprendiz", "Um Iniciado", "A pessoa que busca o conhecimento", "AutoLibera????o Espiritual", "Um grande medo est?? sendo enfrentado e superado o que resulta em uma nova energia vital e uma nova autoconsci??ncia", "Contemplar Pensamentos Novos", "Esta pessoa tem uma ideia nova na qual ela se concentra", "Terra de Fogo", "Rege os c??us por um quadrante da por????o em torno do P??lo Norte", "Ela ?? o combust??vel do fogo, a irresist??vel atra????o qu??mica da subst??ncia combust??vel", "Cria sua pr??pria beleza por seu vigor e for??a essenciais, sua for??a de car??ter imp??e a impress??o de beleza aos olhos de quem v??", "A Centelha/Esp??rito Livre", "Aceita????o de todas as mudan??as e de todos os movimentos com uma perspectiva equilibrada", "Mover com a vontade do universo, favorecida por todas as for??as universais", "Ser entusiasmada, autoconfiante e eloquente", "Arriscar-se na Identidade", "Arriscar-se a apresentar uma parte de si que estava oculta at?? ent??o, comprometer-se de novo a dar o melhor de si", "Uma pessoa aberta a novas modalidades de autocrescimento e desenvolvimento", "Uma pessoa desinibida, franca e direta no falar", "A parte jovem-fogosa da personalidade que se manifesta atrav??s da dan??a e do movimento, mudan??a alegre e crescimento", "O in??cio de projetos e, em particular, um an??ncio ao n??s mesmos, que estamos prontos a iniciar um mundo, e a projeto ou uma nova fase de vida", "Um mensageiro, mensagem, ou informa????o", "Um amigo ou amante fiel", "Uma personalidade r??pida, intuitiva, entusi??stica com ousadia, energia e otimismo", "Uma pessoa plena de vida nova e vitalidade", "No caso de ser um evento, pode ser algu??m que traga boas novas, sauda????es alegres, um desejo de crescimento e conhecimento aliado ?? oportunidade de consegui-los", "Uma crian??a ou um jovem cheio de potencial, esbanjando energia", "Uma pessoa confiante e desejoso de trabalhar muito duro de modo eficiente e despretensioso", "Um homem jovem, fiel, um amante, um emiss??rio, um carteiro", "Ao lado de um homem, ele prestar?? um depoimento favor??vel com rela????o a ele", "Pode significar intelig??ncia de familia", "Atargatis, a Deusa de rabo de peixe, que faz renascer os homens ao engoli-los", "Um poder irresist??vel, misteriosamente sombrio, com grande for??a que pode ser mal utilizado ou compreendido", "Uma crian??a", "O Explorador", "Senhor da Confian??a e do Crescimento", "O impulso do esp??rito para conhecer-se", "Intui????o Introvertida com Sentimento (INFJ)", "O esp??rito livre", "Impaciente como desejo de ser livre, Traz mensagens, telefonemas, not??cias, informa????o, um novo conhecimento."] },
            { id: 36, nome: "A Raiz Dos Poderes Da ??gua - ??s De Copas", palavras_chaves: ["Momento ideal para se amar", "Equil??brio Emocional", "Ampliar as emo????es", "Refletir e expressar com precis??o o que passa dentro de sua natureza", "O dom do equil??brio emocional est?? dispon??vel para seu uso e aux??lio durante o pr??ximo ano", "Nova Atitude Trazendo Recompensas", "Aplicar uma nova atitude ?? vida que traz recompensas quando em sintonia com as leis do universo", "A Raiz dos Poderes da ??gua", "O elemento da ??gua mais secreta e original", "O complemento feminino do em sua forma As de Espadas", "Como a virtude dessa carta ?? conceber e produzir a segunda forma de sua Natureza, o l??quido ?? mostrado como ??gua, transformando-se em Vinho ou Sangue conforme a necessidade", "O Canal Aberto", "Sentir uma explos??o de sentimentos, empatias, solidariedade ou entusiasmo", "Uma ??poca para ligar, estar aberto e se tornar vulner??vel para receber", "Uma Nova Emo????o ou Percep????o", "Sentir alguma coisa nova, pode ser alguma coisa n??o sentida antes, tal como uma nova emo????o, um novo relacionamento, ou uma nova consci??ncia sobre um relacionamento existente", "Consci??ncia de amor, Abertura do cora????o", "O come??o do amor, prazer", "A abertura dos canais ps??quico, espiritual ou inconsciente", "Receptividade Odom do amor", "Um mergulho em seus sentimentos mais profundos", "Um abandono a emo????es e beleza", "um influxo de prazer, inspira????o, imagina????o", "O amor fundamentando a vida", "Um tempo de felicidade", "o Dom da alegria", "Reconhecer o que a vida nos oferece", "Amor e, em ??ltima hip??tese, vida, n??o podem ser medidos, mas apenas aceitos", "O aspecto mais puro da energia emocional, O come??o de um novo relacionamento, a renova????o das emo????es fortes, amor, casamento, maternidade e grande alegria ou recompensa obtida de uma uni??o amorosa", "Agua/Amor. Revela Amor, em um contexto pessoal ou em um sentimento espiritual profundo, dependendo de outras cartas presentes", "Associada ?? perfei????o e ?? vis??o espiritual ideal, ao Reino Aben??oado, ao nascimento e ?? morte f??sica, e ?? forma de passagem ou port??o entre os mundos", "O Mist??rio da reden????o e regenera????o espiritual", "A Fertilidade humana e situa????es envolvendo intera????o fecunda", "Casa do verdadeiro cora????o, alegria, contentamento, lar, alimento, abund??ncia, fertilidade", "Mesa Sagrada, felicidade, Amor. Nascimento, come??o, fecundidade, prazer, felicidade, lar, alimento, satisfa????o e cuidado", "Um aumento de outras influ??ncias boas, ou um poder mitigativo sobre as ruins", "??xtase", "Uma intensidade de sentimento que vem com um amor pela vida como um todo, aceitando e reverenciado tudo", "A coragem de viver completamente toda a gama de suas emo????es, sentir tudo, expressar todos os sentimentos", "Emo????es ou amor surgindo de dentro, O come??o de novas emo????es ou sentimentos", "Indica algum modo de Eu sinto"], },
            { id: 37, nome: "Amor - Dois De Copas", palavras_chaves: ["Flerte", "Amor", "Relacionamento Amoroso Profundo", "Um amor profundo, muito significativo na vida de algu??m, um relacionamento com outra pessoa ou em dire????o a alguma forma de criatividade", "Comunica????o com o outro", "H?? um desejo de sentir plenamente e estar aberto a esse amor nesse momento", "Comunica????o amorosa", "O Senhor do Amor", "V??nus em C??ncer", "Os dois sempre representam a Palavra e a Vontade", "?? a primeira manifesta????o do amor ao outro, como tal, esta carta se refere ao Amor que recupera a unidade da divis??o pela aniquila????o m??tua", "O Amor subordinado ?? Vontade", "A harmonia entre masculino e feminino interpretada no sentido mais amplo", "Cord??o Sagrado", "A fus??o alegre dos opostos, Um grande sentimento de liga????o e contentamento", "Receber apenas da forma como voc?? ?? recebido", "Validar um Sentimento", "Escolher um sentimento ou relacionamento, ou validar uma experi??ncia ps??quica ou intuitiva", "Compaix??o e resposta carinhosa", "Uma uni??o amorosa e curativa de opostos", "O consciente e o inconsciente trabalhando juntos para que os aparentes opostos sejam reconciliados", "O empurr??o da for??a de atra????o sobre o n??vel inconsciente das emo????es", "A uni??o resultante da fus??o de desejos inconscientes com amor consciente do cora????o", "A garantia da amizade, o come??o de um caso de amor", "A liga????o da a????o e do esp??rito", "O come??o de um romance ou amizade bem equilibrada", "Ideias geradas entre dois parceiros com harmonia e coopera????o", "Um compromisso de romance ou amizade", "Reconcilia????o de opostos ou resolu????o de discuss??es e disputas", "Liberdade", "A Sabedoria do Amor, Um princ??pio tranquilo", "Uma sensa????o de libera????o, de liberdade", "O amor liberta a alma para suas origens espirituais", "Amor, paix??o, amizade, afinidade, uni??o, conc??rdia, solidariedade, o inter-relacionamento dos sexos, e como uma sugest??o separada de todos os oficios da divindade aquele desejo que n??o est?? na Natureza, mas pelo qual a Natureza ?? santificada", "Arcano favor??vel nas coisas do prazer e nos neg??cios, assim como no amor, tamb??m na sa??de e na honra", "Romance", "Confian??a, solidariedade, realiza????o de desejos", "Votos, promessas, compromissos, casamentos e amizade ??ntima", "Todas as permutas de parceria ativa", "Equil??brio", "Estabilidade emocional e auto-sufici??ncia", "O fluxo equilibrado de vitalidade emocional", "Paz interior", "A fus??o de amante e amado", "A S??ntese entre dois p??los."], },
            { id: 38, nome: "Abund??ncia - Tr??s De Copas", palavras_chaves: ["O Flerte se converte em Casamento", "Festividade", "Colheita", "Abund??ncia Emocional", "Um jorro de amor e sentimentos positivos para tr??s pessoas muito significativas em sua vida e seu desejo de comunicar isso a elas", "Felicidade", "Uma vida feliz e plena", "O Senhor da Abund??ncia", "Merc??rio em C??ncer, Aqui est?? a satisfa????o da Vontade de Amar em alegria abundante", "A ideia de amor chega ?? frui????o", "Esta carta exige grande sutileza de interpreta????o, e a li????o parece ser que as coisas boas da vida, embora devam ser desfrutadas, tamb??m devem ser objeto de desconfian??a", "Torrentes de Amor, Um estado sublime de prazer harmonioso, um per??odo de gra??a. Uma sensa????o de cria????o maravilhosa e sentir-se muito amado por tudo aquilo que ?? Esclarecimento Emocional ou Intuitivo", "Sentimentos eintui????o tornam-se mais claros", "Os dons de amizade e hospitalidade", "Apoio e divertimento com os outros", "Celebra????o e alegria", "As Musas Inspiradoras", "Ideais compartilhados", "Uma express??o de felicidade e divertimento compartilhados", "Compartilhar prazer juntos", "Divertir-se com outros", "Deixar o espirito tomar conta de seus sentimentos e de suas emo????es", "Alegria, celebra????o e compartilhamento da maravilha da vida", "Um compartilhamento da experi??ncia", "Uma celebra????o ou ocasi??o alegre", "Natividade", "Crescimento emocional e um sentimento de felicidade e satisfa????o", "Tamb??m pode indicar a conclus??o de um assunto feliz ou a cura de feridas", "Afei????o", "Compreens??o da Agua", "A afei????o sem fim, equilibrada e constante que ?? mais poderosa do que a emo????o pessoal ou 9 amor rom??ntico que busca gratifica????o", "Aquela afei????o profunda que ?? um estado incondicional de amor doado", "A conclus??o plena de qualquer assunto, com perfei????o e alegria", "Final feliz, vit??ria, satisfa????o, conforto, cura", "A imagem cl??ssica das tr??s Gra??as dan??ando juntas", "O epitome de todas as formas de amor, baseado no amor de m??e, a raiz deles todos, exemplificado pela Deusa", "Destino gentilmente elegante como d??divas do amor, Amor", "Receber e dar amor, Seguir o cora????o", "A ess??ncia da vida unifica que todas as coisas e leva tudo para frente, Reverenciar tudo que ?? vivo, incondicionalmente", "Vivenciar Sentimentos", "A Dan??a do Amor, Aumento da intensidade de suas emo????es, sentimentos, necessidades ou de um relacionamento", "As vezes chamado Gra??a e Amor porque pode ser um estado tempor??rio de ser, em vez de sentir."], },
            { id: 39, nome: "Lux??ria - Quatro De Copas", palavras_chaves: ["Mais do Mesmo", "Cuidado com os excessos", "Apatia", "Lux??ria Emocional", "A capacidade de poder fazer as pessoas se sentirem emocionalmente seguras, felizes, satisfeitas e confort??veis", "Um momento em que as coisas est??o funcionando com tranquilidade e voc?? tem consci??ncia da raz??o por que est?? se sentindo bem", "Ser mais Consciente do que est?? ocorrendo", "Ver sua vida e sentir que voc?? possui tudo que precisa", "N??o estar aberto a outras sugest??es", "O Senhor da Luxuria", "Lua em Cancer", "A energia, embora ordenada, equilibrada e estabilizada, perdeu a pureza original da concep????o", "Implica uma certa fraqueza, um abandono ao desejo", "A enchente", "Por n??o ser forte o suficiente para controlar-se adequadamente, a solidifica????o do quatro ?? um tanto inst??vel, Superar um per??odo de contentamento", "As coisas que j?? foram boas agora parecem azedas e envelhecidas", "A borda de uma conclus??o, e uma nova vis??o de amor come??ando a se formular", "Agir sobre o que Voc?? sente", "Agir em suas percep????es ps??quicas, intuitivas ou emocionais", "Didiva e desafio de um per??odo est??ril", "Momento de rever suas prioridades", "A capacidade de deixar as coisas tomarem seu rumo, confiar no ciclo de mudan??a", "Distanciamento", "Um momento para esclarecer, refinar as coisas para chegar ?? Verdade simples", "Sentimentos s??o feridos", "As coisas n??o parecem certas", "Um momento de incerteza", "Apatia causada por um ambiente insipido e pouco estimulante, Oportunidades desprezadas", "Nada que valha a pena acordar, fazer", "Descontentamento Divino", "Preso entre os mundos da emo????o e da a????o", "Descontentamento no qual as emo????es est??o voltadas para dentro", "Promessa de expans??o, aumento material e procria????o", "O fluxo das energias sexuais nos humanos nos quais o foco pessoal desaparece e os poderes piedosos s??o estabelecidos para al??m de nossa experi??ncia comum de tais energias", "Descontentamento com o ambiente", "Cansa??o, repugn??ncia, aversio, vexa????o imagin??ria", "Declinio", "Etapa em qualquer relacionamento conhecido como o fim da lua-de-mel com ind??cios de novas percep????es por vir. A quarta ta??a quando voc?? j?? est?? satisfeito, Raiva Frustra????o oriunda do medo, inseguran??a ou n??o realiza????o de objetivos", "Contentamento", "Mimo", "Conforto, divertimento e lazer"], },
            { id: 40, nome: "Desapontamento - Cinco De Copas", palavras_chaves: ["Lidar com a Perda", "Derrota Emocional", "Um mal perdedor, Decep????o Emocional", "Uma indica????o de que h?? alguma decep????o sentida no momento, ou que foi sentida no passado e que ainda tem um peso e est?? sendo sentida profundamente", "Chorar por acontecimentos passados", "Sofrer pelo que se perdeu, O Senhor da Decep????o", "Marte em Escorpi??o", "A ideia de perturba????o, quando menos se espera, em um momento tranquilo", "Frustra????o do prazer previsto", "Enquanto o Fogo se deleita em energia superabundante, a Agua do Prazer ?? naturalmente pl??cida, portanto, qualquer perturba????o da paz pode apenas ser considerada como azar", "Transbordamento", "Uma sensa????o de que os relacionamentos s??o transit??rios, inconstantes e dolorosos", "Confiar demais nos outros por amor", "Descobrir a pr??pria fonte de amor interior", "Ajustes Emocionais ou Intuitivos", "Sentimentos em fluxo", "Incerteza emocional ou intuitiva ou adapta????o", "Perturbar a complac??ncia", "Entender a perda e decep????o", "Progresso impedido", "Perda de harmonia mas o amor ainda permanece, Aprender com os erros e com a experi??ncia", "Decep????o no amor", "Estar ?? beira do desespero", "Sacrificios", "Arrependimento, mas tamb??m aceita????o", "Remorso, perda e separa????o", "Possivel arrependimento por a????es no passado", "Uma situa????o em que alguma coisa foi perdida, mas as vezes permanece e h?? novas alternativas a serem exploradas dentro da perda", "Pesar, Refluxo ou mar?? baixa", "Uma carta de perda, mas resta algo, Heran??a, patrim??nio, transmiss??o, mas que n??o corresponde ??s expectativas", "Arrependimento, Uma sensa????o de deixar os velhos la??os e procurar novos interesses, necessidades e sentidos", "Algo chega ao fim com uma sensa????o de arrependimento, mas h?? a possibilidade de novos interesses", "Decep????o", "Tristeza como resultado de liga????o emocional a uma expectativa que n??o ?? satisfeita", "Emo????es em movimento."], },
            { id: 41, nome: "Prazer - Seis De Copas", palavras_chaves: ["Nostalgia", "Aprendizado emocional", "Prazer Emocional", "A experi??ncia de receber prazer e dar prazer aos outros", "Sua natureza emocional est?? sendo renovada e regenerada, e voc?? est?? passando por um processo de cura, que est?? dando lugar a um sentimento de divertimento", "Mem??rias Felizes do Passado", "Reviver mem??rias felizes", "O Senhor do Prazer", "Sol em Escorpi??o", "Uma das melhores cartas do baralho, representa bem-estar, harmonia de for??as naturais sem esfor??o ou tens??o, ??cio, satisfa????o", "O Prazer de brincar", "A ideia da carta ?? alheia ?? gratifica????o dos desejos naturais ou artificiais, pois ?? o prazer entendido em seu sentido mais elevado", "F??", "Uma entrega ?? f??", "Inoc??ncia e obter grande prazer de suas qualidades infantis", "Sentir o mando como se o visse pela primeira vez", "Ser cuidado de todas as maneiras", "Um Ciclo Emocional Regular", "Um nivel de entendimento de sentimentos, relacionamentos ou processos ps??quicos que ?? confi??vel ou previs??vel", "A troca de amor e prazer entre duas pessoas", "Mem??ria ou renova????o de algo do passado", "D??divas", "Amizade", "Extase, Bons sentimentos", "Um impulso org??stico de sentimentos, uma onda de ??xtase", "Mesmo se seus sentimentos s??o tristes, a express??o ativa deles fornece um alivio que o faz se sentir bem", "Mem??rias doces", "Dar e receber, Reconsiderando alguma coisa com raizes no passado", "Esfor??os passados que podem trazer recompensas presentes e futuras", "Pode trazer um encontro com um velho amigo, conhecido ou amante, Viver muito no passado ou est?? sendo nost??lgico demais", "Divertimento", "O canto da Harmonia e o Mar de Beleza", "Fluir, dar, receber, Uma alegria sem egoismo muitas vezes encontrada como o ??xtase de ilumina????o espiritual", "A alegria da uni??o que ver com o ??xtase sexual e mistico", "A alegria de criar, de almas em contato", "Mem??rias prazerosas", "Olhar para o passado e para as mem??rias na infancia, Felicidade e divertimento vindos do passado, de coisas que desapareceram", "Explorar novas rela????es, novos conhecimentos, novos ambientes", "Inf??ncia", "Um retorno ps??quico a antigas experi??ncias de amor e mem??rias desvanecidas do passado profundo", "Harmonia", "Sentimento de bem-estar", "Prazer", "Paz", "Sutileza de sentimentos e compreens??o de condi????es circundantes derivadas do fluxo natural da energia ps??quica."], },
            { id: 42, nome: "Deboche (Corrup????o) - Sete De Copas", palavras_chaves: ["Promessas distantes", "Pedir favores para a M??fia", "Extenua????o emocional", "Estado de depress??o e tentativas de aliviar a dor ao exceder-se por meio de h??bitos ou comportamentos que minam as energias", "A Imagina????o em Funcionamento", "A imagina????o que d?? asas a si mesma", "A necessidade de tornar-se mais realista e aceitar a vida como ela ??", "O Senhor da Devassid??o", "Venus em Escorpi??o", "A fraqueza certa resultante da falta de equilibrio e da perda de contato direto com Kether", "o Altissimo", "Afundar-se no pantano de falsos praretes, representa quase a imagem mal??vola e adversa do Seis", "Preenchimento dos espa??os vazios da alma e penetra????o nas regi??es espirituais mais profundas", "A busca do amor, o desejo de reconciliar-se com o Um e o movimento de volta para completude outra vez", "Grandes Promessas em um futuro incerto", "Variedade e Explora????o Emocional", "A capacidade de criar vis??es, fantasias e sonhos", "Sentir um estado de consci??ncia alterada", "O teste da escolha apropriada", "N??o saber o que fazer", "Abstra????o, imagina????o e sonho, vis??es turvas, fantasia", "Dificuldade de escolha em meio a uma abund??ncia de op????es", "Sonhos, vis??es, emo????es, ou imagina????o sem conex??o alguma com a vida real", "Tus??es auto-infligidas", "Uma escolha h?? de ser feita, e deve-se ter muito cuidado e considera????o com esta escolha", "Um tempo em que a imagina????o trabalha em excesso e as escolhas parecem ser in??meras", "Juntamente com esta confus??o quanto a escolha tamb??m existe uma abund??ncia de talento e energia criativos e artisticos", "As vezes ?? uma sensa????o de auto-ilus??o, mas o cora????o bem humorado sempre tornar?? claras as ilus??es para que n??o leve a si mesmo a s??rio demais", "Dadivas das fadas, imagens de reflexos, sentimentos, imagina????o, coisas vistas no espelho da contempla????o", "Consegue se alguns sucessos nessas ??reas, mas n??o est?? previsto algo com maior permanencia ou substancialidade", "Sonho, Por um lado a vis??o verdadeira, o talento e a percep????o, por outro, fantasia, iluvici e atitudes pouco realistas", "Medo", "Mergulhar em seus medos, ou em suas preocupa????es e ansiedade, sentir medo e utilizar esta energia para super??-lo", "Pausa para compreender e refletir para ser prudente e n??o agir impulsivamente e para seguir adiante com coragem", "Percep????o", "Medita????o", "Escolhas"], },
            { id: 43, nome: "Indol??ncia - Oito De Copas", palavras_chaves: ["A solu????o para o problema est?? em outro lugar", "Procure uma auditoria para a situa????o de algu??m que n??o esteja envolvido emocionalmente nela", "Estagna????o Emocional", "Estar excessivamente cansado, esgotado, gasto, e exausto", "H?? necessidade de uma estrutura ou disciplina para impor alguns limites ?? extens??o em demasia", "Deixar o Conhecido e Ir em Dire????o ao Desconhecido", "Abandono dos modos de pensar, valores ou resid??ncia antigos e ir em dire????o ao desconhecido", "O Senhor da Indol??ncia", "Saturno em Peixes", "O tempo e o pesar encobrem o prazer, e n??o h?? for??as para rea????o, O pr??prio ??pice do desagrad??vel", "Aguas Paradas", "Um estado de retiro que ?? necess??rio e Som neste momento para se tornar claro", "Recarregar-se e renovar os recursos dentro de um espa??o protegido", "Momento de Avaliar Sentimentos", "Refletir sobre os relacionamentos e o que se gosta ou n??o nos mesmos", "A capacidade de ir ao interior profundo para regenerar as energias", "Retirar-se das atividades para dentro de si mesmo", "Retirada ou dar um tempo", "Esgotamento de energias na busca pela solu????o sem mudar o que est?? fazendo", "Autopiedade", "Um tipo de mudan??a inconsciente ocorre em um nivel de sentimento muito profundo", "Abandono de uma situa????o est??vel", "?? hora de ir adiante", "Recusa de abandonar uma situa????o mesmo sabendo que j?? se extraiu tudo que ela tinha para dar, O fim de uma coisa e o come??o de outra", "Deixar o passado para tr??s e abandonar uma situa????o por decep????o ou desilus??o", "Aquele que busca n??o tem escolha a n??o ser abandon??-la em busca do que ?? certo", "Excita????o", "Cascata de Energia", "O Cardume Nadando", "O poder do movimento fluido", "O fluxo infinito de potencialidades, Reprodu????o", "A emo????o do trabalho em forma????o", "Busca por novos horizontes", "A coopera????o de diversas potencialidades trabalhando em conjunto", "O declinio de um assunto, ou que um assunto que j?? foi considerado importante, na verdade importa muito pouco, seja para o bem ou para o mal", "A tristeza inevit??vel ao abandonar algo que lhe foi de valor na passagem para uma nova fase da vida", "Estado emocional quando as coisas chegaram a um ponto est??tico ou de quietude", "Progress??o Emocional", "Deixar para tr??s o conhecido pelo desconhecido e progredir em dire????o a sentimentos que s??o novos, diferentes e que de alguma forma mudaram."], },
            { id: 44, nome: "Felicidade - Nove De Copas", palavras_chaves: ["Sensa????o de dever cumprido", "Plenitude Emocional e Felicidade", "?? uma ??poca de expans??o emocional derivada de um sentimento de plenitude e de conclus??o", "Uma capacidade para ir ??s profundezas emocionais para integrar e equilibrar os sentimentos", "Contentamento e Satisfa????o", "Uma vida plenamente feliz que deveria continuar", "O Senhor da Felicidade", "J??piter em Peixes", "O restabelecimento da estabilidade perdida no Oito", "A culmina????o e a perfei????o da for??a original", "A ben????o", "A ??gua na sua manifesta????o mais completa e ben??fica, de maior grandeza material", "Felicidade, satisfa????o completa mas, assim como ocorre com o Nove de Paus, n??o h?? nada de permanente nesta situa????o", "o Universo n??o d?? descanso", "A mudan??a garante a estabilidade. A estabilidade garante a mudan??a?", "Espelho do Arco-??ris", "Um sentimento forte de integridade interna e seguran??a interior", "Gozar de auto-estima e felicidade interior", "Sentimentos Fluentes", "Sentir um fluxo de emo????es providas de prop??sito e de dire????o", "A oportunidade de criar a pr??pria realidade com o dom da imagina????o criativa", "Visualiza????o", "Satisfa????o", "Desejos realizados", "Prazeres sensuais", "Bem estar e prazer f??sico e mental", "Evitar preocupa????es e problemas por meio de concentra????o nos prazeres simples", "A carta dos desejos significando a realiza????o de um desejo de suma import??ncia", "A estabilidade emocional bem como a felicidade material e f??sica", "O prazer sensual tamb??m ser?? satisfeito", "Plenitude", "A Fonte da Lua Cheia", "A M??e Dadivosa", "??guas da vida e do Amor", "Uma carta muito aben??oada", "A fus??o da vontade e da imagina????o que se tornam fluidas, desaguando na resolu????o de um problema emocional", "Conc??rdia, contentamento, bem estar f??sico", "tamb??m vit??ria, sucesso, vantagem", "Satisfa????o para o consulente ou aquele que pergunta", "Felicidade", "Estado de satisfa????o emocional ap??s o t??rmino de uma tarefa", "Prazer de cumprir seu prop??sito", "Trabalho realizado."], },
            { id: 45, nome: "Saciedade - Dez De Copas", palavras_chaves: ["Viver plenamente e corajosamente seguindo os desejos e os sonhos", "Estar Pleno de Emo????o", "Sentir gratid??o", "Chegar ao cume de suas emo????es, seja alegria ou tristeza", "Se as emo????es fossem estrelas, voc?? seria a Via L??ctea nesse momento"], },
            { id: 46, nome: "Cavaleiro De Copas", palavras_chaves: ["O Provedor", "O Otimista", "Quest??es de lealdade ?? fam??lia e aos relacionamentos", "Nessa altura, h?? o dom de dar-se total e abertamente aos outros", "Projetar o Futuro da Vida", "Esta pessoa conseguiu, atrav??s da a????o, alcan??ar uma posi????o de autoridade e est?? olhando adiante", "A parte fogosa da ??gua", "Ele ?? o ataque veloz e passional da chuva da primavera, o poder da solu????o", "Elegante, diletante, pl??cido, am??vel de uma forma passiva e r??pido ao reagir a uma atra????o", "O Esp??rito d??gua", "Ouvir sua consci??ncia, confiar em seus impulsos, e ser guiado pelos instintos e pela intui????o", "Liberar um Padr??o Emocional", "Saber que uma emo????o j?? deu o que tinha dar e n??o opera mais em sua vida", "Emo????es que ou relacionamentos estabelecidos", "Senhor das emo????es", "A capacidade de amar", "Um conselheiro ou algu??m que cuide", "Criativo e cheio de imagina????o", "Psic??logo, padre", "Algu??m que teve que disciplinar ou mesmo suprimir seus sonhos para atingir o sucesso", "Um Messias democr??tico", "Ele direcionou seus poderes criativos para realiza????es de responsabilidade social, por acreditar que a responsabilidade precede a auto-express??o", "Pode utilizar sua criatividade para o trabalho, ou ao contr??rio, colocar seus talentos a servi??o do v??cio e da corrup????o", "Um mestre das emo????es", "Tem uma imagina????o viva e pode mudar seu humor repentinamente", "Tem o desejo de unir-se ao mundo inconsciente, o que n??o lhe ?? f??cil, pois vive os sentimentos s?? da boca para fora, em vez de realmente se emaranhar neles", "Num sistema de cartas, pode sugerir que ?? hora de realmente entrar em contato com seus sentimentos", "Jovial", "Um homem maduro com consider??vel experi??ncia de vida, mas que nem ficou endurecido nem amargurado pela vida", "Boa ??ndole, compassivo, e misericordioso, mas n??o deixa seus sentimentos bondosos domin??-lo", "Pleno de profundezas escondidas e correntezas profundas, raramente revela sua for??a verdadeira e trabalha por meio da gentileza mais do que por atos voluntariosos expl??citos", "Um homem justo, homem de neg??cios, leis, ou adivinha????o", "Profissionais das ci??ncias, leis e artes", "intelig??ncia criativa", "Dewi. O antigo Senhor do Abismo, tamb??m conhecido como Bran, o Aben??oado que tornou-se no Cristianismo o Rei Pescador ou o Rico Pescador chamado Bron", "Uma figura de poder e for??a atemporais, protetor dos necessitados", "Uma qualidade de for??a irresist??vel subjacente ?? superf??cie calma", "Negociador h??bil na montanha russa emocional da vida", "Sentimentos Extrovertidos.com Sensibilidade. (ESEJ)", "Gentil", "Com frequ??ncia, muitas pessoas o amam, mas n??o se d??o conta disto", "Manifesta situa????es e sentimentos harm??nicos", "Um excelente diplomata."], },
            { id: 47, nome: "Rainha De Copas", palavras_chaves: ["O Compositor", "Mulher madura e apaixonada", "O Refletor do Emocional", "O arqu??tipo de M??e amorosa", "Atribui poder a um individuo para expressar sentimentos de forma honesta e respons??vel sem culpas nem julgamentos", "Pode representar quest??es ligadas ?? maternidade", "Imagina????o em Demasia", "Esta pessoa imagina muitas coisas sobre sua vida mas n??o faz nada para apossar-se delas nem solucion??-las", "??gua de ??gua, com o poder da ??gua de receber e refletir", "Sonhadora, possuidora de extrema pureza e beleza, tranquila, paciente e, muitas vezes, extremamente popular", "Ver a sua verdade ?? quase imposs??vel, pois ela reflete a natureza de quem a observa com grande perfei????o", "A Fechadura", "Pureza e beleza extremas em sua forma mais sutil, a tranquilidade bruxulcante, consequ??ncia das emo????es que perduram ao longo do tempo", "Um sentimento de amor e apoio maternal que ?? est??vel e alimenta", "Maturidade Emocional ou Intuitiva", "Sentir intera????es interpessoais e emo????es evoluidas e desenvolvidas ou capacidades ps??quicas/intuitivas", "Amor do Amor", "Canaliza sentimentos, emo????es, sonhos, vis??es", "Empatia e compreens??o incomuns, mas pode ser temperamental e de humores inst??veis", "Pessoa que nutre ou abafa emo????es", "Canaliza sentimentos e emo????es, desejos, sonhos e vis??es interiores", "A pessoa que inspira a partir do seu interior", "Um tempo de rumina????o interna, os pensamentos focados para o interior, e a mente tragada pelo poder da imagina????o", "A carta de Ta??as mais bem sucedida e equilibrada", "Junta a consci??ncia ao sentimento", "A possibilidade de mesclar imagina????o e a????o, criatividade e utilidade social", "Uma pessoa que alcan??ou um grau de compreens??o de sua profundidade emocional e vive em grande medida no reino da fantasia e da imagina????o", "Pessoa altamente artistica e criativa, at?? mesmo m??stica ou prof??tica", "Amorosa", "Uma mulher madura com profundos poderes sexuais e de fertilidade, o que pode manifestar-se como maternidade ou um tipo de trabalho criativo", "Tudo em sua vida est?? relacionado ?? nutri????o, as trocas sexuais, dar e receber, sentir, paix??o", "Muitas das Rainhas d??gua tornam-se espiritualmente dedicadas, ou tornam-se a m??e de uma fam??lia extensa, a av?? no sentido espiritual e f??sico", "Mulher devotada que auxiliar?? o consulente", "intelig??ncia amorosa e, portanto, o dom da vis??o", "Sucesso, felicidade, prazer, tamb??m sabedoria, virtude, a esposa perfeita e boa m??e", "??s vezes denota uma mulher de car??ter duvidoso", "Durga, a Inacess??vel, que era inacess??vel aos homens. Tamb??m Virginal a Rainha de Gelo, uma fada divina das altas montanhas, e no Cristianismo a Virgem Rainha dos C??us", "Uma pessoa et??rea, do outro mundo, com ideias das mais elevadas, talvez intangivelmente elevadas", "Aquele que se Regozija", "Dom??nio do Equil??brio e do Amor, Sente e expressa a alegria da vida, permitindo que o amor pela vida flua", "Sentimentos Introvertidos com Sensibilidade. (ISFP)", "Ouvinte", "A ef??gie d??gua, sem necessidade de reconhecimento ou confirma????o, ?? a tela perfeita para as proje????es dos outros."], },
            { id: 48, nome: "Pr??ncipe De Copas", palavras_chaves: ["O Professor", "Pessoa apaixonada", "O Amante", "Uma indica????o de que h?? muita paix??o eo desejo de expressar sentimentos de forma calorosa", "Ir Adiante", "Devagar mas Sempre", "A pessoa est?? perseguindo sua meta de vida e mais cedo ou mais tarde a alcan??ar??, seja l?? o que for", "De todas as maneiras um artista, que parece suscet??vel a influ??ncias externas, mas as aceita apenas para transmut??-las em favor de seus projetos secretos", "Importa-se profundamente com o poder, a sabedoria e seus pr??prios objetivos", "Asas do Amor", "O amor d?? asas ao seu esp??rito", "Sensual e amoroso, t??nue e espiritual, de todas as formas um artista", "Pessoa que d?? arte ao mundo atrav??s do amor, da imagina????o, da eleg??ncia, do estilo, e dos sentimentos mais profundos", "A????o Emocional", "Foco Emocional ou Intuitivo", "Estar completamente envolvido em uma sensa????o emocional, ou centrado na consci??ncia ps??quica ou espiritual", "Seguir seus sonhos, vis??es, ideais, amor", "Um idealista rom??ntico, Pode ser temperamental e ciumento", "O aspecto tranquilo, interior do principio masculino", "Auto Reflex??o e autoconsci??ncia pac??fica. e contemplativa", "O esp??rito volta-se para as vis??es art??sticas ou reconhece sentimentos profundos", "A busca de pensamentos e fantasias derivadas do ego em vez do inconsciente", "A imagina????o para o mundo ?? dominado pelos sonhos", "Em termos rom??nticos, pode representar um amante que n??o quer se comprometer, que talvez seja atraente por??m passivo, retra??do ou narcisista", "Um jovem refinado, art??stico, de princ??pios elevados, um idealista que busca a perfei????o", "Se for um evento, frequentemente significa um pedido de casamento, ou uma proposta no campo art??stico, ou at?? um rival no amor", "Um Idealista", "Um homem ou mulher jovem, cheio de sonhos, vis??es e grandes esperan??as da vida", "O Cavaleiro do Santo Graal", "As emo????es s??o muito desenvolvidas e, com frequ??ncia, um ideal tomar?? o lugar do amor humano", "Com a experi??ncia, este idealismo pode ser modificado, mas jamais ser?? abandonado de todo", "As gra??as mais elevadas da imagina????o", "Um sonhador", "Avan??os, propostas, condutas, convite, incitamento", "A visita de um amigo que trar?? dinheiro esperado ao consulente", "Galahad. O her??i conhecido como Lancelot, ou Lancelot do Lago, que buscou o Santo Graal (ou Caldeir??o)", "Cavalheirismo, do??ura, auto-sacrif??cio, sensibilidade e cortesia em rela????o ??s mulheres", "Um vision??rio que est?? muito ligado aos aspectos femininos do seu pr??prio ser", "Regenerador", "Encontra alegria, prazer, satisfa????o e felicidade em estar vivo", "Sentimentos Extrovertidos com Intui????o (ENEJ)", "O Amante", "Desejar sua alma g??mea"], },
            { id: 49, nome: "Princesa De Copas", palavras_chaves: ["Pessoa em in??cio de relacionamento", "Desapego Emocional", "Livre de Ci??mes", "O dom??nio de uma certa possessividade e de sentimentos de ci??me", "Um evento Inesperado", "Agora, h?? a capacidade de amar profundamente de maneira leal e comprometida, mas com desapego", "Surpresas na Vida", "A faculdade de cristaliza????o", "O poder que a ??gua tem de dar subst??ncia a uma ideia, de manter a vida, e de formar a base de combina????es qu??micas", "Seu car??ter ?? infinitamente gracioso, toda vol??pia, do??ura, bondade e ternura", "Muito dependente dos outros, mas ao mesmo tempo os auxilia muito", "Divino Amor", "O poder das emo????es e do inconsciente de fomentar uma ideia", "Confiar nos seus sentimentos e impress??es", "Ser enlevado e gentil, bondoso e terno, pleno de romance, sonhos e vis??o amorosa", "Arriscar-se Emocionalmente", "Arriscar-se emocionalmente de forma p??blica, clara ou com capacidades ps??quicas", "Comprometido com uma dire????o emocional que pode ser um pouco amedrontadora", "Estar aberto ao amor e novos relacionamentos Traz mensagens dos sonhos ou da intui????o", "A parte brincalhona e afetuosa da personalidade que tem um senso de humor maravilhoso e sabe como se sentir bem", "Uma ??poca para experimentar os sentimentos"], },
            { id: 50, nome: "A Raiz Dos Poderes Do Ar - ??s De Espadas", palavras_chaves: ["Melhor momento para iniciar um Projeto Mental", "Clareza Mental", "Inventividade e Originalidade", "Os dons de um intelecto inspirado, decis??o e clareza mental est??o dispon??veis para serem utilizados e manifestos", "Supera????o de problemas", "Um problema que pode ser superado e uma solu????o encontrada", "A Raiz dos Poderes do Ar, A Energia do Ar primordial que n??o possui nenhum impulso auto-gerado", "?? o Vento que sopra em todas as dire????es, mas uma vez posto em movimento por seu Pai de Fogo e por sua M??e d??gua, seu poder se manifesta de uma forma terr??vel", "Abarca tudo, vagueia por tudo, penetra tudo, consome tudo", "Alvorada", "O in??cio do processo intelectual", "Uma ideia nova e importante est?? se apossando da mente", "O modo de prestar aten????o ao novo pensar", "Pensar claro, original e criativo", "Uma Nova Ideia", "O potencial de uma dire????o completamente nova para o modo de vida, cronograma ou rotina", "A Consci??ncia Pensante (em foco)", "Expans??o Mental", "An??lise do que deve ser feito", "Agir com l??gica e discrimina????o", "For??a, sobretudo no plano mental", "O dom do intelecto", "Decide-se fazer algo espec??fico", "Intelecto, verdade, for??a emocional, em forma extrema", "Frequentemente indica que do mal surgir?? algo de bom", "Uma situa????o que parece negra pode surpreendentemente tornar-se extremamente promissora", "Um sentimento de mudan??a inevit??vel", "Ar/Vida", "Novas aberturas, in??cios, mudan??as poderosos e perturbadores", "Podem trazer benef??cios ou dificuldades, vida ou morte, dependendo das outras cartas presentes em um jogo", "Uma carta de grande potencial de energia n??o realizado, de energia original", "Triunfo, um n??vel de excesso em todas as coisas, conquista, triunfo da for??a", "Uma carta de grande for??a, no amor assim como no ??dio", "Grande prosperidade ou grande mis??ria", "Fatalidade", "A carta de Morgan the Fate, Fata Morgana que levava os her??is mortos para as Ilhas Afortunadas", "Finalidade, trag??dia, e destino fatal, mas tamb??m, ??s vezes, uma libera????o", "Libera????o das restri????es, uma nova leveza, ou uma forma de salva????o", "Brilho", "A qualidade da percep????o", "Ver e compreender com percep????o e com uma forte curiosidade", "Concentra????o, organiza????o e imagina????o que trazem a capacidade criativa", "Muda a For??a", "Expans??o e celebra????o", "Mudan??a surgindo de dentro", "O in??cio de uma ideia ou informa????o", "Indica alguma forma do Eu penso."], },
            { id: 51, nome: "Paz - Dois De Espadas", palavras_chaves: ["Afastamento", "Momento entre duas tempestades", "Fuga do conflito", "Paz de Esp??rito", "Dois assuntos, situa????es, op????es, ou relacionamentos foram integrados num n??vel inconsciente, e o esp??rito agora encontra-se em paz", "A N??o Aceita????o de Realidades", "N??o aceitar o que est?? diante de si", "A necessidade de ser mais tolerante em rela????o ??s ideias e sugest??es de outros e n??o prender-se ??s suas pr??prias t??o fortemente", "O Senhor da Paz", "A Lua em Libra", "Como ocorre com todos os Dois, esta carta manifesta a melhor ideia poss??vel para o naipe, mas as Espadas, que regem todas as manifesta????es intelectuais, s??o sempre complicadas, desordenadas, e sujeitas a mudan??as de uma forma que n??o ocorre em nenhum outro naipe. Portanto, esta carta ?? de uma calma relativa aguardando a chegada da ruptura", "A Travessia", "Um equil??brio tempor??rio", "Um sentimento de liberta????o da captura", "Manuten????o de um equil??brio suave e paz tempor??ria", "Fazer as pazes", "Suspender o julgamento", "Emo????es bloqueadas", "Incerteza ou impasse", "Procrastina????o", "Fazer acordos", "Esperar a virada da mar??", "Uma tentativa de conseguir paz e equil??brio mental", "A mente quer estar em repouso", "Um descanso antes da mudan??a", "Lidar com um problema ou uma situa????o sem encar??-la", "Um equil??brio prec??rio mantido pela nega????o das emo????es", "Impasse", "for??as equilibradas neutralizam uma ?? outra", "O conflito em um impasse", "A pessoa acredita que as quest??es desaparecem se n??o forem confrontadas. No entanto, se houver coragem, poder?? efetuar uma mudan??a e, com frequ??ncia, algo de bom resulta do que parece ser uma situa????o ruim", "Um padr??o cujo resultado final parece ser imposs??vel predeterminar", "A Conformidade e o equil??brio que ela sugere", "coragem, amizade, a conc??rdia armada", "Equil??brio", "Um equil??brio de for??as opostas levando a um impasse, uma tr??gua tempor??ria em meio ?? luta, ou um novo equil??brio depois de ajustes dif??ceis", "Um estado mais elevado de consci??ncia equilibrada", "Objetividade e estabilidade mental obtida atrav??s de an??lise fria", "Um estado de afastamento e n??o envolvimento em que voc?? consegue ver com consci??ncia neutra, de acordo com os valores e as leis mais elevados do Universo", "A Calma entre duas tempestades"], },
            { id: 52, nome: "Dor - Tr??s De Espadas", palavras_chaves: ["Dor", "Pensamentos de Pesar", "Eventos que n??o foram resolvidos no passado e que agora produzem pesar", "Decep????o e Cora????es Partidos", "Sofrimento causado por ter o cora????o partido e sofrimento emocional devido ??s decep????es na vida", "O Senhor do Pesar", "Saturno em Libra", "Este n??o ?? o pesar ordin??rio, comum, que depende de descontentamentos ou decep????es individuais, mas sim o pesar universal", "?? o dom da melancolia", "Existe uma paix??o intensa espreitando para criar, mas os frutos s??o monstros", "Sigilo e pervers??o", "Reconhecimento", "Ceder para ganhar", "Render-se para alcan??ar o objetivo", "Sentir- se frustrado, o que representa uma parte normal do processo criativo", "Ataques de ansiedade entremeados por ataques de alegria", "O dom do pesar", "Capacidade de sentir as emo????es plenamente para n??o tornar- se bloqueado", "Crise criativa", "Separa????o", "Inveja", "Sentir-se magoado", "Div??rcio", "Fundir as energias mentais atrav??s de luta", "Uma dan??a do poder em que as dificuldades precedem ?? harmonia", "Pesar, dor, e cora????o partido, seja com aceita????o ou n??o", "Tempos turbulentos para as emo????es", "Talvez brigas ou separa????es, ou l??grimas causadas por um amante infiel", "A sensa????o de estar limpando o terreno para algo novo, em meio ao pesar, porque o momento mais escuro sempre vem antes do alvorecer", "Significa um lampejo de compreens??o ou percep????o de uma situa????o como ela realmente ??", "Sofrimento", "A Compreens??o do Ar", "o Sofrimento da M??e", "O sofrimento interior que leva ?? compreens??o, que leva ?? realiza????o no sentido de tornar-se real", "Remo????o, aus??ncia, atraso, divis??o, ruptura, dispers??o", "Pesar", "Pesar por qualquer raz??o, qualquer desapontamento, qualquer raz??o para sentir pena de si mesmo", "Uma sensa????o de isolamento e convivio com uma dor interior", "Indecis??o", "Ou desenvolvimento futuro, avan??o, e realiza????o de uma ideia, mudan??a, ou plano Em termos de tempo, indica que uma decis??o ou confus??o mental j?? ocorre ou ocorrer?? nos pr??ximas dias ou horas."], },
            { id: 53, nome: "Tr??gua - Quatro De Espadas", palavras_chaves: ["Representa um ref??gio do caos mental, escolhido de maneira arbitr??ria", "Pede por conven????o, apaziguamento e concilia????o de modo a promover a harmonia social", "Dom??nio", "Um padr??o est??tico ap??s adquirir o dom??nio de uma tarefa dif??cil", "Gozar de recompensas e sucessos por ter entendido a tarefa", "Autoridade no mundo intelectual", "Agir em rela????o ao que Pensa", "Manifestar-se em p??blico", "Escrever", "Agir em rela????o ??s ideias ou expressar uma filosofia pessoal", "Estresse como um dado da sa??de", "Necessidade de cura", "Um problema ou um dilema que est?? sendo trabalhado na mente ou nos sonhos", "Afastamento", "Descanso e recupera????o", "A necessidade de pedir aux??lio profissional ou espiritual", "A cria????o de um espa??o mental protegido", "A personalidade precisa de um tempo para se afastar, ficar s??, e pensar sobre as coisas para curar e renovar se", "Descanso, afastamento, recolhimento, seja para esconder ou para curar", "Um tempo de descanso e retiro ap??s a luta", "um tempo de quietude para pensar as coisas at?? o fim, por meio do al??vio de tens??o e de um relaxamento da ansiedade", "Convalesc??ncia ou recupera????o", "Tr??gua", "O Ar Misericordioso e o Esp??rito da Compaix??o", "Consci??ncia das potencialidades", "Vigil??ncia, afastamento, solid??o, o descanso do eremita, ex??lio, t??mulo e caix??o", "Isolamento", "Uma carta da percep????o provocada pelo isolamento, como a percep????o da sacerdotisa fat??dica de Delfi", "As vezes, poderes de profecia invocados secretamente, o isolamento do ex??lio, o aprisionamento, a convalesc??ncia, isolamento volunt??rio, ou descanso e recupera????o em meio ?? adversidade, L??gica", "Intelig??ncia discernente, estrutura, integridade, pensamento e planejamento", "Arrumar as coisas em um todo trabalh??vel, criando, assim, um sistema pr??tico E construindo um fundamento s??lido por meio da compreens??o de como cada parte se relaciona com o todo", "Reconhecer que h?? uma ordem com todos os fen??menos do universo", "Descanso", "Descanso e recrea????o", "Dar um tempo", "??s vezes, doen??a para recuperar", "O intelecto abrindo m??o de seu controle", "Pausa para recuperar as For??as"], },
            { id: 54, nome: "Derrota - Cinco De Espadas", palavras_chaves: ["Uma vit??ria cara demais", "Uma vit??ria que vai se transformar em derrota em breve", "Temor de Derrota", "Lembran??a de Derrota", "Algum medo de derrota pesa na mente, torna o individuo temeroso de tentar novamente um novo relacionamento ou uma nova ideia", "Existe o desejo e a possibilidade de se livrar deste medo dentro das pr??ximas semanas", "Conflito", "Envolvimento em um conflito que parece j?? ter sido superado mas que deixa o individuo com problemas", "O Senhor da Derrota", "V??nus em Aqu??rio", "O Cinco, como sempre, traz ruptura, neste caso, por??m, ?? por fraqueza em vez de excesso de for??a", "A derrota se d?? em fun????o do pacifismo", "O intelecto foi enfraquecido pelo sentimento", "Medo", "Uma sensa????o de medo", "Medo de uma situa????o dolorosa, amedrontadora ou desconhecida", "Estar preso em uma armadilha pr??pria feita de energia negativa do passado", "Ajustes Filos??ficos", "Desafio ou mudan??a de estilo de vida", "Hora de adaptar suas cren??as ou comunica????es", "Dificuldade em comunicar suas ideias aos outros", "O pensamento pode estar fragmentado e as decis??es dif??ceis, trazendo confus??o e d??vida", "Uma vit??ria vazia utilizando meios injustos", "Conflito pessoal ou pol??tico", "Uma situa????o sem vit??ria", "Desaven??as", "Uma vit??ria conseguida por meio de trapa??a", "Uma poderosa experi??ncia negativa, tal como uma derrota num n??vel mental", "Derrota com um sentido de humilha????o e de fraqueza", "A necessidade de desistir de lutar contra uma situa????o", "Aconselha a engolir o orgulho, reconhecer e aceitar limita????es, e prosseguir em uma nova dire????o", "Perda", "O Vento que Leva e os P??ssaros da Perda", "Rompimento dos padr??es estabelecidos", "Degrada????o, destrui????o, revoga????o, infamia, desonra, perda, e as varia????es e analogias das mesmas", "Um ataque sobre a fortuna do consulente", "Derrota", "Uma derrota decretada pelo Destino, a ser aceita sem protesto e suportada com paci??ncia e coragem passiva", "Negatividade", "D??vida e pessimismo, pensamentos derrotistas baseados na interpreta????o da mente", "Um Labirinto mental tempor??rio"], },
            { id: 55, nome: "Ci??ncia - Seis De Espadas", palavras_chaves: ["Solu????o fora da caixa", "Pensamento Objetivo", "L??gico", "Racional", "Capacidade anal??tica pronunciada, o pensamento l??gico cient??fico que pode ser sentido interna e externamente", "Comunicar algo novo, e de forma t??o l??gica e objetiva que ser?? compreendido pelos outros com facilidade", "Problemas que logo terminar??o", "Sentir-se sobrecarregado de responsabilidades mas fazer as coisas certas para solucion??-las", "atravessar o mar de dificuldades com uma solu????o brilhante", "O Senhor da Ci??ncia", "Merc??rio em Aqu??rio", "A interpreta????o mais completa desta carta ?? o equil??brio perfeito de todas as faculdades mentais e morais, conseguido a duras penas, e quase imposs??vel de ser mantido em um mundo em mudan??a constante", "O pleno. estabelecimento e equil??brio da intelig??ncia e da humanidade, Clareza", "Clareza s??bita", "Uma capacidade analitica afiada", "As faculdades mentais e morais em verdadeiro equil??brio o que causa j??bilo e alegria e um belo sentimento de rever??ncia", "Uma Filosofia ou Padr??o de Comunica????o Confi??vel", "O dom de dar apoio na adversidade", "Afastar-se do perigo", "Jornada atrav??s da consci??ncia ou viagem mental", "Solucionar problemas, Afastar-se para ver as coisas em perspectiva objetividade", "A carta de Espadas mais espiritual depois do As", "?? capacidade de ver as coisas como um todo, Perspectiva, afastar-se, e cuidar do que tiver magoado voc??", "Uma travessia tranquila por tempos dif??ceis", "Um tempo de transi????o f??cil", "Funcionar em uma situa????o dif??cil sem, no entanto, lidar com os problemas fundamentais", "Quebrar o sil??ncio", "Afastar-se das dificuldades em dire????o a um tempo mais pacifico", "Pode significar uma viagem no sentido literal, uma mudan??a para um ambiente mais agrad??vel", "A libera????o da tens??o e da ansiedade ap??s um per??odo de esfor??o, e uma sensa????o de harmonia prevalecente", "Transi????o", "Belo Voo ou Harmonia dos P??ssaros", "Mover de um estado para outro numa transi????o equilibrada", "Uma sensa????o de movimento em dire????o a um santu??rio, seguran??a ou resolu????o", "Viagem por ??gua, rota, caminho, mensageiro, comissionado, expediente", "A jornada ser?? agrad??vel", "Passagem", "Um tempo dif??cil e ansioso, uma jornada em dire????o a um futuro escuro e desconhecido que ??s vezes ?? press??gio de sucesso", "Extrema atividade mental e agita????o, conflito mental, ambiguidade e indecis??o", "Deste conflito podem vir a solu????o e a s??ntese, e grandes ideias podem surgir", "Vis??o Global", "A mente vigiando a si pr??pria", "O poder da travessia segura de um mundo para outro"], },
            { id: 56, nome: "Futilidade - Sete De Espadas", palavras_chaves: ["Futilidade", "Pensamentos em Futilidades", "Querer algo e crer n??o poder t??-lo", "Uma sensa????o de resigna????o, desist??ncia", "Existe o desejo e a possibilidade de sair desta sensa????o de futilidade", "Criar Problemas Para Si Mesmo", "Criar problema por assumir sentimentos de culpa ou ressentimentos", "O Senhor da Futilidade", "Lua em Aqu??rio", "H?? vacila????o, um desejo de conciliar, uma certa toler??ncia", "Esta carta sugere a pol??tica de apaziguamento, uma luta entre os muito fracos e o ??nico forte, um esfor??o v??o", "Muitas L??nguas", "Uma sensa????o de futilidade", "Caminhos demais a serem seguidos, como ouvir ou falar v??rias l??nguas diferentes ao mesmo tempo", "Perda de Tempo", "Flexibilidade Mental", "Experimentar com programa????o, estilo de vida, rotina, cren??as, ou comunica????o", "Esperteza e ast??cia com capacidade para criar planos e estratagemas", "Pesquisa", "coletar o conhecimento e as ideias dos outros", "Prepara????o", "Mentir e espreitar", "Evitar confronto", "Estrat??gia mental", "A mente cria um plano para conseguir o que quer", "Esquemas e a????es que n??o solucionam coisa alguma, talvez uma sensa????o de isolamento", "Esperteza em conjunto com a oculta????o de suas verdadeiras inten????es", "Ou agir para tentar obter aux??lio ou conselhos de outros", "A necessidade de prud??ncia e evas??o para alcan??ar um objetivo, ?? o momento de usar o c??rebro, e n??o m??sculos", "Se a carta estiver mal colocada, pode indicar uma fuga de uma a????o desonrosa", "Desonestidade", "Com frequ??ncia quer dizer enganar a si mesmo, quando a mente n??o quer enxergar a verdade e h?? uma ruptura das emo????es", "Perder tempo e energia com bobagens", "Em termos mais gerais, uma carta de movimento complexo, uma for??a essencial de inspira????o e ruptura que origina a tens??o do poder a ser utilizado com criatividade", "Planejamento, tentativa, desejo, esperan??a, confian??a", "pode ser tamb??m discuss??o, um plano que pode falhar, irrita????o", "Oposi????o", "Estar na ponta da espada", "Discuss??es, dificuldades, e impedimentos ao movimento", "T??dio", "Estabilidade mental em meio ao grande movimento", "Descanso ou t??dio mental", "Dar a mente a oportunidade de reagrupar-se e renovar-se", "Evitar Confronto", "T??ticas de evas??o e oculta????o", "Planos e ideias novos est??o sendo semeados na mente, mas ainda n??o est?? claro como chegar a complet??-los"], },
            { id: 57, nome: "Interfer??ncia - Oito De Espadas", palavras_chaves: ["Muito barulho e muita interfer??ncia externa", "Interfer??ncia Mental", "O desejo de expans??o em rela????o a qualquer dualidade", "Ind??cios de an??lise excessiva, d??vidas ou confus??es em rela????o a uma escolha que deve ser feita", "Problemas Tempor??rios", "A sensa????o de que nada vai funcionar, de que a batalha pelos sonhos foi perdida", "O Senhor da Interfer??ncia", "J??piter em G??meos", "Significa falta de persist??ncia em quest??es intelectuais e competitivas", "Devido ?? influ??ncia de J??piter em G??meos, a boa sorte espera at?? mesmo esses esfor??os enfraquecidos. No entanto, a Vontade ?? frustrada constantemente por interfer??ncias acidentais", "Escudo de Poder", "Indecis??o levando ?? uma sensa????o de aprisionamento", "Energia desperdi??ada, obst??culos externos, desilus??o", "A rendi????o ao amor limpa o caminho e fornece poderio interno", "Organizar Pensamentos e Comunica????es", "Organizar e trabalhar novamente o estilo de vida, o cronograma, ou as atitudes para alinh??-los de forma mais pr??xima com seus valores", "Preso por obstru????es mentais", "Espera para ser resgatado", "Ideias em demasia sem dire????o", "Falta de persist??ncia", "Aprisionado por suas pr??prias cren??as", "Restri????es", "Ignorar as opini??es dos outros", "A a????o de lutar para sair de uma caixa constru??da por sua mente um atoleiro, um obst??culo impedindo-o de atingir o sucesso", "Confus??o, ideias que oprimem, isolamento", "Sentir-se encurralado, envergonhado", "Medo de sair de uma situa????o que amarra e restringe", "Do lado positivo, um sinal vir?? para mostrar-lhe o caminho (Oito de Bast??es)", "Perigo", "O Vento que Cerca", "Mudan??a Incessante", "Movimento Incans??vel", "Incerteza", "Energia potencialmente destrutiva ou desequilibradora", "O perigo pode ser ultrapassado e precisa ser encarado, seja potencialmente ou na realidade, haja o que houver", "Inquieta????o dispersa, dist??rbio mental, desequil??brio e confus??o", "M??s not??cias, mortifica????o violenta, crise, censura, poder sob press??o, conflito, cal??nia", "tamb??m doen??a", "Esta carta ??, no entanto, de dura????o tempor??ria e n??o um aprisionamento irrecuper??vel", "Desilus??o", "Perda de f??, tumulto interior, depress??o e, possivelmente, a descoberta de que princ??pios e cren??as que lhe eram caros s??o falsos", "Dar demasiada aten????o para os outros e n??o ouvir a si mesmo."], },
            { id: 58, nome: "Crueldade - Nove De Espadas", palavras_chaves: ["Preocupa????o", "Autocrueldade Mental", "Pensamentos negativos e degrada????o mental sentidos din??mica e respectivamente, o que deprime o indiv??duo. O cachorro comeu minha li????o de casa!", "Sentir Pena de Si Pr??prio", "Ser magoado pela vida e ficar chorando em vez de ir adiante", "O Senhor da Crueldade", "Marte em G??meos", "Aqui, a ruptura original inerente a Espadas ?? elevada ?? mais alta pot??ncia. O naipe est?? em degenera????o constante, o pensamento j?? passou por todas as etapas poss??veis e a conclus??o ?? o desespero", "O puro intelecto original n??o passa agora de movimentos autom??ticos das paix??es sem cora????o", "A consci??ncia caiu em um reino n??o iluminado pela raz??o", "Ser amea??ado ou parecer amea??ador para os outros", "Ser magoado e ter magoado os outros", "Temer a crueldade, julgamento e dor", "Uma sensa????o de raiva que leva ao isolamento", "A necessidade de analisar, pensar de forma clara, e entrar em contato com seus sonhos noturnos para obter dire????o e compreens??o", "Pensamentos Integrados", "Oportunidade de sentir o luto, enfrentar os dem??nios ou aguentar os pesadelos com tempo e paci??ncia", "Depress??o", "Culpa", "Luto", "Um pesadelo terr??vel, o surgimento no inconsciente de todos os temores e proje????es que a mente criou durante o processo de pensamento", "Preocupa????o ou ang??stia", "O mais profundo pesar, momento de agonia e dissolu????o", "Uma sensa????o de desastre e desgra??a iminentes que pode n??o ter fundamento", "Uma decis??o dif??cil a ser tomada ou uma situa????o que precisa ser encarada na qual o medo ?? muito pior que o resultado", "Desventura", "Aquele que Traz o Furac??o", "Nascimento do Pesar", "Associado ?? dor, dores do parto e dores da morte", "A dor espiritual da Mater Dolorosa de Toda Exist??ncia, ou a dor fisica do nascimento ou da morte de qualquer fase de vida", "Desola????o total", "Morte, falha, aborto, demora, mentira, decep????o, desespero", "Em geral, uma carta de mau agouro", "Crueldade, sofrimento f??sico ou mental, ansiedade relativa ?? possibilidade iminente da dor, ou indiferen??a e frieza em rela????o ?? dor de outrem", "Limita????o", "Foco nas prioridades", "Concentra????o naquilo que ?? mais importante terminar, sem estripulias, e confiar em si mesmo e no caminho escolhido", "Pequeneza de esp??rito", "Conclus??o Mental", "Pensar demais, o que resulta em uma mente magoada, doen??a ou ins??nia."], },
            { id: 59, nome: "Ru??na - Dez De Espadas", palavras_chaves: ["Falha", "Seus esfor??os ser??o em v??o", "Restri????o Espiritual", "Repress??o", "Conten????o de comunica????es por medo da forma como seriam recebidas", "Ideias em demasia", "A mente est?? t??o ocupada pensando sobre muitas coisas que se tornou seu pior inimigo, ela n??o pode enxergar a floresta por causa das ??rvores", "O Senhor da Opress??o", "Sol em G??meos", "A For??a destacada de suas fontes espirituais", "Fogo em seu aspecto mais destrutivo", "uma for??a cega que sugere opress??o e repress??o", "?? o que ocorre quando se usa a for??a. for??a, e apenas a for??a todo o tempo", "A Jaula", "Sentir-se preso numa armadilha ou oprimido", "Uma Quest??o de Identidade", "Sentir-se confort??vel consigo mesmo mas consciente de que este ?? um momento de escolha", "Por agora, ficar em cima do muro", "Criatividade bloqueada por responsabilidades em excesso, ou a import??ncia de desenvolver um senso de responsabilidade", "Perseveran??a para atingir um objetivo", "Fardos", "Uma libera????o de todas as energias que se constru??ram com o tempo e que de vez em quando tomam conta da personalidade", "Fardo e opress??o pela vida, sobretudo pela responsabilidade", "Fardos demais ou se livrar de fardos", "Um fardo desaparecer?? em breve ou um problema ser?? resolvido", "O fardo pode ser f??sico, mental ou emocional, e ??, com frequ??ncia, auto-imposto, mas alguma coisa pode ser feita para aliviar o peso agora", "O sentido principal ?? simplesmente a opress??o", "Pior do que est?? agora n??o fica mais", "Fundo do Po??o", "Uma carta de apar??ncias falsas, disfarce e perf??dia", "Triunfo da tirania, mau uso do poder, autoridade ego??sta, press??o excessiva, puni????o da ambi????o", "Atingir o extremo oposto do fogo", "a extin????o", "O excesso de terra sufoca o ar"], },
            { id: 60, nome: "Rainha De Espadas", palavras_chaves: ["O Art??fice", "A Precis??o", "Pensamento Intelectual", "O desejo de dispensar quaisquer pap??is, m??scaras ou,defesas que escondem a pessoa real, e de desenvolver o pensamento intelectual", "Pode haver necessidade de passar por terapia ou de desenvolver a pr??pria capacidade terap??utica", "Cuidado com Pensamentos Defensivos", "Esta pessoa, apesar de aparentar amor e bondade, est?? fechando o cora????o por dentro", "??gua de Ar", "com sua elasticidade e poderes de transmiss??o", "Um observador atento, int??rprete sutil e intensamente individualista", "R??pido e preciso em gravar ideias, confiante ao agir, elegante e justo de esp??rito, mas o car??ter, que ?? por si excelente, n??o suporta interfer??ncias", "O Limiar Oriental", "A conclus??o de um processo intelectual", "Uma sensa????o de decis??o e comprometimento", "Triunfo, esclarecimento, objetividade e racionalidade", "Maturidade Intelectual", "Sentir as faculdades mentais bem afinadas", "Comunica????o forte e efetiva resultante da profundidade de suas cren??as", "Amor pelas ideias", "Canaliza pensamentos", "Capaz de falar pelos outros", "Inteligente e autoconfiante", "Em geral, ?? justo mas pode ser vingativo", "Nutre ou abafa ideias", "A mente em funcionamento, a canaliza????o da sabedoria", "Uma jornada ao reino frio do intelecto, uma folga das emo????es em favor de um per??odo contemplativo e introspectivo", "Talvez se sinta exclu??do emocionalmente", "A liga????o entre a sabedoria e o pesar", "Uma mulher j?? sentiu o pesar, que pode estar s?? por viuvez, div??rcio que ou separa????o", "Ela j?? amou e perdeu, mas amar?? de novo ela deve suportar sua dor com coragem e em sil??ncio", "De vontade forte e determinada, uma mulher que pode suportar tudo que a vida lhe apresenta", "Seriedade", "Por ser uma mulher mais velha, de muitas maneiras, ?? a contrapartida feminina do Rei de Espadas", "Ela critica os destemperos emocionais e tende a usar sua disciplina mental para equilibrar as emo????es dentro de si", "Severidade com castigo, familiaridade com pesar", "Viuvez,tristeza feminina e vergonha, aus??ncia, esterilidade, pesar, priva????o, separa????o", "Kali. A Deusa Destruidora que traz o renascimento por meio da destrui????o", "Independ??ncia de reflex??o mental", "Claridade e concentra????o em meio ??s d??vidas e distra????es", "Pensamento Introvertido com Sensibilidade. (ISTP)", "A Profissional", "Lida com as situa????es com capacidade, rapidez e efici??ncia", "Muitas vezes, a for??a por tr??s de uma organiza????o."], },
            { id: 61, nome: "Cavaleiro De Espadas", palavras_chaves: ["O Supervisor", "Pensar com Paix??o", "Pensamentos apaixonados relativos ?? realiza????o de algum objetivo que o Eu por inteiro deseja em algum n??vel profundo", "Ir adiante e ser bem sucedido em alguma tarefa espec??fica", "Pessoa Defensiva e Obstinada", "Esta pessoa ?? restrita e est?? na defensiva", "Necessidade de ser mais aberta e acess??vel a sugest??es", "A parte fogosa do Ar", "O poder violento do movimento aplicado a um elemento que aparentemente ?? manipul??vel", "Ativo, habilidoso, sutil, esperto, feroz, delicado e corajoso", "As ideias podem absorver toda a sua vida em aspira????o concentrada", "A Vontade de Transcender", "Um per??odo analitico", "O poder da ideia e do movimento, o esp??rito do intelecto", "Altamente anal??tico, precis??o exigente, brilhante, e altamente racional", "Abandonar uma Velha Ideia ou Padr??o de Comunica????o", "Trocar ideias filos??ficas antigas por um novo ponto de vista", "Abandonar cren??as e valores antigos que j?? n??o parecem mais apropriados", "Pensamento estabelecido", "A capacidade de comunicar c de ser anal??tico", "Um escritor, advogado, fil??sofo (profissional ou n??o)", "Esperto e r??pido", "Intelecto, intelig??ncia e pensamento abstrato", "Uma combina????o forte de emo????es quentes e uma intelig??ncia poderosa", "Autoridade, poder, e julgamento", "Uma pessoa que possui um senso pr??tico comum, em geral baseado em pr??-julgamentos e preconceitos, em vez de na observa????o da vida", "Uma linha t??nue entre o intelecto comprometendo e o poder em si mesmo", "Convic????o moral firme, for??a interior e comprometimento profundo, na amizade e inimizade", "N??o se deixa emocionar com facilidade por s??plicas de miseric??rdia ou compaix??o, julga com dureza, mas ?? escrupulosamente justa. ?? muitas vezes encontrado em uma posi????o de autoridade e ?? muito temido mas sempre respeitado", "Severo", "Um homem maduro atrav??s do qual a for??a cortante da Espada do Ar chega a seu ??pice de controle, criativo e de vontade", "Frequentemente envolvido com quest??es de justi??a, disciplina, ordem c??vica e pessoal", "Tudo que deriva da ideia de julgamento e todas as suas liga????es", "poder, comando, autoridade, intelig??ncia militante, lei, fun????es da coroa, e assim por diante", "Um advogado, senador, m??dico", "Yama. O deus Touro que entregou sua vida para ser rei no mundo vindouro", "Um juiz poderoso, uma autoridade divina, a incorpora????o da disciplina e da ordem, pode ser perigoso, desumano, ou perverso", "O Inventor", "Mestre da Criatividade e da Confus??o", "Enxerga novos pontos de vista, deixa a mente extravasar e cria ideias de forma tempestuosa", "Pensamento Extrovertido com Sensibilidade (EST)", "O Comunicador", "Mestre intelectual e mental sem emo????es", "Palestrante, orador, pregador e professor."], },
            { id: 62, nome: "Pr??ncipe De Espadas", palavras_chaves: ["O Marechal", "O Pensador Intuitivo Criativo", "A necessidade de liberar o pensamento criativo, intuitivo, de cortar qualquer coisa que limite a capacidade de desenvolver algum novo pensar aquariano que tenta surgir", "Vai r??pido demais V?? Mais Devagar", "Esta pessoa est?? indo r??pido demais, ela precisa ir mais devagar para ser bem sucedida", "Ar de Ar", "Puramente intelectual, cheio de ideias, intensamente esperto, e de uma racionalidade admir??vel", "Reduz todas as ideias ?? irrealidade ao lev??-las a um mundo ideal de racioc??nio e formalidade, que est??, enquanto tal, alienado dos fatos", "Guerreiro da Mente", "Sentir-se dividido entre dois ideais que parecem ter o mesmo peso ou valor", "Ser corajoso, arrojado, dominador, limpo, e cheio de coragem, mas caso n??o se sinta comprometido, n??o possui poder duradouro", "Foco na Comunica????o", "Altamente empenhado em viver seus ideais filos??ficos na vida cotidiana", "Coloca uma energia incr??vel ao apoiar ou examinar cren??as espec??ficas", "Concentrado em lograr seu intento", "Comprometido com as ideias, pensamentos, filosofia", "Utiliza a mentalidade, comunica????o", "Fala o que pensa, afirmativo e corajoso, por??m teimoso e impaciente", "Corajoso, habilidoso, forte, tendendo ?? ferocidade e ao fanatismo", "N??o reconhece limites", "Dirige toda a energia para o exterior, talvez incomodado por ficar a s??s consigo mesmo", "Extravagante, descuidado, excessivo", "Possui uma certa implacabilidade, um c??rebro brilhante, e um bom tino para neg??cios. No caso de um evento, ele representa uma situa????o que come??a com grande velocidade em meio a grande emo????o, e deixa um certo caos em seu rastro", "Combativo Um homem ou mulher jovem em quem o Ar original ?? duplicado, levando ao surgimento de uma natureza turbulenta e mut??vel", "Entusi??stico, ativo em excesso, apressado, muitas vezes argumentativo", "Habilidade, coragem, capacidade, defesa, discurso, inimizade, ir??, guerra, destrui????o, oposi????o, resist??ncia, ru??na", "Tyr. O deus n??rdico da batalha, e Marte, o deus romano da guerra, que representava guerra, destrui????o, pestil??ncia, ousadia e morte", "O S??bio Mestre da S??ntese e da ilus??o", "Ponto de vista prudente", "Expans??o em dire????o ?? consci??ncia c??smica", "Pensar Extrovertido com Intui????o (ENE)", "O Pensador", "Concentra????o total e absor????o em alguma coisa", "Anal??tico e impessoal", "Desenvolve uma estrutura na qual basear suas verdades pessoais"], },
            { id: 63, nome: "Princesa De Espadas", palavras_chaves: ["O Arquiteto", "Pessoa que come??ou a filosofar agora", "O In??cio do Dom??nio do Elemento Ar", "O Combatente de ??nimos. Os ??nimos do indiv??duo est??o fora de controle e anuviam a clareza mental", "Tamb??m pode ser um indiv??duo que tem o dom de ser um lutador de ??nimos e pode auxiliar os outros a aprender a fortalecer seu pensamento pragm??tico e controlar os ??nimos", "Defensivo", "Esta pessoa est?? muito na defensiva e pode at?? ser agressiva", "Tem sentimentos hostis e emo????es negativas", "Pessoa fofoqueira", "Terra de Ar e como tal, a fixa????o do vol??til", "Ela ?? a materializa????o da Ideia e da influ??ncia do C??u na Terra", "Severa e vingativa, l??gica destrutiva, firme e agressiva, com grande sabedoria pr??tica e sutileza nas coisas materiais", "Grande destreza na administra????o de coisas pr??ticas e na resolu????o de controv??rsias", "Talvez um sentimento de estar envolvido em uma batalha em que se esteja combatendo no????es ou valores tradicionais", "Riscos em Pensamentos ou Comunica????o", "Arriscar-se no seu modo de vida ou na comunica????o", "Aberto ?? justi??a e ?? verdade", "Arriscar cortar atrav??s do racioc??nio confuso e chegar ?? verdade da quest??o", "Penetrante e astucioso", "Arriscar-se com a comunica????o", "??mpeto ?? a????o, impulsivo e ousado", "Um tempo de atividade e de iniciar novos projetos", "A personalidade est?? impaciente, talvez ansiosa em demasia, ou at?? mesmo ousada demais", "Soluciona conflitos e vai de encontro ?? oposi????o pelo afastamento, por simplesmente estar acima de tudo", "Invertida, pode indicar paranoia e obsess??o com problemas", "Um jovem que pode ser muito esperto, mas ?? inescrupuloso e n??o se preocupa com os sentimentos dos outros", "For??a de vontade extremamente forte, podendo ser bastante frio e calculista", "No caso de um evento, pode significar situa????es que foram complicadas pela dissemina????o de rumores ou fofocas", "Dif??cil", "Uma crian??a ou jovem que pode ter conflitos internos que s?? ser??o resolvidos com a maturidade e a experi??ncia", "Uma natureza dif??cil que pode manifestar-se como obstina????o, um tipo de for??a interior e capricho", "Tamb??m pode ser uma crian??a inteligente, sens??vel al??m de sua idade", "Alerta e ??gil", "Uma pessoa indiscreta bisbilhotar os segredos do consulente, Skuld, A l??der das Valqu??rias, uma guerreira que julgava e recebia as almas dos mortos", "Uma mulher de mente agu??ada e de julgamento afiado e bom humor, severa e poderosa, considerada um s??mbolo de problemas e de poss??vel perigo", "O Aluno", "Dom??nio dos Pequenos Detalhes e do T??dio", "A mente curiosa que explora as possibilidades", "Pensamento Introvertido com Intui????o. (INTP)", "O Iniciador", "Traz mudan??as e conhecimento atrav??s da palavra escrita e falada."], },
            { id: 64, nome: "A Raiz Dos Poderes Da Terra - ??s De Discos", palavras_chaves: ["Melhor momento para se iniciar um novo neg??cio ou Projeto Material", "Energia Centrada Pr??tica, Organizada", "A uni??o entre os aspectos espirituais e f??sicos do seu ser", "Irradia o aspecto mais elevado de seu ser que o faz manifestar-se fisicamente", "O dom de estar centrado, com os p??s no ch??o e produtivo, est?? dispon??vel para ser usado durante o pr??ximo ano", "Novas Condi????es Materiais", "O come??o de um novo caminho na vida que lhe trar?? satisfa????o", "A Raiz dos Poderes da Terra", "Como ?? o caso de todos os Ases, este n??o ?? o elemento em si, mas sim a semente do elemento", "Esta carta ?? a afirma????o de uma nova Era em que o Sol e a Lua ser??o reconhecidos como Seres vivos, como nossos companheiros constantes em um Universo de Pura Alegria", "Forma", "Receber o dom da produtividade, algo novo em termos f??sicos ou materiais", "Engajar-se em projetos novos e promissores", "Mover-se em dire????o a um estado de real sucesso externo e de harmonia interna", "O in??cio de ganhos materiais e deleite espiritual", "Um Novo Padr??o ou Forma F??sica", "Plantar sementes de casa nova, emprego, carreiras, ou forma de seguran??a", "Talvez desejo de seguir novos rumos em rela????o ?? sa??de ou ??s finan??as", "Consci??ncia que se Cristaliza", "Sustento do Corpo", "Uma possibilidade de neg??cios ou trabalho", "Materializa????o de ideias", "Centrar ou fundamentar sua energia", "Estabilidade e capacidade para conseguir resultados", "Um dom de energia tel??rica", "o nascimento de algo em forma material", "Alguma coisa se manifesta", "??s vezes, um tempo de medita????o, energia voltada para o interior", "Uma d??diva da Terra", "natureza, riqueza, seguran??a, uma vida feliz", "Prote????o", "Abandonar a seguran??a para entrar em um mundo maior", "O corpo, a mat??ria, os ganhos materiais, o status ea realiza????o mundanos, seguran??a financeira, ou riqueza", "Bons come??os para proposi????es financeiras, neg??cios e empreendimentos", "Pode tamb??m significar a funda????o bem sucedida de um neg??cio que trar?? recompensas financeiras, prosperidade e seguran??a com base s??lida", "Pode tamb??m indicar uma quantia em dinheiro ou presentes, talvez em ouro", "Terra/Lei", "Poder manifesto ou expresso muitas vezes relacionado a circunst??ncias externas ou materiais", "Contentamento perfeito, felicidade, ??xtase", "tamb??m intelig??ncia r??pida", "ouro", "Mostra prosperidade e condi????es materiais confort??veis", "A mais favor??vel de todas as cartas", "Recompensa", "As recompensas, no sentido mundano, dos esfor??os pr??tico tais como oportunidades, seguran??a, funda????es est??veis e posse", "Sucesso", "Capacidade de alcan??ar metas e de ter sucesso no mundo", "Juntar recursos e talentos internos e externos, de modo a se estabilizar no mundo material do trabalho, dinheiro, relacionamentos, sa??de e lar", "D?? Base ?? For??a", "O surgimento de uma manifesta????o f??sica", "O in??cio de qualquer forma f??sica."], },
            { id: 65, nome: "Mudan??a - Dois De Discos", palavras_chaves: ["Momento de saber negociar com todas as partes", "Transi????o F??sica", "Transforma????o", "Um equil??brio conseguido atrav??s de mudan??as que ocorrem no exterior para tornar as coisas mais seguras, est??veis e s??lidas", "O s??mbolo do infinito, a continuidade das mudan??as sem fim", "Tentar Equilibrar as Quest??es Materiais da Vida", "Fazer malabarismos com as quest??es materiais", "O Senhor da Mudan??a", "J??piter em Capric??rnio", "Como ?? apropriado para o dois, esta ?? a energia em sua forma mais fixa, portanto, ?? a mudan??a em sua forma mais fixa de acordo com a doutrina que afirma que a Mudan??a ?? o apoio da estabilidade", "A Terra ?? o trono do esp??rito, ou uma vez tendo chegado ao fundo, imediatamente sa??mos no topo", "Assim sendo, representa a interrela????o harmoniosa dos Quatro Elementos em movimento constante", "Causa Efeito", "O processo de se aprender que cada a????o implica em uma rea????o", "Reconhecimento do processo infinito, yine yang", "O espa??o sagrado da ambivalencia infinita", "A Escolha de um Caminho Fisico", "Afirmar e gerir uma nova forma de estabilidade financeira, material ou interior", "Capacidade de lidar com duas ou mais situa????es ao mesmo tempo", "Expandir seus horizontes", "Adaptabilidade", "Mobilidade", "Mudan??a", "Viagem", "Divers??o", "Tentar coordenar mais de um projeto ao mesmo tempo, ou cuidar do crescimento interno e de realiza????es externas simultaneamente", "Fazer malabarismos com a vida", "A necessidade de manter diversas proposi????es em andamento ao mesmo tempo", "Um fluxo de movimento quando a manipula????o bem sucedida alcan??a o sucesso", "Mudan??a, sobretudo com rela????o a quest??es financeiras, mas tamb??m harmonia dentro da mudan??a caso se consiga ser suficientemente flex??vel para manter as coisas em movimento", "A Sabedoria da Terra", "Todas as coisas mudam", "Mudan??a surgindo da escurid??o, da noite, da quietude", "Da luz avan??amos para escurid??o, da escurid??o para luz", "O portal para as transi????es maiores e movimentos de energia em qualquer ciclo", "Por um lado ?? a carta da alegria, recrea????o e coisas afins, mas pode tamb??m ser lida como noticias ou mensagens escritas,ou como obst??culos, agita????o, problemas, e imbroglos", "Os problemas s??o mais imagin??rios do que reais", "Mudan??a, Uma carta especialmente importante, que implica que os opostos s??o apenas ilus??o, e que todas as coisas s??o, em ??ltima inst??ncia, diferentes formas da mesma coisa", "Reflex??o", "Tirar tempo para observar bem a situa????o", "Contempla????o, avalia????o, pensar, ou ter paci??ncia antes de agir Vida Cotidiana", "A condi????o fisica da dualidades", "Yin yang", "A capacidade de reconhecer e integrar polaridades."], },
            { id: 66, nome: "Trabalho - Tr??s De Discos", palavras_chaves: ["Trabalho em Equipe", "Persist??ncia F??sica", "Tenacidade", "Resist??ncia", "Determina????o acentuada de dar a qualquer situa????o externa tudo de si", "pleno compromisso com uma situa????o a despeito das dificuldades", "Operar num alto n??vel de energia", "Consci??ncia das Responsabilidades", "Ter consci??ncia das responsabilidades e de que est?? sendo observado", "O Senhor do Trabalho", "Marte em Capric??rnio", "O estabelecimento material, a forma b??sica da ideia de Universo", "da Terra, a cristaliza????o das for??as", "A energia ?? construtiva e Marte est?? em sua melhor forma", "Algo foi definitivamente realizado", "Trabalhos", "Um tempo de inventar, criar, ou engendrar", "Todas as coisas materiais est??o se alinhando para trabalhar em prol do sucesso, desde que o sentido do cora????o e do esp??rito n??o se perca", "Planejar Estruturas Seguras", "Planejar as necessidades f??sicas, financeiras, ou de seguran??a realmente desejadas", "Amor ao trabalho", "Elaborar planos pr??ticos utilizando as capacidades e habilidades criativas", "Praticidade", "O dom de trabalhar em conjunto com os outros", "?? a carta do artes??o, Exibir trabalho para aprova????o", "Trabalho feito em conjunto, um ato de constru????o em comum", "Capacidade de trabalhar em conjunto", "Trabalho duro e dedica????o resultando em dom??nio", "Trabalho pr??tico e consciente que pode servir ao autodesenvolvimento", "Uma forma ou estrutura b??sica que est?? acabada, correta e completa, ?? qual agora podem ser acrescentados os toques finais", "Ganhos materiais ou sucesso atrav??s do esfor??o", "Aprova????o e reconhecimento de outros e uma merecida sensa????o de ser bem sucedido", "Esfor??o de time", "Esfor??o certo em prol de um fim s??bio ou elegante", "Com??rcio", "trabalho especializado em geral, no entanto, ?? considerada uma carta de nobreza, aristocracia, fama, gl??ria", "Trabalho realizado, sobretudo com outros", "Ganhos materiais resultantes da capacidade criativa", "Sustentar com paci??ncia e com todo amor e carinho", "Amor pelas suas cria????es", "Trabalhar", "Aumentar e produzir no plano f??sico, em geral, com uma sensa????o de amor e/ou satisfa????o."], },
            { id: 67, nome: "Poder - Quatro De Discos", palavras_chaves: ["Tomar conta de suas posses", "Pot??ncia F??sica", "Vitalidade", "For??a de Car??ter", "Possuir a pr??pria energia pessoal, poder e vitalidade", "Gan??ncia", "Um sentimento de autoconfian??a", "Expressar vitalidade e criatividade no mundo externo", "Segurar com for??a", "Manter as possess??es bem pr??ximas de si mesmo, sejam posses materiais ou emo????es", "O Senhor do Poder", "Gera????o e estabelecimento no seu sentido material mais pleno", "?? aquele poder que domina e estabiliza tudo, mas lida como assuntos muito mais por negocia????o, por m??todos pacificos, do que por afirma????o pr??pria", "?? a Lei, a Constitui????o, sem nenhum elemento agressivo", "Poder", "O desdobrar do poder", "Talvez uma sensa????o de se fechar para o mundo exterior", "Poder que ser?? manndo se oferecido a servi??o do amor", "Tomar provid??ncias concretas para criar seguran??a no mundo f??sico", "Agir para sentir-se centrado e com os p??s na terra", "Dom de conseguir os recursos necess??rios", "Consci??ncia do pr??prio valor", "Poder, Estruturar ou dar ordem a uma situa????o", "Estar centrado ou ser ego??sta", "Possessividade", "Um santu??rio interior de algum tipo, talvez uma casa ou um quarto onde a pessoa pode ficar so e abrigada", "Uma necessidade de sil??ncio", "Depend??ncia de conforto material e seguran??a para ter estabilidade", "Ego??smo, ganancia, ou confinamento", "Dar sentido e estrutura ao universo material", "Autoprote????o", "Manter algo sem nada arriscar, mas tamb??m nada ganhar", "Quem n??o arrisca n??o petisca", "Incremento", "A Terra Misericordiosa", "Crescimento", "Concede poder em uma dada situa????o qualquer e o aumenta", "A certeza da posse, agarrar-se ??s posses", "Dadiva, legado, heran??a", "Avareza Bloqueio de pensamentos e a????es, resultado natural da dedica????o excessiva ??s recompensas materiais", "Come??o", "Movimento de energia com velocidade", "O exercicio e a express??o de seus talentos e sonhos", "Ir em frente, dar o grande salto", "Poder", "O prazer de uma situa????o f??sica", "Estar contente e satisfeito com o modo das coisas, sentir-se t??o protegido quanto se estivesse dentro dos muros de uma fortaleza, sob o dom??nio de um poder benevolente."], },
            { id: 68, nome: "Preocupa????o - Cinco De Discos", palavras_chaves: ["Dificuldades e conflitos", "Revis??o de estrat??gias, afastamento, reagrupamento, realinhamento, e redirecionamento devido a um rev??s", "Um tempo em que a calma foi interrompida, e voc?? est?? temporariamente desequilibrado", "Deixar de lado a situa????o como ela ?? e ir em frente, Ou quando sua ideia de ir a algum lugar ?? ficar correndo em c??rculos"], },
            { id: 69, nome: "Sucesso - Seis De Discos", palavras_chaves: ["Justi??a", "Cada um receber?? o que merece", "Sucesso F??sico", "Realiza????o", "O desejo profundo de ser bem sucedido em algum empreendimento externo", "Sucesso, realiza????o em todos os aspectos da vida pela vontade de arriscar-se, pelo comprometimento, e por confiar na intui????o", "Ter que Dar", "Pela Lei do Carma voc?? est?? sendo obrigado a dar neste momento", "Receber?? de volta mais tarde", "O Senhor do Sucesso", "Lua em Touro", "O estabelecimento pleno e harmonioso da Energia da Terra", "Esta ?? uma carta de acomoda????o, falta total de imagina????o e um tanto sonhador", "O peso da Terra, em ??ltima inst??ncia, trar?? a mera resolu????o das coisas materiais, a mudan??a vir?? em breve", "Por??m, por ora, existe um sistema equilibrado", "Beleza", "O Caminho da Beleza", "Sentir a alegria de dar", "Sarar atrav??s da busca da beleza", "O estabelecimento harm??nico e equilibrado da energia material oriunda de uma consci??ncia elevada", "Um Ciclo F??sico Previs??vel", "Renda ou seguran??a constante e previs??vel", "O dom do sucesso nos relacionamentos, conseguido atrav??s do compartilhamento dos recursos", "Tirar aquilo que ?? necess??rio", "Sensibilidade ??s necessidades dos outros", "Uma troca de energia", "Pode ser uma co-depend??ncia", "Ser pago justamente por aquilo que fez", "Generosidade, ter mais do que o suficiente, compartilhar a sa??de e a boa sorte", "Compartilhar, generosidade, caridade", "Um relacionamento onde uma das pessoas domina outras", "Dar ??s pessoas aquilo que elas s??o capazes de receber", "Sugere que dinheiro devido ser?? pago", "receber o que seu por direito", "Pode ser aux??lio financeiro vindo de um amigo generoso ou do empregador, quest??es financeiras colocadas num patamar mais est??vel", "Tamb??m sugere que a prosperidade atual deva ser compartilhada com outros", "Benef??cio", "A Harmonia da Terra ou a Bela Terra", "Uma for??a de cura e reden????o Um benef??cio muitas vezes atrav??s da forma, padr??o, ou formato que n??o ?? uma estrutura r??gida, mas beleza, fluxo, e forma viva na qual se encontra os padr??es de fluxo elementares", "Presentes, d??divas, gratifica????o", "Aten????o, vigil??ncia", "Agora ?? a hora aceita", "Prosperidade no presente", "Aux??lio vindo de algu??m, ganhos materiais, mas com uma advert??ncia contra o gasto excessivo dos recursos devido ?? generosidade mal dirigida", "Sinergia", "A capacidade de reunir recursos para criar uma alian??a entre poder e sucesso", "Reunir seus pr??prios recursos ou os dos outros", "Sucesso", "Const??ncia na realiza????o", "Ter sa??de, energia f??sica ou recursos pr??prios suficientes para poder incluir os outros"], },
            { id: 70, nome: "Fracasso - Sete De Discos", palavras_chaves: ["Uma pausa durante o crescimento na qual as sementes de um novo crescer e de um caminho melhor, mais recompensador, ser??o descobertas", "Utilizar a sabedoria e a compreens??o para fazer aquilo que ?? certo", "Experi??ncia Fisica", "Experiencias com dinheiro, recursos materiais, ou com o corpo", "Explorar modos de sentir-se centrado, seguro e com os p??s na terra", "N??o importa o que se fa??a, existe um certo momento em que ?? preciso esperar pelos resultados", "Demora", "Avaliar os resultados de seus esfor??os", "Observar os ciclos e processos", "Paciencia", "Crescimento e espera", "A mensagem desta carta ??", "Tenha paci??ncia, n??o h?? nada a fazer, a n??o ser esperar", "N??o h?? maneira de apressar este nascimento, n??o h??, certamente, um modo de ver por dentro", "O momento de poder olhar para tr??s com satisfa????o para aquilo que j?? foi conseguido", "Uma falta de satisfa????o disseminada que vem de empregos ou compromissos insatisfat??rios", "Uma pausa durante o desenvolvimento de um empreendimento ou de um neg??cio", "Avaliar o que foi conseguido e aquilo que ainda precisa ser feito", "Derrota", "Bloqueio profundo, esperan??as enganadas, ansiedade auto-induzida, perda da capacidade de inspirar", "Ultrapassagem", "Ultrapassar os bloqueios que impediam de atingir as metas e aspira????es", "Libera????o de talentos e recursos", "Espera", "Demora", "Incapacidade de agir fisicamente", "Este ?? um bom momento de fazer algo enquanto se espera como praticar seu passatempo favorito, refletir, ou p??r em dia as coisas de casa."], },
            { id: 71, nome: "Prud??ncia - Oito De Discos", palavras_chaves: ["O Ato de Trabalhar", "Cautela F??sica", "Cuidado", "Prud??ncia", "Sabedoria que opera a partir do plano do equil??brio e da integra????o", "assegurar-se de que todas as eventualidades est??o cobertas", "Nem estender-se em demasia, tampouco com modera????o excessiva externamente e funcionar pr??ximo ao equil??brio", "Trabalhar com Const??ncia", "Inicio de Um Novo Empreendimento", "iniciar um projeto novo, e ter outros mais tarde", "O Senhor da Prud??ncia", "O Sol em Virgem", "Significa amar a intelig??ncia que ?? aplicada com amor ??s quest??es materiais", "Um retirar-se", "o retirar secreto de Energia para dentro da Terra f??rtil em um certo sentido, um nascimento", "Em rela????o a quest??es puramente materiais, ?? um tipo de for??a que existe de n??o fazer coisa alguma", "E lan??ar a semente, sentar, e esperar, A Montanha", "Perseveran??a, compromisso, e disciplina", "Aprender, praticar, crescer e florescer", "Uma compreens??o mais profunda do Eu no mundo exterior co que precisa ser criado para alimentar o Eu Interior", "Organizar as Coisas F??sicas", "Fazer escolhas para que o mundo material se conforme, o mais poss??vel, ??s suas necessidades", "Capacidade de desenvolver ou refinar uma habilidade ou arte", "Auto-disciplina", "Prepara????o", "Repeti????o", "Produtividade", "Momento de por em ordem recursos e finan??as", "Arte-aprendizado numa capacidade que o levar?? pela vida de maneira centrada", "Uma divis??o de habilidades entre as pessoas", "Treinamento que ao mesmo tempo traz disciplina e habilidade", "Pensar sobre o trabalho em si, e n??o em qualquer recompensa que possa advir", "Ou impaci??ncia, frustra????o, ambi????o n??o realizada", "A carta do talento", "A possibilidade de tornar uma capacidade ou um talento em uma profiss??o, ou dinheiro ganho atrav??s desta capacidade", "Trabalho duro e ideias pr??ticas formam a base est??vel para construir uma nova e lucrativa carreira, em termos emocionais e financeiros", "Capacidade", "Express??o Gloriosa ou Mente Honrosa", "Merc??rio", "A mente funcionando com substancia", "Habilidade para trabalhar com energia e formas", "A per??cia manipuladora dos dedos trabalhando a subst??ncia", "Uma busca pelas recompensas intoc??veis do conhecimento e a expans??o do aprendizado em ??reas novas", "Mudan??a", "A maneira de manter o equil??brio", "A ??nica coisa constante na vida ?? a mudan??a, portanto, adapte-se ??s novas realidades com uma mudan??a de atitudes, sentimentos, energias e situa????es", "Aprendizado", "Utilizar e fazer aquilo que lhe traz satisfa????o", "Ir adiante, crescer, agir, e trabalhar objetivando uma meta."], },
            { id: 72, nome: "Ganho - Nove De Discos", palavras_chaves: ["Lucro B??sico", "Benef??cio", "Ganho", "Na realidade externa h?? um ganho f??sico proveniente de projetos, relacionamentos ou situa????es", "Contentamento e Paz de Esp??rito", "Paz e quietude e seguran??a oriundos do trabalho ??rduo", "O Senhor do Ganho", "V??nus em Virgem", "O equil??brio da For??a no sucesso", "Boa sorte com rela????o ??s quest??es materiais", "favorecimento e popularidade", "a mistura de boa sorte e boa administra????o", "Nos tornamos cada vez mais complacentes, e nos sentimos como se tudo ser?? sempre para melhor, no melhor dos mundos poss??veis", "O Zenite", "A sensa????o de alcan??ar um objetivo, recompensa, felicidade, equil??brio, alegria, esplendor, unidade, amor, beleza e luz", "Sucesso na vida", "Sucesso oriundo do aprendizado de que a import??ncia do ego n??o ?? nada perto da import??ncia da alma", "Seguran??a Integrada", "Dinheiro, recursos, sa??de, na uma base de seguran??a funcionando de maneira coordenada, e sem entraves", "Luxo e bem estar material", "Recompensa pelos esfor??os", "Ter prazer no lazer solit??rio", "Relaxamento", "Lazer", "Colheita", "Separado dos instintos e da liberdade", "A pessoa solit??ria que aprende atrav??s da arte, sonhos, medita????o, livros, ou dos gatas espirituais", "O desenvolvimento da for??a e da coragem", "A consci??ncia e capacidade de discernir o que realmente importa na vida", "O sucesso e a certeza oriundos de saber que foram feitas as escolhas e as coisas certas, e que foi feito daquilo que ?? necess??rio", "Autodisciplina", "Bem-estar material", "Gozar das coisas boas da vida, mesmo estando sozinho", "O prazer solit??rio oriundo do conforto f??sico e do sucesso material, porque voc?? est?? em paz consigo mesmo e n??o precisa de companhia constante para sentir-se bem", "Existe a promessa de benef??cios materiais e a sua aprecia????o", "Meios", "Fundados no interior da Terra", "O Ventre Multiplicado por Nove", "Lua Expressiva", "Manifestar energia e ideias em forma????o", "Todos os meios para a realiza????o sonhos, sementes, padr??es de vida, fertilidade sexual, verdade espiritual, nascimento interior, visko, ensinamentos de sabedoria", "O ??ltimo passo antes da vida f??sica e o primeiro depois dela", "Sugere a farmara em nido, talvez fartura das pr??prias posses, e ?? testemunho de bem- estar material", "Prud??ncia, seguran??a, sucesso, certeza e discernimento", "Aquilo que ?? pressagiado pelas cartas vizinhas tornar-se-?? realidade em breve", "Sucesso no sentido de gesta????o, produtividade, cultivo cuidadoso", "Criar e amar a beleza e a natureza", "Colheita", "Os frutos do trabalho ??rduo", "Colher o que foi plantado e cultivado", "Colher os frutos do trabalho", "Trabalho criativo solit??rio", "Sucesso que resulta de seguir seu pr??prio caminho", "A possibilidade de realizar aquilo que Nietzsche chamou de Amor fait, o amor pelo pr??prio destino."], },
            { id: 73, nome: "Riqueza - Dez De Discos", palavras_chaves: ["Riqueza", "O Mundo", "Prosperidade F??sica", "Abund??ncia", "Um estado de riqueza e prosperidade em todos os n??veis de consci??ncia e que agora se manifesta no mundo exterior", "Sucesso Material", "Felicidade dominante e bem-estar material, sobretudo o da fam??lia", "O Senhor da Riqueza", "Merc??rio em Virgem", "O ac??mulo de riquezas", "A ??ltima grande solidifica????o, n??o apenas do naipe de Ouros, mas, da mesma forma que a carta XXI, o Universo est?? para as cartas de Trunfo, ?? a soma total das trinta e cinco cartas pequenas", "A for??a completamente gasta resultando na morte e no renascimento, demonstrado pelo Conjunto, ou uni??o, de Merc??rio e Virgem", "A Grande Obra", "Uma sensa????o de ordem, desenho, equil??brio e harmonia", "A vida avan??ando num ritmo maravilhoso", "Perceber que o verdadeiro significado da riqueza ?? seguir o caminho espiritual", "Utilizar a riqueza de recursos e talentos para construir estruturas duradouras no mundo", "Tradi????es e conven????es herdadas ou estabelecidas", "Durabilidade e permanencia", "Prosperidade e riqueza", "Fam??lia e lar", "Um circulo de apoio dentro do qual a manifesta????o tudo que acontece", "A sensa????o de fazer parte de um grupo ou de uma familia", "Um simbolo de riqueza- o consulente precisa, e mais ainda, est?? contido no poder da energia de grupo", "Casa estabelecida, vida boa, seguran??a e conforto", "A magia e as b??n????os da natureza e do universo", "Estabilidade financeira e fundamentos firmes para vida dom??stica e em familia", "Sugere a aquisi????o de propriedade para a funda????o de novas gera????es, ou tradi????es sendo passadas dentro da familia com um sentido de continuidade e seguran??a", "Oportunidade", "A inst??ncia m??xima da Terra da Terra, o corpo planet??rio, nosso pr??prio corpo, e toda a mat??ria e energia", "Oportunidade material e espiritual em qualquer situa????o", "Ganhos", "riquezas", "assuntos de fam??lia, arquivos, extra????o, a moradia da fam??lia", "Representa casa ou moradia e deriva seu valor das outras cartas", "Prote????o", "O charme do poder sobrepujante, o que implica seguran??a no sentido material, seguran??a esta n??o criada por si pr??prio mas pelo trabalho de outrem", "Recompensa Ser bem sucedido no mundo material", "Abund??ncia que vem do fluxo de renda e produ????o, Arriscar-se, pensar de forma otimista e abundante, n??o parar", "Saciedade Chegar ?? plenitude e ao extremo, seja para bem ou para o mal, ou algo f??sico sande, corpo, trabalho, dinheiro, seguran??a."], },
            { id: 74, nome: "Rainha De Discos", palavras_chaves: ["O Inspetor", "Coordenador de Grupos", "A Rainha que administra o Castelo", "A Nutricionista F??sica", "O embelezamento do corpo e a nutri????o saud??vel s??o importantes", "Consci??ncia das Limita????es", "A pessoa tem consci??ncia do que a cerca, do quanto pode fazer, e de suas limita????es. O que ela pode fazer, ela far?? bem, e dar?? frutos", "??gua da Terra", "A fun????o da Terra enquanto M??e", "Passividade, em geral em seu aspecto mais elevado", "Possui enorme reserva de carinho, bondade, grandeza de cora????o", "quieta, trabalhadora, sensata e pr??tica", "Frequentemente tem dificuldade em elevar-se acima da mat??ria, e n??o ?? muito inteligente", "Limiar do Nascimento", "Sentir um alto n??vel de compaix??o", "Amar e nutrir a Terra, regozijar-se com a vida, amar o plano f??sico e a oportunidade de manifestar o esp??rito em sua forma f??sica", "Saber que todas as formas de manifesta????o possuem a mesma origem", "Compet??ncia F??sica ou Pr??tica", "Sentir um alto grau de compet??ncia", "Saber criar e manter a seguran??a pessoal", "Amor pelo mundo, pela terra e pela vida", "Canaliza informa????es sens??rias e conhecimentos pr??ticos", "Inspira confian??a e prov?? seguran??a", "Fomenta ou abafa o bem estar f??sico", "Os aspectos procriativos e de fomento da maternidade f??sica", "Uma personalidade baseada no mundo f??sico, em harmonia com a M??e-Natureza", "Sa??de", "Um amor e uma unidade com o mundo", "Conhecer e acreditar em si mesmo e na magia da vida", "Permitir que as for??as ocultas do mundo fluam atrav??s de voc?? para a sua vida cotidiana", "n??o confiar em si pr??prio em uma situa????o espec??fica", "Pr??tica e materialista", "Ela adora as coisas boas da vida e depois de consegui-las fica facilmente contente em passar a vida desfrutando-??s", "Sabe o que quer e fica satisfeita quando consegue", "??, com frequ??ncia, rica porque trabalha muito para obter ganhos materiais e ?? generosa com sua boa sorte", "Pr??tica", "Uma mulher madura que ?? capaz de criar formas espec??ficas da subst??ncia potencial, capaz de fomentar e definir", "Seu poder ?? de sabedoria pr??tica no n??vel humano e, no n??vel interno, a sabedoria aplicada da reflex??o espiritual", "Uma mulher escura com grandeza de alma e uma intelig??ncia s??ria", "Opul??ncia, generosidade, grandeza, seguran??a, liberdade", "Erda. A M??e Terra, a Erda teut??nica, que era adorada por todos os povos primitivos como a doadora de vida e Musa prim??ria", "Generosidade, opul??ncia, fertilidade transbordante, compaix??o, conforto, amparo e abund??ncia", "Uma personalidade calorosa, fomentadora", "A Preservadora", "Dom??nio da Reflex??o e Fomento", "Protege e preserva pela multiplica????o", "Sensibilidade Introvertida com Pensamento, (ISTJ)", "A Provedora", "Como a Rainha tem seguran??a interior, ela ?? capaz de prover seguran??a para os outros e, deste modo, no n??vel dos acontecimento, esta carta ?? tradicionalmente chamada de a resposta ??s preces."], },
            { id: 75, nome: "Cavaleiro De Discos", palavras_chaves: ["O Promotor", "O Rei Trabalhador", "O M??dico F??sico", "o Curandeiro", "Uma preocupa????o com o corpo e com a sa??de", "Interesse nos cuidados com a sa??de e com a capacidade de ser um l??der e guia de outros em quest??es relativas ?? sa??de", "Sucesso material", "Esta pessoa atingiu o sucesso material e lutar?? para mant??-lo", "A parte fogosa da Terra", "Trabalhador e paciente, preocupado com coisas materiais, e teimoso, mas pouca compreens??o intelectual at?? mesmo dos assuntos que o tocam mais diretamente", "O Esp??rito da Fertiliza????o", "Uma sensa????o de praticidade alegre que ?? refletida na vida cotidiana", "Dominar of potencial atrav??s do autoconhecimento", "Estabilidade, confiabilidade, sucesso, a ep??tome do sucesso material", "Liberar algo F??sico", "O fim de um padr??o f??sico, material, financeiro ou de seguran??a que j?? n??o funciona mais", "Trabalho estabelecido", "A capacidade de produzir e de ser pr??tico", "Um gerente, financista, artes??o", "Preocupado com seguran??a e qualidade", "Uma pessoa que aprendeu a trabalhar no plano f??sico de tal maneira que ser?? bem sucedido no que quer que fa??a", "Saber aonde ir e como chegar l??", "Generoso, at?? mesmo corajoso, n??o ?? muito dado a aventuras", "Atividades comuns, realiza????es, posi????o social, e sucesso descontra??do e prazeroso", "Um homem que ama o dinheiro e as riquezas, e que se sente feliz em acumular o quanto puder", "Muito esperto nos neg??cios, um mago das finan??as", "Ele n??o ?? corrupto no seu amor pelo dinheiro e pelas riquezas e ganha dinheiro atrav??s do esfor??o e da paci??ncia", "Generoso com o que tem e divide de boa vontade os frutos de seu trabalho", "Confi??vel", "Um homem maduro e s??bio, de quem se pode depender, uma pessoa em que os outros podem confiar e confiam", "O ancestral masculino primal da Terra, aquele que segura o Espelho dos Elementos e nos ensina que precisamos aprender equil??brio e for??a de dentro de n??s mesmos", "O homem mais velho em quem outros instintivamente confiam, dependem, e a quem pedem ajuda e conselhos", "Um homem bastante sombrio, corajoso, mas com uma tendencia um tanto let??rgica", "Coragem, intelig??ncia pr??tica, capacidade intelectual c comercial, ??s vezes dons matem??ticos e sucesso neste ramo", "Baal. O deus da montanha que entregou as leis do alto das montanhas sagradas aos homens que escalaram o cume para receb??-las", "Severo, imponente, autorit??rio, pesado, tenaz, confi??vel, pr??tico e est??vel", "O Realizador", "Dom??nio da Sinergia e da Recompensa", "A vontade de ser bem-sucedido e alcan??ar metas", "realiza????o, manifesta????o e produ????o", "Sensibilidade Extrovertida com Pensamento. (ESTP)", "O Produtor", "Ordenar, encarregar-se, manifestar e liberar as coisas materiais", "Um bom provedor do ponto de vista material, porque gosta de trabalhar e valoriza a seguran??a"], },
            { id: 76, nome: "Pr??ncipe De Discos", palavras_chaves: ["O Artista", "Gente que faz", "O Arquiteto F??sico", "Quest??es que envolvem alguma atividade f??sica, constru????o, esportes, bom t??nus muscular", "Uma determina????o ferrenha de ir em frente por maiores que sejam os bloqueios ou obst??culos", "Tamb??m o dom do pensar de forma pr??tica", "Ficar Quieto enquanto planeja o Rumo Futuro", "Esta pessoa n??o est?? indo adiante", "Ele tem as ideias corretas, mas por enquanto lhe falta motiva????o", "Ar da Terra", "A fluoresc??ncia e frutifica????o do Ar e da Terra", "Capaz e duradouro, constante e perseverante, com grande energia dispensada ??s mais s??lidas das quest??es pr??ticas", "Medita????o em Movimento", "Realiza????o atrav??s da medita????o pensante", "Sentir equil??brio pessoal e produtividade", "Cavaleiro Concentrado no Mundo Material", "Criar ou ensinar suas habilidades", "Utilizar seu conhecimento", "Guerreiro comprometido com a seguran??a", "Pessoa est??vel e confi??vel, mas ??s vezes teimosa", "A for??a vital expressa atrav??s do corpo e dos sentidos", "Um construtor", "Trabalhar com const??ncia em dire????o ??s suas metas, saber o que quer e concentrar se unicamente em consegui-lo", "Respons??vel, trabalhador, sem reclamar", "Em seu melhor sentido ele est?? profundamente vinculado ao mundo exterior e ?? simplicidade", "Se dedica apenas ??s quest??es pr??ticas, alienando-se das coisas mais profundas da Terra", "Confi??vel e bom e far?? um trabalho at?? o fim, n??o importando quanto tempo leve", "Alcan??a suas metas porque nunca desiste ?? porque almeja recompensas poss??veis de serem conseguidas", "Bom com crian??as e animais, amante da natureza", "Caso seja um evento, significa o resultado final positivo de uma situa????o que se arrasta por muito tempo ou que parecia ser infrut??fera", "Jovem Ambicioso", "Um homem ou mulher jovem que procura os benef??cios de mudar suas circunst??ncias", "Muitas vezes, uma vontade correspondente de trabalhar duro, e lutar?? e se esfor??ar?? para atingir sua ambi????o escolhida", "Um homem lerdo, pesado e persistente", "Um homem ??til", "descobertas ??teis", "Merlin, A figura misteriosa das lendas do Rei Artur que profetizou a morte de Vortigern nas m??os dos bret??es, e que, supostamente, completou a constru????o do templo que veio a ser o Stonehenge", "A defesa da livre express??o, verdade, honra, paci??ncia e determina????o", "Implica na investiga????o das origens das coisas e uma destemida busca de pistas, a despeito dos poss??veis perigos", "O Dominador", "Dom??nio da Mudan??a e da Colheita", "Poder produtivo com conhecimento, responsabilidade e disciplina", "Sensibilidade extrovertida com Sentimento. ESPP", "O Construtor", "Aprende bem, e de forma realista, com as experi??ncias f??sicas da vida", "Preocupa????o com a constru????o de um s??lido futuro financeiro"], },
            { id: 77, nome: "Princesa De Discos", palavras_chaves: ["O Protetor", "A Gr??vida", "Quest??es relativas ?? maternidade e ?? gravidez", "Pode tamb??m ser o nascimento de ideias, projetos, identidade e aspectos de si mesmo", "Demasiadamente Absorto em Algo", "Esta pessoa est?? por demais absorta em uma ideia, situa????o ou emo????o e, portanto, n??o tem prazer naquilo que o cerca", "Terra de Terra", "O limiar da transfigura????o", "Forte e bonita", "A feminilidade em sua proje????o m??xima, contendo todas as caracter??sticas de mulher, e depende totalmente das influ??ncias ??s quais ela est?? sujeita para que uma ou outra caracter??stica se manifeste", "Revela????o", "Equil??brio completo e sucesso total. O limiar da transforma????o", "Algo de novo est?? por vir, resultado da conclus??o de um ciclo, e o presente est?? impregnado com o segredo do futuro", "Renova????o do seu comprometimento com uma base de seguran??a que estava estagnada, ou arriscar algo que, no passado, estava em seguran??a", "Aberta ao conhecimento, i experi??ncia e habilidades novas", "A procura da vis??o", "Busca na terra a dire????o", "Avalia valores", "For??a pura e elementar da terra a personalidade buscando seu pr??prio nome atrav??s de ora????es solit??rias e jejum", "Um tempo de solid??o e de aprender a confiar na sabedoria do corpo e dos instintos", "O estudante perdido nos estudos, prestando pouca aten????o a qualquer coisa al??m dos mesmos", "Trabalho real, estudo e erudi????o", "Algu??m que se aproxima de qualquer atividade com essas qualidades de envolvimento e fascina????o", "Uma crian??a ou jovem que tem respeito pelas coisas materiais e leva a s??rio o aprendizado de ideias novas", "Cuidadosa, trabalhadora e diligente, apesar de ser, ??s vezes, um pouco solene", "No caso de um evento, com frequ??ncia significa uma oportunidade de ganhar dinheiro, geralmente come??ando de baixo mas com bastante promessa de futuro", "Ameno", "Uma crian??a ou jovem que pode ser moldado ou desenvolvido", "Crian??as diretas, sem complica????es, que espelham as pr??prias circunst??ncias e os outros que o cercam", "O ser com potencial imenso resultante. da mente e da alma impression??veis e, assim, ser?? de grande influ??ncia quando ele ou ela surgir na primavera", "Um jovem sombrio", "um jovem oficial ou soldado", "uma crian??a", "Aplica????o, estudo, erudito, reflex??o, not??cias, mensagens, e aquele que as traz", "tamb??m dom??nio e administra????o", "Nimue, Nemesis e a companheira de Merlin. Uma divindade das druidas que, de acordo com os mitos antigos, ensinou magia a Merlin", "Concentra????o, desejo de aprender, e aplica????o nas pesquisas acad??micas", "O Jogador", "Dom??nio do Come??o e do Retrocesso", "O interior l??dico da crian??a que cria com fantasia, imagina????o e devaneios", "Sensibilidade Introvertida com Sentimento (ISF)", "O Aluno", "A necessidade de estabelecer a seguran??a, talvez atrav??s dos estudos e da introspec????o", "Traz mensagens relativas ?? sa??de, ao dinheiro, ao trabalho ou aos estudos"] }
      ]






































































































































































































































































































































































































































































































































































































































































































































































































































































































































})