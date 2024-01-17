-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2024 at 10:16 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `bootcamp`
--

CREATE TABLE `bootcamp` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `website` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bootcamp`
--

INSERT INTO `bootcamp` (`id`, `name`, `description`, `website`, `phone`, `email`, `address`, `createdAt`, `updatedAt`) VALUES
('1', 'Coding Bootcamp', 'Learn coding from scratch.', 'https://codingbootcamp.com', '123-456-7890', 'info@codingbootcamp.com', '123 Main Street', '2024-01-17 15:21:46', NULL),
('2', 'Fitness Bootcamp', 'Get fit and healthy with our fitness program.', 'https://fitnessbootcamp.com', '987-654-3210', 'info@fitnessbootcamp.com', '456 Fitness Avenue', '2024-01-17 15:21:46', NULL),
('3', 'Data Science Bootcamp', 'Master data science skills in our intensive program.', 'https://datasciencebootcamp.com', '555-123-4567', 'info@datasciencebootcamp.com', '789 Data Lane', '2024-01-17 15:21:46', NULL),
('44bdaf58-6ca2-4adf-bce6-8d40124d99dd', 'Business Bootcamp', 'Accelerate your business skills with our bootcamp.', 'https://businessbootcamp.com', '111-222-3333', 'info@businessbootcamp.com', '567 Business Blvd', '2024-01-17 15:34:53', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bootcamp`
--
ALTER TABLE `bootcamp`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
