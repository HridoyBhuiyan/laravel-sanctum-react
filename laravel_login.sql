-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2022 at 12:01 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(150, 'App\\Models\\User', 52, 'auth_token', 'b2a3fc3426d1cffb0890aeecfb334f1176e090940d1f4456b09f18defe884621', '[\"server:update\"]', '2022-11-22 07:23:00', '2022-11-22 07:23:59', '2022-11-22 07:22:59', '2022-11-22 07:23:00'),
(151, 'App\\Models\\User', 52, 'auth_token', '504cb528d08009bb077d28457c08672e13eb908a753a2b94406193b4b411089d', '[\"server:update\"]', '2022-11-22 09:00:02', '2022-11-22 09:01:01', '2022-11-22 09:00:01', '2022-11-22 09:00:02'),
(152, 'App\\Models\\User', 52, 'auth_token', '80650d43a73f981063fd3c248d337b45133db7d3c5cd59e740cbf15740af8a13', '[\"server:update\"]', '2022-11-22 10:51:38', '2022-11-22 10:51:43', '2022-11-22 10:50:43', '2022-11-22 10:51:38'),
(153, 'App\\Models\\User', 52, 'auth_token', '275788b555cf5d6b75f40bece2cc1de2982e8a188487724d6a1b976d1cb2ffff', '[\"server:update\"]', '2022-11-22 10:52:34', '2022-11-22 10:53:13', '2022-11-22 10:52:13', '2022-11-22 10:52:34'),
(154, 'App\\Models\\User', 52, 'auth_token', '36b418e86dd1041c389efdfb4a1babbddd5856ebc3787d0366c39f20fca3dbfb', '[\"server:update\"]', '2022-11-22 11:38:42', '2022-11-22 11:48:41', '2022-11-22 11:38:41', '2022-11-22 11:38:42'),
(155, 'App\\Models\\User', 52, 'auth_token', '571eed416432ea015a510a5a25108c4078b050b4c770cf5bf3aceb2223d548af', '[\"server:update\"]', '2022-11-22 13:48:30', '2022-11-22 13:52:16', '2022-11-22 13:42:16', '2022-11-22 13:48:30'),
(156, 'App\\Models\\User', 52, 'auth_token', 'e9a7472e3d1747a840ac1fd08939a98e6d5d160b020c4c847b1610746ea8abaa', '[\"server:update\"]', '2022-11-23 02:31:51', '2022-11-23 02:35:49', '2022-11-23 02:25:49', '2022-11-23 02:31:51'),
(157, 'App\\Models\\User', 52, 'auth_token', '7486efa871e1e441a1424d994e630ab90b2f0f27214d151599154b9b5cdb095b', '[\"server:update\"]', '2022-11-23 04:04:54', '2022-11-23 04:14:29', '2022-11-23 04:04:29', '2022-11-23 04:04:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(51, 'jedecidato', 'dropofdrop@gmail.com', '2022-11-22 06:32:11', 'eyJpdiI6IlQ2UFdDaFRtbnZzdTltelI2MDNOeGc9PSIsInZhbHVlIjoiNVh3bjdmUXhlaE8xWjdGWG5OMCtRL2ZaRVZCUUFQMGxyc3ZIaUx5TFFCWT0iLCJtYWMiOiIzMmMyOWQ3ZjA4ZWUxNDc2MmQ0NDdhYTNlOTNhODQ4Y2I1Mjc4MTU5Zjk1OWFiYjkwZTQzYWQyZDQ2YTE5ZmZmIiwidGFnIjoiIn0=', '1NY0MJ4BeTuOo', '2022-11-22 06:30:52', '2022-11-22 06:32:11'),
(52, 'hridoy', 'hellohridoy007@gmail.com', '2022-11-22 07:01:42', 'eyJpdiI6InhrWmtXam9xbkpnVitMbnliVHFGSnc9PSIsInZhbHVlIjoiQVZwR0pidW1BK2VGeFdyQnpEdjk0QT09IiwibWFjIjoiZDg5YTMxM2UzY2VmMGZmMzc3ZjFhY2JiN2EwNDZhYmNhNjkxODMxYzBmYjI2YWYyMzkzYWE1OWE0NDVjNWM0OSIsInRhZyI6IiJ9', 'TSNcoV0PfYtil', '2022-11-22 07:01:19', '2022-11-22 07:01:42');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`id`, `name`, `email`, `address`) VALUES
(28, 'jedecidato', 'dropofdrop@gmail.com', 'Aliquam excepturi ve'),
(29, 'hridoy', 'hellohridoy007@gmail.com', '41/1, Chanmia housing');

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`id`, `address`, `country`, `city`) VALUES
(166, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(167, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(168, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(169, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(170, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(171, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(172, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(173, '203.96.189.160', 'Bangladesh', 'Dhaka'),
(174, '203.96.189.160', 'Bangladesh', 'Dhaka');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `visitor`
--
ALTER TABLE `visitor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
