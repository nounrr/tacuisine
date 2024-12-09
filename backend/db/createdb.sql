-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 11:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cuisine_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `icon`) VALUES
(1, 'Entrée', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFD700\"/><path d=\"M12 8L15 12H9L12 8Z\" fill=\"#FFFFFF\"/></svg>'),
(2, 'Plat principal', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FF5733\"/><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" fill=\"#FFFFFF\"/></svg>'),
(3, 'Dessert', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFC0CB\"/><circle cx=\"12\" cy=\"12\" r=\"5\" fill=\"#FFFFFF\"/></svg>'),
(4, 'Petit-déjeuner', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFA500\"/><rect x=\"10\" y=\"10\" width=\"4\" height=\"8\" fill=\"#FFFFFF\"/></svg>'),
(5, 'Boisson', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#ADD8E6\"/><path d=\"M10 6H14V18H10V6Z\" fill=\"#FFFFFF\"/></svg>'),
(6, 'Soupes', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFCC80\"/></svg>'),
(7, 'Salades', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#C8E6C9\"/></svg>'),
(8, 'Snacks', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFAB91\"/></svg>');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ingredientcategories`
--

CREATE TABLE `ingredientcategories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredientcategories`
--

INSERT INTO `ingredientcategories` (`id`, `name`, `icon`) VALUES
(1, 'Fruits', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFA500\"/><circle cx=\"12\" cy=\"8\" r=\"4\" fill=\"#FFFFFF\"/></svg>'),
(2, 'Légumes', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"4\" fill=\"#32CD32\"/></svg>'),
(3, 'Viandes', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C7 2 2 7 2 12s5 10 10 10 10-5 10-10S17 2 12 2Z\" fill=\"#FF6347\"/></svg>'),
(4, 'Produits laitiers', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"8\" y=\"6\" width=\"8\" height=\"12\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"2\"/><rect x=\"10\" y=\"4\" width=\"4\" height=\"2\" fill=\"#ADD8E6\"/></svg>'),
(5, 'Épices', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2L22 22H2L12 2Z\" fill=\"#FFD700\"/></svg>');

-- --------------------------------------------------------

--
-- Table structure for table `ingredientslist`
--

CREATE TABLE `ingredientslist` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredientslist`
--

INSERT INTO `ingredientslist` (`id`, `name`, `category_id`, `icon`) VALUES
(1, 'Pomme', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FF0000\"/><circle cx=\"12\" cy=\"8\" r=\"3\" fill=\"#FFFFFF\"/></svg>'),
(2, 'Carotte', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2L15 22H9L12 2Z\" fill=\"#FFA500\"/></svg>'),
(3, 'Poulet', 3, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FF6347\"/></svg>'),
(4, 'Lait', 4, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"8\" y=\"6\" width=\"8\" height=\"12\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"2\"/><rect x=\"10\" y=\"4\" width=\"4\" height=\"2\" fill=\"#ADD8E6\"/></svg>'),
(5, 'Sel', 5, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#C0C0C0\"/></svg>'),
(6, 'Oignon', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><ellipse cx=\"12\" cy=\"12\" rx=\"8\" ry=\"10\" fill=\"#D4A373\"/></svg>'),
(7, 'Tomate', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FF6347\"/></svg>'),
(8, 'Bœuf haché', 3, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" fill=\"#FF4500\"/></svg>'),
(9, 'Pâte feuilletée', 4, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"8\" width=\"16\" height=\"8\" rx=\"4\" fill=\"#FFFACD\"/></svg>'),
(10, 'Crème fraîche', 4, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C8 2 4 6 4 10C4 14 8 18 12 18C16 18 20 14 20 10C20 6 16 2 12 2Z\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"2\"/></svg>'),
(11, 'Champignons', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2L15 22H9L12 2Z\" fill=\"#A52A2A\"/></svg>'),
(12, 'Beurre', 4, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" fill=\"#FFD700\"/></svg>'),
(13, 'Thon', 3, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C8 2 4 6 4 10C4 14 8 18 12 18C16 18 20 14 20 10C20 6 16 2 12 2Z\" fill=\"#4682B4\"/></svg>'),
(14, 'Poivron', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#32CD32\"/></svg>'),
(15, 'Potiron', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFA500\"/></svg>'),
(16, 'Lentilles', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#795548\"/></svg>'),
(17, 'Feta', 4, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFFFFF\"/></svg>'),
(18, 'Quinoa', 2, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#D4AF37\"/></svg>'),
(19, 'Avocat', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#4CAF50\"/></svg>'),
(20, 'Tortilla', NULL, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#FFD700\"/></svg>');

-- --------------------------------------------------------

--
-- Table structure for table `recipeingredients`
--

CREATE TABLE `recipeingredients` (
  `id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `quantity` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipeingredients`
--

INSERT INTO `recipeingredients` (`id`, `recipe_id`, `ingredient_id`, `quantity`) VALUES
(6, 5, 3, '200g'),
(7, 5, 6, '1 pièce'),
(8, 5, 7, '50g'),
(9, 5, 5, '1 pincée'),
(10, 6, 3, '1 pièce'),
(11, 6, 2, '3 pièces'),
(12, 6, 8, '500g'),
(13, 6, 5, '1 pincée'),
(14, 7, 9, '250g'),
(15, 7, 10, '200g'),
(16, 7, 11, '1 tasse'),
(17, 7, 12, '1 cuillère à soupe'),
(18, 8, 13, '200g'),
(19, 8, 14, '150g'),
(20, 8, 15, '100g'),
(21, 8, 16, '3'),
(22, 9, 17, '1 pièce'),
(23, 9, 18, '100g'),
(24, 9, 4, '200ml'),
(25, 9, 19, '1 cuillère à soupe'),
(26, 10, 7, '3 pièces'),
(27, 10, 20, '200g'),
(28, 10, 19, 'quelques feuilles'),
(29, 11, 1, '5 pièces'),
(30, 11, 12, '50g'),
(31, 11, 9, '1 rouleau'),
(32, 12, 11, '300g'),
(33, 12, 6, '1 pièce'),
(34, 12, 10, '200ml'),
(35, 13, 14, '4 pièces'),
(36, 13, 8, '300g'),
(37, 13, 21, '100g'),
(38, 14, 13, '200g'),
(39, 14, 10, '150ml'),
(40, 14, 9, '1 rouleau'),
(41, 15, 15, '500g'),
(42, 15, 10, '200ml'),
(43, 15, 12, '20g'),
(44, 16, 16, '200g'),
(45, 16, 6, '1 pièce'),
(46, 16, 7, '2 pièces'),
(47, 17, 7, '3 pièces'),
(48, 17, 22, '1 pièce'),
(49, 17, 17, '100g'),
(50, 19, 3, '150g'),
(51, 19, 20, '1 pièce'),
(52, 19, 6, '2 feuilles');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `image`, `category_id`, `created_by`, `created_at`) VALUES
(5, 'Salade César', 'Délicieuse salade avec poulet, parmesan et croûtons.', 'salade_cesar.jpg', 1, 1, '2024-12-09 22:37:09'),
(6, 'Poulet rôti', 'Poulet rôti juteux avec pommes de terre et légumes.', 'poulet_roti.jpg', 2, 1, '2024-12-09 22:37:09'),
(7, 'Tiramisu', 'Dessert italien classique à base de mascarpone.', 'tiramisu.jpg', 3, 1, '2024-12-09 22:37:09'),
(8, 'Gâteau au chocolat', 'Moelleux au chocolat avec glaçage.', 'gateau_chocolat.jpg', 3, 1, '2024-12-09 22:37:09'),
(9, 'Smoothie tropical', 'Boisson rafraîchissante à base de fruits tropicaux.', 'smoothie_tropical.jpg', 5, 1, '2024-12-09 22:37:09'),
(10, 'Pizza Margherita', 'Pizza italienne classique avec sauce tomate, mozzarella et basilic.', 'pizza_margherita.jpg', 2, 1, '2024-12-09 22:39:57'),
(11, 'Tarte aux pommes', 'Une tarte croustillante avec des pommes caramélisées.', 'tarte_aux_pommes.jpg', 3, 1, '2024-12-09 22:39:57'),
(12, 'Soupe aux champignons', 'Soupe onctueuse à base de champignons et de crème.', 'soupe_champignons.jpg', 1, 1, '2024-12-09 22:39:57'),
(13, 'Poivrons farcis', 'Poivrons garnis de riz, légumes et viande hachée.', 'poivrons_farcis.jpg', 2, 1, '2024-12-09 22:39:57'),
(14, 'Quiche au thon', 'Quiche légère avec du thon, de la crème et de la pâte feuilletée.', 'quiche_thon.jpg', 2, 1, '2024-12-09 22:39:57'),
(15, 'Velouté de potiron', 'Une soupe onctueuse et savoureuse à base de potiron.', 'veloute_potiron.jpg', 6, 1, '2024-12-09 22:42:05'),
(16, 'Soupe de lentilles', 'Soupe nourrissante avec des lentilles et des épices.', 'soupe_lentilles.jpg', 6, 1, '2024-12-09 22:42:05'),
(17, 'Salade grecque', 'Salade légère avec des tomates, concombres, feta et olives.', 'salade_grecque.jpg', 7, 1, '2024-12-09 22:42:05'),
(18, 'Salade de quinoa', 'Salade nutritive à base de quinoa, légumes et avocat.', 'salade_quinoa.jpg', 7, 1, '2024-12-09 22:42:05'),
(19, 'Wrap poulet', 'Wrap rapide avec poulet, légumes et sauce.', 'wrap_poulet.jpg', 8, 1, '2024-12-09 22:42:05'),
(20, 'Tacos végétariens', 'Tacos garnis de légumes grillés et de sauce au yaourt.', 'tacos_vegetariens.jpg', 8, 1, '2024-12-09 22:42:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `profile_picture` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `profile_picture`) VALUES
(1, 'Admin User', 'admin@example.com', 'hashed_password', 'admin.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`) USING HASH;

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredientcategories`
--
ALTER TABLE `ingredientcategories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`) USING HASH;

--
-- Indexes for table `ingredientslist`
--
ALTER TABLE `ingredientslist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`) USING HASH;

--
-- Indexes for table `recipeingredients`
--
ALTER TABLE `recipeingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredientcategories`
--
ALTER TABLE `ingredientcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ingredientslist`
--
ALTER TABLE `ingredientslist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `recipeingredients`
--
ALTER TABLE `recipeingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
