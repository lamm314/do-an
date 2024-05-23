-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 192.168.76.158    Database: kitty_shop
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,0),(2,2,0),(3,3,0),(4,4,0),(5,5,0),(6,6,0);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT '0',
  `size` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
  CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `image_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=246 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (18,8,'images-1642872955808.jpg'),(19,8,'images-1642872955810.jpg'),(20,8,'images-1642872955813.jpeg'),(21,8,'images-1642872955816.jpeg'),(23,9,'images-1642873011264.jpg'),(26,10,'images-1642873041049.jpeg'),(27,10,'images-1642873041051.jpg'),(33,12,'images-1642873108773.jpg'),(34,12,'images-1642873108775.jpg'),(35,12,'images-1642873108778.jpg'),(37,13,'images-1642873152380.jpg'),(44,14,'images-1642873202436.jpg'),(45,14,'images-1642873202439.jpg'),(46,14,'images-1642873202452.jpg'),(47,15,'images-1642873230286.jpg'),(48,15,'images-1642873230288.jpg'),(49,15,'images-1642873230301.jpg'),(62,11,'images-1642873090565.jpeg'),(63,11,'images-1642873090567.jpg'),(65,17,'images-1642909961923.jpg'),(66,17,'images-1642909961928.jpg'),(67,17,'images-1642909961939.jpg'),(68,18,'images-1642909988871.jpg'),(69,19,'images-1642910029668.jpg'),(70,20,'images-1642910067409.jpg'),(71,20,'images-1642910067412.jpg'),(72,21,'images-1642910105185.jpg'),(73,21,'images-1642910105199.jpg'),(74,21,'images-1642910105205.jpg'),(75,21,'images-1642910105210.jpg'),(76,22,'images-1642910133025.jpg'),(77,22,'images-1642910133027.jpg'),(78,22,'images-1642910133030.jpg'),(85,24,'images-1642911416996.jpg'),(86,24,'images-1642911416998.jpg'),(87,24,'images-1642911417003.jpg'),(106,28,'images-1642915360921.jpg'),(107,28,'images-1642915360927.jpg'),(108,28,'images-1642915360933.jpg'),(110,30,'images-1642915460826.jpg'),(112,29,'images-1642915414584.jpg'),(127,31,'images-1642915540901.jpg'),(128,31,'images-1642915540902.jpg'),(129,31,'images-1642915540905.jpg'),(130,32,'images-1642915667714.jpeg'),(131,32,'images-1642915667716.jpg'),(137,33,'images-1642915693714.jpg'),(138,33,'images-1642915693717.jpg'),(139,34,'images-1642915710429.jpeg'),(140,34,'images-1642915710442.png'),(141,34,'images-1642915710446.png'),(145,35,'images-1642915812664.jpg'),(148,36,'images-1642915862041.jpg'),(149,36,'images-1642915862046.jpg'),(152,37,'images-1642915921110.jpg'),(153,37,'images-1642915921112.jpg'),(154,38,'images-1642915967335.jpg'),(155,38,'images-1642915967337.jpg'),(156,39,'images-1642916014122.jpg'),(157,39,'images-1642916014124.jpg'),(158,40,'images-1642916053437.jpg'),(159,40,'images-1642916053440.jpg'),(162,41,'images-1642916107031.jpg'),(163,41,'images-1642916107033.jpg'),(166,42,'images-1642916153219.jpg'),(167,42,'images-1642916153232.jpg'),(168,43,'images-1642916192381.jpg'),(169,44,'images-1642916227826.jpg'),(170,44,'images-1642916227837.jpg'),(171,44,'images-1642916227844.jpg'),(175,45,'images-1642916261053.jpeg'),(176,45,'images-1642916261053.jpeg'),(177,45,'images-1642916261067.jpeg'),(245,6,'images-1642872890800.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `size` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (11,7,15,1,0),(12,8,14,1,2),(13,9,8,1,2),(17,13,6,1,2),(18,13,14,2,2);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `user_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'unkown',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'unkown',
  `address` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone_number` char(20) NOT NULL,
  `total` decimal(10,2) NOT NULL DEFAULT '0.00',
  `note` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `send` tinyint(1) DEFAULT '0',
  `success` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (7,3,'Nguyễn Văn A','avip@gmail.com','khu 2 Hoàng Thương - Thanh Ba - Phú Thọ','0123456789',217000.00,'tesst',1,1),(8,3,'Nguyễn Văn A','avip@gmail.com','khu 2 Hoàng Thương - Thanh Ba - Phú Thọ','0123456789',235000.00,'test',1,1),(9,4,'Ngô Bá Khá','khabanh@gmail.com','phường Tam Sơn, thành phố Từ Sơn, tỉnh Bắc Ninh','0981234563',325000.00,'test',1,1),(13,6,'Trần Dần','dan@gmail.com','số nhà 11 ngõ 207 đường Phương Trạch zxcvxczvxczvxzcvzxcv','0987654332',685000.00,'em chỉ có thể nhận hàng trong giờ hành chính',0,0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sizes`
