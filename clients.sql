-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 17, 2022 at 01:14 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `clients`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `idClient` int(11) NOT NULL,
  `nomClient` varchar(25) NOT NULL,
  `prenomClient` varchar(25) NOT NULL,
  `emailClient` varchar(255) NOT NULL,
  `pseudoClient` varchar(10) NOT NULL,
  `passwordClient` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`idClient`, `nomClient`, `prenomClient`, `emailClient`, `pseudoClient`, `passwordClient`, `date`) VALUES
(1, 'Arthaud', 'Clement', 'clement.berthet@yahoo.fr', 'clement24', 'ceciestunmotdepassse', '2022-01-04 10:12:12'),
(2, 'Martinez', 'Pablo', 'pablo57.martinez@gmail.com', 'MartinezP', 'ceciestunmotdepassse', '2022-01-04 10:13:52'),
(3, 'Ruiz', 'Damien', 'damien.ruizzz@gmail.com', 'DMZruiz', 'ceciestunmotdepassse', '2022-01-04 10:15:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`idClient`),
  ADD UNIQUE KEY `emailClient` (`emailClient`),
  ADD UNIQUE KEY `pseudoClient` (`pseudoClient`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `idClient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;