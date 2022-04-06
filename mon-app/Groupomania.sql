-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 06 avr. 2022 à 15:00
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id_com` int(100) NOT NULL AUTO_INCREMENT,
  `user_id` int(100) NOT NULL,
  `message` varchar(500) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `post_id` int(100) NOT NULL,
  PRIMARY KEY (`id_com`),
  KEY `post_index` (`post_id`),
  KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id_com`, `user_id`, `message`, `user_name`, `post_id`) VALUES
(46, 78, 'http://localhost:3000/main/60', 'Jimmy', 88),
(56, 78, 'vendredi', 'Jimmy', 124),
(58, 78, 'Tu vas faire quoi ?', 'Jimmy', 127),
(61, 78, 'dimanche', 'Jimmy', 127),
(91, 60, 'Super !', 'teste333', 141),
(92, 60, 'Super !', 'teste333', 128);

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `user_id` int(100) NOT NULL,
  `message` text NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name_poster` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`user_id`, `message`, `image`, `video`, `id`, `name_poster`, `date`) VALUES
(78, 'Bonne semaine !', 'http://localhost:8080/images/Plage.jpg164726939620678.jpg', NULL, 87, 'Jimmy', '2022-03-14 14:49:56'),
(78, 'Je suis en forme !', 'http://localhost:8080/images/chat.jpg164736265918778.jpg', NULL, 88, 'Jimmy', '2022-03-15 16:44:19'),
(78, 'Je suis en forme !', NULL, NULL, 91, 'Jimmy', '2022-03-15 17:16:59'),
(78, 'On test les delete', NULL, NULL, 112, 'Jimmy', '2022-03-23 15:03:49'),
(78, 'Bonne journée a tous ! ', 'http://localhost:8080/images/Plage.jpg164820559236478.jpg', NULL, 124, 'Jimmy', '2022-03-25 10:53:12'),
(78, 'Bon week-end ', NULL, NULL, 127, 'Jimmy', '2022-03-26 09:11:32'),
(78, 'il fait pas beau ...', 'http://localhost:8080/images/Plage.jpg164854096201578.jpg', NULL, 128, 'Jimmy', '2022-03-29 08:02:42'),
(78, '', 'http://localhost:8080/images/P7_accessibilité3.jpg164856869163378.jpg', NULL, 129, 'Jimmy', '2022-04-01 14:11:38'),
(60, 'Bientôt la fin ?', NULL, NULL, 137, 'Marie75', '2022-03-31 09:46:43'),
(84, 'trop bien ton up', NULL, NULL, 141, 'Flo75', '2022-03-31 14:32:54');

-- --------------------------------------------------------

--
-- Structure de la table `postlike`
--

DROP TABLE IF EXISTS `postlike`;
CREATE TABLE IF NOT EXISTS `postlike` (
  `idlike` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`idlike`),
  KEY `post_id` (`post_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=191 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `postlike`
--

INSERT INTO `postlike` (`idlike`, `user_id`, `post_id`) VALUES
(160, 78, 128),
(106, 60, 127),
(102, 60, 123),
(164, 84, 140),
(117, 90, 132),
(176, 100, 87),
(168, 60, 141),
(111, 86, 129),
(118, 60, 134),
(115, 60, 132),
(110, 86, 130),
(166, 60, 143),
(175, 100, 127),
(114, 60, 131),
(174, 78, 129),
(173, 99, 127),
(172, 99, 129),
(90, 60, 124),
(107, 78, 87),
(179, 101, 127),
(185, 102, 129),
(190, 103, 129);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `email` varchar(50) NOT NULL,
  `pseudo` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `imageUrl` varchar(100) DEFAULT NULL,
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `Emploi` varchar(100) DEFAULT NULL,
  `Ville` varchar(100) DEFAULT NULL,
  `Admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`email`, `pseudo`, `password`, `imageUrl`, `id`, `Emploi`, `Ville`, `Admin`) VALUES
('marie@hotmail.fr', 'teste333', '$2b$10$t41n4z2PBWKFAbz/hrkTYO0GL5x3R8xj/VQSn.qSDWSM3qEciovl6', 'http://localhost:8080/images/chat.jpg164857391831860.jpg', 60, 'Journaliste ', 'Paris', NULL),
('pepete@gmail.fr', 'pepette', '$2b$10$BIA5Z1hO35UlbRPzyQAsIuKlOIk8SQGzEjDY3WOxm1u8IHTpLB0Ty', NULL, 62, 'architecte ', 'Paris', NULL),
('jim.jeannon@gmail.com', 'Jimmy', '$2b$10$kD0TOBHulc/cLQ5reGxMZ.bTx5kuKllBhpOZ3QqkrdiU9XpbdOqhS', 'http://localhost:8080/images/avatar.jpg164855992570278.jpg', 78, 'Développeur web', 'Paris', 1),
('paulo@hotmail.fr', 'Polzo', '$2b$10$BscMAvWxGLPSPvs3g.ijFe974jGbh9cA28a.KY9NznLo/E7Tgo5oG', 'http://localhost:8080/images/avatar.jpg164814188510779.jpg', 79, 'Artiste', 'Nouméa', NULL),
('florent@hotmail.fr', 'Flo75', '$2b$10$YnXqb0ZyUgji3NEPNYh0qO5g/YoiKXcVbGvSsRcSl7Tm45fpz5hQG', NULL, 84, 'Avocat', 'Paris', NULL),
('teste123@hotmail.fr', 'test12345', '$2b$10$CVdDA/6nEupojehoVYpgVOwN5/P.iSeqLAolGenElUneF90SqnjRm', 'http://localhost:8080/images/chat.jpg164880401377399.jpg', 99, 'Avocat', 'Paris', NULL),
('marieannejullien@gmail.com', 'Mayanne', '$2b$10$GpeBKYHBzI5CKUzNt.lT/OxCwicvahU7XhnnpmK9P4JaZiCQ.rDya', 'http://localhost:8080/images/Plage.jpg1648901493679100.jpg', 100, NULL, NULL, 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
