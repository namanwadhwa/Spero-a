-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2019 at 02:57 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spero`
--

-- --------------------------------------------------------

--
-- Table structure for table `assessment`
--

CREATE TABLE `assessment` (
  `assessment_id` int(11) NOT NULL,
  `expectation` int(11) NOT NULL,
  `feedback` int(11) NOT NULL,
  `marking` int(11) NOT NULL,
  `relevence` int(11) NOT NULL,
  `standard` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bridge_table`
--

CREATE TABLE `bridge_table` (
  `id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `assessment_id` int(11) NOT NULL,
  `course_design_id` int(11) NOT NULL,
  `outcome_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `support_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `course_design`
--

CREATE TABLE `course_design` (
  `course_design_id` int(11) NOT NULL,
  `flexibility` int(11) NOT NULL,
  `methods` int(11) NOT NULL,
  `prac_thoery_links` int(11) NOT NULL,
  `relevence` int(11) NOT NULL,
  `structure` int(11) NOT NULL,
  `unsatisfied` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

CREATE TABLE `file` (
  `file_id` int(11) NOT NULL,
  `data` text NOT NULL,
  `save` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `outcome`
--

CREATE TABLE `outcome` (
  `outcome_id` int(11) NOT NULL,
  `intellectual` int(11) NOT NULL,
  `personal` int(11) NOT NULL,
  `interpersonal` int(11) NOT NULL,
  `knowledge_skills` int(11) NOT NULL,
  `work_applications` int(11) NOT NULL,
  `unsatisfied` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `question_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `personal_experience` int(11) NOT NULL,
  `assessibility` int(11) NOT NULL,
  `quality` int(11) NOT NULL,
  `teaching_skills` int(11) NOT NULL,
  `unsatisfied` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `support`
--

CREATE TABLE `support` (
  `support_id` int(11) NOT NULL,
  `social_affinity` int(11) NOT NULL,
  `learning_resources` int(11) NOT NULL,
  `student_services` int(11) NOT NULL,
  `library` int(11) NOT NULL,
  `infrastructure` int(11) NOT NULL,
  `unsatisfied` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`assessment_id`);

--
-- Indexes for table `bridge_table`
--
ALTER TABLE `bridge_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_id` (`file_id`),
  ADD KEY `question_id` (`question_id`),
  ADD KEY `assessment_id` (`assessment_id`),
  ADD KEY `course_design_id` (`course_design_id`),
  ADD KEY `outcome_id` (`outcome_id`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `support_id` (`support_id`);

--
-- Indexes for table `course_design`
--
ALTER TABLE `course_design`
  ADD PRIMARY KEY (`course_design_id`);

--
-- Indexes for table `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `outcome`
--
ALTER TABLE `outcome`
  ADD PRIMARY KEY (`outcome_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `support`
--
ALTER TABLE `support`
  ADD PRIMARY KEY (`support_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessment`
--
ALTER TABLE `assessment`
  MODIFY `assessment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bridge_table`
--
ALTER TABLE `bridge_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_design`
--
ALTER TABLE `course_design`
  MODIFY `course_design_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file`
--
ALTER TABLE `file`
  MODIFY `file_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `outcome`
--
ALTER TABLE `outcome`
  MODIFY `outcome_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `support`
--
ALTER TABLE `support`
  MODIFY `support_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assessment`
--
ALTER TABLE `assessment`
  ADD CONSTRAINT `assessment_ibfk_1` FOREIGN KEY (`assessment_id`) REFERENCES `bridge_table` (`assessment_id`);

--
-- Constraints for table `bridge_table`
--
ALTER TABLE `bridge_table`
  ADD CONSTRAINT `bridge_table_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `file` (`file_id`),
  ADD CONSTRAINT `bridge_table_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`);

--
-- Constraints for table `course_design`
--
ALTER TABLE `course_design`
  ADD CONSTRAINT `course_design_ibfk_1` FOREIGN KEY (`course_design_id`) REFERENCES `bridge_table` (`course_design_id`);

--
-- Constraints for table `outcome`
--
ALTER TABLE `outcome`
  ADD CONSTRAINT `outcome_ibfk_1` FOREIGN KEY (`outcome_id`) REFERENCES `bridge_table` (`outcome_id`);

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `bridge_table` (`staff_id`);

--
-- Constraints for table `support`
--
ALTER TABLE `support`
  ADD CONSTRAINT `support_ibfk_1` FOREIGN KEY (`support_id`) REFERENCES `bridge_table` (`support_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
