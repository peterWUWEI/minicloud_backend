# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.6.4-MariaDB)
# Database: minicloud
# Generation Time: 2022-03-06 12:19:18 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table about
# ------------------------------------------------------------

DROP TABLE IF EXISTS `about`;

CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;

INSERT INTO `about` (`id`, `title`, `content`, `created_at`, `updated_at`)
VALUES
	(1,'企业概要','','2022-03-06 14:21:22.070731','2022-03-06 14:21:22.070731'),
	(2,'团队','','2022-03-06 14:21:22.074667','2022-03-06 14:21:22.074667'),
	(3,'体制','','2022-03-06 14:21:22.078474','2022-03-06 14:21:22.078474'),
	(4,'事业','','2022-03-06 14:21:22.081139','2022-03-06 14:21:22.081139'),
	(5,'理念·使命·愿景','','2022-03-06 14:21:22.082692','2022-03-06 14:21:22.082692'),
	(6,'招聘','','2022-03-06 14:21:22.084388','2022-03-06 14:21:22.084388');

/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table company_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `company_info`;

CREATE TABLE `company_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table contacts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contacts`;

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;

INSERT INTO `contacts` (`id`, `title`, `content`, `created_at`, `updated_at`)
VALUES
	(1,'地址','google 地图','2022-03-06 10:35:44.006947','2022-03-06 10:35:44.006947'),
	(2,'电话号码','+81909090390','2022-03-06 10:35:44.010754','2022-03-06 10:35:44.010754');

/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table investor_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `investor_info`;

CREATE TABLE `investor_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pdf_title` varchar(255) NOT NULL,
  `pdf_file_url` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `investor_info` WRITE;
/*!40000 ALTER TABLE `investor_info` DISABLE KEYS */;

INSERT INTO `investor_info` (`id`, `pdf_title`, `pdf_file_url`, `created_at`, `updated_at`, `content`)
VALUES
	(1,'2021 Q1 Report','2021_Q1_Quarterly_report.pdf','2022-03-02 23:17:04.160660','2022-03-05 23:35:17.131529',''),
	(2,'2021 Q2 Report','2021_Q2_Quarterly_report.pdf','2022-03-02 23:17:04.199874','2022-03-05 23:35:13.020737',''),
	(3,'2021 Q3 Report','2021_Q3_Quarterly_report.pdf','2022-03-02 23:17:04.210328','2022-03-05 23:35:01.803713',''),
	(4,'2021 Q4 Report','2021_Q4_Quarterly_report.pdf','2022-03-02 23:17:04.212461','2022-03-05 23:35:07.598829','');

/*!40000 ALTER TABLE `investor_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table news
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(255) NOT NULL,
  `news_content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `news_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;

INSERT INTO `news` (`id`, `news_title`, `news_content`, `created_at`, `updated_at`, `news_date`)
VALUES
	(1,'融资报告','','2022-02-27 21:29:03.113476','2022-02-27 21:29:03.113476','2020-02-24 00:00:00'),
	(2,'A轮投资','','2022-02-27 21:29:36.963045','2022-02-27 21:29:36.963045','2020-04-13 00:00:00'),
	(3,'政府项目合作','','2022-02-27 21:30:05.127723','2022-02-27 21:30:05.127723','2021-08-08 00:00:00');

/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table services
# ------------------------------------------------------------

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `service_title` varchar(255) NOT NULL,
  `service_content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;

INSERT INTO `services` (`id`, `service_title`, `service_content`, `created_at`, `updated_at`)
VALUES
	(1,'app下载','下载安卓的地址：hwewefwfe\n下载苹果端的地址：rbjkrebjrkbejk','2022-02-27 10:08:43.838285','2022-02-27 22:08:47.446630'),
	(2,'我们的服务','','2022-02-27 10:12:25.572963','2022-02-27 10:12:25.572963'),
	(3,'服务新闻','','2022-02-27 10:12:25.580747','2022-02-27 10:12:25.580747');

/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sustainability
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sustainability`;

CREATE TABLE `sustainability` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `sustainability` WRITE;
/*!40000 ALTER TABLE `sustainability` DISABLE KEYS */;

INSERT INTO `sustainability` (`id`, `title`, `content`, `created_at`, `updated_at`)
VALUES
	(1,'本公司的可持续发展政策','','2022-03-05 23:43:08.741445','2022-03-05 23:43:08.741445');

/*!40000 ALTER TABLE `sustainability` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_super_user` tinyint(4) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
