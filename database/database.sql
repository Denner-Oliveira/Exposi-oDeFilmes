CREATE DATABASE  IF NOT EXISTS `local` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `local`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: local
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `filmes`
--

DROP TABLE IF EXISTS `filmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filmes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `duracao` varchar(255) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `lancamento` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmes`
--

LOCK TABLES `filmes` WRITE;
/*!40000 ALTER TABLE `filmes` DISABLE KEYS */;
INSERT INTO `filmes` VALUES (1,'Gato de Botas 2','108 min','https://www.kinoplex.com.br/filmes/images/cartaz/262x388/gato-de-botas-2-o-ultimo-pedido.jpg?','2023/01/01','acao'),(2,'Velozes e Furiosos','137 min','https://img.elo7.com.br/product/zoom/268DD3F/big-poster-velozes-e-furiosos-lo07-tamanho-90x60-cm-nerd.jpg','2001/09/01','acao'),(3,'John wick 3','137 min','https://img.elo7.com.br/product/zoom/265E64A/big-poster-filme-john-wick-3-parabellum-lo03-tam-90x60-cm-john-wick-3.jpg','2019/05/01','acao'),(4,'Homem Aranha Sem Volta Pra Casa','137 min','https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG','2021/12/01','acao'),(5,'Vingadores Ultimato','137 min','https://img.elo7.com.br/product/original/2678F78/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers-colecionador.jpg','2019/04/01','acao'),(6,'The Batman','137 min','https://http2.mlstatic.com/D_NQ_NP_839403-MLB49664718125_042022-O.jpg','2022/03/01','acao'),(7,'Duro de Matar','137 min','https://br.web.img2.acsta.net/medias/nmedia/18/92/25/88/20188922.jpg','1988/12/01','acao'),(8,'Pantera Negra: Wakanda Para Sempre','137 min','https://lumiere-a.akamaihd.net/v1/images/black_panther_pantera_negra_poster_1f95496d.jpeg?region=0,0,743,1100','2022/11/10','acao'),(9,'Invocação do Mal 2','108 min','https://br.web.img3.acsta.net/pictures/16/04/18/20/43/025084.jpg','2016/06/01','terror'),(10,'Halloween','137 min','https://img.elo7.com.br/product/zoom/26508F2/big-poster-filme-michael-myers-halloween-lo03-tam-90x60-cm-poster.jpg','1978/10/01','terror'),(11,'O Filho do Chuck','137 min','https://image.tmdb.org/t/p/w500/a7vVEDLt4rFYTxZRPeRGEv7QbNQ.jpg','2004/11/01','terror'),(12,'Sexta-Feira 13','137 min','https://br.web.img3.acsta.net/pictures/15/03/10/19/40/135848.jpg','1980/12/01','terror'),(13,'Pânico','137 min','https://m.media-amazon.com/images/I/811SBSeF3tL._AC_SY879_.jpg','1997/01/01','terror'),(14,'Pânico 2','137 min','https://img.elo7.com.br/product/zoom/268B91C/big-poster-filme-panico-2-1997-lo01-tamanho-90x60-cm-poster-cinema.jpg','1997/12/01','terror'),(15,'Pânico 3','137 min','https://br.web.img3.acsta.net/medias/nmedia/18/96/27/30/20456789.jpg','2000/02/01','terror'),(16,'Sorria','137 min','https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg','2022/09/29','terror'),(17,'Como se Fosse a Primeira Vez','108 min','https://br.web.img3.acsta.net/pictures/20/11/23/14/35/4981975.jpg','2004/02/01','romance'),(18,'Your Name','137 min','https://m.media-amazon.com/images/I/81zeqn6hofL.jpg','2017/10/01','romance'),(19,'Barraca do Beijo','137 min','https://m.media-amazon.com/images/I/71CktslM6fL.jpg','2018/05/01','romance'),(20,'Para todos os garotos que Ja Amei','137 min','https://m.media-amazon.com/images/I/51g1aU7T75L.jpg','2018/08/01','romance'),(21,'Continência ao Amor','137 min','https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg','2022/07/01','romance'),(22,'As Vantagens de Ser Invisível','137 min','https://m.media-amazon.com/images/I/81mbcHKS84L.jpg','2012/10/01','romance'),(23,'500 Dias Com Ela','137 min','https://br.web.img3.acsta.net/medias/nmedia/18/87/30/15/20028674.jpg','2009/11/01','romance'),(24,'Seu eu Fosse Você','137 min','https://upload.wikimedia.org/wikipedia/pt/1/1a/P%C3%B4ster_Se_Eu_Fosse_Voc%C3%AA.jpg','2006/01/01','romance'),(25,'Interestelar','108 min','https://br.web.img3.acsta.net/pictures/14/10/24/13/16/586585.jpg','2014/11/01','ficcao'),(26,'Planeta dos Macacos: A Origem','137 min','https://www.themoviedb.org/t/p/w500/qxe4ONZAgtC0mfsIuOyqVU9JREj.jpg','2011/08/01','ficcao'),(27,'Star Wars Episódio IV','137 min','https://m.media-amazon.com/images/I/81aA7hEEykL.jpg','1977/11/01','ficcao'),(28,'Perdido Em Marte','137 min','https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg','2015/10/01','ficcao'),(29,'O Predestinado','137 min','https://images.justwatch.com/poster/300772083/s718/predestination.%7Bformat%7D','2022/09/01','ficcao'),(30,'De Volta Pro Futuro','137 min','https://br.web.img3.acsta.net/medias/nmedia/18/90/95/62/20122008.jpg','1985/12/01','ficcao'),(31,'Matrix','137 min','https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG','1999/05/01','ficcao'),(32,'Jogos Vorazes','137 min','https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/51/91/20018884.jpg','2012/03/01','ficcao'),(33,'Gente Grande','108 min','https://br.web.img3.acsta.net/c_310_420/pictures/210/299/21029996_20130821205722213.jpg','2010/09/01','comedia'),(34,'O Ditador','137 min','https://images.justwatch.com/poster/176337837/s592/o-ditador','2012/08/01','comedia'),(35,'Se Beber não Case','137 min','https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/29/37/19874003.jpg','2008/09/01','comedia'),(36,'Esquadrão Secreto','137 min','https://br.web.img2.acsta.net/c_310_420/pictures/22/07/18/11/03/0644498.jpg','2022/08/08','comedia'),(37,'Esquadrão Secreto','137 min','https://br.web.img2.acsta.net/c_310_420/pictures/22/07/18/11/03/0644498.jpg','2022/08/08','comedia'),(38,'Divertida Mente','137 min','https://wp.ufpel.edu.br/empauta/files/2015/06/divertida-mente-poster-1.jpg','2015/06/01','comedia'),(39,'Deadpool','137 min','https://img.elo7.com.br/product/zoom/1E3BBC2/big-poster-do-filme-deadpool-tamanho-90x-0-cm-loot-op-010-decoracao-geek.jpg','2016/02/01','comedia'),(40,'Minions','137 min','https://m.media-amazon.com/images/I/4166aRWnnnL._AC_.jpg','2015/06/01','comedia');
/*!40000 ALTER TABLE `filmes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-03 13:12:08
