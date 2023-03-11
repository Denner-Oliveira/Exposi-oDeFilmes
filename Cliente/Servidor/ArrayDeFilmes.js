const arrFilmes = [{
            nome:'Gato de Botas 2',
            duracao:'108 min',
            poster:'https://www.kinoplex.com.br/filmes/images/cartaz/262x388/gato-de-botas-2-o-ultimo-pedido.jpg?',
            lancamento:'2023/01/01',
            genero:'acao'
        },{

            nome:'Velozes e Furiosos',
            duracao:'137 min',
            poster:'https://img.elo7.com.br/product/zoom/268DD3F/big-poster-velozes-e-furiosos-lo07-tamanho-90x60-cm-nerd.jpg',
            lancamento:'2001/09/01',
            genero:'acao'
        },
        {
            nome:'John wick 3',
            duracao:'137 min',
            poster:'https://img.elo7.com.br/product/zoom/265E64A/big-poster-filme-john-wick-3-parabellum-lo03-tam-90x60-cm-john-wick-3.jpg',
            lancamento:'2019/05/01',
            genero:'acao'
        },
        {
            nome:'Homem Aranha Sem Volta Pra Casa',
            duracao:'137 min',
            poster:'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG',
            lancamento:'2021/12/01',
            genero:'acao'
        },
        {
            nome:'Vingadores Ultimato',
            duracao:'137 min',
            poster:'https://img.elo7.com.br/product/original/2678F78/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers-colecionador.jpg',
            lancamento:'2019/04/01',
            genero:'acao'
        },
        {
            nome:'The Batman',
            duracao:'137 min',
            poster:'https://http2.mlstatic.com/D_NQ_NP_839403-MLB49664718125_042022-O.jpg',
            lancamento:'2022/03/01',
            genero:'acao'
        },
        {
            nome:'Duro de Matar',
            duracao:'137 min',
            poster:'https://br.web.img2.acsta.net/medias/nmedia/18/92/25/88/20188922.jpg',
            lancamento:'1988/12/01',
            genero:'acao'
        },
        {
            nome:'Pantera Negra: Wakanda Para Sempre',
            duracao:'137 min',
            poster:'https://lumiere-a.akamaihd.net/v1/images/black_panther_pantera_negra_poster_1f95496d.jpeg?region=0,0,743,1100',
            lancamento:'2022/11/10',
            genero:'acao'
        }
    ,
    {
            nome:'Invocação do Mal 2',
            duracao:'108 min',
            poster:'https://br.web.img3.acsta.net/pictures/16/04/18/20/43/025084.jpg',
            lancamento:'2016/06/01',
            genero:'terror'
        },
        {
            nome:'Halloween',
            duracao:'137 min',
            poster:'https://img.elo7.com.br/product/zoom/26508F2/big-poster-filme-michael-myers-halloween-lo03-tam-90x60-cm-poster.jpg',
            lancamento:'1978/10/01',
            genero:'terror'
        },
        {
            nome:'O Filho do Chuck',
            duracao:'137 min',
            poster:'https://image.tmdb.org/t/p/w500/a7vVEDLt4rFYTxZRPeRGEv7QbNQ.jpg',
            lancamento:'2004/11/01',
            genero:'terror'
        },
        {
            nome:'Sexta-Feira 13',
            duracao:'137 min',
            poster:'https://br.web.img3.acsta.net/pictures/15/03/10/19/40/135848.jpg',
            lancamento:'1980/12/01',
            genero:'terror'
        },
        {
            nome:'Pânico',
            duracao:'137 min',
            poster:'https://m.media-amazon.com/images/I/811SBSeF3tL._AC_SY879_.jpg',
            lancamento:'1997/01/01',
            genero:'terror'
        },
        {
            nome:'Pânico 2',
            duracao:'137 min',
            poster:'https://img.elo7.com.br/product/zoom/268B91C/big-poster-filme-panico-2-1997-lo01-tamanho-90x60-cm-poster-cinema.jpg',
            lancamento:'1997/12/01',
            genero:'terror'
        },
        {
            nome:'Pânico 3',
            duracao:'137 min',
            poster:'https://br.web.img3.acsta.net/medias/nmedia/18/96/27/30/20456789.jpg',
            lancamento:'2000/02/01',
            genero:'terror'
        },
        {
            nome:'Sorria',
            duracao:'137 min',
            poster:'https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg',
            lancamento:'2022/09/29',
            genero:'terror'
        }
    
    ,
    {
        nome:'Como se Fosse a Primeira Vez',
        duracao:'108 min',
        poster:'https://br.web.img3.acsta.net/pictures/20/11/23/14/35/4981975.jpg',
        lancamento:'2004/02/01',
        genero:'romance'
    },
    {
        nome:'Your Name',
        duracao:'137 min',
        poster:'https://m.media-amazon.com/images/I/81zeqn6hofL.jpg',
        lancamento:'2017/10/01',
        genero:'romance'
    },
    {
        nome:'Barraca do Beijo',
        duracao:'137 min',
        poster:'https://m.media-amazon.com/images/I/71CktslM6fL.jpg',
        lancamento:'2018/05/01',
        genero:'romance'
    },
    {
        nome:'Para todos os garotos que Ja Amei',
        duracao:'137 min',
        poster:'https://m.media-amazon.com/images/I/51g1aU7T75L.jpg',
        lancamento:'2018/08/01',
        genero:'romance'
    },
    {
        nome:'Continência ao Amor',
        duracao:'137 min',
        poster:'https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg',
        lancamento:'2022/07/01',
        genero:'romance'
    },
    {
        nome:'As Vantagens de Ser Invisível',
        duracao:'137 min',
        poster:'https://m.media-amazon.com/images/I/81mbcHKS84L.jpg',
        lancamento:'2012/10/01',
        genero:'romance'
    },
    {
        nome:'500 Dias Com Ela',
        duracao:'137 min',
        poster:'https://br.web.img3.acsta.net/medias/nmedia/18/87/30/15/20028674.jpg',
        lancamento:'2009/11/01',
        genero:'romance'
    },
    {
        nome:'Seu eu Fosse Você',
        duracao:'137 min',
        poster:'https://upload.wikimedia.org/wikipedia/pt/1/1a/P%C3%B4ster_Se_Eu_Fosse_Voc%C3%AA.jpg',
        lancamento:'2006/01/01',
        genero:'romance'
    }
,
    {
        nome:'Interestelar',
        duracao:'108 min',
        poster:'https://br.web.img3.acsta.net/pictures/14/10/24/13/16/586585.jpg',
        lancamento:'2014/11/01',
        genero:'ficcao'
    },
    {
        nome:'Planeta dos Macacos: A Origem',
        duracao:'137 min',
        poster:'https://www.themoviedb.org/t/p/w500/qxe4ONZAgtC0mfsIuOyqVU9JREj.jpg',
        lancamento:'2011/08/01',
        genero:'ficcao'
    },
    {
        nome:'Star Wars Episódio IV',
        duracao:'137 min',
        poster:'https://m.media-amazon.com/images/I/81aA7hEEykL.jpg',
        lancamento:'1977/11/01',
        genero:'ficcao'
    },
    {
        nome:'Perdido Em Marte',
        duracao:'137 min',
        poster:'https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg',
        lancamento:'2015/10/01',
        genero:'ficcao'
    },
    {
        nome:'O Predestinado',
        duracao:'137 min',
        poster:'https://images.justwatch.com/poster/300772083/s718/predestination.%7Bformat%7D',
        lancamento:'2022/09/01',
        genero:'ficcao'
    },
    {
        nome:'De Volta Pro Futuro',
        duracao:'137 min',
        poster:'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/62/20122008.jpg',
        lancamento:'1985/12/01',
        genero:'ficcao'
    },
    {
        nome:'Matrix',
        duracao:'137 min',
        poster:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG',
        lancamento:'1999/05/01',
        genero:'ficcao'
    },
    {
        nome:'Jogos Vorazes',
        duracao:'137 min',
        poster:'https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/51/91/20018884.jpg',
        lancamento:'2012/03/01',
        genero:'ficcao'
    }
,
    {
        nome:'Gente Grande',
        duracao:'108 min',
        poster:'https://br.web.img3.acsta.net/c_310_420/pictures/210/299/21029996_20130821205722213.jpg',
        lancamento:'2010/09/01',
        genero:'comedia'
    },
    {
        nome:'Um Espião e Meio',
        duracao:'137 min',
        poster:'https://www.themoviedb.org/t/p/w500/4IG7rUmzM3pdZvWwBBLIwDfFVim.jpg',
        lancamento:'2016/08/01',
        genero:'comedia'
    },
    {
        nome:'O Ditador',
        duracao:'137 min',
        poster:'https://images.justwatch.com/poster/176337837/s592/o-ditador',
        lancamento:'2012/08/01',
        genero:'comedia'
    },
    {
        nome:'Se Beber não Case',
        duracao:'137 min',
        poster:'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/29/37/19874003.jpg',
        lancamento:'2008/09/01',
        genero:'comedia'
    },
    {
        nome:'Esquadrão Secreto',
        duracao:'137 min',
        poster:'https://br.web.img2.acsta.net/c_310_420/pictures/22/07/18/11/03/0644498.jpg',
        lancamento:'2022/08/08',
        genero:'comedia'
    },
    {
        nome:'Divertida Mente',
        duracao:'137 min',
        poster:'https://wp.ufpel.edu.br/empauta/files/2015/06/divertida-mente-poster-1.jpg',
        lancamento:'2015/06/01',
        genero:'comedia'
    },
    {
        nome:'Deadpool',
        duracao:'137 min',
        poster:'https://img.elo7.com.br/product/zoom/1E3BBC2/big-poster-do-filme-deadpool-tamanho-90x-0-cm-loot-op-010-decoracao-geek.jpg',
        lancamento:'2016/02/01',
        genero:'comedia'
    },
    {
        nome:'Minions',
        duracao:'137 min',
        poster:'https://m.media-amazon.com/images/I/4166aRWnnnL._AC_.jpg',
        lancamento:'2015/06/01',
        genero:'comedia'
    }]


module.exports =  JSON.stringify(arrFilmes)