CREATE DATABASE  IF NOT EXISTS `lingostudentsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lingostudentsdb`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: lingostudentsdb
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

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
-- Table structure for table `module`
--

DROP TABLE IF EXISTS `module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module` (
  `idModule` int NOT NULL AUTO_INCREMENT,
  `nameModule` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idModule`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` VALUES (1,'Modulo 1'),(2,'Modulo 2'),(3,'Modulo 3');
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `progressStudent`
--

DROP TABLE IF EXISTS `progressStudent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `progressStudent` (
  `idProgressStudent` int NOT NULL AUTO_INCREMENT,
  `idStudent` int DEFAULT NULL,
  `idModule` int DEFAULT NULL,
  `idTheme` int DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idProgressStudent`),
  KEY `fk_ProgressStudent_student` (`idStudent`),
  KEY `fk_ProgressStudent_module` (`idModule`),
  KEY `fk_ProgressStudent_theme` (`idTheme`),
  CONSTRAINT `fk_ProgressStudent_module` FOREIGN KEY (`idModule`) REFERENCES `module` (`idModule`),
  CONSTRAINT `fk_ProgressStudent_student` FOREIGN KEY (`idStudent`) REFERENCES `student` (`idStudent`),
  CONSTRAINT `fk_ProgressStudent_theme` FOREIGN KEY (`idTheme`) REFERENCES `theme` (`idTheme`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `progressStudent`
--

LOCK TABLES `progressStudent` WRITE;
/*!40000 ALTER TABLE `progressStudent` DISABLE KEYS */;
INSERT INTO `progressStudent` VALUES (14,4,1,1,1),(15,4,1,2,1),(16,4,1,3,1),(20,4,2,4,1),(21,4,2,5,1),(22,4,2,6,1),(23,1,1,1,1),(24,1,1,2,1),(25,1,1,3,1);
/*!40000 ALTER TABLE `progressStudent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `idStudent` int NOT NULL AUTO_INCREMENT,
  `displayName` varchar(60) DEFAULT NULL,
  `email` varchar(320) DEFAULT NULL,
  PRIMARY KEY (`idStudent`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Juanka','misterio562@gmail.com'),(4,'AYALA PRIMO JUAN','jdayala@unicesar.edu.co'),(7,'Tiendaxx','apptiendax@gmail.com');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme`
--

DROP TABLE IF EXISTS `theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theme` (
  `idTheme` int NOT NULL AUTO_INCREMENT,
  `nameTheme` varchar(30) DEFAULT NULL,
  `idModule` int DEFAULT NULL,
  PRIMARY KEY (`idTheme`),
  KEY `fk_theme_module` (`idModule`),
  CONSTRAINT `fk_theme_module` FOREIGN KEY (`idModule`) REFERENCES `module` (`idModule`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme`
--

LOCK TABLES `theme` WRITE;
/*!40000 ALTER TABLE `theme` DISABLE KEYS */;
INSERT INTO `theme` VALUES (1,'Colores',1),(2,'Numeros del 1 al 10',1),(3,'Frutas',1),(4,'Animales',2),(5,'Partes del cuerpo',2),(6,'Partes de la casa',2),(7,'Comidas y bebidas',3),(8,'Numeros del 1 al 50',3),(9,'Ropa',3);
/*!40000 ALTER TABLE `theme` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-08 13:28:10
