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
            { id:11, nome: "Luxúria", numero: "n11n", letra: "Teth", caminho: "c22c", img: "Thot-T-11.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:12, nome: "Enforcado", numero: "n12n", letra: "Mem", caminho: "c23c", img: "Thot-T-12.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:13, nome: "Morte", numero: "n13n", letra: "Nun", caminho: "c24c", img: "Thot-T-13.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:14, nome: "Arte", numero: "n14n", letra: "Samekh", caminho: "c25c", img: "Thot-T-14.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:15, nome: "Diabo", numero: "n15n", letra: "Ayin", caminho: "c26c", img: "Thot-T-15.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:16, nome: "Torre", numero: "n16n", letra: "Pé", caminho: "c27c", img: "Thot-T-16.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:17, nome: "Estrela", numero: "n17n", letra: "Heh", caminho: "c28c", img: "Thot-T-17.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:18, nome: "Lua", numero: "n18n", letra: "Qoph", caminho: "c29c", img: "Thot-T-18.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:19, nome: "Sol", numero: "n19n", letra: "Resh", caminho: "c30c", img: "Thot-T-19.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:20, nome: "Aeon", numero: "n20n", letra: "Shin", caminho: "c31c", img: "Thot-T-20.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:21, nome: "O Universo", numero: "n21n", letra: "Tau", caminho: "c32c", img: "Thot-T-21.png", cabala: [], naipe: "", planeta: "", signo: "", decanato: "", tipo: "maior", },
            { id:22, nome: "A Raiz Dos Poderes De Fogo - Ás De Bastões", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-W-0A.png", cabala: ["Kether"], naipe: "bastões", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:23, nome: "Domínio - Dois De Bastões", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-W-02.png", cabala: ["Chokmah"], naipe: "bastões", planeta: "Marte", signo: "Áries", decanato: "Marte em Áries", tipo: "menor", },
            { id:24, nome: "Virtude - Três De Bastões", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-W-03.png", cabala: ["Binah"], naipe: "bastões", planeta: "Sol", signo: "Áries", decanato: "Sol em Áries", tipo: "menor", },
            { id:25, nome: "Conclusão - Quatro De Bastões", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-W-04.png", cabala: ["Chesed"], naipe: "bastões", planeta: "Venus", signo: "Áries", decanato: "Venus em Áries", tipo: "menor", },
            { id:26, nome: "Disputa - Cinco De Bastões", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-W-05.png", cabala: ["Geburah"], naipe: "bastões", planeta: "Saturno", signo: "Leão", decanato: "Saturno em Leão", tipo: "menor", },
            { id:27, nome: "Vitória - Seis De Bastões", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-W-06.png", cabala: ["Tipheret"], naipe: "bastões", planeta: "Jupiter", signo: "Leão", decanato: "Jupiter em Leão", tipo: "menor", },
            { id:28, nome: "Valor - Sete De Bastões", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-W-07.png", cabala: ["Netzach"], naipe: "bastões", planeta: "Marte", signo: "Leão", decanato: "Marte em Leão", tipo: "menor", },
            { id:29, nome: "Rapidez - Oito De Bastões", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-W-08.png", cabala: ["Hod"], naipe: "bastões", planeta: "Mercurio", signo: "Sagitário", decanato: "Mercurio em Sagitário", tipo: "menor", },
            { id:30, nome: "Força - Nove De Bastões", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-W-09.png", cabala: ["Yesod"], naipe: "bastões", planeta: "Lua", signo: "Sagitário", decanato: "Lua em Sagitário", tipo: "menor", },
            { id:31, nome: "Opressão - Dez De Bastões", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-W-10.png", cabala: ["Malkuth"], naipe: "bastões", planeta: "Saturno", signo: "Sagitário", decanato: "Saturno em Sagitário", tipo: "menor", },
            { id:32, nome: "Cavaleiro De Bastões", numero: "nn", letra: "", caminho: "c2c", img: "Thot-W-KI.png", cabala: ["Chokmah"], naipe: "bastões", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:33, nome: "Rainha De Bastões", numero: "nn", letra: "", caminho: "c3c", img: "Thot-W-QU.png", cabala: ["Binah"], naipe: "bastões", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:34, nome: "Príncipe De Bastões", numero: "nn", letra: "", caminho: "c6c", img: "Thot-W-J2.png", cabala: ["Tipheret"], naipe: "bastões", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:35, nome: "Princesa De Bastões", numero: "nn", letra: "", caminho: "c10c", img: "Thot-W-J1.png", cabala: ["Malkuth"], naipe: "bastões", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:36, nome: "A Raiz Dos Poderes Da Água - Ás De Copas", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-C-0A.png", cabala: ["Kether"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:37, nome: "Amor - Dois De Copas", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-C-02.png", cabala: ["Chokmah"], naipe: "Copas", planeta: "Venus", signo: "Câncer", decanato: "Venus em Câncer", tipo: "menor", },
            { id:38, nome: "Abundância - Três De Copas", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-C-03.png", cabala: ["Binah"], naipe: "Copas", planeta: "Mercurio", signo: "Câncer", decanato: "Mercurio em Câncer", tipo: "menor", },
            { id:39, nome: "Luxúria - Quatro De Copas", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-C-04.png", cabala: ["Chesed"], naipe: "Copas", planeta: "Lua", signo: "Câncer", decanato: "Lua em Câncer", tipo: "menor", },
            { id:40, nome: "Desapontamento - Cinco De Copas", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-C-05.png", cabala: ["Geburah"], naipe: "Copas", planeta: "Marte", signo: "Escorpião", decanato: "Marte em Escorpião", tipo: "menor", },
            { id:41, nome: "Prazer - Seis De Copas", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-C-06.png", cabala: ["Tipheret"], naipe: "Copas", planeta: "Sol", signo: "Escorpião", decanato: "Sol em Escorpião", tipo: "menor", },
            { id:42, nome: "Deboche (Corrupção) - Sete De Copas", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-C-07.png", cabala: ["Netzach"], naipe: "Copas", planeta: "Venus", signo: "Escorpião", decanato: "Venus em Escorpião", tipo: "menor", },
            { id:43, nome: "Indolência - Oito De Copas", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-C-08.png", cabala: ["Hod"], naipe: "Copas", planeta: "Saturno", signo: "Peixes", decanato: "Saturno em Peixes", tipo: "menor", },
            { id:44, nome: "Felicidade - Nove De Copas", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-C-09.png", cabala: ["Yesod"], naipe: "Copas", planeta: "Jupiter", signo: "Peixes", decanato: "Jupiter em Peixes", tipo: "menor", },
            { id:45, nome: "Saciedade - Dez De Copas", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-C-10.png", cabala: ["Malkuth"], naipe: "Copas", planeta: "Marte", signo: "Peixes", decanato: "Marte em Peixes", tipo: "menor", },
            { id:46, nome: "Cavaleiro De Copas", numero: "nn", letra: "", caminho: "c2c", img: "Thot-C-KI.png", cabala: ["Chokmah"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:47, nome: "Rainha De Copas", numero: "nn", letra: "", caminho: "c3c", img: "Thot-C-QU.png", cabala: ["Binah"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:48, nome: "Príncipe De Copas", numero: "nn", letra: "", caminho: "c6c", img: "Thot-C-J2.png", cabala: ["Tipheret"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:49, nome: "Princesa De Copas", numero: "nn", letra: "", caminho: "c10c", img: "Thot-C-J1.png", cabala: ["Malkuth"], naipe: "Copas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:50, nome: "A Raiz Dos Poderes Do Ar - Ás De Espadas", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-S-0A.png", cabala: ["Kether"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:51, nome: "Paz - Dois De Espadas", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-S-02.png", cabala: ["Chokmah"], naipe: "Espadas", planeta: "Lua", signo: "Libra", decanato: "Lua em Libra", tipo: "menor", },
            { id:52, nome: "Dor - Três De Espadas", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-S-03.png", cabala: ["Binah"], naipe: "Espadas", planeta: "Saturno", signo: "Libra", decanato: "Saturno em Libra", tipo: "menor", },
            { id:53, nome: "Trégua - Quatro De Espadas", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-S-04.png", cabala: ["Chesed"], naipe: "Espadas", planeta: "Jupiter", signo: "Libra", decanato: "Jupiter em Libra", tipo: "menor", },
            { id:54, nome: "Derrota - Cinco De Espadas", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-S-05.png", cabala: ["Geburah"], naipe: "Espadas", planeta: "Venus", signo: "Aquário", decanato: "Venus em Aquário", tipo: "menor", },
            { id:55, nome: "Ciência - Seis De Espadas", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-S-06.png", cabala: ["Tipheret"], naipe: "Espadas", planeta: "Mercurio", signo: "Aquário", decanato: "Mercurio em Aquário", tipo: "menor", },
            { id:56, nome: "Futilidade - Sete De Espadas", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-S-07.png", cabala: ["Netzach"], naipe: "Espadas", planeta: "Lua", signo: "Aquário", decanato: "Lua em Aquário", tipo: "menor", },
            { id:57, nome: "Interferência - Oito De Espadas", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-S-08.png", cabala: ["Hod"], naipe: "Espadas", planeta: "Jupiter", signo: "Gêmeos", decanato: "Jupiter em Gêmeos", tipo: "menor", },
            { id:58, nome: "Crueldade - Nove De Espadas", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-S-09.png", cabala: ["Yesod"], naipe: "Espadas", planeta: "Marte", signo: "Gêmeos", decanato: "Marte em Gêmeos", tipo: "menor", },
            { id:59, nome: "Ruína - Dez De Espadas", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-S-10.png", cabala: ["Malkuth"], naipe: "Espadas", planeta: "Sol", signo: "Gêmeos", decanato: "Sol em Gêmeos", tipo: "menor", },
            { id:60, nome: "Rainha De Espadas", numero: "nn", letra: "", caminho: "c2c", img: "Thot-S-KI.png", cabala: ["Chokmah"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:61, nome: "Cavaleiro De Espadas", numero: "nn", letra: "", caminho: "c3c", img: "Thot-S-QU.png", cabala: ["Binah"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:62, nome: "Príncipe De Espadas", numero: "nn", letra: "", caminho: "c6c", img: "Thot-S-J2.png", cabala: ["Tipheret"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:63, nome: "Princesa De Espadas", numero: "nn", letra: "", caminho: "c10c", img: "Thot-S-J1.png", cabala: ["Malkuth"], naipe: "Espadas", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:64, nome: "A Raiz Dos Poderes Da Terra - Ás De Discos", numero: "n1n", letra: "", caminho: "c1c", img: "Thot-D-0A.png", cabala: ["Kether"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor", },
            { id:65, nome: "Mudança - Dois De Discos", numero: "n2n", letra: "", caminho: "c2c", img: "Thot-D-02.png", cabala: ["Chokmah"], naipe: "Discos", planeta: "Jupiter", signo: "Capricórnio", decanato: "Jupiter em Capricórnio", tipo: "menor", },
            { id:66, nome: "Trabalho - Três De Discos", numero: "n3n", letra: "", caminho: "c3c", img: "Thot-D-03.png", cabala: ["Binah"], naipe: "Discos", planeta: "Marte", signo: "Capricórnio", decanato: "Marte em Capricórnio", tipo: "menor", },
            { id:67, nome: "Poder - Quatro De Discos", numero: "n4n", letra: "", caminho: "c4c", img: "Thot-D-04.png", cabala: ["Chesed"], naipe: "Discos", planeta: "Sol", signo: "Capricórnio", decanato: "Sol em Capricórnio", tipo: "menor", },
            { id:68, nome: "Preocupação - Cinco De Discos", numero: "n5n", letra: "", caminho: "c5c", img: "Thot-D-05.png", cabala: ["Geburah"], naipe: "Discos", planeta: "Mercurio", signo: "Touro", decanato: "Mercurio em Touro", tipo: "menor", },
            { id:69, nome: "Sucesso - Seis De Discos", numero: "n6n", letra: "", caminho: "c6c", img: "Thot-D-06.png", cabala: ["Tipheret"], naipe: "Discos", planeta: "Lua", signo: "Touro", decanato: "Lua em Touro", tipo: "menor", },
            { id:70, nome: "Fracasso - Sete De Discos", numero: "n7n", letra: "", caminho: "c7c", img: "Thot-D-07.png", cabala: ["Netzach"], naipe: "Discos", planeta: "Saturno", signo: "Touro", decanato: "Saturno em Touro", tipo: "menor", },
            { id:71, nome: "Prudência - Oito De Discos", numero: "n8n", letra: "", caminho: "c8c", img: "Thot-D-08.png", cabala: ["Hod"], naipe: "Discos", planeta: "Sol", signo: "Virgem", decanato: "Sol em Virgem", tipo: "menor", },
            { id:72, nome: "Ganho - Nove De Discos", numero: "n9n", letra: "", caminho: "c9c", img: "Thot-D-09.png", cabala: ["Yesod"], naipe: "Discos", planeta: "Venus", signo: "Virgem", decanato: "Venus em Virgem", tipo: "menor", },
            { id:73, nome: "Riqueza - Dez De Discos", numero: "n10n", letra: "", caminho: "c10c", img: "Thot-D-10.png", cabala: ["Malkuth"], naipe: "Discos", planeta: "Mercurio", signo: "Virgem", decanato: "Mercurio em Virgem", tipo: "menor", },
            { id:74, nome: "Rainha De Discos", numero: "nn", letra: "", caminho: "c2c", img: "Thot-D-KI.png", cabala: ["Chokmah"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:75, nome: "Cavaleiro De Discos", numero: "nn", letra: "", caminho: "c3c", img: "Thot-D-QU.png", cabala: ["Binah"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:76, nome: "Príncipe De Discos", numero: "nn", letra: "", caminho: "c6c", img: "Thot-D-J2.png", cabala: ["Tipheret"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", },
            { id:77, nome: "Princesa De Discos", numero: "nn", letra: "", caminho: "c10c", img: "Thot-D-J1.png", cabala: ["Malkuth"], naipe: "Discos", planeta: "", signo: "", decanato: "", tipo: "menor corte", }
      ],
      palavras_chaves :[
            { id: 0, nome: "Louco", palavras_chaves: ["Início da Jornada", "Começar um novo projeto, Aventura", "Brainstorming, Brincar com as mais diversas possibilidades", "Busca", "Caos Criativo", "Começar do zero", "Convivência Afetuosa", "Coringa", "Desapego", "Descontração", "Despreocupação", "Encontro novo e revigorante", "Estar aberto para novas atividades", "Experimentar algo novo de uma forma descontraída e divertida", "Falta de responsabilidade", "Indecisão", "Inexperiência profissional", "Ingenuidade", "Inocência", "Insensatez", "Irresponsabilidade", "leviandade", "Liberdade", "Libertação", "Reinício", "Novos Começos", "Oportunidade", "Paquera", "Partida para desconhecido", "Pausa produtiva", "Planos caóticos", "Potencial original", "Relacionamento aberto", "Vontade de curtir a vida."], },
            { id: 1, nome: "Mago", palavras_chaves: ["Verdadeira Vontade", "Poder Criador", "Ação", "Aceitar a si e aos outros", "Aprendizagem", "Atividade", "Atitude", "Auto- realização", "Capacidade de imposição", "Concentração Consciència", "Conscientização profunda", "a Casa de Deus", "Dar primeiro passo", "Demonstrar concentração e habilidade", "Destreza", "Experiência", "Fascinação", "Força de atração", "Força de vontade", "Habilidade", "Impulso inicial", "Juventude", "ludibriar os outros", "Maestria", "Negociar com agilidade e esperteza", "Passar em provas", "Penetrar no consciente da totalidade.", "Perspicácia", "Poder de Convicção", "Poder de resolução", "Realizar tarefas com maestria", "Solucionar problemas com competência", "Ter êxito", "Tomar iniciativa", "Vitalidade."], },
            { id: 2, nome: "Sacerdotisa", palavras_chaves: ["A virgem", "Alma gémea", "Aptidão mediúnica e inspiradora", "Aquilo que está invisível", "Atividades terapêuticas", "Atração profunda", "Capacidade", "Ciclos naturais", "Compreensão", "Compreensão da mensagem dos sonhos", "Conexão total", "Confiança", "Confiança mútua", "Confiar na sua voz interior, Consciència", "Conselheira", "Dedicação", "Deixar-se encontrar, Discrição", "Disposição passiva", "Empatia", "Entender o Outro", "Equilibrada", "Espiritualidade", "Estabilidade", "Fantasia", "Força Interior", "Guia interior, Inconsciente", "Intuição", "Lucidez", "Mistério Mulher de idade e Madura ou Experiente", "Paciência", "Pessoa Reservada", "Política", "Presunção", "Profundidade", "Prudência", "Sabedoria", "Segredos", "Segurança instintiva", "Sensibilidade", "Solidariedade", "União espiritual", "Visões", "Vivenciar experiências espirituais"], },
            { id: 3, nome: "Imperatriz", palavras_chaves: ["A mãe", "Abundância", "Atividade criativa", "Aumento da família", "Bem estar Material", "Boas chances de crescimento e desenvolvimento", "Bom senso", "Carácter, Comando Amoroso", "Comunicação", "Confiar na capacidade de crescimento da vida e estar aberto a mudanças", "Crescimento", "Criação", "Criação de novos conceitos", "Criatividade", "Cuidar com carinho do que foi confiado, Cultivo", "Desenvolvimento intenso", "Esposa", "Evolução", "Fecundidade", "Fertilidade", "Força intuitiva", "Gravidez", "Independência", "Inovações", "Inteligência", "Mãe de Família", "Maternidade", "Mulher Apaixonada", "Nascimento", "Nutrição", "Objetividade", "Perspectivas novas e boas", "Poder natural", "Possessividade", "Potencial criativo", "Profunda confiança", "Proteção e aconchego", "Realização", "Reativação de um vínculo antigo", "Segurança", "Senso apurado para as tendências e ciclos nos negócios", "Sensualidade", "Sensualidade benéfica", "Sentimentos Generosos e Positivos", "Solicitude", "Superproteção", "Ter uma visão do eterno ciclo de nascimento e morte", "Transformações profissionais."], },
            { id: 4, nome: "Imperador", palavras_chaves: ["O Pai", "O Chefe", "O Líder", "Acordos claros", "Autoridade", "Certeza", "Ceticismo", "Chefe", "Comando", "Consolidação", "Continuidade", "Desenvolvimento de projetos com clareza", "Direção", "Disciplina", "Disciplina e perseverança", "Disposição para assumir responsabilidades", "Energia", "Estabilidade", "Estabilidade e estruturas claras", "Estrutura", "Estruturas no relacionamento de eficácia já comprovada", "Força", "Força de Carácter", "Fundamento estável", "Liderança", "Pai de Família", "Paternidade", "Perfeccionismo", "Persistência", "Poder", "Poder Material", "Posição de liderança", "Prepotência", "Protetor, Realização de objetivos comuns", "Realização de planos", "Realizar intenções e planos com perseverança", "Regras", "Regulamento", "Relações ordenadas", "Retidão de caráter", "Rigidez", "Segurança", "Senso de realidade", "Senso prático", "Sucesso", "Valorizar tanto estruturas organizacionais como também raciocínio lógico e realista."], },
            { id: 5, nome: "Hierofante", palavras_chaves: ["O Professor", "Ampliar sua visão de mundo", "Aperfeiçoamento", "Aprendizado", "As leis", "Atividade que tenha um sentido", "Busca da verdade", "Casamento", "Confiança", "Confiança nas próprias capacidades", "Confiança profunda", "Conformidade", "Crença", "Crença Religiosa", "Declaração de amor", "Desenvolver confiança em Deus", "Diplomacia", "Ensino", "Espiritualidade", "Estabilidade", "Ética de trabalho elevada", "Exame de consciência", "Expansão da consciència", "Fanatismo", "Fé", "Fé Interior", "Fidelidade", "Força da fé", "Força persuasiva", "Gentileza", "Harmonia", "Hipocrisia", "Intuição (carta de proteção)", "Mestre", "O santo", "Passar por uma experiència profunda que leve à compreensão do sentido das coisas", "Percepção", "Percepção do sentido das coisas", "Poder Intelectual, Moral, Social, Político e Religioso", "Princípios morais sólidos", "Proteção", "Reconhecer e estimar sentido e valor do relacionamento", "Rigor", "Sabedoria", "Sair em busca de sentido e fazer algo significativo", "Seguir uma vocação", "Tradição", "Virtude", "Vocação."], },
            { id: 6, nome: "Amantes", palavras_chaves: ["Escolhas", "A escolha do caminho", "Adaptabilidade", "Aliança", "Amor", "Boa cooperação", "Capacidade de assumir compromissos", "Casamento", "Contrato", "Crenças Pessoais", "Decisões tomadas com coração", "Desejo de relacionar-se", "Dúvidas", "Encruzilhada", "Estresse", "Fechar contratos", "Fidelidade", "Fusões nos negócios", "Indecisão", "Insegurança", "Juntar-se a outras pessoas e envolver-se em um projeto com todo o coração", "Juntar-se aos outros", "Livre-arbítrio", "Obsessão", "Opções", "Parceria", "Razão x Emoção", "Reconciliação", "Reconhecer a relação entre as coisas", "Relacionamento Amoroso", "Reunir detalhes", "Sensualidade", "Sentir-se atraído por uma tarefa", "Seriedade na relação", "Sexualidade", "Sorte no amor", "Superação de diferenças", "Tomar uma decisão com clareza", "Trabalho com prazer", "Transações arrojadas", "União", "Valores."], },
            { id: 7, nome: "Carro", palavras_chaves: ["Ação direcionada", "Alinhar-se a um objetivo comum", "Ambição", "Aproveitar imediatamente a oportunidade com determinação e objetividade.", "Aproximação amorosa", "Ardor Combativo", "Assumir novas funções", "Atmosfera de partida", "Audácia", "Avanço", "Confiança em si", "Conquista", "Coragem", "Dar um grande salto adiante", "Dar um salto na carreira", "Desejo de aventura", "Deslocação", "Determinação", "Direção", "Disposição de correr riscos", "Distinção", "Domínio", "Éxito", "Firmeza de propósito", "Força de Vontade", "Ímpeto", "Impulsos estimulantes", "Independència", "Iniciativa", "Negligência", "Notícia", "Novas relações", "Novos relacionamentos", "O Herói", "Perseverança Progresso", "Promoção", "Rigor", "Sintonizar-se internamente com um objetivo", "Sucesso", "Triunfo", "Viagem", "Visar a novos projetos", "Vitoria", "Vitória", "Vontade de impor-se."], },
            { id: 8, nome: "Ajustamento", palavras_chaves: ["O Juiz", "A Balança", "Ação e Reação", "Acordos justos", "Ajustamento", "Analisar algo com objetividade e sobriedade e reconhecer a sua própria responsabilidade na situação", "Arcar com as consequências", "Autocrítica", "Boa capacidade de julgamento", "Clareza", "Colher o que se semeou", "Compreensão sóbria", "Consequência", "Contas equilibradas", "Contrato", "Contratos justos", "Decisão", "Equilíbrio", "Equilíbrio de ideias e nas ações", "Ética", "Honestidade", "Igualdade", "Imparcialidade", "Integridade", "Justiça", "Karma", "Lei", "Leis", "Lógica", "Moralidade", "Objetividade", "Parceria motivada por interesses comuns", "Parcialidade", "Plantar para colher", "Racionalidade", "Razão", "Reconhecer a nossa própria responsabilidade em tudo o que vivenciamos", "Retidão", "Regras", "Relacionamento comercial", "Relacionamento equilibrado", "Respeito mútuo", "Responsabilidade", "Rigor", "Ter clareza sobre os seus objetivos profissionais", "Ter responsabilidade por si mesmo."], },
            { id: 9, nome: "Eremita", palavras_chaves: ["Afastar-se temporariamente para ponderar sobre o relacionamento", "Agir com seriedade", "Apostar em objetivos que já foram comprovados", "Avaliação de objetivos", "Busca de Verdade", "Cansaço", "Cautela", "Clausura", "Concentração no que é essencial", "Conhecer-se e ser fiel a si mesmo.", "Deixar algo amadurecer e levar-se a sério, Estabilidade", "Evolução lenta e Profunda", "Examinar as coisas a fundo", "Experiència de vida", "Homem idoso e sábio, Honestidade", "Introspecção", "Introspecção", "Isolamento", "Lucidez", "Mover-se com segurança", "Olhar-se por dentro", "Orientação", "Paciência", "Pesquisas", "Projetos amadurecidos", "Prudência", "Reconhecer a sua verdadeira vocação", "Recuo", "Reflexão", "Respeito", "Retirar-se da vida profissional", "Retiro.", "Sabedoria", "Seguir o seu próprio caminho", "Ser fiel a si mesmo em vez de assumir compromissos duvidosos", "Seriedade", "Silêncio, Solidão", "Ter uma atitude madura", "Tomada de consciència", "Trabalho árduo e demorado", "Transmitir experiências"], },
            { id: 10, nome: "Fortuna", palavras_chaves: ["Altos e baixos", "Acontecimentos determinados pelo destino", "Agitação", "Alteração de rotinas", "Aproveitar o momento", "Ciclos", "Compreensão e aceitação de forças que são maiores que o ego humano", "Desenlace", "Desenvolvimento satisfatório no relacionamento", "Destino", "Encontrar a sua vocação", "Encontrar o parceiro certo", "Encontros marcados pelo destino", "Evolução, Êxito efêmero", "Expansão", "Instabilidade", "Karma", "Ligação determinada pelo destino.", "Missão na vida", "Movimento", "Mudança", "Mudanças", "Mudanças inesperadas", "Mudanças na profissão", "Novo ciclo de vida", "O que o destino reserva, das quais não se pode fugir", "Oportunidade, Oportunidade de compreensão do padrão de relacionamento", "Recomeço", "Reconhecer o seu destino e fazer dele a sua missão de vida", "Repetição", "Revolução", "Ser guiado pelo destino", "Situação em vias de Evolução", "Sorte", "Sorte Momentânea", "Sorte ou Azar", "Transferência", "Transformações", "Vínculo kármico."], },
            { id: 11, nome: "Luxúria", palavras_chaves: ["Ampliação", "Acreditar no poder", "Afirmação", "Agressividade", "nimo para o trabalho", "Atração", "Autoconfiança", "Capacidade produtiva", "Cobranças", "Competência", "Contato Superior", "Controle", "Convicção", "Coragem", "Criatividade", "Destemor", "Disposição", "Disposição para correr riscos", "Dominação", "Empoderamento", "Energia", "Enfrentar a sua fera interior e domá-la carinhosamente", "Engajamento", "Entregar-se apaixonadamente a uma pessoa, a uma tarefa ou a uma experiência", "Excessos sexuais e excessos em geral", "Fascinação", "Firmeza", "Força da Inteligência", "Instinto", "Intensidade", "Ligação apaixonada", "Luta", "Misericórdia", "Motivação intensa", "Paixão", "Poder", "Prazer em viver, Razão", "Relação intensa", "Resistência", "Sucesso", "Superação de obstáculos", "Tesão", "Tolerância", "Triunfo, Valor", "Vitalidade."], },
            { id: 12, nome: "Enforcado", palavras_chaves: ["Abandono", "Acomodação", "Aprendizado involuntário", "Aprisionamento da alma", "Ausência", "Auto-sacrifício", "Beco sem saida", "Crise", "Dar uma virada e abrir- se a novas percepções", "Desapego", "Desgastar-se entre dois pólos", "Desistir, Dilema", "Esforços inúteis", "Estagnação", "Estar dividido entre contradições e reconhecer a saída em uma mudança de direção", "Estar imobilizado sem saber que fazer para prosseguir", "Estar preso a um dilema do qual apenas se pode sair por meio do sacrifício", "Falta de perspectivas futuras", "Falta de sucesso", "Falta direção e objetividade", "Impotência", "Incapacidade de discernir, Indolências", "Inércia", "Insatisfação", "Mover-se em círculos", "Mudança de visão", "Mudança para pior, Nova Perspectiva", "Olhar para o Alto", "Parado", "Pausa forçada", "Planos arrastados", "Preso ao passado", "Prisão", "Procura de trabalho que parece ser inútil", "Prova de paciência", "Rendição, Restrito", "Sacrifício", "Situação Bloqueada e sem Saída, que resulta dos seus atos equivocados", "Sofrimento", "Suspensão", "Ter de fazer sacrifícios", "Trabalhos cansativos", "Transcendência", "Vitimismo."], },
            { id: 13, nome: "Morte", palavras_chaves: ["Fim de um Ciclo", "A morte", "Agarrar-se a algo inutilmente", "Aposentadoria", "Ceifa", "Conclusão", "Conclusão Lógica", "Confrontar-se com a sua própria efemeridade", "Corte", "Deixar que algo chegue ao fim", "Demissão", "Desapego Necessário", "Despedida", "Despedidas", "Desprender-se", "Detenção", "Eliminação", "Encerramento", "Encerramento de atividades", "Enterrar objetivos e projetos profissionais", "Fim de um relacionamento", "Ganhos e Perdas", "Medo da perda", "Medo da vida", "Metamorfose", "Morte de Algo ou Alguém", "Mudança", "Mudança de país", "Mudança fundamental no relacionamento", "Nova safra, Perdas", "Regeneração", "Renovação", "Renúncia", "Sentimentos mortos", "Separação", "Ter cumprido seu trabalho", "Ter de desprender-se", "Término de uma atividade profissional", "Transferência", "Transformação", "Transformação interior, Transição."], },
            { id: 14, nome: "Arte", palavras_chaves: ["A Espera", "A mistura certa", "Ambiente favorável", "Autocontrole", "Auxílio Divino", "Bem estar a dois", "Calma", "Compromissos", "Conciliação bem-sucedida de interesses", "Convivência com direitos iguais", "Cooperação agradável e produtiva", "Cura", "Dar melhor de si para superar contradições e diferenças", "Dissolver contradições e resistências", "Dominar as tensões interiores e encontrar a saída para um dilema", "Encerrar conflitos", "Encontrar a medida certa", "Encontrar equilíbrio entre trabalho e tempo livre", "Equilíbrio Mental", "Equilíbrio de forças Estabilidade", "Harmonia", "Meditação", "Moderação", "Mover se para a frente", "Negociações", "O Tempo", "Paciència", "Paz", "Perfeição", "Proteção", "Relação tântrica", "Relações Agradáveis", "Relaxamento", "Renovação", "Satisfação no trabalho", "Saúde", "Serenidade", "Sintonia", "Superação dos opostos", "Tranquilidade", "Vínculo profundo."], },
            { id: 15, nome: "Diabo", palavras_chaves: ["Agitação", "Animosidades", "Apego a Bens Mundanos", "Apreço pelo proibido", "Aproveitar-se de relações de dependência", "Atividades proibidas", "Cobiça", "Coisas escondidas", "Concupiscência", "Confrontar-se com a sua própria sombra", "Confusão", "Corrupção", "Dependências", "Desejo de satisfação a todo o Custo", "Desencontros", "Desordem Material", "Doenças Venéreas", "Envolvimento emocional", "Escravidão", "Excessos", "Exploração", "Falsidade", "Fascinação", "Feitiço", "Forças inconscientes", "Iluminar a escuridão", "Impulsividade", "Impulsos", "Intrigas", "Licenciosidade", "Ligação Kármica Luta pelo poder", "Luxuria", "Malicia", "Manobras não transparentes", "Materialismo", "Mentiras", "Negócios ilegais ou obscuros", "Ódio", "Ostentação", "Pacto de amor", "Paixão", "Poder temporário ou frágil", "Prazer", "Projeções", "Rapidez", "Realizações materiais", "Sede de poder, Sedução", "Sensualidade", "Servidão", "Sexo", "Sombra", "Tendência a corrupção", "Tentação", "Traição", "Vícios de toda a ordem."], },
            { id: 16, nome: "Torre", palavras_chaves: ["Acidentes", "Acontecimento Imprevisível", "Aflição", "Brigas", "Compreensão súbita", "Conflito", "Crise", "Crise conjugal", "Demissão", "Demonstração de força", "Desgaste Desilusão", "Desmoronamentos", "Destruição", "Dificuldades de maneira geral", "Discussões", "Explosão de sentimentos", "Falência", "Fragilidade", "Golpe do destino", "Iluminação", "Incapacidade", "Insegurança", "Libertação", "Mudança brusca", "Mudança radical", "Mudança súbita e Má", "O caos que precede o recomeço", "Perdas", "Perigo", "Possibilidade de demissão", "Queda", "Reconhecer suas próprias ideias fixas e romper com noções ultrapassadas", "Reconstrução", "Reestruturação", "Reformas", "Romper com amarras limitantes", "Rompimento de um vínculo limitante", "Ruína", "Ruptura", "Separação", "Separação repentina", "Tempestades purificadoras no relacionamento", "Terremoto", "Transformação."], },
            { id: 17, nome: "Estrela", palavras_chaves: ["Abertura", "Amor inspirador", "Boas perspectivas", "Começo de uma carreira com grandes perspectivas", "Comodismo", "Conexão", "Confiança", "Confiar na favorabilidade do momento e olhar com esperança para o futuro", "Criação", "Encontro que traz muitas esperanças", "Energia", "Esperança", "Fé", "Felicidade", "Generosidade", "Harmonia", "Inspiração", "Inspiração divina", "Ligação com boas perspectivas", "Limpeza", "Luz", "Mudança de profissão", "Oportunidade", "Orientação superior, Ótima relação no trabalho", "Otimismo", "Planos para um futuro comum", "Prazeres", "Profunda compreensão e confiança nas leis do Cosmo", "Projetos muito promissores", "Recomeço", "Reconhecimento", "Renovação", "Satisfação", "Seguir a sua vocação", "Sensibilidade", "Serenidade", "Situação Nova e Positiva", "Sorte", "Sucesso", "Surpresa", "União feliz."], },
            { id: 18, nome: "Lua", palavras_chaves: ["A noite", "Ansiedade", "Aparência", "Augúrio", "Cautela", "Circunstâncias confusas", "Ciúme corrosivo", "Ciúmes", "Compreender o significado orientador do medo", "Confusão Mental", "Desconhecido", "Desengano", "Desilusão", "Desilusões", "Difícil comunicação", "Dificuldades", "Engano", "Fase crítica", "Forças ocultas", "Fraude", "Ilusão", "Imaginação", "Incertezas", "Inconsciente", "Insegurança", "Insegurança no emprego", "Intrigas", "Inveja", "Lembranças ameaçadoras", "Magia", "Más influências", "Máscaras", "Medo", "Medo de dar um passo importante", "Medo de fracasso", "Medo de provas Medo do limiar que antecede um passo importante", "Mistérios", "Nervosismo", "Obscuridade", "Oculto, Pesadelos, Pressentimentos sombrios", "Relacionamento não confiável ou sinistro", "Saúde Má", "Sonhos de Mentira", "Timidez", "Ultrapassar limiar do medo para alcançar terras novas que se encontram por trás dele."], },
            { id: 19, nome: "Sol", palavras_chaves: ["Abnegação Sincera", "Abundancia", "Alegria", "Amor", "Associação", "Autoconfiança", "Auto-realização", "Boa cooperação", "Brilho", "Celebração", "Clareza", "Confiança", "Criança Interior", "Criatividade", "Cuidado", "Cumplicidade", "Desenvolvimento pessoal", "Desfrutar amor", "Desfrutar o lado ensolarado da vida", "Direcionar-se para um ponto culminante", "Empenhar-se em alcançar ápice", "Encontrar alegria de viver no estado de despreocupação original", "Energia positiva", "Esclarecimento", "Éxito", "Felicidade ", "Força de persuasão", "Frivolidade", "Generosidade", "Grandiosidade", "Iluminação", "Inspiração", "Mimar um ao outro generosamente", "O dia, a luz", "Ótimas perspectivas para planos futuros", "Paixão", "Positividade", "Promoções", "Pureza de Sentimentos", "Recomeço", "Reconciliação", "Renascimento", "Respeito", "Satisfação", "Segurança", "Sinceridade", "Sucesso", "Sucesso profissional", "Superar as dificuldades", "Tempos felizes", "Topo", "Um objetivo elevado, com confiança e firmeza", "União", "Vigor", "Vitalidade", "Vontade de viver."], },
            { id: 20, nome: "Aeon", palavras_chaves: ["Juízo Final", "Mea Culpa", "Abrir-se para novos métodos de trabalho", "Abrir-se para um novo processo e levá-lo cuidadosamente adiante", "Aperfeiçoamento", "Avaliação", "Boa Notícia", "Concretização", "Crescimento", "Cura", "Deixar-se envolver pelo espírito de uma Nova Era", "Desenvolvimento espiritual", "Despertar", "Encontrar a si mesmo", "Envolvimento", "Esperança", "Espiritualidade", "Experimentar caminhos novos", "Falta de atitude", "Gratificação", "Impulsos estimulantes", "Libertação", "Mudança de emprego ou de cargo", "Mudanças rápidas", "Novas relações", "Novo amor", "Objetividade", "Passos direcionadores", "Perdão", "Ponderar", "Promoção", "Proposta, Reavaliação", "Recomeço", "Recompensas", "Renascimento", "Renovação", "Renovação de relacionamentos existentes", "Reorganização", "Repensar as possibilidades", "Ressurreição", "Revisão", "Transmutação", "Trazer um espírito novo para a vida profissional", "União perfeita", "Valorização."], },
            { id: 21, nome: "O Universo", palavras_chaves: ["Alcançar uma meta", "Alegria", "Alegria de viver", "Alegria por realizar um trabalho", "Ambição", "Amor correspondido", "Amor incondicional e repleto de entusiasmo", "Conclusão", "Concretização de desejos", "Contemplar o todo, no qual início e fim formam uma unidade", "Dons", "Encontrar a sua vocação", "Encontrar parceiro certo", "Envolvimento", "Equilíbrio", "Estar centrado em si mesmo", "Estar no lugar certo", "Éxito Total", "Expansão", "Felicidade total", "Final de Ciclo", "Fusio e realização sexual", "Holismo", "Idealismo", "Integração Liberdade", "Longas viagens", "Materialismo", "Missão", "Momento Feliz", "O Paraiso", "Ocupar seu lugar e alegrar- se por sua vida", "Plenitude", "Realização", "Realização plena", "Reconciliação", "Retorno ao lar", "Segurança", "Ser criativo e ter entusiasmo", "Sorte", "Sucesso", "União plena", "Viagem Longinqua", "Vitória", "Vocação."], },
            { id: 22, nome: "A Raiz Dos Poderes De Fogo - Ás De Bastões", palavras_chaves: ["intuição", "energia", "Um renascimento do espírito", "As paixões são despertadas e a criatividade é assegurada", "Atividade expansiva e força de vontade em prol de seus objetivos", "Um dom de força, poder, grande energia sexual e do amor à vida", "Novos e positivos começos e ideias no elemento de fogo", "Criatividade, energia e iniciativa", "Pode simbolizar uma nova empreitada comercial, um novo empreendimento, nova fundação e poder criativo com muito potencial e ambição para progredir e vencer", "Fogo/Luz", "Uma luz universal de uma frequência mais alta", "A energia de ser", "Um poder equilibrador e seguro", "Uma energia aumentando de potência", "O deus da luz em harmonia e equilibrio com o poder do dragão", "Criação, invenção, empreendimento e os poderes que resultam nisso", "princípio, começo, fonte", "nascimento, familia, origem e o sentido de virilidade que está por trás destes", "O ponto de começo de empreendimentos", "Poder e Elemento masculino do fogo com suas conexões com o calor, vigor, aspiração, contexto", "Iluminação e avidez para consumir", "Pureza, claridade e honestidade", "Estado de iluminação", "Entendimento", "Ter coragem de mudar e expandir, Conhecer o que lhe dá energia e vitalidade", "Auto-organização oculta", "O Espirito surgindo de dentro", "O nascimento do desejo, paixão, entusiasmo, criatividade", "Indica alguma forma de Eu desejo."], },
            { id: 23, nome: "Domínio - Dois De Bastões", palavras_chaves: ["É o momento em que uma ideia já começa a ser colocada em movimento", "Hockmah representa todas as possibilidades que estão sendo ponderadas neste momento", "O Projeto já começou! Agora é a hora de explorar todas as possibilidades do Planejamento", "Nos Negócios representa um projeto começando a engatilhar, mas que ainda é necessário estabelecer todos os parâmetros para que ele seja colocado em movimento o mais rápido possível.", "No Amor representa um momento onde os pratos estão sendo traçados para uma convivência ou um projeto conjunto do casal."], },
            { id: 24, nome: "Virtude - Três De Bastões", palavras_chaves: ["Contabilizar as propostas", "Integridade Espiritual", "Honestidade", "Os três aspectos do eu corpo, mente e espírito conjugados", "Colocar os Pensamentos em Ação", "Suas ideias estão firmes e você agora está pronto para testá-las na vida", "O Senhor da Virtude", "O estabelecimento da energia primeva do fogo", "A Vontade foi transmitida à Mãe, que agora concebe, prepara e dá à luz a sua manifestação", "Comparável ao começo da Primavera, seu sentido é a harmonia", "Nascimento de Luz", "Permanecer no rumo certo", "Manter as atividades presentes", "O equilíbrio total das propostas", "Definir e Esclarecer a Identidade", "Compreender e ver-se com mais clareza", "Capacidade de visualizar as possibilidades antes delas se tornarem reais", "Sintese de ideias por meio da previsão e do planejamento", "Comunicação e a alegria da auto-expressão", "Combinações e realizações", "Uma base sólida enquanto continua a abrir novas áreas de interesse", "Tomar uma decisão e ir adiante", "Satisfação e desafio ao mesmo tempo", "Embora uma coisa seja alcançada, há muito mais ainda a fazer", "Intenção", "Compreensão de Fogo", "Vontade e energia crescente", "Poder espiritual inerente em nossos corpos", "Força estabelecida", "Empreendimento", "Esforço, Negócio, Comércio", "Descoberta", "Parcerias Comerciais", "A colaboração favorecerá o empreendimento", "Destino", "Compaixão", "Aceitação", "Compreensão e tolerância com os outros sócios", "Expressar-se", "Desenvolvimento ampliado de sua vontade", "Nos Negócios representa um projeto que já está em andamento", "Qualquer mudança a ser feita a partir de agora terá um custo em energia, tempo ou dinheiro", "No Amor representa um momento em que os planos traçados começam a se desenrolar."], },
            { id: 25, nome: "Conclusão - Quatro De Bastões", palavras_chaves: ["Prepare as tarefas antes de entrar em Combate", "Conclusão Espiritual e Holística", "A capacidade de olhar para seu eu e para as situações externas de uma maneira completa", "Alguma coisa está sendo concluída, e existe o desejo de começar algo novo", "Ideias Firmemente Enraizadas", "Ideias foram testadas e floresceram", "Agora é hora de comemorar a recompensa que trouxeram", "O Senhor da Conclusão", "O Senhor de todo Poder ativo manifesto", "A Vontade original do Dois é transmitida por meio do Três e agora é utilizada em um sistema sólido", "Ordem, Lei, Governo", "Chama do Espirito, Uma fase de desenvolvimento está completa, solidificada e foi bem-sucedida, e um novo começo em breve ocorrerá", "Agir com um sentido de direção", "Fazer algo definido e agir baseado em quem você é", "Sentido de conclusão derivada da harmonia de energias opostas", "Celebração e agradecimento após trabalho árduo", "Otimismo", "Conclusão de uma empreitada", "Ritos de passagem", "Liberdade", "Revelar-se em uma situação", "Celebração e recompensa após o trabalho", "uma pausa nas atividades e um momento tranquilo de repouso", "Férias próximas, ou um tempo de lazer", "Generosidade", "Fogo de Compaixão", "O potencial de dar que vem de uma total ausência de egoismo", "uma energia estabelecida, sintonizada com o poder universal de Misericórdia", "Vida campestre", "refúgio", "uma espécie de lar doméstico", "Repouso", "Harmonia", "Sorte inesperada", "Sucesso", "A recompensa do esforço", "o primeiro estabelecer de uma posição segura no projeto", "Realização", "Status quo", "Atingir um estágio de satisfação, aprecia-lo e sentir-se bem com relação a sua situação",], },
            { id: 26, nome: "Disputa - Cinco De Bastões", palavras_chaves: ["Batalha", "Conflito", "Frustração Espiritual", "Ansiedade sendo sentida em relação à expressão criativa", "Há um sentimento de ter a expressão criativa restringida", "Confusão de Ideias", "A mente tem muitas ideias circulando e elas se tornaram confusas", "O Senhor da rivalidade", "Uma força apenas ativa", "A Luta", "Um sentimento de luta e estar imobilizado ao mesmo tempo", "Desistir daquilo que se tornou obsoleto", "Ajustar a Identidade", "Ser desafiado a adaptar e mudar", "Talvez duvidar de si mesmo", "Ideias testadas por meio de conflitos e desentendimentos", "Troca de ideias", "Jogos energéticos e competitivos", "Partes do eu com diferentes necessidades e desejos", "Luta e rivalidade sem dor", "Concorrência pela alegria da ação", "Obstáculos e chateações insignificantes", "dificuldades de curta duração na comunicação que, uma vez superadas, podem mudar as coisas para melhor", "A curto prazo, parece como se nada funcionasse bem no trabalho e no lazer", "Retribuição", "Pentagrama em Chamas", "O poder criativo do reequilíbrio", "busca por riquezas", "Sucesso na especulação financeira", "Impasse", "Um tempo de julgamento e dificuldade", "Opressão", "Opressão autocriada por meio da própria ignorância", "Atividade", "Estar ocupado", "Atividades em excesso ou algumas vezes justamente a quantidade certa", "Nos Negócios representa um conflito ou disputa", "No Amor representa um momento de disputas e brigas conjugais."], },
            { id: 27, nome: "Vitória - Seis De Bastões", palavras_chaves: ["Vitória", "Triunfo", "Revitalização e Expansão Espiritual", "Uma indicação de que alguma conquista maior aconteceu em relação à criatividade, discernimento ou percepção", "A Vitória é Assegurada", "Às ideias do indivíduo serão vitoriosas", "Momento de Colocar ideias em prática", "O Senhor da Vitória", "Júpiter em Leão", "A Energia do fogo em manifestação completamente equilibrada", "O Cinco quebrou as forças estáticas do Quatro e um casamento aconteceu entre eles, resultando em estabilização, recepção e reflexão de auto-apoio", "Glória", "O fruto da batalha", "Um estado de harmonia e beleza", "Sentir a maturidade do Entendimento", "A realização de que bem no fundo de você há uma chama"], },
            { id: 28, nome: "Valor - Sete De Bastões", palavras_chaves: ["interna harmoniosa que não pode ser sufocada", "Uma Personalidade Previsível", "Estar seguro de sua identidade e possuir um sentido de objetivo ou direção", "O dom da vitória que vem do trabalho com os outros para atingir um objetivo", "Autoconfiança em sua capacidade de liderança", "Estabelecer uma direção", "Uma carta alegre, expansiva e afetuosa", "Um ícone do poder criativo pessoal", "Autoconfiança", "Equilíbrio", "Liderança", "Glória", "Unificação com o Fogo", "O otimismo que produz o sucesso que deseja e espera", "O Fogo acredita na vida que o naipe de paus dá àqueles a seu redor. Uma profecia que se cumpre", "Façanha", "Realização de Esperanças e Desejos", "Grande satisfação na carreira", "Adulação recebida de outros e reconhecimento merecido atribuído pelo sucesso", "Promoção após bom trabalho", "Recompensa pelos esforços investidos em uma boa causa", "Iluminar a Beleza e o Fogo Perfeito", "A vitória triunfa", "Grande novidades, tais como poderiam ser levadas com grande cerimônia pelo mensageiro do Rei", "Sensação de Vitória", "Expectativa coroada com seu próprio desejo", "Barreiras superadas", "A coroa da esperança", "Confiança em si mesmo", "Confiar nos próprios instintos e intuições", "Nos Negócios representa uma vitória", "No Amor representa uma conquista."], },
            { id: 29, nome: "Rapidez - Oito De Bastões", palavras_chaves: ["Hora de defender o seu ponto de vista", "Prepare-se para a batalha", "Preste atenção aos inimigos próximos", "Coragem Espiritual", "Bravura", "Surgimento de coragem individual, a vontade de assumir riscos em prol do crescimento espiritual", "Necessidade de ter mais confiança em si mesmo e em suas ideias", "O estímulo da energia espiritual, todos desejando uma saída criativa", "O Senhor do Valor", "Marte em Leão", "Desenvolver forças e uma sensação de autoconfiança que continuará a crescer se você tiver a coragem de manter suas convicções", "Experimentar Papéis Diferentes", "Explorar novos aspectos de si mesmo", "A necessidade de se restar de provar-se contra os concorrentes", "Enfrentar uma situação e manter a postura", "Firmeza frente à oposição", "Responsabilidade", "Estar completamente só e confiar em si mesmo para saber como lidar com as mais difíceis situações", "Conflito emocionante", "Determinação e valor profundos", "Uma mudança bem-sucedida de projeto, Capacidade", "Fogo Vitorioso e Triunfo da Iluminação", "Fusão da intenção e dos sentimentos", "Valor", "No plano intelectual, significa discussão e luta verbal", "Nos negócios, negociações, guerra comercial, escambo, concorrência", "Uma carta de sucesso como combatente por cima onde seus inimigos não conseguem atingi-lo", "Desafio", "Assegurar a vitória contra os desafios", "A coragem para enfrentar e estudar seus medos", "Onde há medo, há coragem", "Os resultados dos esforços feitos ainda não são visíveis", "Uma vitória certa ontem, hoje já pode não mais estar tão certa assim", "Cuidado com traidores", "Nos Negócios representa um momento de se preocupar com pessoas próximas ou dentro", "No Amor representa o momento de expor tudo aquilo que você está pensando de verdade"], },
            { id: 30, nome: "Força - Nove De Bastões", palavras_chaves: ["Aguente mais um pouco", "Não é o momento de relaxar", "Poder Espiritual", "Potência", "Força", "Força interna", "Força em comunicações, percepção, intuição e visão", "Há consciência e confiança em suas próprias forças internas e externas", "Defender suas Ideias", "Acreditar em suas posições e ter a força de suas convicções mas às vezes ter que defendê-las", "O Senhor da Força, Lua em Sagitário", "Energia que retorna ao equilibrio", "Mudança é estabilidade", "Chegar a uma experiència de pico", "Atingir o ponto certo, a corrente certa, sintonizado com a frequência certa", "Agir de acordo com a Verdadeira Vontade", "Não desistir ainda", "Ver as coisas claras e acuradamente, o que leva a criações sólidas com durabilidade", "O Eu Integrado", "A oportunidade para enfrentar seus maiores medos com o dom de força de vontade", "Sabedoria e disciplina oriundas da experiència, Independència", "Dedicação", "Conhecimento de retenção de energia que leva a seu armazenamento sábio e uso competente", "Poder fisico e alerta mental ao lidar com problemas", "Força e determinação", "Mesmo quando você sente como se tivesse chegado ao fim de suas forças, há reserva de forças", "Estar numa posição forte que sugere a vitória por meio de coragem e resistência", "Tenha Resiliência", "Fogo Resistente ou Fundamento Imutável", "A resistência da vontade para a qual apelamos em todos os infortunios", "Força na Oposição", "A vontade criando imagens na luz interna", "Fusão de vontade e imaginação", "Se atacada, a pessoa resistirá com coragem", "Defesa", "Uma barreira que mantém as coisas dentro ou fora, dependendo de qualquer dada situação", "Autodeterminação indomável", "A visão, aspiração e força de caráter para expressar a verdade", "Obter a confiança e conhecimento das próprias percepções e estar confortável com elas", "Resista", "No Amor e nos negócios", "momento de aguentar mais um pouco e dar mais uma chance ao seu projeto ou relacionamento."], },
            { id: 31, nome: "Opressão - Dez De Bastões", palavras_chaves: ["Sobrecarga", "Muitos assuntos materiais para resolver, em detrimento dos seus projetos espirituais", "Restrição Espiritual", "Repressão", "Auto-opressão", "Contenção de comunicações por medo da forma como seriam recebidas", "Ideias em demasia", "A mente está tão ocupada pensando sobre muitas coisas que se tornou seu pior inimigo", "O caminhante não pode enxergar a floresta por causa das árvores", "O Senhor da Opressão", "Saturno em Sagitário, A Força destacada de suas fontes espirituais", "Fogo em seu aspecto mais destrutivo, Uma força cega que sugere opressão e repressão", "É o que ocorre quando se usa a força, força, e apenas a força todo o tempo", "A Jaula", "Sentir-se preso numa armadilha ou oprimido", "Ou uma tremenda oportunidade para se tornar um co- criador com a força primordial em um plano fisico", "Criatividade bloqueada por responsabilidades em excesso", "Fardos", "Uma liberação de todas as energias que se construíram com o tempo e que de vez em quando tomam conta da personalidade", "Fardo e opressão pela vida, sobretudo pela responsabilidade", "O fardo pode ser fisico, mental ou emocional, e é, com frequência, auto- imposto, mas alguma coisa pode ser feita para aliviar o peso agora", "Responsabilidade", "Poder Manifesto", "Ação e Reação", "O aglomerado de uma vontade manifesta", "Se a intenção for alinhada com a vontade da Luz, uma força potente de equilibrio e controle", "Muitas ações ao mesmo tempo", "Muitas coisas para se fazer, Ambição", "Crescimento", "Crescimento acelerado por meio do esforço consciente", "Aspirar a patamares mais elevados", "Testar os limites e se expandir", "Atingir a consciència mais elevada por meio da manifestação de seus sonhos e paixões", "Energia ao Extremo", "Atingir a gia plena do fogo-paixão, intuição, espirito e alegria de viver ou atingir o extremo oposto do fogo", "a extinção", "Muito Elemento Terra sobre o Elemento Fogo."], },
            { id: 32, nome: "Cavaleiro De Bastões", palavras_chaves: ["O Inventor", "O Professor Pardal", "O Evolucionário Espiritual", "Hora de Projetar Ideias", "Evolução e mudanças ocorrem num nível central profundo", "impressões antigas são abandonadas para que se tenha uma nova percepção e um nascimento espiritual mais extensos", "Pessoa de opiniões equilibradas, derivadas de impressões e projeções do futuro bem elaboradas", "A parte fogosa do Fogo", "As qualidades morais de atividade, generosidade, ferocidade, impetuosidade, impulsividade e rapidez em ações imprevisíveis", "O Espírito da Chama", "Momento de experimentar um sentimento de convicção", "Muito movimento, energia e poder de liderança", "Ir rapidamente em direção a uma nova maneira de saber, um novo ponto de vista ou uma perspectiva nova sobre as questões", "Momento de estabelecer o EU", "A capacidade de ser você mesmo", "Orientado para o sucesso, criativo e auto-expressivo", "Poder masculino positivo", "Uma personalidade poderosa capaz de atingir metas de longo prazo e lidar com situações extremamente complexas", "Uma pessoa decidida capaz de dominar os outros pela sua força de vontade", "A energia dos bastões controlada e transformada em projetos úteis ou carreiras de longa duração", "O mestre da rapidez de raciocínio e do charme", "Caloroso e generoso com um bom senso de humor e enorme prazer em se divertir", "Abundância de visão e capacidade de previsão", "Um homem maduro em quem o potencial dos seres interior e exterior está bem sintonizado", "Honestidade, Poderoso, criativo, voluntarioso e de energia inesgotável", "Pode ser uma pessoa muito espiritual e poderosa, mas é necessário ter cautela com esta interpretação", "Valraven. O deus que deu aos homens os segredos da magia e, de acordo com os dinamarqueses, tornou-se rei de Hel e senhor do submundo", "Uma pessoa poderosa de natureza fogosa, cheio de energia, ativo, difícil de controlar, atraente, mas às vezes perigoso", "Intuição Extrovertida com Inteligência (ENTP)", "O Realizador, Capaz de delegar responsabilidades a terceiros para alcançar sua própria meta", "Um líder natural porque percebe os pontos de vista dos outros e tem a capacidade de demonstrar autoconfiança ao agir"], },
            { id: 33, nome: "Rainha De Bastões", palavras_chaves: ["O Cérebro Mestre", "A Rainha conselheira", "O Samurai Zen", "O Auto-Explorador Espiritual/ Descobridor", "Alguém em meio a um processo de autodescoberta com o desejo profundo de se conhecer e compreender melhor", "Adaptável, energia persistente, autoridade tranquila, bondosa e generosa, mas impaciente com oposições", "Ela tem enorme capacidade para a amizade e para o amor, mas sempre por iniciativa própria", "Condutor, Uma sensação de ser um lider procurado sobretudo nas questões do espírito", "Buscar liderança tranquila porém consistente que age de acordo com as leis da natureza", "Uma Identidade Madura", "Um alto nível de integridade pessoal, maturidade e respeito próprio", "Um sentimento de autosuficiência e confiança", "Amor pela Felicidade", "Momento de reconhecer seu poder pessoal", "Utiliza as próprias energias criativas e as inspira nos outros", "O poder pessoal feminino em ação", "Uma autoconfiança calorosa e uma força de vontade forte", "Uma personalidade carismática, apaixonada e em geral, feliz por estar viva", "Uma apreciação fogosa da vida", "Calorosa, apaixonada, honesta e sincera, não vé sentido em maldades e mentiras", "Oferece conselhos, apoio emocional e ama a vida e as pessoas", "Um individuo cheio de amor pela vida e consegue cuidar bem da casa e da família e assim mesmo encontrar tempo e energia para dedicar aos próprios interesses", "Pessoa habilidosa", "Uma mulher madura e poderosa, muitas vezes de grande atração sexual", "Esta energia pode ser direcionada para trabalhos criativos tais como a arte ou a música, uma carreira, ou a dedicação duradoura para dar existência a algo de valor", "Se a carta ao seu lado significar um homem, ela estará bem disposta em relação a ele", "se for mulher, ela estará interessada no consulente", "Também amor pelo dinheiro, ou um certo sucesso nos negócios", "Uma boa colheita", "Hel. Deusa e governante da regeneração no submundo, para onde os mortos iam para serem purificados, purgados das memórias de suas vidas passadas, e limpos para o renascimento espiritual", "Características fogosas de entusiasmo, inspiração, benevolência, paixões quentes e a inteligência aguçada", "Senhora da Coragem e da Pureza", "Sensibilidade e espíritos fogosos, precisamente afinados para sentir e detectar", "Intuição Introvertida com Pensamento (INTJ)", "Vidente", "Intensamente individualista e capaz de inspirar individualismo e confiança nos outros", "Tem o dom da percepção interior aguçada no sentido mais profundo do mundo."], },
            { id: 34, nome: "Príncipe De Bastões", palavras_chaves: ["O Defensor de Causas", "Criatividade Espiritual", "Uma paixão espiritual profunda para liberar a criatividade e expressá-la no mundo", "Hora de colocar as Ideias em Prática", "uma pessoa que está pondo em prática suas ideias", "Esteja preparada para lutar pela sobrevivência de suas ideias", "O Chefe dos Escoteiros", "Ele é forte e veloz, intensamente nobre e generoso, romântico, e tem enorme capacidade para o trabalho, que ele exercita pelo trabalho em si sem sede de resultados", "Guerreiro do Sol", "Aspiração do espírito interno-como uma chama procurando os céus", "Pessoa que possui a percepção de grandes qualidades de força, velocidade, inteligência e agilidade", "Momento de se concentrar no Eu", "Concentrar atentamente em apresentar uma certa imagem ao mundo ou em dar existência à energia e descobrir-se, talvez chegando ao ponto do egocentrismo", "Colocar energia no autocrescimento, em perspectivas futuras e novos direcionamentos", "Entusiasmo inspirado", "Poder direcionado a serviço e vida", "Uma maneira alegre, enérgica de estar presente no mundo", "Animação", "A personalidade é animada e delicia-se em divertir, agradar e atrair os outros", "Ação, movimento pelo movimento", "aventura e viagem", "Uma pessoa com ideias espléndidas e um bom gosto pela aventura", "Um amigo ou amante caloroso e generoso, embora seja imprevisível e precipitado no julgamento, Se ele representar um acontecimento, em geral refere-se a uma mudança de residência ou uma viagem longa, até mesmo imigração", "Uma pessoa que da adolescência até seus vinte anos tem uma vitalidade sem fim, atividade incessante, e capacidade", "Uma pessoa que possui percepção intuitiva e espontânea", "Um facilitador hábil que é capaz de enxergar o coração de qualquer pessoa ou uma situação", "Sugere um clima de precipitação, ou coisas ligadas a isso", "Dagon", "Um Deus transmutador de formas conhecido no Cristianismo como um demônio por sua oposição ao culto de Yahweh", "Tudo que é inesperado, surpreendente, imprevisível, ou pouco covencional. Muitas vezes parece irracional, mas tem uma profunda consistência subjacente", "Sábio, Vidente", "A luz de infinita radiante do espírito queima até chegar- se a ver as verdades eternas", "A luz do espírito", "Intuição Extrovertida com Sentimento (ENFP)", "O Espírito Despreocupado", "Inspirações súbitas de múltiplas possibilidades que frequentemente resultam em uma sucessão de novos projetos e ideias, sem necessariamente levá-los a cabo."] },
            { id: 35, nome: "Princesa De Bastões", palavras_chaves: ["Um Discípulo", "Um Aprendiz", "Um Iniciado", "A pessoa que busca o conhecimento", "AutoLiberação Espiritual", "Um grande medo está sendo enfrentado e superado o que resulta em uma nova energia vital e uma nova autoconsciência", "Contemplar Pensamentos Novos", "Esta pessoa tem uma ideia nova na qual ela se concentra", "Terra de Fogo", "Rege os céus por um quadrante da porção em torno do Pólo Norte", "Ela é o combustível do fogo, a irresistível atração química da substância combustível", "Cria sua própria beleza por seu vigor e força essenciais, sua força de caráter impõe a impressão de beleza aos olhos de quem vé", "A Centelha/Espírito Livre", "Aceitação de todas as mudanças e de todos os movimentos com uma perspectiva equilibrada", "Mover com a vontade do universo, favorecida por todas as forças universais", "Ser entusiasmada, autoconfiante e eloquente", "Arriscar-se na Identidade", "Arriscar-se a apresentar uma parte de si que estava oculta até então, comprometer-se de novo a dar o melhor de si", "Uma pessoa aberta a novas modalidades de autocrescimento e desenvolvimento", "Uma pessoa desinibida, franca e direta no falar", "A parte jovem-fogosa da personalidade que se manifesta através da dança e do movimento, mudança alegre e crescimento", "O início de projetos e, em particular, um anúncio ao nós mesmos, que estamos prontos a iniciar um mundo, e a projeto ou uma nova fase de vida", "Um mensageiro, mensagem, ou informação", "Um amigo ou amante fiel", "Uma personalidade rápida, intuitiva, entusiástica com ousadia, energia e otimismo", "Uma pessoa plena de vida nova e vitalidade", "No caso de ser um evento, pode ser alguém que traga boas novas, saudações alegres, um desejo de crescimento e conhecimento aliado à oportunidade de consegui-los", "Uma criança ou um jovem cheio de potencial, esbanjando energia", "Uma pessoa confiante e desejoso de trabalhar muito duro de modo eficiente e despretensioso", "Um homem jovem, fiel, um amante, um emissário, um carteiro", "Ao lado de um homem, ele prestará um depoimento favorável com relação a ele", "Pode significar inteligência de familia", "Atargatis, a Deusa de rabo de peixe, que faz renascer os homens ao engoli-los", "Um poder irresistível, misteriosamente sombrio, com grande força que pode ser mal utilizado ou compreendido", "Uma criança", "O Explorador", "Senhor da Confiança e do Crescimento", "O impulso do espírito para conhecer-se", "Intuição Introvertida com Sentimento (INFJ)", "O espírito livre", "Impaciente como desejo de ser livre, Traz mensagens, telefonemas, notícias, informação, um novo conhecimento."] },
            { id: 36, nome: "A Raiz Dos Poderes Da Água - Ás De Copas", palavras_chaves: ["Momento ideal para se amar", "Equilíbrio Emocional", "Ampliar as emoções", "Refletir e expressar com precisão o que passa dentro de sua natureza", "O dom do equilíbrio emocional está disponível para seu uso e auxílio durante o próximo ano", "Nova Atitude Trazendo Recompensas", "Aplicar uma nova atitude à vida que traz recompensas quando em sintonia com as leis do universo", "A Raiz dos Poderes da Água", "O elemento da Água mais secreta e original", "O complemento feminino do em sua forma As de Espadas", "Como a virtude dessa carta é conceber e produzir a segunda forma de sua Natureza, o líquido é mostrado como água, transformando-se em Vinho ou Sangue conforme a necessidade", "O Canal Aberto", "Sentir uma explosão de sentimentos, empatias, solidariedade ou entusiasmo", "Uma época para ligar, estar aberto e se tornar vulnerável para receber", "Uma Nova Emoção ou Percepção", "Sentir alguma coisa nova, pode ser alguma coisa não sentida antes, tal como uma nova emoção, um novo relacionamento, ou uma nova consciência sobre um relacionamento existente", "Consciência de amor, Abertura do coração", "O começo do amor, prazer", "A abertura dos canais psíquico, espiritual ou inconsciente", "Receptividade Odom do amor", "Um mergulho em seus sentimentos mais profundos", "Um abandono a emoções e beleza", "um influxo de prazer, inspiração, imaginação", "O amor fundamentando a vida", "Um tempo de felicidade", "o Dom da alegria", "Reconhecer o que a vida nos oferece", "Amor e, em última hipótese, vida, não podem ser medidos, mas apenas aceitos", "O aspecto mais puro da energia emocional, O começo de um novo relacionamento, a renovação das emoções fortes, amor, casamento, maternidade e grande alegria ou recompensa obtida de uma união amorosa", "Agua/Amor. Revela Amor, em um contexto pessoal ou em um sentimento espiritual profundo, dependendo de outras cartas presentes", "Associada à perfeição e à visão espiritual ideal, ao Reino Abençoado, ao nascimento e à morte física, e à forma de passagem ou portão entre os mundos", "O Mistério da redenção e regeneração espiritual", "A Fertilidade humana e situações envolvendo interação fecunda", "Casa do verdadeiro coração, alegria, contentamento, lar, alimento, abundância, fertilidade", "Mesa Sagrada, felicidade, Amor. Nascimento, começo, fecundidade, prazer, felicidade, lar, alimento, satisfação e cuidado", "Um aumento de outras influências boas, ou um poder mitigativo sobre as ruins", "Êxtase", "Uma intensidade de sentimento que vem com um amor pela vida como um todo, aceitando e reverenciado tudo", "A coragem de viver completamente toda a gama de suas emoções, sentir tudo, expressar todos os sentimentos", "Emoções ou amor surgindo de dentro, O começo de novas emoções ou sentimentos", "Indica algum modo de Eu sinto"], },
            { id: 37, nome: "Amor - Dois De Copas", palavras_chaves: ["Flerte", "Amor", "Relacionamento Amoroso Profundo", "Um amor profundo, muito significativo na vida de alguém, um relacionamento com outra pessoa ou em direção a alguma forma de criatividade", "Comunicação com o outro", "Há um desejo de sentir plenamente e estar aberto a esse amor nesse momento", "Comunicação amorosa", "O Senhor do Amor", "Vênus em Câncer", "Os dois sempre representam a Palavra e a Vontade", "É a primeira manifestação do amor ao outro, como tal, esta carta se refere ao Amor que recupera a unidade da divisão pela aniquilação mútua", "O Amor subordinado à Vontade", "A harmonia entre masculino e feminino interpretada no sentido mais amplo", "Cordão Sagrado", "A fusão alegre dos opostos, Um grande sentimento de ligação e contentamento", "Receber apenas da forma como você é recebido", "Validar um Sentimento", "Escolher um sentimento ou relacionamento, ou validar uma experiência psíquica ou intuitiva", "Compaixão e resposta carinhosa", "Uma união amorosa e curativa de opostos", "O consciente e o inconsciente trabalhando juntos para que os aparentes opostos sejam reconciliados", "O empurrão da força de atração sobre o nível inconsciente das emoções", "A união resultante da fusão de desejos inconscientes com amor consciente do coração", "A garantia da amizade, o começo de um caso de amor", "A ligação da ação e do espírito", "O começo de um romance ou amizade bem equilibrada", "Ideias geradas entre dois parceiros com harmonia e cooperação", "Um compromisso de romance ou amizade", "Reconciliação de opostos ou resolução de discussões e disputas", "Liberdade", "A Sabedoria do Amor, Um princípio tranquilo", "Uma sensação de liberação, de liberdade", "O amor liberta a alma para suas origens espirituais", "Amor, paixão, amizade, afinidade, união, concórdia, solidariedade, o inter-relacionamento dos sexos, e como uma sugestão separada de todos os oficios da divindade aquele desejo que não está na Natureza, mas pelo qual a Natureza é santificada", "Arcano favorável nas coisas do prazer e nos negócios, assim como no amor, também na saúde e na honra", "Romance", "Confiança, solidariedade, realização de desejos", "Votos, promessas, compromissos, casamentos e amizade íntima", "Todas as permutas de parceria ativa", "Equilíbrio", "Estabilidade emocional e auto-suficiência", "O fluxo equilibrado de vitalidade emocional", "Paz interior", "A fusão de amante e amado", "A Síntese entre dois pólos."], },
            { id: 38, nome: "Abundância - Três De Copas", palavras_chaves: ["O Flerte se converte em Casamento", "Festividade", "Colheita", "Abundância Emocional", "Um jorro de amor e sentimentos positivos para três pessoas muito significativas em sua vida e seu desejo de comunicar isso a elas", "Felicidade", "Uma vida feliz e plena", "O Senhor da Abundância", "Mercúrio em Câncer, Aqui está a satisfação da Vontade de Amar em alegria abundante", "A ideia de amor chega à fruição", "Esta carta exige grande sutileza de interpretação, e a lição parece ser que as coisas boas da vida, embora devam ser desfrutadas, também devem ser objeto de desconfiança", "Torrentes de Amor, Um estado sublime de prazer harmonioso, um período de graça. Uma sensação de criação maravilhosa e sentir-se muito amado por tudo aquilo que é Esclarecimento Emocional ou Intuitivo", "Sentimentos eintuição tornam-se mais claros", "Os dons de amizade e hospitalidade", "Apoio e divertimento com os outros", "Celebração e alegria", "As Musas Inspiradoras", "Ideais compartilhados", "Uma expressão de felicidade e divertimento compartilhados", "Compartilhar prazer juntos", "Divertir-se com outros", "Deixar o espirito tomar conta de seus sentimentos e de suas emoções", "Alegria, celebração e compartilhamento da maravilha da vida", "Um compartilhamento da experiència", "Uma celebração ou ocasião alegre", "Natividade", "Crescimento emocional e um sentimento de felicidade e satisfação", "Também pode indicar a conclusão de um assunto feliz ou a cura de feridas", "Afeição", "Compreensão da Agua", "A afeição sem fim, equilibrada e constante que é mais poderosa do que a emoção pessoal ou 9 amor romántico que busca gratificação", "Aquela afeição profunda que é um estado incondicional de amor doado", "A conclusão plena de qualquer assunto, com perfeição e alegria", "Final feliz, vitória, satisfação, conforto, cura", "A imagem clássica das très Graças dançando juntas", "O epitome de todas as formas de amor, baseado no amor de mãe, a raiz deles todos, exemplificado pela Deusa", "Destino gentilmente elegante como dádivas do amor, Amor", "Receber e dar amor, Seguir o coração", "A essência da vida unifica que todas as coisas e leva tudo para frente, Reverenciar tudo que é vivo, incondicionalmente", "Vivenciar Sentimentos", "A Dança do Amor, Aumento da intensidade de suas emoções, sentimentos, necessidades ou de um relacionamento", "As vezes chamado Graça e Amor porque pode ser um estado temporário de ser, em vez de sentir."], },
            { id: 39, nome: "Luxúria - Quatro De Copas", palavras_chaves: ["Mais do Mesmo", "Cuidado com os excessos", "Apatia", "Luxúria Emocional", "A capacidade de poder fazer as pessoas se sentirem emocionalmente seguras, felizes, satisfeitas e confortáveis", "Um momento em que as coisas estão funcionando com tranquilidade e você tem consciència da razão por que está se sentindo bem", "Ser mais Consciente do que está ocorrendo", "Ver sua vida e sentir que você possui tudo que precisa", "Não estar aberto a outras sugestões", "O Senhor da Luxuria", "Lua em Cancer", "A energia, embora ordenada, equilibrada e estabilizada, perdeu a pureza original da concepção", "Implica uma certa fraqueza, um abandono ao desejo", "A enchente", "Por não ser forte o suficiente para controlar-se adequadamente, a solidificação do quatro é um tanto instável, Superar um período de contentamento", "As coisas que já foram boas agora parecem azedas e envelhecidas", "A borda de uma conclusão, e uma nova visão de amor começando a se formular", "Agir sobre o que Você sente", "Agir em suas percepções psíquicas, intuitivas ou emocionais", "Didiva e desafio de um período estéril", "Momento de rever suas prioridades", "A capacidade de deixar as coisas tomarem seu rumo, confiar no ciclo de mudança", "Distanciamento", "Um momento para esclarecer, refinar as coisas para chegar à Verdade simples", "Sentimentos são feridos", "As coisas não parecem certas", "Um momento de incerteza", "Apatia causada por um ambiente insipido e pouco estimulante, Oportunidades desprezadas", "Nada que valha a pena acordar, fazer", "Descontentamento Divino", "Preso entre os mundos da emoção e da ação", "Descontentamento no qual as emoções estão voltadas para dentro", "Promessa de expansão, aumento material e procriação", "O fluxo das energias sexuais nos humanos nos quais o foco pessoal desaparece e os poderes piedosos são estabelecidos para além de nossa experiência comum de tais energias", "Descontentamento com o ambiente", "Cansaço, repugnância, aversio, vexação imaginária", "Declinio", "Etapa em qualquer relacionamento conhecido como o fim da lua-de-mel com indícios de novas percepções por vir. A quarta taça quando você já está satisfeito, Raiva Frustração oriunda do medo, insegurança ou não realização de objetivos", "Contentamento", "Mimo", "Conforto, divertimento e lazer"], },
            { id: 40, nome: "Desapontamento - Cinco De Copas", palavras_chaves: ["Lidar com a Perda", "Derrota Emocional", "Um mal perdedor, Decepção Emocional", "Uma indicação de que há alguma decepção sentida no momento, ou que foi sentida no passado e que ainda tem um peso e está sendo sentida profundamente", "Chorar por acontecimentos passados", "Sofrer pelo que se perdeu, O Senhor da Decepção", "Marte em Escorpião", "A ideia de perturbação, quando menos se espera, em um momento tranquilo", "Frustração do prazer previsto", "Enquanto o Fogo se deleita em energia superabundante, a Agua do Prazer é naturalmente plácida, portanto, qualquer perturbação da paz pode apenas ser considerada como azar", "Transbordamento", "Uma sensação de que os relacionamentos são transitórios, inconstantes e dolorosos", "Confiar demais nos outros por amor", "Descobrir a própria fonte de amor interior", "Ajustes Emocionais ou Intuitivos", "Sentimentos em fluxo", "Incerteza emocional ou intuitiva ou adaptação", "Perturbar a complacência", "Entender a perda e decepção", "Progresso impedido", "Perda de harmonia mas o amor ainda permanece, Aprender com os erros e com a experiència", "Decepção no amor", "Estar à beira do desespero", "Sacrificios", "Arrependimento, mas também aceitação", "Remorso, perda e separação", "Possivel arrependimento por ações no passado", "Uma situação em que alguma coisa foi perdida, mas as vezes permanece e há novas alternativas a serem exploradas dentro da perda", "Pesar, Refluxo ou maré baixa", "Uma carta de perda, mas resta algo, Herança, patrimônio, transmissão, mas que não corresponde às expectativas", "Arrependimento, Uma sensação de deixar os velhos laços e procurar novos interesses, necessidades e sentidos", "Algo chega ao fim com uma sensação de arrependimento, mas há a possibilidade de novos interesses", "Decepção", "Tristeza como resultado de ligação emocional a uma expectativa que não é satisfeita", "Emoções em movimento."], },
            { id: 41, nome: "Prazer - Seis De Copas", palavras_chaves: ["Nostalgia", "Aprendizado emocional", "Prazer Emocional", "A experiência de receber prazer e dar prazer aos outros", "Sua natureza emocional está sendo renovada e regenerada, e você está passando por um processo de cura, que está dando lugar a um sentimento de divertimento", "Memórias Felizes do Passado", "Reviver memórias felizes", "O Senhor do Prazer", "Sol em Escorpião", "Uma das melhores cartas do baralho, representa bem-estar, harmonia de forças naturais sem esforço ou tensão, ócio, satisfação", "O Prazer de brincar", "A ideia da carta é alheia à gratificação dos desejos naturais ou artificiais, pois é o prazer entendido em seu sentido mais elevado", "Fé", "Uma entrega à fé", "Inocência e obter grande prazer de suas qualidades infantis", "Sentir o mando como se o visse pela primeira vez", "Ser cuidado de todas as maneiras", "Um Ciclo Emocional Regular", "Um nivel de entendimento de sentimentos, relacionamentos ou processos psíquicos que é confiável ou previsível", "A troca de amor e prazer entre duas pessoas", "Memória ou renovação de algo do passado", "Dádivas", "Amizade", "Extase, Bons sentimentos", "Um impulso orgástico de sentimentos, uma onda de éxtase", "Mesmo se seus sentimentos são tristes, a expressão ativa deles fornece um alivio que o faz se sentir bem", "Memórias doces", "Dar e receber, Reconsiderando alguma coisa com raizes no passado", "Esforços passados que podem trazer recompensas presentes e futuras", "Pode trazer um encontro com um velho amigo, conhecido ou amante, Viver muito no passado ou está sendo nostálgico demais", "Divertimento", "O canto da Harmonia e o Mar de Beleza", "Fluir, dar, receber, Uma alegria sem egoismo muitas vezes encontrada como o êxtase de iluminação espiritual", "A alegria da união que ver com o êxtase sexual e mistico", "A alegria de criar, de almas em contato", "Memórias prazerosas", "Olhar para o passado e para as memórias na infancia, Felicidade e divertimento vindos do passado, de coisas que desapareceram", "Explorar novas relações, novos conhecimentos, novos ambientes", "Infância", "Um retorno psíquico a antigas experiências de amor e memórias desvanecidas do passado profundo", "Harmonia", "Sentimento de bem-estar", "Prazer", "Paz", "Sutileza de sentimentos e compreensão de condições circundantes derivadas do fluxo natural da energia psíquica."], },
            { id: 42, nome: "Deboche (Corrupção) - Sete De Copas", palavras_chaves: ["Promessas distantes", "Pedir favores para a Máfia", "Extenuação emocional", "Estado de depressão e tentativas de aliviar a dor ao exceder-se por meio de hábitos ou comportamentos que minam as energias", "A Imaginação em Funcionamento", "A imaginação que dá asas a si mesma", "A necessidade de tornar-se mais realista e aceitar a vida como ela é", "O Senhor da Devassidão", "Venus em Escorpião", "A fraqueza certa resultante da falta de equilibrio e da perda de contato direto com Kether", "o Altissimo", "Afundar-se no pantano de falsos praretes, representa quase a imagem malévola e adversa do Seis", "Preenchimento dos espaços vazios da alma e penetração nas regiões espirituais mais profundas", "A busca do amor, o desejo de reconciliar-se com o Um e o movimento de volta para completude outra vez", "Grandes Promessas em um futuro incerto", "Variedade e Exploração Emocional", "A capacidade de criar visões, fantasias e sonhos", "Sentir um estado de consciència alterada", "O teste da escolha apropriada", "Não saber o que fazer", "Abstração, imaginação e sonho, visões turvas, fantasia", "Dificuldade de escolha em meio a uma abundância de opções", "Sonhos, visões, emoções, ou imaginação sem conexão alguma com a vida real", "Tusões auto-infligidas", "Uma escolha há de ser feita, e deve-se ter muito cuidado e consideração com esta escolha", "Um tempo em que a imaginação trabalha em excesso e as escolhas parecem ser inúmeras", "Juntamente com esta confusão quanto a escolha também existe uma abundância de talento e energia criativos e artisticos", "As vezes é uma sensação de auto-ilusão, mas o coração bem humorado sempre tornará claras as ilusões para que não leve a si mesmo a sério demais", "Dadivas das fadas, imagens de reflexos, sentimentos, imaginação, coisas vistas no espelho da contemplação", "Consegue se alguns sucessos nessas áreas, mas não está previsto algo com maior permanencia ou substancialidade", "Sonho, Por um lado a visão verdadeira, o talento e a percepção, por outro, fantasia, iluvici e atitudes pouco realistas", "Medo", "Mergulhar em seus medos, ou em suas preocupações e ansiedade, sentir medo e utilizar esta energia para superá-lo", "Pausa para compreender e refletir para ser prudente e não agir impulsivamente e para seguir adiante com coragem", "Percepção", "Meditação", "Escolhas"], },
            { id: 43, nome: "Indolência - Oito De Copas", palavras_chaves: ["A solução para o problema está em outro lugar", "Procure uma auditoria para a situação de alguém que não esteja envolvido emocionalmente nela", "Estagnação Emocional", "Estar excessivamente cansado, esgotado, gasto, e exausto", "Há necessidade de uma estrutura ou disciplina para impor alguns limites à extensão em demasia", "Deixar o Conhecido e Ir em Direção ao Desconhecido", "Abandono dos modos de pensar, valores ou residência antigos e ir em direção ao desconhecido", "O Senhor da Indolência", "Saturno em Peixes", "O tempo e o pesar encobrem o prazer, e não há forças para reação, O próprio ápice do desagradável", "Aguas Paradas", "Um estado de retiro que é necessário e Som neste momento para se tornar claro", "Recarregar-se e renovar os recursos dentro de um espaço protegido", "Momento de Avaliar Sentimentos", "Refletir sobre os relacionamentos e o que se gosta ou não nos mesmos", "A capacidade de ir ao interior profundo para regenerar as energias", "Retirar-se das atividades para dentro de si mesmo", "Retirada ou dar um tempo", "Esgotamento de energias na busca pela solução sem mudar o que está fazendo", "Autopiedade", "Um tipo de mudança inconsciente ocorre em um nivel de sentimento muito profundo", "Abandono de uma situação estável", "É hora de ir adiante", "Recusa de abandonar uma situação mesmo sabendo que já se extraiu tudo que ela tinha para dar, O fim de uma coisa e o começo de outra", "Deixar o passado para trás e abandonar uma situação por decepção ou desilusão", "Aquele que busca não tem escolha a não ser abandoná-la em busca do que é certo", "Excitação", "Cascata de Energia", "O Cardume Nadando", "O poder do movimento fluido", "O fluxo infinito de potencialidades, Reprodução", "A emoção do trabalho em formação", "Busca por novos horizontes", "A cooperação de diversas potencialidades trabalhando em conjunto", "O declinio de um assunto, ou que um assunto que já foi considerado importante, na verdade importa muito pouco, seja para o bem ou para o mal", "A tristeza inevitável ao abandonar algo que lhe foi de valor na passagem para uma nova fase da vida", "Estado emocional quando as coisas chegaram a um ponto estático ou de quietude", "Progressão Emocional", "Deixar para trás o conhecido pelo desconhecido e progredir em direção a sentimentos que são novos, diferentes e que de alguma forma mudaram."], },
            { id: 44, nome: "Felicidade - Nove De Copas", palavras_chaves: ["Sensação de dever cumprido", "Plenitude Emocional e Felicidade", "É uma época de expansão emocional derivada de um sentimento de plenitude e de conclusão", "Uma capacidade para ir às profundezas emocionais para integrar e equilibrar os sentimentos", "Contentamento e Satisfação", "Uma vida plenamente feliz que deveria continuar", "O Senhor da Felicidade", "Júpiter em Peixes", "O restabelecimento da estabilidade perdida no Oito", "A culminação e a perfeição da força original", "A benção", "A água na sua manifestação mais completa e benéfica, de maior grandeza material", "Felicidade, satisfação completa mas, assim como ocorre com o Nove de Paus, não há nada de permanente nesta situação", "o Universo não dá descanso", "A mudança garante a estabilidade. A estabilidade garante a mudança?", "Espelho do Arco-Íris", "Um sentimento forte de integridade interna e segurança interior", "Gozar de auto-estima e felicidade interior", "Sentimentos Fluentes", "Sentir um fluxo de emoções providas de propósito e de direção", "A oportunidade de criar a própria realidade com o dom da imaginação criativa", "Visualização", "Satisfação", "Desejos realizados", "Prazeres sensuais", "Bem estar e prazer físico e mental", "Evitar preocupações e problemas por meio de concentração nos prazeres simples", "A carta dos desejos significando a realização de um desejo de suma importância", "A estabilidade emocional bem como a felicidade material e física", "O prazer sensual também será satisfeito", "Plenitude", "A Fonte da Lua Cheia", "A Mãe Dadivosa", "Águas da vida e do Amor", "Uma carta muito abençoada", "A fusão da vontade e da imaginação que se tornam fluidas, desaguando na resolução de um problema emocional", "Concórdia, contentamento, bem estar físico", "também vitória, sucesso, vantagem", "Satisfação para o consulente ou aquele que pergunta", "Felicidade", "Estado de satisfação emocional após o término de uma tarefa", "Prazer de cumprir seu propósito", "Trabalho realizado."], },
            { id: 45, nome: "Saciedade - Dez De Copas", palavras_chaves: ["Viver plenamente e corajosamente seguindo os desejos e os sonhos", "Estar Pleno de Emoção", "Sentir gratidão", "Chegar ao cume de suas emoções, seja alegria ou tristeza", "Se as emoções fossem estrelas, você seria a Via Láctea nesse momento"], },
            { id: 46, nome: "Cavaleiro De Copas", palavras_chaves: ["O Provedor", "O Otimista", "Questões de lealdade à família e aos relacionamentos", "Nessa altura, há o dom de dar-se total e abertamente aos outros", "Projetar o Futuro da Vida", "Esta pessoa conseguiu, através da ação, alcançar uma posição de autoridade e está olhando adiante", "A parte fogosa da Água", "Ele é o ataque veloz e passional da chuva da primavera, o poder da solução", "Elegante, diletante, plácido, amável de uma forma passiva e rápido ao reagir a uma atração", "O Espírito dágua", "Ouvir sua consciência, confiar em seus impulsos, e ser guiado pelos instintos e pela intuição", "Liberar um Padrão Emocional", "Saber que uma emoção já deu o que tinha dar e não opera mais em sua vida", "Emoções que ou relacionamentos estabelecidos", "Senhor das emoções", "A capacidade de amar", "Um conselheiro ou alguém que cuide", "Criativo e cheio de imaginação", "Psicólogo, padre", "Alguém que teve que disciplinar ou mesmo suprimir seus sonhos para atingir o sucesso", "Um Messias democrático", "Ele direcionou seus poderes criativos para realizações de responsabilidade social, por acreditar que a responsabilidade precede a auto-expressão", "Pode utilizar sua criatividade para o trabalho, ou ao contrário, colocar seus talentos a serviço do vício e da corrupção", "Um mestre das emoções", "Tem uma imaginação viva e pode mudar seu humor repentinamente", "Tem o desejo de unir-se ao mundo inconsciente, o que não lhe é fácil, pois vive os sentimentos só da boca para fora, em vez de realmente se emaranhar neles", "Num sistema de cartas, pode sugerir que é hora de realmente entrar em contato com seus sentimentos", "Jovial", "Um homem maduro com considerável experiència de vida, mas que nem ficou endurecido nem amargurado pela vida", "Boa índole, compassivo, e misericordioso, mas não deixa seus sentimentos bondosos dominá-lo", "Pleno de profundezas escondidas e correntezas profundas, raramente revela sua força verdadeira e trabalha por meio da gentileza mais do que por atos voluntariosos explícitos", "Um homem justo, homem de negócios, leis, ou adivinhação", "Profissionais das ciências, leis e artes", "inteligência criativa", "Dewi. O antigo Senhor do Abismo, também conhecido como Bran, o Abençoado que tornou-se no Cristianismo o Rei Pescador ou o Rico Pescador chamado Bron", "Uma figura de poder e força atemporais, protetor dos necessitados", "Uma qualidade de força irresistível subjacente à superfície calma", "Negociador hábil na montanha russa emocional da vida", "Sentimentos Extrovertidos.com Sensibilidade. (ESEJ)", "Gentil", "Com frequência, muitas pessoas o amam, mas não se dão conta disto", "Manifesta situações e sentimentos harmônicos", "Um excelente diplomata."], },
            { id: 47, nome: "Rainha De Copas", palavras_chaves: ["O Compositor", "Mulher madura e apaixonada", "O Refletor do Emocional", "O arquétipo de Mãe amorosa", "Atribui poder a um individuo para expressar sentimentos de forma honesta e responsável sem culpas nem julgamentos", "Pode representar questões ligadas à maternidade", "Imaginação em Demasia", "Esta pessoa imagina muitas coisas sobre sua vida mas não faz nada para apossar-se delas nem solucioná-las", "Água de Água, com o poder da Água de receber e refletir", "Sonhadora, possuidora de extrema pureza e beleza, tranquila, paciente e, muitas vezes, extremamente popular", "Ver a sua verdade é quase impossível, pois ela reflete a natureza de quem a observa com grande perfeição", "A Fechadura", "Pureza e beleza extremas em sua forma mais sutil, a tranquilidade bruxulcante, consequência das emoções que perduram ao longo do tempo", "Um sentimento de amor e apoio maternal que é estável e alimenta", "Maturidade Emocional ou Intuitiva", "Sentir interações interpessoais e emoções evoluidas e desenvolvidas ou capacidades psíquicas/intuitivas", "Amor do Amor", "Canaliza sentimentos, emoções, sonhos, visões", "Empatia e compreensão incomuns, mas pode ser temperamental e de humores instáveis", "Pessoa que nutre ou abafa emoções", "Canaliza sentimentos e emoções, desejos, sonhos e visões interiores", "A pessoa que inspira a partir do seu interior", "Um tempo de ruminação interna, os pensamentos focados para o interior, e a mente tragada pelo poder da imaginação", "A carta de Taças mais bem sucedida e equilibrada", "Junta a consciència ao sentimento", "A possibilidade de mesclar imaginação e ação, criatividade e utilidade social", "Uma pessoa que alcançou um grau de compreensão de sua profundidade emocional e vive em grande medida no reino da fantasia e da imaginação", "Pessoa altamente artistica e criativa, até mesmo mística ou profética", "Amorosa", "Uma mulher madura com profundos poderes sexuais e de fertilidade, o que pode manifestar-se como maternidade ou um tipo de trabalho criativo", "Tudo em sua vida está relacionado à nutrição, as trocas sexuais, dar e receber, sentir, paixão", "Muitas das Rainhas dÁgua tornam-se espiritualmente dedicadas, ou tornam-se a mãe de uma família extensa, a avó no sentido espiritual e físico", "Mulher devotada que auxiliará o consulente", "inteligência amorosa e, portanto, o dom da visão", "Sucesso, felicidade, prazer, também sabedoria, virtude, a esposa perfeita e boa mãe", "Às vezes denota uma mulher de caráter duvidoso", "Durga, a Inacessível, que era inacessível aos homens. Também Virginal a Rainha de Gelo, uma fada divina das altas montanhas, e no Cristianismo a Virgem Rainha dos Céus", "Uma pessoa etérea, do outro mundo, com ideias das mais elevadas, talvez intangivelmente elevadas", "Aquele que se Regozija", "Domínio do Equilíbrio e do Amor, Sente e expressa a alegria da vida, permitindo que o amor pela vida flua", "Sentimentos Introvertidos com Sensibilidade. (ISFP)", "Ouvinte", "A efígie dágua, sem necessidade de reconhecimento ou confirmação, é a tela perfeita para as projeções dos outros."], },
            { id: 48, nome: "Príncipe De Copas", palavras_chaves: ["O Professor", "Pessoa apaixonada", "O Amante", "Uma indicação de que há muita paixão eo desejo de expressar sentimentos de forma calorosa", "Ir Adiante", "Devagar mas Sempre", "A pessoa está perseguindo sua meta de vida e mais cedo ou mais tarde a alcançará, seja lá o que for", "De todas as maneiras um artista, que parece suscetível a influências externas, mas as aceita apenas para transmutá-las em favor de seus projetos secretos", "Importa-se profundamente com o poder, a sabedoria e seus próprios objetivos", "Asas do Amor", "O amor dá asas ao seu espírito", "Sensual e amoroso, tênue e espiritual, de todas as formas um artista", "Pessoa que dá arte ao mundo através do amor, da imaginação, da elegância, do estilo, e dos sentimentos mais profundos", "Ação Emocional", "Foco Emocional ou Intuitivo", "Estar completamente envolvido em uma sensação emocional, ou centrado na consciência psíquica ou espiritual", "Seguir seus sonhos, visões, ideais, amor", "Um idealista romântico, Pode ser temperamental e ciumento", "O aspecto tranquilo, interior do principio masculino", "Auto Reflexão e autoconsciència pacífica. e contemplativa", "O espírito volta-se para as visões artísticas ou reconhece sentimentos profundos", "A busca de pensamentos e fantasias derivadas do ego em vez do inconsciente", "A imaginação para o mundo é dominado pelos sonhos", "Em termos românticos, pode representar um amante que não quer se comprometer, que talvez seja atraente porém passivo, retraído ou narcisista", "Um jovem refinado, artístico, de princípios elevados, um idealista que busca a perfeição", "Se for um evento, frequentemente significa um pedido de casamento, ou uma proposta no campo artístico, ou até um rival no amor", "Um Idealista", "Um homem ou mulher jovem, cheio de sonhos, visões e grandes esperanças da vida", "O Cavaleiro do Santo Graal", "As emoções são muito desenvolvidas e, com frequência, um ideal tomará o lugar do amor humano", "Com a experiência, este idealismo pode ser modificado, mas jamais será abandonado de todo", "As graças mais elevadas da imaginação", "Um sonhador", "Avanços, propostas, condutas, convite, incitamento", "A visita de um amigo que trará dinheiro esperado ao consulente", "Galahad. O herói conhecido como Lancelot, ou Lancelot do Lago, que buscou o Santo Graal (ou Caldeirão)", "Cavalheirismo, doçura, auto-sacrifício, sensibilidade e cortesia em relação às mulheres", "Um visionário que está muito ligado aos aspectos femininos do seu próprio ser", "Regenerador", "Encontra alegria, prazer, satisfação e felicidade em estar vivo", "Sentimentos Extrovertidos com Intuição (ENEJ)", "O Amante", "Desejar sua alma gémea"], },
            { id: 49, nome: "Princesa De Copas", palavras_chaves: ["Pessoa em início de relacionamento", "Desapego Emocional", "Livre de Ciúmes", "O domínio de uma certa possessividade e de sentimentos de ciúme", "Um evento Inesperado", "Agora, há a capacidade de amar profundamente de maneira leal e comprometida, mas com desapego", "Surpresas na Vida", "A faculdade de cristalização", "O poder que a Água tem de dar substância a uma ideia, de manter a vida, e de formar a base de combinações químicas", "Seu caráter é infinitamente gracioso, toda volúpia, doçura, bondade e ternura", "Muito dependente dos outros, mas ao mesmo tempo os auxilia muito", "Divino Amor", "O poder das emoções e do inconsciente de fomentar uma ideia", "Confiar nos seus sentimentos e impressões", "Ser enlevado e gentil, bondoso e terno, pleno de romance, sonhos e visão amorosa", "Arriscar-se Emocionalmente", "Arriscar-se emocionalmente de forma pública, clara ou com capacidades psíquicas", "Comprometido com uma direção emocional que pode ser um pouco amedrontadora", "Estar aberto ao amor e novos relacionamentos Traz mensagens dos sonhos ou da intuição", "A parte brincalhona e afetuosa da personalidade que tem um senso de humor maravilhoso e sabe como se sentir bem", "Uma época para experimentar os sentimentos"], },
            { id: 50, nome: "A Raiz Dos Poderes Do Ar - Ás De Espadas", palavras_chaves: ["Melhor momento para iniciar um Projeto Mental", "Clareza Mental", "Inventividade e Originalidade", "Os dons de um intelecto inspirado, decisão e clareza mental estão disponíveis para serem utilizados e manifestos", "Superação de problemas", "Um problema que pode ser superado e uma solução encontrada", "A Raiz dos Poderes do Ar, A Energia do Ar primordial que não possui nenhum impulso auto-gerado", "É o Vento que sopra em todas as direções, mas uma vez posto em movimento por seu Pai de Fogo e por sua Mãe dÁgua, seu poder se manifesta de uma forma terrível", "Abarca tudo, vagueia por tudo, penetra tudo, consome tudo", "Alvorada", "O início do processo intelectual", "Uma ideia nova e importante está se apossando da mente", "O modo de prestar atenção ao novo pensar", "Pensar claro, original e criativo", "Uma Nova Ideia", "O potencial de uma direção completamente nova para o modo de vida, cronograma ou rotina", "A Consciência Pensante (em foco)", "Expansão Mental", "Análise do que deve ser feito", "Agir com lógica e discriminação", "Força, sobretudo no plano mental", "O dom do intelecto", "Decide-se fazer algo específico", "Intelecto, verdade, força emocional, em forma extrema", "Frequentemente indica que do mal surgirá algo de bom", "Uma situação que parece negra pode surpreendentemente tornar-se extremamente promissora", "Um sentimento de mudança inevitável", "Ar/Vida", "Novas aberturas, inícios, mudanças poderosos e perturbadores", "Podem trazer benefícios ou dificuldades, vida ou morte, dependendo das outras cartas presentes em um jogo", "Uma carta de grande potencial de energia não realizado, de energia original", "Triunfo, um nível de excesso em todas as coisas, conquista, triunfo da força", "Uma carta de grande força, no amor assim como no ódio", "Grande prosperidade ou grande miséria", "Fatalidade", "A carta de Morgan the Fate, Fata Morgana que levava os heróis mortos para as Ilhas Afortunadas", "Finalidade, tragédia, e destino fatal, mas também, às vezes, uma liberação", "Liberação das restrições, uma nova leveza, ou uma forma de salvação", "Brilho", "A qualidade da percepção", "Ver e compreender com percepção e com uma forte curiosidade", "Concentração, organização e imaginação que trazem a capacidade criativa", "Muda a Força", "Expansão e celebração", "Mudança surgindo de dentro", "O início de uma ideia ou informação", "Indica alguma forma do Eu penso."], },
            { id: 51, nome: "Paz - Dois De Espadas", palavras_chaves: ["Afastamento", "Momento entre duas tempestades", "Fuga do conflito", "Paz de Espírito", "Dois assuntos, situações, opções, ou relacionamentos foram integrados num nível inconsciente, e o espírito agora encontra-se em paz", "A Não Aceitação de Realidades", "Não aceitar o que está diante de si", "A necessidade de ser mais tolerante em relação às ideias e sugestões de outros e não prender-se às suas próprias tão fortemente", "O Senhor da Paz", "A Lua em Libra", "Como ocorre com todos os Dois, esta carta manifesta a melhor ideia possível para o naipe, mas as Espadas, que regem todas as manifestações intelectuais, são sempre complicadas, desordenadas, e sujeitas a mudanças de uma forma que não ocorre em nenhum outro naipe. Portanto, esta carta é de uma calma relativa aguardando a chegada da ruptura", "A Travessia", "Um equilíbrio temporário", "Um sentimento de libertação da captura", "Manutenção de um equilíbrio suave e paz temporária", "Fazer as pazes", "Suspender o julgamento", "Emoções bloqueadas", "Incerteza ou impasse", "Procrastinação", "Fazer acordos", "Esperar a virada da maré", "Uma tentativa de conseguir paz e equilíbrio mental", "A mente quer estar em repouso", "Um descanso antes da mudança", "Lidar com um problema ou uma situação sem encará-la", "Um equilíbrio precário mantido pela negação das emoções", "Impasse", "forças equilibradas neutralizam uma à outra", "O conflito em um impasse", "A pessoa acredita que as questões desaparecem se não forem confrontadas. No entanto, se houver coragem, poderá efetuar uma mudança e, com frequência, algo de bom resulta do que parece ser uma situação ruim", "Um padrão cujo resultado final parece ser impossível predeterminar", "A Conformidade e o equilíbrio que ela sugere", "coragem, amizade, a concórdia armada", "Equilíbrio", "Um equilíbrio de forças opostas levando a um impasse, uma trégua temporária em meio à luta, ou um novo equilíbrio depois de ajustes difíceis", "Um estado mais elevado de consciência equilibrada", "Objetividade e estabilidade mental obtida através de análise fria", "Um estado de afastamento e não envolvimento em que você consegue ver com consciência neutra, de acordo com os valores e as leis mais elevados do Universo", "A Calma entre duas tempestades"], },
            { id: 52, nome: "Dor - Três De Espadas", palavras_chaves: ["Dor", "Pensamentos de Pesar", "Eventos que não foram resolvidos no passado e que agora produzem pesar", "Decepção e Corações Partidos", "Sofrimento causado por ter o coração partido e sofrimento emocional devido às decepções na vida", "O Senhor do Pesar", "Saturno em Libra", "Este não é o pesar ordinário, comum, que depende de descontentamentos ou decepções individuais, mas sim o pesar universal", "é o dom da melancolia", "Existe uma paixão intensa espreitando para criar, mas os frutos são monstros", "Sigilo e perversão", "Reconhecimento", "Ceder para ganhar", "Render-se para alcançar o objetivo", "Sentir- se frustrado, o que representa uma parte normal do processo criativo", "Ataques de ansiedade entremeados por ataques de alegria", "O dom do pesar", "Capacidade de sentir as emoções plenamente para não tornar- se bloqueado", "Crise criativa", "Separação", "Inveja", "Sentir-se magoado", "Divórcio", "Fundir as energias mentais através de luta", "Uma dança do poder em que as dificuldades precedem à harmonia", "Pesar, dor, e coração partido, seja com aceitação ou não", "Tempos turbulentos para as emoções", "Talvez brigas ou separações, ou lágrimas causadas por um amante infiel", "A sensação de estar limpando o terreno para algo novo, em meio ao pesar, porque o momento mais escuro sempre vem antes do alvorecer", "Significa um lampejo de compreensão ou percepção de uma situação como ela realmente é", "Sofrimento", "A Compreensão do Ar", "o Sofrimento da Mãe", "O sofrimento interior que leva à compreensão, que leva à realização no sentido de tornar-se real", "Remoção, ausência, atraso, divisão, ruptura, dispersão", "Pesar", "Pesar por qualquer razão, qualquer desapontamento, qualquer razão para sentir pena de si mesmo", "Uma sensação de isolamento e convivio com uma dor interior", "Indecisão", "Ou desenvolvimento futuro, avanço, e realização de uma ideia, mudança, ou plano Em termos de tempo, indica que uma decisão ou confusão mental já ocorre ou ocorrerá nos próximas dias ou horas."], },
            { id: 53, nome: "Trégua - Quatro De Espadas", palavras_chaves: ["Representa um refúgio do caos mental, escolhido de maneira arbitrária", "Pede por convenção, apaziguamento e conciliação de modo a promover a harmonia social", "Domínio", "Um padrão estático após adquirir o domínio de uma tarefa difícil", "Gozar de recompensas e sucessos por ter entendido a tarefa", "Autoridade no mundo intelectual", "Agir em relação ao que Pensa", "Manifestar-se em público", "Escrever", "Agir em relação às ideias ou expressar uma filosofia pessoal", "Estresse como um dado da saúde", "Necessidade de cura", "Um problema ou um dilema que está sendo trabalhado na mente ou nos sonhos", "Afastamento", "Descanso e recuperação", "A necessidade de pedir auxílio profissional ou espiritual", "A criação de um espaço mental protegido", "A personalidade precisa de um tempo para se afastar, ficar só, e pensar sobre as coisas para curar e renovar se", "Descanso, afastamento, recolhimento, seja para esconder ou para curar", "Um tempo de descanso e retiro após a luta", "um tempo de quietude para pensar as coisas até o fim, por meio do alívio de tensão e de um relaxamento da ansiedade", "Convalescência ou recuperação", "Trégua", "O Ar Misericordioso e o Espírito da Compaixão", "Consciência das potencialidades", "Vigilância, afastamento, solidão, o descanso do eremita, exílio, túmulo e caixão", "Isolamento", "Uma carta da percepção provocada pelo isolamento, como a percepção da sacerdotisa fatídica de Delfi", "As vezes, poderes de profecia invocados secretamente, o isolamento do exílio, o aprisionamento, a convalescência, isolamento voluntário, ou descanso e recuperação em meio à adversidade, Lógica", "Inteligência discernente, estrutura, integridade, pensamento e planejamento", "Arrumar as coisas em um todo trabalhável, criando, assim, um sistema prático E construindo um fundamento sólido por meio da compreensão de como cada parte se relaciona com o todo", "Reconhecer que há uma ordem com todos os fenómenos do universo", "Descanso", "Descanso e recreação", "Dar um tempo", "Às vezes, doença para recuperar", "O intelecto abrindo mão de seu controle", "Pausa para recuperar as Forças"], },
            { id: 54, nome: "Derrota - Cinco De Espadas", palavras_chaves: ["Uma vitória cara demais", "Uma vitória que vai se transformar em derrota em breve", "Temor de Derrota", "Lembrança de Derrota", "Algum medo de derrota pesa na mente, torna o individuo temeroso de tentar novamente um novo relacionamento ou uma nova ideia", "Existe o desejo e a possibilidade de se livrar deste medo dentro das próximas semanas", "Conflito", "Envolvimento em um conflito que parece já ter sido superado mas que deixa o individuo com problemas", "O Senhor da Derrota", "Vênus em Aquário", "O Cinco, como sempre, traz ruptura, neste caso, porém, é por fraqueza em vez de excesso de força", "A derrota se dá em função do pacifismo", "O intelecto foi enfraquecido pelo sentimento", "Medo", "Uma sensação de medo", "Medo de uma situação dolorosa, amedrontadora ou desconhecida", "Estar preso em uma armadilha própria feita de energia negativa do passado", "Ajustes Filosóficos", "Desafio ou mudança de estilo de vida", "Hora de adaptar suas crenças ou comunicações", "Dificuldade em comunicar suas ideias aos outros", "O pensamento pode estar fragmentado e as decisões difíceis, trazendo confusão e dúvida", "Uma vitória vazia utilizando meios injustos", "Conflito pessoal ou político", "Uma situação sem vitória", "Desavenças", "Uma vitória conseguida por meio de trapaça", "Uma poderosa experiència negativa, tal como uma derrota num nível mental", "Derrota com um sentido de humilhação e de fraqueza", "A necessidade de desistir de lutar contra uma situação", "Aconselha a engolir o orgulho, reconhecer e aceitar limitações, e prosseguir em uma nova direção", "Perda", "O Vento que Leva e os Pássaros da Perda", "Rompimento dos padrões estabelecidos", "Degradação, destruição, revogação, infamia, desonra, perda, e as variações e analogias das mesmas", "Um ataque sobre a fortuna do consulente", "Derrota", "Uma derrota decretada pelo Destino, a ser aceita sem protesto e suportada com paciência e coragem passiva", "Negatividade", "Dúvida e pessimismo, pensamentos derrotistas baseados na interpretação da mente", "Um Labirinto mental temporário"], },
            { id: 55, nome: "Ciência - Seis De Espadas", palavras_chaves: ["Solução fora da caixa", "Pensamento Objetivo", "Lógico", "Racional", "Capacidade analítica pronunciada, o pensamento lógico científico que pode ser sentido interna e externamente", "Comunicar algo novo, e de forma tão lógica e objetiva que será compreendido pelos outros com facilidade", "Problemas que logo terminarão", "Sentir-se sobrecarregado de responsabilidades mas fazer as coisas certas para solucioná-las", "atravessar o mar de dificuldades com uma solução brilhante", "O Senhor da Ciência", "Mercúrio em Aquário", "A interpretação mais completa desta carta é o equilíbrio perfeito de todas as faculdades mentais e morais, conseguido a duras penas, e quase impossível de ser mantido em um mundo em mudança constante", "O pleno. estabelecimento e equilíbrio da inteligência e da humanidade, Clareza", "Clareza súbita", "Uma capacidade analitica afiada", "As faculdades mentais e morais em verdadeiro equilíbrio o que causa júbilo e alegria e um belo sentimento de reverència", "Uma Filosofia ou Padrão de Comunicação Confiável", "O dom de dar apoio na adversidade", "Afastar-se do perigo", "Jornada através da consciência ou viagem mental", "Solucionar problemas, Afastar-se para ver as coisas em perspectiva objetividade", "A carta de Espadas mais espiritual depois do As", "À capacidade de ver as coisas como um todo, Perspectiva, afastar-se, e cuidar do que tiver magoado você", "Uma travessia tranquila por tempos difíceis", "Um tempo de transição fácil", "Funcionar em uma situação difícil sem, no entanto, lidar com os problemas fundamentais", "Quebrar o silêncio", "Afastar-se das dificuldades em direção a um tempo mais pacifico", "Pode significar uma viagem no sentido literal, uma mudança para um ambiente mais agradável", "A liberação da tensão e da ansiedade após um período de esforço, e uma sensação de harmonia prevalecente", "Transição", "Belo Voo ou Harmonia dos Pássaros", "Mover de um estado para outro numa transição equilibrada", "Uma sensação de movimento em direção a um santuário, segurança ou resolução", "Viagem por água, rota, caminho, mensageiro, comissionado, expediente", "A jornada será agradável", "Passagem", "Um tempo difícil e ansioso, uma jornada em direção a um futuro escuro e desconhecido que às vezes é presságio de sucesso", "Extrema atividade mental e agitação, conflito mental, ambiguidade e indecisão", "Deste conflito podem vir a solução e a síntese, e grandes ideias podem surgir", "Visão Global", "A mente vigiando a si própria", "O poder da travessia segura de um mundo para outro"], },
            { id: 56, nome: "Futilidade - Sete De Espadas", palavras_chaves: ["Futilidade", "Pensamentos em Futilidades", "Querer algo e crer não poder tê-lo", "Uma sensação de resignação, desistência", "Existe o desejo e a possibilidade de sair desta sensação de futilidade", "Criar Problemas Para Si Mesmo", "Criar problema por assumir sentimentos de culpa ou ressentimentos", "O Senhor da Futilidade", "Lua em Aquário", "Há vacilação, um desejo de conciliar, uma certa tolerância", "Esta carta sugere a política de apaziguamento, uma luta entre os muito fracos e o único forte, um esforço vão", "Muitas Línguas", "Uma sensação de futilidade", "Caminhos demais a serem seguidos, como ouvir ou falar várias línguas diferentes ao mesmo tempo", "Perda de Tempo", "Flexibilidade Mental", "Experimentar com programação, estilo de vida, rotina, crenças, ou comunicação", "Esperteza e astúcia com capacidade para criar planos e estratagemas", "Pesquisa", "coletar o conhecimento e as ideias dos outros", "Preparação", "Mentir e espreitar", "Evitar confronto", "Estratégia mental", "A mente cria um plano para conseguir o que quer", "Esquemas e ações que não solucionam coisa alguma, talvez uma sensação de isolamento", "Esperteza em conjunto com a ocultação de suas verdadeiras intenções", "Ou agir para tentar obter auxílio ou conselhos de outros", "A necessidade de prudência e evasão para alcançar um objetivo, É o momento de usar o cérebro, e não músculos", "Se a carta estiver mal colocada, pode indicar uma fuga de uma ação desonrosa", "Desonestidade", "Com frequência quer dizer enganar a si mesmo, quando a mente não quer enxergar a verdade e há uma ruptura das emoções", "Perder tempo e energia com bobagens", "Em termos mais gerais, uma carta de movimento complexo, uma força essencial de inspiração e ruptura que origina a tensão do poder a ser utilizado com criatividade", "Planejamento, tentativa, desejo, esperança, confiança", "pode ser também discussão, um plano que pode falhar, irritação", "Oposição", "Estar na ponta da espada", "Discussões, dificuldades, e impedimentos ao movimento", "Tédio", "Estabilidade mental em meio ao grande movimento", "Descanso ou tédio mental", "Dar a mente a oportunidade de reagrupar-se e renovar-se", "Evitar Confronto", "Táticas de evasão e ocultação", "Planos e ideias novos estão sendo semeados na mente, mas ainda não está claro como chegar a completá-los"], },
            { id: 57, nome: "Interferência - Oito De Espadas", palavras_chaves: ["Muito barulho e muita interferência externa", "Interferência Mental", "O desejo de expansão em relação a qualquer dualidade", "Indícios de análise excessiva, dúvidas ou confusões em relação a uma escolha que deve ser feita", "Problemas Temporários", "A sensação de que nada vai funcionar, de que a batalha pelos sonhos foi perdida", "O Senhor da Interferência", "Júpiter em Gêmeos", "Significa falta de persistência em questões intelectuais e competitivas", "Devido à influência de Júpiter em Gêmeos, a boa sorte espera até mesmo esses esforços enfraquecidos. No entanto, a Vontade é frustrada constantemente por interferências acidentais", "Escudo de Poder", "Indecisão levando à uma sensação de aprisionamento", "Energia desperdiçada, obstáculos externos, desilusão", "A rendição ao amor limpa o caminho e fornece poderio interno", "Organizar Pensamentos e Comunicações", "Organizar e trabalhar novamente o estilo de vida, o cronograma, ou as atitudes para alinhá-los de forma mais próxima com seus valores", "Preso por obstruções mentais", "Espera para ser resgatado", "Ideias em demasia sem direção", "Falta de persistència", "Aprisionado por suas próprias crenças", "Restrições", "Ignorar as opiniões dos outros", "A ação de lutar para sair de uma caixa construída por sua mente um atoleiro, um obstáculo impedindo-o de atingir o sucesso", "Confusão, ideias que oprimem, isolamento", "Sentir-se encurralado, envergonhado", "Medo de sair de uma situação que amarra e restringe", "Do lado positivo, um sinal virá para mostrar-lhe o caminho (Oito de Bastões)", "Perigo", "O Vento que Cerca", "Mudança Incessante", "Movimento Incansável", "Incerteza", "Energia potencialmente destrutiva ou desequilibradora", "O perigo pode ser ultrapassado e precisa ser encarado, seja potencialmente ou na realidade, haja o que houver", "Inquietação dispersa, distúrbio mental, desequilíbrio e confusão", "Más notícias, mortificação violenta, crise, censura, poder sob pressão, conflito, calúnia", "também doença", "Esta carta é, no entanto, de duração temporária e não um aprisionamento irrecuperável", "Desilusão", "Perda de fé, tumulto interior, depressão e, possivelmente, a descoberta de que princípios e crenças que lhe eram caros são falsos", "Dar demasiada atenção para os outros e não ouvir a si mesmo."], },
            { id: 58, nome: "Crueldade - Nove De Espadas", palavras_chaves: ["Preocupação", "Autocrueldade Mental", "Pensamentos negativos e degradação mental sentidos dinâmica e respectivamente, o que deprime o indivíduo. O cachorro comeu minha lição de casa!", "Sentir Pena de Si Próprio", "Ser magoado pela vida e ficar chorando em vez de ir adiante", "O Senhor da Crueldade", "Marte em Gêmeos", "Aqui, a ruptura original inerente a Espadas é elevada à mais alta potència. O naipe está em degeneração constante, o pensamento já passou por todas as etapas possíveis e a conclusão é o desespero", "O puro intelecto original não passa agora de movimentos automáticos das paixões sem coração", "A consciência caiu em um reino não iluminado pela razão", "Ser ameaçado ou parecer ameaçador para os outros", "Ser magoado e ter magoado os outros", "Temer a crueldade, julgamento e dor", "Uma sensação de raiva que leva ao isolamento", "A necessidade de analisar, pensar de forma clara, e entrar em contato com seus sonhos noturnos para obter direção e compreensão", "Pensamentos Integrados", "Oportunidade de sentir o luto, enfrentar os demônios ou aguentar os pesadelos com tempo e paciência", "Depressão", "Culpa", "Luto", "Um pesadelo terrível, o surgimento no inconsciente de todos os temores e projeções que a mente criou durante o processo de pensamento", "Preocupação ou angústia", "O mais profundo pesar, momento de agonia e dissolução", "Uma sensação de desastre e desgraça iminentes que pode não ter fundamento", "Uma decisão difícil a ser tomada ou uma situação que precisa ser encarada na qual o medo é muito pior que o resultado", "Desventura", "Aquele que Traz o Furacão", "Nascimento do Pesar", "Associado à dor, dores do parto e dores da morte", "A dor espiritual da Mater Dolorosa de Toda Existência, ou a dor fisica do nascimento ou da morte de qualquer fase de vida", "Desolação total", "Morte, falha, aborto, demora, mentira, decepção, desespero", "Em geral, uma carta de mau agouro", "Crueldade, sofrimento físico ou mental, ansiedade relativa à possibilidade iminente da dor, ou indiferença e frieza em relação à dor de outrem", "Limitação", "Foco nas prioridades", "Concentração naquilo que é mais importante terminar, sem estripulias, e confiar em si mesmo e no caminho escolhido", "Pequeneza de espírito", "Conclusão Mental", "Pensar demais, o que resulta em uma mente magoada, doença ou insônia."], },
            { id: 59, nome: "Ruína - Dez De Espadas", palavras_chaves: ["Falha", "Seus esforços serão em vão", "Restrição Espiritual", "Repressão", "Contenção de comunicações por medo da forma como seriam recebidas", "Ideias em demasia", "A mente está tão ocupada pensando sobre muitas coisas que se tornou seu pior inimigo, ela não pode enxergar a floresta por causa das árvores", "O Senhor da Opressão", "Sol em Gémeos", "A Força destacada de suas fontes espirituais", "Fogo em seu aspecto mais destrutivo", "uma força cega que sugere opressão e repressão", "É o que ocorre quando se usa a força. força, e apenas a força todo o tempo", "A Jaula", "Sentir-se preso numa armadilha ou oprimido", "Uma Questão de Identidade", "Sentir-se confortável consigo mesmo mas consciente de que este é um momento de escolha", "Por agora, ficar em cima do muro", "Criatividade bloqueada por responsabilidades em excesso, ou a importância de desenvolver um senso de responsabilidade", "Perseverança para atingir um objetivo", "Fardos", "Uma liberação de todas as energias que se construíram com o tempo e que de vez em quando tomam conta da personalidade", "Fardo e opressão pela vida, sobretudo pela responsabilidade", "Fardos demais ou se livrar de fardos", "Um fardo desaparecerá em breve ou um problema será resolvido", "O fardo pode ser físico, mental ou emocional, e é, com frequência, auto-imposto, mas alguma coisa pode ser feita para aliviar o peso agora", "O sentido principal é simplesmente a opressão", "Pior do que está agora não fica mais", "Fundo do Poço", "Uma carta de aparências falsas, disfarce e perfídia", "Triunfo da tirania, mau uso do poder, autoridade egoísta, pressão excessiva, punição da ambição", "Atingir o extremo oposto do fogo", "a extinção", "O excesso de terra sufoca o ar"], },
            { id: 60, nome: "Rainha De Espadas", palavras_chaves: ["O Artífice", "A Precisão", "Pensamento Intelectual", "O desejo de dispensar quaisquer papéis, máscaras ou,defesas que escondem a pessoa real, e de desenvolver o pensamento intelectual", "Pode haver necessidade de passar por terapia ou de desenvolver a própria capacidade terapéutica", "Cuidado com Pensamentos Defensivos", "Esta pessoa, apesar de aparentar amor e bondade, está fechando o coração por dentro", "Água de Ar", "com sua elasticidade e poderes de transmissão", "Um observador atento, intérprete sutil e intensamente individualista", "Rápido e preciso em gravar ideias, confiante ao agir, elegante e justo de espírito, mas o caráter, que é por si excelente, não suporta interferências", "O Limiar Oriental", "A conclusão de um processo intelectual", "Uma sensação de decisão e comprometimento", "Triunfo, esclarecimento, objetividade e racionalidade", "Maturidade Intelectual", "Sentir as faculdades mentais bem afinadas", "Comunicação forte e efetiva resultante da profundidade de suas crenças", "Amor pelas ideias", "Canaliza pensamentos", "Capaz de falar pelos outros", "Inteligente e autoconfiante", "Em geral, é justo mas pode ser vingativo", "Nutre ou abafa ideias", "A mente em funcionamento, a canalização da sabedoria", "Uma jornada ao reino frio do intelecto, uma folga das emoções em favor de um período contemplativo e introspectivo", "Talvez se sinta excluído emocionalmente", "A ligação entre a sabedoria e o pesar", "Uma mulher já sentiu o pesar, que pode estar só por viuvez, divórcio que ou separação", "Ela já amou e perdeu, mas amará de novo ela deve suportar sua dor com coragem e em silêncio", "De vontade forte e determinada, uma mulher que pode suportar tudo que a vida lhe apresenta", "Seriedade", "Por ser uma mulher mais velha, de muitas maneiras, é a contrapartida feminina do Rei de Espadas", "Ela critica os destemperos emocionais e tende a usar sua disciplina mental para equilibrar as emoções dentro de si", "Severidade com castigo, familiaridade com pesar", "Viuvez,tristeza feminina e vergonha, ausência, esterilidade, pesar, privação, separação", "Kali. A Deusa Destruidora que traz o renascimento por meio da destruição", "Independência de reflexão mental", "Claridade e concentração em meio às dúvidas e distrações", "Pensamento Introvertido com Sensibilidade. (ISTP)", "A Profissional", "Lida com as situações com capacidade, rapidez e eficiência", "Muitas vezes, a força por trás de uma organização."], },
            { id: 61, nome: "Cavaleiro De Espadas", palavras_chaves: ["O Supervisor", "Pensar com Paixão", "Pensamentos apaixonados relativos à realização de algum objetivo que o Eu por inteiro deseja em algum nível profundo", "Ir adiante e ser bem sucedido em alguma tarefa específica", "Pessoa Defensiva e Obstinada", "Esta pessoa é restrita e está na defensiva", "Necessidade de ser mais aberta e acessível a sugestões", "A parte fogosa do Ar", "O poder violento do movimento aplicado a um elemento que aparentemente é manipulável", "Ativo, habilidoso, sutil, esperto, feroz, delicado e corajoso", "As ideias podem absorver toda a sua vida em aspiração concentrada", "A Vontade de Transcender", "Um período analitico", "O poder da ideia e do movimento, o espírito do intelecto", "Altamente analítico, precisão exigente, brilhante, e altamente racional", "Abandonar uma Velha Ideia ou Padrão de Comunicação", "Trocar ideias filosóficas antigas por um novo ponto de vista", "Abandonar crenças e valores antigos que já não parecem mais apropriados", "Pensamento estabelecido", "A capacidade de comunicar c de ser analítico", "Um escritor, advogado, filósofo (profissional ou não)", "Esperto e rápido", "Intelecto, inteligência e pensamento abstrato", "Uma combinação forte de emoções quentes e uma inteligência poderosa", "Autoridade, poder, e julgamento", "Uma pessoa que possui um senso prático comum, em geral baseado em pré-julgamentos e preconceitos, em vez de na observação da vida", "Uma linha tênue entre o intelecto comprometendo e o poder em si mesmo", "Convicção moral firme, força interior e comprometimento profundo, na amizade e inimizade", "Não se deixa emocionar com facilidade por súplicas de misericórdia ou compaixão, julga com dureza, mas é escrupulosamente justa. É muitas vezes encontrado em uma posição de autoridade e é muito temido mas sempre respeitado", "Severo", "Um homem maduro através do qual a força cortante da Espada do Ar chega a seu ápice de controle, criativo e de vontade", "Frequentemente envolvido com questões de justiça, disciplina, ordem cívica e pessoal", "Tudo que deriva da ideia de julgamento e todas as suas ligações", "poder, comando, autoridade, inteligência militante, lei, funções da coroa, e assim por diante", "Um advogado, senador, médico", "Yama. O deus Touro que entregou sua vida para ser rei no mundo vindouro", "Um juiz poderoso, uma autoridade divina, a incorporação da disciplina e da ordem, pode ser perigoso, desumano, ou perverso", "O Inventor", "Mestre da Criatividade e da Confusão", "Enxerga novos pontos de vista, deixa a mente extravasar e cria ideias de forma tempestuosa", "Pensamento Extrovertido com Sensibilidade (EST)", "O Comunicador", "Mestre intelectual e mental sem emoções", "Palestrante, orador, pregador e professor."], },
            { id: 62, nome: "Príncipe De Espadas", palavras_chaves: ["O Marechal", "O Pensador Intuitivo Criativo", "A necessidade de liberar o pensamento criativo, intuitivo, de cortar qualquer coisa que limite a capacidade de desenvolver algum novo pensar aquariano que tenta surgir", "Vai rápido demais Vá Mais Devagar", "Esta pessoa está indo rápido demais, ela precisa ir mais devagar para ser bem sucedida", "Ar de Ar", "Puramente intelectual, cheio de ideias, intensamente esperto, e de uma racionalidade admirável", "Reduz todas as ideias à irrealidade ao levá-las a um mundo ideal de raciocínio e formalidade, que está, enquanto tal, alienado dos fatos", "Guerreiro da Mente", "Sentir-se dividido entre dois ideais que parecem ter o mesmo peso ou valor", "Ser corajoso, arrojado, dominador, limpo, e cheio de coragem, mas caso não se sinta comprometido, não possui poder duradouro", "Foco na Comunicação", "Altamente empenhado em viver seus ideais filosóficos na vida cotidiana", "Coloca uma energia incrível ao apoiar ou examinar crenças específicas", "Concentrado em lograr seu intento", "Comprometido com as ideias, pensamentos, filosofia", "Utiliza a mentalidade, comunicação", "Fala o que pensa, afirmativo e corajoso, porém teimoso e impaciente", "Corajoso, habilidoso, forte, tendendo à ferocidade e ao fanatismo", "Não reconhece limites", "Dirige toda a energia para o exterior, talvez incomodado por ficar a sós consigo mesmo", "Extravagante, descuidado, excessivo", "Possui uma certa implacabilidade, um cérebro brilhante, e um bom tino para negócios. No caso de um evento, ele representa uma situação que começa com grande velocidade em meio a grande emoção, e deixa um certo caos em seu rastro", "Combativo Um homem ou mulher jovem em quem o Ar original é duplicado, levando ao surgimento de uma natureza turbulenta e mutável", "Entusiástico, ativo em excesso, apressado, muitas vezes argumentativo", "Habilidade, coragem, capacidade, defesa, discurso, inimizade, irá, guerra, destruição, oposição, resistência, ruína", "Tyr. O deus nórdico da batalha, e Marte, o deus romano da guerra, que representava guerra, destruição, pestilência, ousadia e morte", "O Sábio Mestre da Síntese e da ilusão", "Ponto de vista prudente", "Expansão em direção à consciência cósmica", "Pensar Extrovertido com Intuição (ENE)", "O Pensador", "Concentração total e absorção em alguma coisa", "Analítico e impessoal", "Desenvolve uma estrutura na qual basear suas verdades pessoais"], },
            { id: 63, nome: "Princesa De Espadas", palavras_chaves: ["O Arquiteto", "Pessoa que começou a filosofar agora", "O Início do Domínio do Elemento Ar", "O Combatente de Ånimos. Os ânimos do indivíduo estão fora de controle e anuviam a clareza mental", "Também pode ser um indivíduo que tem o dom de ser um lutador de ânimos e pode auxiliar os outros a aprender a fortalecer seu pensamento pragmático e controlar os ânimos", "Defensivo", "Esta pessoa está muito na defensiva e pode até ser agressiva", "Tem sentimentos hostis e emoções negativas", "Pessoa fofoqueira", "Terra de Ar e como tal, a fixação do volátil", "Ela é a materialização da Ideia e da influência do Céu na Terra", "Severa e vingativa, lógica destrutiva, firme e agressiva, com grande sabedoria prática e sutileza nas coisas materiais", "Grande destreza na administração de coisas práticas e na resolução de controvérsias", "Talvez um sentimento de estar envolvido em uma batalha em que se esteja combatendo noções ou valores tradicionais", "Riscos em Pensamentos ou Comunicação", "Arriscar-se no seu modo de vida ou na comunicação", "Aberto à justiça e à verdade", "Arriscar cortar através do raciocínio confuso e chegar à verdade da questão", "Penetrante e astucioso", "Arriscar-se com a comunicação", "Ímpeto à ação, impulsivo e ousado", "Um tempo de atividade e de iniciar novos projetos", "A personalidade está impaciente, talvez ansiosa em demasia, ou até mesmo ousada demais", "Soluciona conflitos e vai de encontro à oposição pelo afastamento, por simplesmente estar acima de tudo", "Invertida, pode indicar paranoia e obsessão com problemas", "Um jovem que pode ser muito esperto, mas é inescrupuloso e não se preocupa com os sentimentos dos outros", "Força de vontade extremamente forte, podendo ser bastante frio e calculista", "No caso de um evento, pode significar situações que foram complicadas pela disseminação de rumores ou fofocas", "Difícil", "Uma criança ou jovem que pode ter conflitos internos que só serão resolvidos com a maturidade e a experiência", "Uma natureza difícil que pode manifestar-se como obstinação, um tipo de força interior e capricho", "Também pode ser uma criança inteligente, sensível além de sua idade", "Alerta e ágil", "Uma pessoa indiscreta bisbilhotar os segredos do consulente, Skuld, A líder das Valquírias, uma guerreira que julgava e recebia as almas dos mortos", "Uma mulher de mente aguçada e de julgamento afiado e bom humor, severa e poderosa, considerada um símbolo de problemas e de possível perigo", "O Aluno", "Domínio dos Pequenos Detalhes e do Tédio", "A mente curiosa que explora as possibilidades", "Pensamento Introvertido com Intuição. (INTP)", "O Iniciador", "Traz mudanças e conhecimento através da palavra escrita e falada."], },
            { id: 64, nome: "A Raiz Dos Poderes Da Terra - Ás De Discos", palavras_chaves: ["Melhor momento para se iniciar um novo negócio ou Projeto Material", "Energia Centrada Prática, Organizada", "A união entre os aspectos espirituais e físicos do seu ser", "Irradia o aspecto mais elevado de seu ser que o faz manifestar-se fisicamente", "O dom de estar centrado, com os pés no chão e produtivo, está disponível para ser usado durante o próximo ano", "Novas Condições Materiais", "O começo de um novo caminho na vida que lhe trará satisfação", "A Raiz dos Poderes da Terra", "Como é o caso de todos os Ases, este não é o elemento em si, mas sim a semente do elemento", "Esta carta é a afirmação de uma nova Era em que o Sol e a Lua serão reconhecidos como Seres vivos, como nossos companheiros constantes em um Universo de Pura Alegria", "Forma", "Receber o dom da produtividade, algo novo em termos físicos ou materiais", "Engajar-se em projetos novos e promissores", "Mover-se em direção a um estado de real sucesso externo e de harmonia interna", "O início de ganhos materiais e deleite espiritual", "Um Novo Padrão ou Forma Física", "Plantar sementes de casa nova, emprego, carreiras, ou forma de segurança", "Talvez desejo de seguir novos rumos em relação à saúde ou às finanças", "Consciência que se Cristaliza", "Sustento do Corpo", "Uma possibilidade de negócios ou trabalho", "Materialização de ideias", "Centrar ou fundamentar sua energia", "Estabilidade e capacidade para conseguir resultados", "Um dom de energia telúrica", "o nascimento de algo em forma material", "Alguma coisa se manifesta", "Às vezes, um tempo de meditação, energia voltada para o interior", "Uma dádiva da Terra", "natureza, riqueza, segurança, uma vida feliz", "Proteção", "Abandonar a segurança para entrar em um mundo maior", "O corpo, a matéria, os ganhos materiais, o status ea realização mundanos, segurança financeira, ou riqueza", "Bons começos para proposições financeiras, negócios e empreendimentos", "Pode também significar a fundação bem sucedida de um negócio que trará recompensas financeiras, prosperidade e segurança com base sólida", "Pode também indicar uma quantia em dinheiro ou presentes, talvez em ouro", "Terra/Lei", "Poder manifesto ou expresso muitas vezes relacionado a circunstâncias externas ou materiais", "Contentamento perfeito, felicidade, êxtase", "também inteligência rápida", "ouro", "Mostra prosperidade e condições materiais confortáveis", "A mais favorável de todas as cartas", "Recompensa", "As recompensas, no sentido mundano, dos esforços prático tais como oportunidades, segurança, fundações estáveis e posse", "Sucesso", "Capacidade de alcançar metas e de ter sucesso no mundo", "Juntar recursos e talentos internos e externos, de modo a se estabilizar no mundo material do trabalho, dinheiro, relacionamentos, saúde e lar", "Dá Base à Força", "O surgimento de uma manifestação física", "O início de qualquer forma física."], },
            { id: 65, nome: "Mudança - Dois De Discos", palavras_chaves: ["Momento de saber negociar com todas as partes", "Transição Física", "Transformação", "Um equilíbrio conseguido através de mudanças que ocorrem no exterior para tornar as coisas mais seguras, estáveis e sólidas", "O símbolo do infinito, a continuidade das mudanças sem fim", "Tentar Equilibrar as Questões Materiais da Vida", "Fazer malabarismos com as questões materiais", "O Senhor da Mudança", "Júpiter em Capricórnio", "Como é apropriado para o dois, esta é a energia em sua forma mais fixa, portanto, é a mudança em sua forma mais fixa de acordo com a doutrina que afirma que a Mudança é o apoio da estabilidade", "A Terra é o trono do espírito, ou uma vez tendo chegado ao fundo, imediatamente saímos no topo", "Assim sendo, representa a interrelação harmoniosa dos Quatro Elementos em movimento constante", "Causa Efeito", "O processo de se aprender que cada ação implica em uma reação", "Reconhecimento do processo infinito, yine yang", "O espaço sagrado da ambivalencia infinita", "A Escolha de um Caminho Fisico", "Afirmar e gerir uma nova forma de estabilidade financeira, material ou interior", "Capacidade de lidar com duas ou mais situações ao mesmo tempo", "Expandir seus horizontes", "Adaptabilidade", "Mobilidade", "Mudança", "Viagem", "Diversão", "Tentar coordenar mais de um projeto ao mesmo tempo, ou cuidar do crescimento interno e de realizações externas simultaneamente", "Fazer malabarismos com a vida", "A necessidade de manter diversas proposições em andamento ao mesmo tempo", "Um fluxo de movimento quando a manipulação bem sucedida alcança o sucesso", "Mudança, sobretudo com relação a questões financeiras, mas também harmonia dentro da mudança caso se consiga ser suficientemente flexível para manter as coisas em movimento", "A Sabedoria da Terra", "Todas as coisas mudam", "Mudança surgindo da escuridão, da noite, da quietude", "Da luz avançamos para escuridão, da escuridão para luz", "O portal para as transições maiores e movimentos de energia em qualquer ciclo", "Por um lado é a carta da alegria, recreação e coisas afins, mas pode também ser lida como noticias ou mensagens escritas,ou como obstáculos, agitação, problemas, e imbroglos", "Os problemas são mais imaginários do que reais", "Mudança, Uma carta especialmente importante, que implica que os opostos são apenas ilusão, e que todas as coisas são, em última instância, diferentes formas da mesma coisa", "Reflexão", "Tirar tempo para observar bem a situação", "Contemplação, avaliação, pensar, ou ter paciência antes de agir Vida Cotidiana", "A condição fisica da dualidades", "Yin yang", "A capacidade de reconhecer e integrar polaridades."], },
            { id: 66, nome: "Trabalho - Três De Discos", palavras_chaves: ["Trabalho em Equipe", "Persistència Física", "Tenacidade", "Resistência", "Determinação acentuada de dar a qualquer situação externa tudo de si", "pleno compromisso com uma situação a despeito das dificuldades", "Operar num alto nível de energia", "Consciência das Responsabilidades", "Ter consciência das responsabilidades e de que está sendo observado", "O Senhor do Trabalho", "Marte em Capricórnio", "O estabelecimento material, a forma básica da ideia de Universo", "da Terra, a cristalização das forças", "A energia é construtiva e Marte está em sua melhor forma", "Algo foi definitivamente realizado", "Trabalhos", "Um tempo de inventar, criar, ou engendrar", "Todas as coisas materiais estão se alinhando para trabalhar em prol do sucesso, desde que o sentido do coração e do espírito não se perca", "Planejar Estruturas Seguras", "Planejar as necessidades físicas, financeiras, ou de segurança realmente desejadas", "Amor ao trabalho", "Elaborar planos práticos utilizando as capacidades e habilidades criativas", "Praticidade", "O dom de trabalhar em conjunto com os outros", "É a carta do artesão, Exibir trabalho para aprovação", "Trabalho feito em conjunto, um ato de construção em comum", "Capacidade de trabalhar em conjunto", "Trabalho duro e dedicação resultando em domínio", "Trabalho prático e consciente que pode servir ao autodesenvolvimento", "Uma forma ou estrutura básica que está acabada, correta e completa, à qual agora podem ser acrescentados os toques finais", "Ganhos materiais ou sucesso através do esforço", "Aprovação e reconhecimento de outros e uma merecida sensação de ser bem sucedido", "Esforço de time", "Esforço certo em prol de um fim sábio ou elegante", "Comércio", "trabalho especializado em geral, no entanto, é considerada uma carta de nobreza, aristocracia, fama, glória", "Trabalho realizado, sobretudo com outros", "Ganhos materiais resultantes da capacidade criativa", "Sustentar com paciência e com todo amor e carinho", "Amor pelas suas criações", "Trabalhar", "Aumentar e produzir no plano físico, em geral, com uma sensação de amor e/ou satisfação."], },
            { id: 67, nome: "Poder - Quatro De Discos", palavras_chaves: ["Tomar conta de suas posses", "Potência Física", "Vitalidade", "Força de Caráter", "Possuir a própria energia pessoal, poder e vitalidade", "Ganáncia", "Um sentimento de autoconfiança", "Expressar vitalidade e criatividade no mundo externo", "Segurar com força", "Manter as possessões bem próximas de si mesmo, sejam posses materiais ou emoções", "O Senhor do Poder", "Geração e estabelecimento no seu sentido material mais pleno", "É aquele poder que domina e estabiliza tudo, mas lida como assuntos muito mais por negociação, por métodos pacificos, do que por afirmação própria", "É a Lei, a Constituição, sem nenhum elemento agressivo", "Poder", "O desdobrar do poder", "Talvez uma sensação de se fechar para o mundo exterior", "Poder que será manndo se oferecido a serviço do amor", "Tomar providências concretas para criar segurança no mundo físico", "Agir para sentir-se centrado e com os pés na terra", "Dom de conseguir os recursos necessários", "Consciência do próprio valor", "Poder, Estruturar ou dar ordem a uma situação", "Estar centrado ou ser egoísta", "Possessividade", "Um santuário interior de algum tipo, talvez uma casa ou um quarto onde a pessoa pode ficar so e abrigada", "Uma necessidade de silêncio", "Dependència de conforto material e segurança para ter estabilidade", "Egoísmo, ganancia, ou confinamento", "Dar sentido e estrutura ao universo material", "Autoproteção", "Manter algo sem nada arriscar, mas também nada ganhar", "Quem não arrisca não petisca", "Incremento", "A Terra Misericordiosa", "Crescimento", "Concede poder em uma dada situação qualquer e o aumenta", "A certeza da posse, agarrar-se às posses", "Dadiva, legado, herança", "Avareza Bloqueio de pensamentos e ações, resultado natural da dedicação excessiva às recompensas materiais", "Começo", "Movimento de energia com velocidade", "O exercicio e a expressão de seus talentos e sonhos", "Ir em frente, dar o grande salto", "Poder", "O prazer de uma situação física", "Estar contente e satisfeito com o modo das coisas, sentir-se tão protegido quanto se estivesse dentro dos muros de uma fortaleza, sob o domínio de um poder benevolente."], },
            { id: 68, nome: "Preocupação - Cinco De Discos", palavras_chaves: ["Dificuldades e conflitos", "Revisão de estratégias, afastamento, reagrupamento, realinhamento, e redirecionamento devido a um revés", "Um tempo em que a calma foi interrompida, e você está temporariamente desequilibrado", "Deixar de lado a situação como ela é e ir em frente, Ou quando sua ideia de ir a algum lugar é ficar correndo em círculos"], },
            { id: 69, nome: "Sucesso - Seis De Discos", palavras_chaves: ["Justiça", "Cada um receberá o que merece", "Sucesso Físico", "Realização", "O desejo profundo de ser bem sucedido em algum empreendimento externo", "Sucesso, realização em todos os aspectos da vida pela vontade de arriscar-se, pelo comprometimento, e por confiar na intuição", "Ter que Dar", "Pela Lei do Carma você está sendo obrigado a dar neste momento", "Receberá de volta mais tarde", "O Senhor do Sucesso", "Lua em Touro", "O estabelecimento pleno e harmonioso da Energia da Terra", "Esta é uma carta de acomodação, falta total de imaginação e um tanto sonhador", "O peso da Terra, em última instância, trará a mera resolução das coisas materiais, a mudança virá em breve", "Porém, por ora, existe um sistema equilibrado", "Beleza", "O Caminho da Beleza", "Sentir a alegria de dar", "Sarar através da busca da beleza", "O estabelecimento harmónico e equilibrado da energia material oriunda de uma consciência elevada", "Um Ciclo Físico Previsível", "Renda ou segurança constante e previsível", "O dom do sucesso nos relacionamentos, conseguido através do compartilhamento dos recursos", "Tirar aquilo que é necessário", "Sensibilidade às necessidades dos outros", "Uma troca de energia", "Pode ser uma co-dependência", "Ser pago justamente por aquilo que fez", "Generosidade, ter mais do que o suficiente, compartilhar a saúde e a boa sorte", "Compartilhar, generosidade, caridade", "Um relacionamento onde uma das pessoas domina outras", "Dar às pessoas aquilo que elas são capazes de receber", "Sugere que dinheiro devido será pago", "receber o que seu por direito", "Pode ser auxílio financeiro vindo de um amigo generoso ou do empregador, questões financeiras colocadas num patamar mais estável", "Também sugere que a prosperidade atual deva ser compartilhada com outros", "Benefício", "A Harmonia da Terra ou a Bela Terra", "Uma força de cura e redenção Um benefício muitas vezes através da forma, padrão, ou formato que não é uma estrutura rígida, mas beleza, fluxo, e forma viva na qual se encontra os padrões de fluxo elementares", "Presentes, dádivas, gratificação", "Atenção, vigilância", "Agora é a hora aceita", "Prosperidade no presente", "Auxílio vindo de alguém, ganhos materiais, mas com uma advertència contra o gasto excessivo dos recursos devido à generosidade mal dirigida", "Sinergia", "A capacidade de reunir recursos para criar uma aliança entre poder e sucesso", "Reunir seus próprios recursos ou os dos outros", "Sucesso", "Constância na realização", "Ter saúde, energia física ou recursos próprios suficientes para poder incluir os outros"], },
            { id: 70, nome: "Fracasso - Sete De Discos", palavras_chaves: ["Uma pausa durante o crescimento na qual as sementes de um novo crescer e de um caminho melhor, mais recompensador, serão descobertas", "Utilizar a sabedoria e a compreensão para fazer aquilo que é certo", "Experiència Fisica", "Experiencias com dinheiro, recursos materiais, ou com o corpo", "Explorar modos de sentir-se centrado, seguro e com os pés na terra", "Não importa o que se faça, existe um certo momento em que é preciso esperar pelos resultados", "Demora", "Avaliar os resultados de seus esforços", "Observar os ciclos e processos", "Paciencia", "Crescimento e espera", "A mensagem desta carta é", "Tenha paciência, não há nada a fazer, a não ser esperar", "Não há maneira de apressar este nascimento, não há, certamente, um modo de ver por dentro", "O momento de poder olhar para trás com satisfação para aquilo que já foi conseguido", "Uma falta de satisfação disseminada que vem de empregos ou compromissos insatisfatórios", "Uma pausa durante o desenvolvimento de um empreendimento ou de um negócio", "Avaliar o que foi conseguido e aquilo que ainda precisa ser feito", "Derrota", "Bloqueio profundo, esperanças enganadas, ansiedade auto-induzida, perda da capacidade de inspirar", "Ultrapassagem", "Ultrapassar os bloqueios que impediam de atingir as metas e aspirações", "Liberação de talentos e recursos", "Espera", "Demora", "Incapacidade de agir fisicamente", "Este é um bom momento de fazer algo enquanto se espera como praticar seu passatempo favorito, refletir, ou pôr em dia as coisas de casa."], },
            { id: 71, nome: "Prudência - Oito De Discos", palavras_chaves: ["O Ato de Trabalhar", "Cautela Física", "Cuidado", "Prudência", "Sabedoria que opera a partir do plano do equilíbrio e da integração", "assegurar-se de que todas as eventualidades estão cobertas", "Nem estender-se em demasia, tampouco com moderação excessiva externamente e funcionar próximo ao equilíbrio", "Trabalhar com Constância", "Inicio de Um Novo Empreendimento", "iniciar um projeto novo, e ter outros mais tarde", "O Senhor da Prudência", "O Sol em Virgem", "Significa amar a inteligência que é aplicada com amor às questões materiais", "Um retirar-se", "o retirar secreto de Energia para dentro da Terra fértil em um certo sentido, um nascimento", "Em relação a questões puramente materiais, é um tipo de força que existe de não fazer coisa alguma", "E lançar a semente, sentar, e esperar, A Montanha", "Perseverança, compromisso, e disciplina", "Aprender, praticar, crescer e florescer", "Uma compreensão mais profunda do Eu no mundo exterior co que precisa ser criado para alimentar o Eu Interior", "Organizar as Coisas Físicas", "Fazer escolhas para que o mundo material se conforme, o mais possível, às suas necessidades", "Capacidade de desenvolver ou refinar uma habilidade ou arte", "Auto-disciplina", "Preparação", "Repetição", "Produtividade", "Momento de por em ordem recursos e finanças", "Arte-aprendizado numa capacidade que o levará pela vida de maneira centrada", "Uma divisão de habilidades entre as pessoas", "Treinamento que ao mesmo tempo traz disciplina e habilidade", "Pensar sobre o trabalho em si, e não em qualquer recompensa que possa advir", "Ou impaciència, frustração, ambição não realizada", "A carta do talento", "A possibilidade de tornar uma capacidade ou um talento em uma profissão, ou dinheiro ganho através desta capacidade", "Trabalho duro e ideias práticas formam a base estável para construir uma nova e lucrativa carreira, em termos emocionais e financeiros", "Capacidade", "Expressão Gloriosa ou Mente Honrosa", "Mercúrio", "A mente funcionando com substancia", "Habilidade para trabalhar com energia e formas", "A perícia manipuladora dos dedos trabalhando a substância", "Uma busca pelas recompensas intocáveis do conhecimento e a expansão do aprendizado em áreas novas", "Mudança", "A maneira de manter o equilíbrio", "A única coisa constante na vida é a mudança, portanto, adapte-se às novas realidades com uma mudança de atitudes, sentimentos, energias e situações", "Aprendizado", "Utilizar e fazer aquilo que lhe traz satisfação", "Ir adiante, crescer, agir, e trabalhar objetivando uma meta."], },
            { id: 72, nome: "Ganho - Nove De Discos", palavras_chaves: ["Lucro Básico", "Benefício", "Ganho", "Na realidade externa há um ganho físico proveniente de projetos, relacionamentos ou situações", "Contentamento e Paz de Espírito", "Paz e quietude e segurança oriundos do trabalho árduo", "O Senhor do Ganho", "Vênus em Virgem", "O equilíbrio da Força no sucesso", "Boa sorte com relação às questões materiais", "favorecimento e popularidade", "a mistura de boa sorte e boa administração", "Nos tornamos cada vez mais complacentes, e nos sentimos como se tudo será sempre para melhor, no melhor dos mundos possíveis", "O Zenite", "A sensação de alcançar um objetivo, recompensa, felicidade, equilíbrio, alegria, esplendor, unidade, amor, beleza e luz", "Sucesso na vida", "Sucesso oriundo do aprendizado de que a importância do ego não é nada perto da importância da alma", "Segurança Integrada", "Dinheiro, recursos, saúde, na uma base de segurança funcionando de maneira coordenada, e sem entraves", "Luxo e bem estar material", "Recompensa pelos esforços", "Ter prazer no lazer solitário", "Relaxamento", "Lazer", "Colheita", "Separado dos instintos e da liberdade", "A pessoa solitária que aprende através da arte, sonhos, meditação, livros, ou dos gatas espirituais", "O desenvolvimento da força e da coragem", "A consciência e capacidade de discernir o que realmente importa na vida", "O sucesso e a certeza oriundos de saber que foram feitas as escolhas e as coisas certas, e que foi feito daquilo que é necessário", "Autodisciplina", "Bem-estar material", "Gozar das coisas boas da vida, mesmo estando sozinho", "O prazer solitário oriundo do conforto físico e do sucesso material, porque você está em paz consigo mesmo e não precisa de companhia constante para sentir-se bem", "Existe a promessa de benefícios materiais e a sua apreciação", "Meios", "Fundados no interior da Terra", "O Ventre Multiplicado por Nove", "Lua Expressiva", "Manifestar energia e ideias em formação", "Todos os meios para a realização sonhos, sementes, padrões de vida, fertilidade sexual, verdade espiritual, nascimento interior, visko, ensinamentos de sabedoria", "O último passo antes da vida física e o primeiro depois dela", "Sugere a farmara em nido, talvez fartura das próprias posses, e é testemunho de bem- estar material", "Prudência, segurança, sucesso, certeza e discernimento", "Aquilo que é pressagiado pelas cartas vizinhas tornar-se-á realidade em breve", "Sucesso no sentido de gestação, produtividade, cultivo cuidadoso", "Criar e amar a beleza e a natureza", "Colheita", "Os frutos do trabalho árduo", "Colher o que foi plantado e cultivado", "Colher os frutos do trabalho", "Trabalho criativo solitário", "Sucesso que resulta de seguir seu próprio caminho", "A possibilidade de realizar aquilo que Nietzsche chamou de Amor fait, o amor pelo próprio destino."], },
            { id: 73, nome: "Riqueza - Dez De Discos", palavras_chaves: ["Riqueza", "O Mundo", "Prosperidade Física", "Abundância", "Um estado de riqueza e prosperidade em todos os níveis de consciência e que agora se manifesta no mundo exterior", "Sucesso Material", "Felicidade dominante e bem-estar material, sobretudo o da família", "O Senhor da Riqueza", "Mercúrio em Virgem", "O acúmulo de riquezas", "A última grande solidificação, não apenas do naipe de Ouros, mas, da mesma forma que a carta XXI, o Universo está para as cartas de Trunfo, é a soma total das trinta e cinco cartas pequenas", "A força completamente gasta resultando na morte e no renascimento, demonstrado pelo Conjunto, ou união, de Mercúrio e Virgem", "A Grande Obra", "Uma sensação de ordem, desenho, equilíbrio e harmonia", "A vida avançando num ritmo maravilhoso", "Perceber que o verdadeiro significado da riqueza é seguir o caminho espiritual", "Utilizar a riqueza de recursos e talentos para construir estruturas duradouras no mundo", "Tradições e convenções herdadas ou estabelecidas", "Durabilidade e permanencia", "Prosperidade e riqueza", "Família e lar", "Um circulo de apoio dentro do qual a manifestação tudo que acontece", "A sensação de fazer parte de um grupo ou de uma familia", "Um simbolo de riqueza- o consulente precisa, e mais ainda, está contido no poder da energia de grupo", "Casa estabelecida, vida boa, segurança e conforto", "A magia e as bênçãos da natureza e do universo", "Estabilidade financeira e fundamentos firmes para vida doméstica e em familia", "Sugere a aquisição de propriedade para a fundação de novas gerações, ou tradições sendo passadas dentro da familia com um sentido de continuidade e segurança", "Oportunidade", "A instância máxima da Terra da Terra, o corpo planetário, nosso próprio corpo, e toda a matéria e energia", "Oportunidade material e espiritual em qualquer situação", "Ganhos", "riquezas", "assuntos de família, arquivos, extração, a moradia da família", "Representa casa ou moradia e deriva seu valor das outras cartas", "Proteção", "O charme do poder sobrepujante, o que implica segurança no sentido material, segurança esta não criada por si próprio mas pelo trabalho de outrem", "Recompensa Ser bem sucedido no mundo material", "Abundância que vem do fluxo de renda e produção, Arriscar-se, pensar de forma otimista e abundante, não parar", "Saciedade Chegar à plenitude e ao extremo, seja para bem ou para o mal, ou algo físico sande, corpo, trabalho, dinheiro, segurança."], },
            { id: 74, nome: "Rainha De Discos", palavras_chaves: ["O Inspetor", "Coordenador de Grupos", "A Rainha que administra o Castelo", "A Nutricionista Física", "O embelezamento do corpo e a nutrição saudável são importantes", "Consciência das Limitações", "A pessoa tem consciência do que a cerca, do quanto pode fazer, e de suas limitações. O que ela pode fazer, ela fará bem, e dará frutos", "Água da Terra", "A função da Terra enquanto Mãe", "Passividade, em geral em seu aspecto mais elevado", "Possui enorme reserva de carinho, bondade, grandeza de coração", "quieta, trabalhadora, sensata e prática", "Frequentemente tem dificuldade em elevar-se acima da matéria, e não é muito inteligente", "Limiar do Nascimento", "Sentir um alto nível de compaixão", "Amar e nutrir a Terra, regozijar-se com a vida, amar o plano físico e a oportunidade de manifestar o espírito em sua forma física", "Saber que todas as formas de manifestação possuem a mesma origem", "Competência Física ou Prática", "Sentir um alto grau de competência", "Saber criar e manter a segurança pessoal", "Amor pelo mundo, pela terra e pela vida", "Canaliza informações sensórias e conhecimentos práticos", "Inspira confiança e provê segurança", "Fomenta ou abafa o bem estar físico", "Os aspectos procriativos e de fomento da maternidade física", "Uma personalidade baseada no mundo físico, em harmonia com a Mãe-Natureza", "Saúde", "Um amor e uma unidade com o mundo", "Conhecer e acreditar em si mesmo e na magia da vida", "Permitir que as forças ocultas do mundo fluam através de você para a sua vida cotidiana", "não confiar em si próprio em uma situação específica", "Prática e materialista", "Ela adora as coisas boas da vida e depois de consegui-las fica facilmente contente em passar a vida desfrutando-às", "Sabe o que quer e fica satisfeita quando consegue", "É, com frequência, rica porque trabalha muito para obter ganhos materiais e é generosa com sua boa sorte", "Prática", "Uma mulher madura que é capaz de criar formas específicas da substância potencial, capaz de fomentar e definir", "Seu poder é de sabedoria prática no nível humano e, no nível interno, a sabedoria aplicada da reflexão espiritual", "Uma mulher escura com grandeza de alma e uma inteligência séria", "Opulência, generosidade, grandeza, segurança, liberdade", "Erda. A Mãe Terra, a Erda teutônica, que era adorada por todos os povos primitivos como a doadora de vida e Musa primária", "Generosidade, opulência, fertilidade transbordante, compaixão, conforto, amparo e abundância", "Uma personalidade calorosa, fomentadora", "A Preservadora", "Domínio da Reflexão e Fomento", "Protege e preserva pela multiplicação", "Sensibilidade Introvertida com Pensamento, (ISTJ)", "A Provedora", "Como a Rainha tem segurança interior, ela é capaz de prover segurança para os outros e, deste modo, no nível dos acontecimento, esta carta é tradicionalmente chamada de a resposta às preces."], },
            { id: 75, nome: "Cavaleiro De Discos", palavras_chaves: ["O Promotor", "O Rei Trabalhador", "O Médico Físico", "o Curandeiro", "Uma preocupação com o corpo e com a saúde", "Interesse nos cuidados com a saúde e com a capacidade de ser um líder e guia de outros em questões relativas à saúde", "Sucesso material", "Esta pessoa atingiu o sucesso material e lutará para mantê-lo", "A parte fogosa da Terra", "Trabalhador e paciente, preocupado com coisas materiais, e teimoso, mas pouca compreensão intelectual até mesmo dos assuntos que o tocam mais diretamente", "O Espírito da Fertilização", "Uma sensação de praticidade alegre que é refletida na vida cotidiana", "Dominar of potencial através do autoconhecimento", "Estabilidade, confiabilidade, sucesso, a epítome do sucesso material", "Liberar algo Físico", "O fim de um padrão físico, material, financeiro ou de segurança que já não funciona mais", "Trabalho estabelecido", "A capacidade de produzir e de ser prático", "Um gerente, financista, artesão", "Preocupado com segurança e qualidade", "Uma pessoa que aprendeu a trabalhar no plano físico de tal maneira que será bem sucedido no que quer que faça", "Saber aonde ir e como chegar lá", "Generoso, até mesmo corajoso, não é muito dado a aventuras", "Atividades comuns, realizações, posição social, e sucesso descontraído e prazeroso", "Um homem que ama o dinheiro e as riquezas, e que se sente feliz em acumular o quanto puder", "Muito esperto nos negócios, um mago das finanças", "Ele não é corrupto no seu amor pelo dinheiro e pelas riquezas e ganha dinheiro através do esforço e da paciência", "Generoso com o que tem e divide de boa vontade os frutos de seu trabalho", "Confiável", "Um homem maduro e sábio, de quem se pode depender, uma pessoa em que os outros podem confiar e confiam", "O ancestral masculino primal da Terra, aquele que segura o Espelho dos Elementos e nos ensina que precisamos aprender equilíbrio e força de dentro de nós mesmos", "O homem mais velho em quem outros instintivamente confiam, dependem, e a quem pedem ajuda e conselhos", "Um homem bastante sombrio, corajoso, mas com uma tendencia um tanto letárgica", "Coragem, inteligência prática, capacidade intelectual c comercial, às vezes dons matemáticos e sucesso neste ramo", "Baal. O deus da montanha que entregou as leis do alto das montanhas sagradas aos homens que escalaram o cume para recebê-las", "Severo, imponente, autoritário, pesado, tenaz, confiável, prático e estável", "O Realizador", "Domínio da Sinergia e da Recompensa", "A vontade de ser bem-sucedido e alcançar metas", "realização, manifestação e produção", "Sensibilidade Extrovertida com Pensamento. (ESTP)", "O Produtor", "Ordenar, encarregar-se, manifestar e liberar as coisas materiais", "Um bom provedor do ponto de vista material, porque gosta de trabalhar e valoriza a segurança"], },
            { id: 76, nome: "Príncipe De Discos", palavras_chaves: ["O Artista", "Gente que faz", "O Arquiteto Físico", "Questões que envolvem alguma atividade física, construção, esportes, bom tônus muscular", "Uma determinação ferrenha de ir em frente por maiores que sejam os bloqueios ou obstáculos", "Também o dom do pensar de forma prática", "Ficar Quieto enquanto planeja o Rumo Futuro", "Esta pessoa não está indo adiante", "Ele tem as ideias corretas, mas por enquanto lhe falta motivação", "Ar da Terra", "A fluorescência e frutificação do Ar e da Terra", "Capaz e duradouro, constante e perseverante, com grande energia dispensada às mais sólidas das questões práticas", "Meditação em Movimento", "Realização através da meditação pensante", "Sentir equilíbrio pessoal e produtividade", "Cavaleiro Concentrado no Mundo Material", "Criar ou ensinar suas habilidades", "Utilizar seu conhecimento", "Guerreiro comprometido com a segurança", "Pessoa estável e confiável, mas às vezes teimosa", "A força vital expressa através do corpo e dos sentidos", "Um construtor", "Trabalhar com constância em direção às suas metas, saber o que quer e concentrar se unicamente em consegui-lo", "Responsável, trabalhador, sem reclamar", "Em seu melhor sentido ele está profundamente vinculado ao mundo exterior e à simplicidade", "Se dedica apenas às questões práticas, alienando-se das coisas mais profundas da Terra", "Confiável e bom e fará um trabalho até o fim, não importando quanto tempo leve", "Alcança suas metas porque nunca desiste é porque almeja recompensas possíveis de serem conseguidas", "Bom com crianças e animais, amante da natureza", "Caso seja um evento, significa o resultado final positivo de uma situação que se arrasta por muito tempo ou que parecia ser infrutífera", "Jovem Ambicioso", "Um homem ou mulher jovem que procura os benefícios de mudar suas circunstâncias", "Muitas vezes, uma vontade correspondente de trabalhar duro, e lutará e se esforçará para atingir sua ambição escolhida", "Um homem lerdo, pesado e persistente", "Um homem útil", "descobertas úteis", "Merlin, A figura misteriosa das lendas do Rei Artur que profetizou a morte de Vortigern nas mãos dos bretões, e que, supostamente, completou a construção do templo que veio a ser o Stonehenge", "A defesa da livre expressão, verdade, honra, paciência e determinação", "Implica na investigação das origens das coisas e uma destemida busca de pistas, a despeito dos possíveis perigos", "O Dominador", "Domínio da Mudança e da Colheita", "Poder produtivo com conhecimento, responsabilidade e disciplina", "Sensibilidade extrovertida com Sentimento. ESPP", "O Construtor", "Aprende bem, e de forma realista, com as experiências físicas da vida", "Preocupação com a construção de um sólido futuro financeiro"], },
            { id: 77, nome: "Princesa De Discos", palavras_chaves: ["O Protetor", "A Grávida", "Questões relativas à maternidade e à gravidez", "Pode também ser o nascimento de ideias, projetos, identidade e aspectos de si mesmo", "Demasiadamente Absorto em Algo", "Esta pessoa está por demais absorta em uma ideia, situação ou emoção e, portanto, não tem prazer naquilo que o cerca", "Terra de Terra", "O limiar da transfiguração", "Forte e bonita", "A feminilidade em sua projeção máxima, contendo todas as características de mulher, e depende totalmente das influências às quais ela está sujeita para que uma ou outra característica se manifeste", "Revelação", "Equilíbrio completo e sucesso total. O limiar da transformação", "Algo de novo está por vir, resultado da conclusão de um ciclo, e o presente está impregnado com o segredo do futuro", "Renovação do seu comprometimento com uma base de segurança que estava estagnada, ou arriscar algo que, no passado, estava em segurança", "Aberta ao conhecimento, i experiência e habilidades novas", "A procura da visão", "Busca na terra a direção", "Avalia valores", "Força pura e elementar da terra a personalidade buscando seu próprio nome através de orações solitárias e jejum", "Um tempo de solidão e de aprender a confiar na sabedoria do corpo e dos instintos", "O estudante perdido nos estudos, prestando pouca atenção a qualquer coisa além dos mesmos", "Trabalho real, estudo e erudição", "Alguém que se aproxima de qualquer atividade com essas qualidades de envolvimento e fascinação", "Uma criança ou jovem que tem respeito pelas coisas materiais e leva a sério o aprendizado de ideias novas", "Cuidadosa, trabalhadora e diligente, apesar de ser, às vezes, um pouco solene", "No caso de um evento, com frequência significa uma oportunidade de ganhar dinheiro, geralmente começando de baixo mas com bastante promessa de futuro", "Ameno", "Uma criança ou jovem que pode ser moldado ou desenvolvido", "Crianças diretas, sem complicações, que espelham as próprias circunstâncias e os outros que o cercam", "O ser com potencial imenso resultante. da mente e da alma impressionáveis e, assim, será de grande influència quando ele ou ela surgir na primavera", "Um jovem sombrio", "um jovem oficial ou soldado", "uma criança", "Aplicação, estudo, erudito, reflexão, notícias, mensagens, e aquele que as traz", "também domínio e administração", "Nimue, Nemesis e a companheira de Merlin. Uma divindade das druidas que, de acordo com os mitos antigos, ensinou magia a Merlin", "Concentração, desejo de aprender, e aplicação nas pesquisas acadêmicas", "O Jogador", "Domínio do Começo e do Retrocesso", "O interior lúdico da criança que cria com fantasia, imaginação e devaneios", "Sensibilidade Introvertida com Sentimento (ISF)", "O Aluno", "A necessidade de estabelecer a segurança, talvez através dos estudos e da introspecção", "Traz mensagens relativas à saúde, ao dinheiro, ao trabalho ou aos estudos"] }
      ]






































































































































































































































































































































































































































































































































































































































































































































































































































































































































})