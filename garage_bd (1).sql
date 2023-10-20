-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2023 at 06:23 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `garage_bd`
--
CREATE DATABASE IF NOT EXISTS `garage_bd` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `garage_bd`;

-- --------------------------------------------------------

--
-- Table structure for table `autos`
--

CREATE TABLE `autos` (
  `patente` varchar(30) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `color` varchar(15) NOT NULL,
  `precio` double NOT NULL,
  `foto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `autos`
--

INSERT INTO `autos` (`patente`, `marca`, `color`, `precio`, `foto`) VALUES
('AYF714', 'Renault', 'gris', 150000, 'AYF714.Renault.modificado.061512.jpg'),
('TOC623', 'Fiat', 'blanco', 198000, 'TOC623.Fiat.modificado.061541.jpg'),
('AB555DC', 'Ford', 'verde', 256900, 'AB555DC.Ford.modificado.061430.jpg'),
('AA666AA', 'Chevrolet', 'rojo', 323200, 'AA666AA.Chevrolet.modificado.061407.jpg'),
('AA888CC', 'Citroen', 'Blanco', 3000666, 'AA888CC.Citroen.modificado.061316.jpg'),
('abc123', 'ford_modif', 'rojo_modif', 1, 'abc123.ford_modif.modificado.181609.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