--

DROP TABLE IF EXISTS `product_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `product_sizes` (
  `size_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `size` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`size_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=389 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sizes`
--

LOCK TABLES `product_sizes` WRITE;
/*!40000 ALTER TABLE `product_sizes` DISABLE KEYS */;
INSERT INTO `product_sizes` VALUES (37,8,0,500),(38,8,1,500),(39,8,2,499),(40,8,3,500),(45,9,0,500),(46,9,1,500),(47,9,2,500),(48,9,3,500),(53,10,0,500),(54,10,1,500),(55,10,2,500),(56,10,3,500),(65,12,0,500),(66,12,1,500),(67,12,2,500),(68,12,3,500),(73,13,0,500),(74,13,1,500),(75,13,2,499),(76,13,3,500),(85,14,0,500),(86,14,1,500),(87,14,2,497),(88,14,3,500),(89,15,0,499),(90,15,1,500),(91,15,2,500),(92,15,3,500),(109,11,0,500),(110,11,1,500),(111,11,2,500),(112,11,3,500),(117,17,0,500),(118,17,1,500),(119,17,2,500),(120,17,3,500),(121,18,0,500),(122,18,1,500),(123,18,2,500),(124,18,3,500),(125,19,0,500),(126,19,1,500),(127,19,2,500),(128,19,3,500),(129,20,0,500),(130,20,1,500),(131,20,2,500),(132,20,3,500),(133,21,0,500),(134,21,1,500),(135,21,2,500),(136,21,3,500),(137,22,0,500),(138,22,1,500),(139,22,2,500),(140,22,3,500),(149,24,0,500),(150,24,1,500),(151,24,2,500),(152,24,3,500),(173,28,0,500),(174,28,1,500),(175,28,2,500),(176,28,3,500),(181,30,0,500),(182,30,1,500),(183,30,2,500),(184,30,3,500),(189,29,0,500),(190,29,1,500),(191,29,2,500),(192,29,3,500),(217,31,0,500),(218,31,1,500),(219,31,2,500),(220,31,3,500),(221,32,0,500),(222,32,1,500),(223,32,2,500),(224,32,3,500),(233,33,0,500),(234,33,1,500),(235,33,2,500),(236,33,3,500),(237,34,0,500),(238,34,1,500),(239,34,2,500),(240,34,3,500),(253,35,0,500),(254,35,1,500),(255,35,2,500),(256,35,3,500),(261,36,0,500),(262,36,1,500),(263,36,2,500),(264,36,3,500),(269,37,0,500),(270,37,1,500),(271,37,2,500),(272,37,3,500),(273,38,0,500),(274,38,1,500),(275,38,2,500),(276,38,3,500),(277,39,0,500),(278,39,1,500),(279,39,2,500),(280,39,3,500),(281,40,0,500),(282,40,1,500),(283,40,2,500),(284,40,3,500),(289,41,0,500),(290,41,1,500),(291,41,2,500),(292,41,3,500),(297,42,0,500),(298,42,1,500),(299,42,2,500),(300,42,3,500),(301,43,0,500),(302,43,1,500),(303,43,2,500),(304,43,3,500),(305,44,0,500),(306,44,1,500),(307,44,2,500),(308,44,3,500),(313,45,0,500),(314,45,1,500),(315,45,2,500),(316,45,3,500),(385,6,0,500),(386,6,1,500),(387,6,2,500),(388,6,3,500);
/*!40000 ALTER TABLE `product_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'unknown',
  `product_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `product_avatar` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `new_product` int DEFAULT '1',
  `price` int DEFAULT '0',
  `discount` int DEFAULT '0',
  `bought_count` int DEFAULT '0',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (6,'Basic Sweater - Black','sweater','images-1642872877384.jpg',1,300000,20,0),(8,'Donut Zip Hoodie - Black','hoodie','images-1642872945794.jpg',1,300000,0,1),(9,'Jacket University','jacket','images-1642873004617.jpg',1,300000,0,0),(10,'Mascot Hand Fan Jacket','jacket','images-1642873034906.jpeg',1,300000,20,0),(11,'Mascot Jacket - Black','jacket','images-1642873083136.jpeg',1,300000,20,0),(12,'Monogram Jacket','jacket','images-1642873104864.jpg',1,300000,10,0),(13,'OutDoor Jacket YB','jacket','images-1642873149555.jpg',1,300000,10,0),(14,'1M Bucket','accessory','images-1642873197387.jpg',1,300000,30,1),(15,'1M Shoulder Bag','accessory','images-1642873222412.jpg',1,320000,40,1),(17,'2 Panel Polo Shirt - WB','tee','images-1642909946151.jpg',1,300000,0,0),(18,'Basic Shirt - Black','tee','images-1642909979375.jpg',1,300000,30,0),(19,'Basic Shirt - White','tee','images-1642910023273.jpg',1,300000,10,0),(20,'Blossom Flower Tee 2022 - Black','tee','images-1642910059925.jpg',1,320000,0,0),(21,'Good Kid - White','tee','images-1642910093341.jpg',1,320000,20,0),(22,'Indomitable Tee - Black','tee','images-1642910121736.jpg',1,320000,20,0),(24,'On The Ride','tee','images-1642911404900.jpg',1,300000,0,0),(28,'Monogram Tee','tee','images-1642915356559.jpg',1,300000,0,0),(29,'Sweater Tiedye - Rainbow','sweater','images-1642915410850.jpg',1,350000,0,0),(30,'Basic Sweater - White','sweater','images-1642915453443.jpg',1,300000,0,0),(31,'Basic pants - Black','Pants','images-1642915534493.jpg',1,320000,0,0),(32,'Reflective Line Pant','Pants','images-1642915658811.jpeg',1,380000,0,0),(33,'Terry Short - Black','Pants','images-1642915690140.jpg',1,300000,0,0),(34,'Trousers Black','Pants','images-1642915706054.jpeg',1,300000,0,0),(35,'8-Ball Hoodie - Black','hoodie','images-1642915808018.jpg',1,480000,0,0),(36,'8-Ball Sweater','sweater','images-1642915856002.jpg',1,380000,0,0),(37,'Hot & Cold Sweater','sweater','images-1642915917368.jpg',1,380000,0,1),(38,'Mascot Tattooss Hoodie - White','hoodie','images-1642915958650.jpg',1,450000,0,0),(39,'Paint Mascot Hoodie - Tan','hoodie','images-1642915996096.jpg',1,390000,10,0),(40,'Wallet - BlackYellow','accessory','images-1642916038101.jpg',1,280000,10,0),(41,'Tote Bag CanvasWhite','accessory','images-1642916097667.jpg',1,150000,30,0),(42,'Tote Bag CanvasBlack','accessory','images-1642916143927.jpg',1,150000,30,0),(43,'Tote Bag Canvas - Pink Light Blue','accessory','images-1642916178760.jpg',1,150000,50,0),(44,'Monogram Backpack','accessory','images-1642916219062.jpg',1,450000,0,0),(45,'Minibag Heart Pattern - White','accessory','images-1642916255261.jpeg',1,300000,10,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resetTokens`
--

DROP TABLE IF EXISTS `resetTokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `resetTokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `token` varchar(200) NOT NULL,
  `used` tinyint(1) NOT NULL DEFAULT '0',
  `expriration` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resetTokens`
--

LOCK TABLES `resetTokens` WRITE;
/*!40000 ALTER TABLE `resetTokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `resetTokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'unknown',
  `email` varchar(40) NOT NULL DEFAULT 'unknown',
  `password` varchar(200) NOT NULL,
  `address` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `phone_number` char(20) NOT NULL DEFAULT '',
  `gender` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'unknown',
  `birthday` date DEFAULT NULL,
  `user_avatar` varchar(200) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@gmail.com','$2b$10$xUUfU1q49Q9y6uchUpdwWe8hqsBlxPaJPZ3mPd6kI95b9meJvklFq','','','Nam','2001-08-30','images-1642846149593.jpg','2024-05-13 16:15:40'),(2,'Rockly Dog','dog@gmail.com','$2b$10$C1PV8g4XMC.e7.bj1xFro.XR7o6kPbc6RBXmr6lXXHsRsxgRwhN/y','phường Tam Sơn, thành phố Từ Sơn, tỉnh Bắc Ninh','0123242893','Nam','2001-01-01','images-1642873631824.jpg','2022-01-22 17:48:47'),(3,'Nguyễn Văn A','avip@gmail.com','$2b$10$Ua6O4endPKKMrfvsTyh3XOkBuPO90mUkZ1SdJqQARVAwodVoEaXze','khu 2 Hoàng Thương - Thanh Ba - Phú Thọ','0123456789','Nam','2002-12-31','images-1642910554496.jpg','2022-01-23 04:05:40'),(4,'Ngô Bá Khá','khabanh@gmail.com','$2b$10$47ScfI8G3uu8QEpi3QW.1enr321njgRmqSg4G6mTBdw7vFXXzrz3y','phường Tam Sơn, thành phố Từ Sơn, tỉnh Bắc Ninh','0981234563','Nam','1993-11-27','images-1642917085866.png','2022-01-23 05:51:27'),(5,'Trần Văn B','bdz@gmail.com','$2b$10$XxyZj7xsA8CmWbOol3YR1.GsdsLEIAUzAOg/Yf9dNxJtSLEWK51sa','khu 2 Hoàng Thương - Thanh Ba - Phú Thọ','098765432','Nam','2001-01-01','images-1642921781262.jpg','2024-05-13 16:22:57'),(6,'Trần Dần','dan@gmail.com','$2b$10$meA0HjE71aelUhItmwGdPOBeXDvbLxKNpIZkuriNCtV8zLaqPgu.W','','','Nam','2022-01-24',NULL,'2022-01-23 07:18:42');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'kitty_shop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-13 23:41:11
