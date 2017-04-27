CREATE DATABASE  IF NOT EXISTS `books` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `books`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: books
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Book_Author`
--

DROP TABLE IF EXISTS `Book_Author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book_Author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(45) DEFAULT NULL,
  `title_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `title_id_author_idx` (`title_id`),
  CONSTRAINT `title_id_author` FOREIGN KEY (`title_id`) REFERENCES `Book_Title` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book_Author`
--

LOCK TABLES `Book_Author` WRITE;
/*!40000 ALTER TABLE `Book_Author` DISABLE KEYS */;
INSERT INTO `Book_Author` VALUES (1,'Dr. Suess',1),(2,'Emily Winfield Martin',2),(3,'Margaret Wise Brown',3),(4,'Maciej Kranz',6),(5,'Malcolm Nance',7),(6,'Nick Bilton',8),(7,'Beth Kobliner',9),(8,'Michael Taillard',10),(9,'James M Dahle MD',11);
/*!40000 ALTER TABLE `Book_Author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book_Category`
--

DROP TABLE IF EXISTS `Book_Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book_Category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book_Category`
--

LOCK TABLES `Book_Category` WRITE;
/*!40000 ALTER TABLE `Book_Category` DISABLE KEYS */;
INSERT INTO `Book_Category` VALUES (1,'Children'),(2,'Computers'),(3,'Finance');
/*!40000 ALTER TABLE `Book_Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book_Price`
--

DROP TABLE IF EXISTS `Book_Price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book_Price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` varchar(45) DEFAULT NULL,
  `title_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `title_id_price_idx` (`title_id`),
  CONSTRAINT `title_id_price` FOREIGN KEY (`title_id`) REFERENCES `Book_Title` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book_Price`
--

LOCK TABLES `Book_Price` WRITE;
/*!40000 ALTER TABLE `Book_Price` DISABLE KEYS */;
INSERT INTO `Book_Price` VALUES (1,'$17.39',1),(2,'$11.24',2),(3,'$5.35',3),(4,'$17.99',6),(5,'$12.36',7),(6,'$14.53',8),(7,'$10.61',9),(8,'$14.75',10),(9,'$19.23',11);
/*!40000 ALTER TABLE `Book_Price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book_Title`
--

DROP TABLE IF EXISTS `Book_Title`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book_Title` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL,
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id_title_idx` (`cat_id`),
  CONSTRAINT `cat_id_title` FOREIGN KEY (`cat_id`) REFERENCES `Book_Category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book_Title`
--

LOCK TABLES `Book_Title` WRITE;
/*!40000 ALTER TABLE `Book_Title` DISABLE KEYS */;
INSERT INTO `Book_Title` VALUES (1,'Oh, the Places You\'ll Go!',1),(2,'The Wonderful Things You Will Be',1),(3,'Goodnight Moon Board Book',1),(6,'Building the Internet of Things: Implement New Business Models, Disrupt Competitors, Transform Your Industry\n',2),(7,'The Plot to Hack America: How Putin\'s Cyberspies and WikiLeaks Tried to Steal the 2016 Election',2),(8,'Hatching Twitter: A True Story of Money, Power, Friendship, and Betrayal',2),(9,'Get a Financial Life: Personal Finance in Your Twenties and Thirties',3),(10,'Corporate Finance For Dummies',3),(11,'The White Coat Investor: A Doctor\'s Guide To Personal Finance And Investing',3);
/*!40000 ALTER TABLE `Book_Title` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book_Year`
--

DROP TABLE IF EXISTS `Book_Year`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book_Year` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` varchar(45) DEFAULT NULL,
  `title_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `title_id_year_idx` (`title_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book_Year`
--

LOCK TABLES `Book_Year` WRITE;
/*!40000 ALTER TABLE `Book_Year` DISABLE KEYS */;
INSERT INTO `Book_Year` VALUES (1,'2013',1),(3,'2017',2),(4,'1991',3),(5,'2016',6),(6,'2016',7),(7,'2014',8),(8,'2017',9),(9,'2012',10),(10,'2014',11);
/*!40000 ALTER TABLE `Book_Year` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-27 10:05:24
