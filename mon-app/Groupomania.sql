-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 26 mars 2022 à 10:47
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
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id_com`, `user_id`, `message`, `user_name`, `post_id`) VALUES
(41, 60, 'Bientôt la fin ?', 'marie76', 123),
(46, 78, 'http://localhost:3000/main/60', 'Jimmy', 88),
(54, 78, 'Pas de photo ic ', 'Jimmy', 125),
(56, 78, 'vendredi', 'Jimmy', 124),
(58, 78, 'Tu vas faire quoi ?', 'Jimmy', 127),
(60, 78, 'kjdfjvsbjfwebjkvbef', 'Jimmy', 88);

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
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`user_id`, `message`, `image`, `video`, `id`, `name_poster`, `date`) VALUES
(78, 'Bonne semaine !', 'http://localhost:8080/images/Plage.jpg164726939620678.jpg', NULL, 87, 'Jimmy', '2022-03-14 14:49:56'),
(78, 'Je suis en forme !', 'http://localhost:8080/images/chat.jpg164736265918778.jpg', NULL, 88, 'Jimmy', '2022-03-15 16:44:19'),
(78, 'bonjour il fait beau ? ', NULL, NULL, 90, 'Jimmy', '2022-03-15 17:16:52'),
(78, 'Je suis en forme !', NULL, NULL, 91, 'Jimmy', '2022-03-15 17:16:59'),
(78, 'On test les delete', NULL, NULL, 112, 'Jimmy', '2022-03-23 15:03:49'),
(60, 'chaud les coco', NULL, NULL, 123, 'marie76', '2022-03-24 18:57:44'),
(78, 'Bonne journée a tous ! ', 'http://localhost:8080/images/Plage.jpg164820559236478.jpg', NULL, 124, 'Jimmy', '2022-03-25 10:53:12'),
(78, 'Bientôt la fin ?', NULL, NULL, 125, 'Jimmy', '2022-03-25 11:37:15'),
(78, 'Bon week-end ', NULL, NULL, 127, 'Jimmy', '2022-03-26 09:11:32');

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
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `postlike`
--

INSERT INTO `postlike` (`idlike`, `user_id`, `post_id`) VALUES
(41, 78, 90),
(52, 82, 101),
(43, 78, 98),
(34, 74, 88),
(68, 60, 122),
(29, 60, 97),
(27, 60, 78),
(28, 60, 97),
(18, 60, 92),
(54, 78, 96),
(53, 78, 105),
(50, 60, 85),
(71, 60, 90),
(70, 74, 123),
(72, 74, 90);

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
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`email`, `pseudo`, `password`, `imageUrl`, `id`, `Emploi`, `Ville`) VALUES
('marie@hotmail.fr', 'marie76', '$2b$10$DmqL/5wRyc0Zb2GLsjPGcOX1YYrSo90lcaf.ezmov85TbF8MDWJdK', 'http://localhost:8080/images/Plage.jpg164681636184960.jpg', 60, 'Journaliste ', 'Paris'),
('titi@hotmail.fr', 'Jimthefirst', '$2b$10$SVdgXnTf6P45bgUhjPZwVOf4hI7NX1kxmH9QxDyCll/jvNxLZL.c2', NULL, 61, 'Journaliste ', 'Brest'),
('pepete@gmail.fr', 'pepette', '$2b$10$BIA5Z1hO35UlbRPzyQAsIuKlOIk8SQGzEjDY3WOxm1u8IHTpLB0Ty', NULL, 62, 'architecte ', 'Paris'),
('trist@hotmail.fr', 'dscds', '$2b$10$PZ/WdLmQveUZx6/x8mO1FeI3qF1oA.oOcuChwrta8ulHlcVbPTrQG', NULL, 64, NULL, NULL),
('sdfghjkl@hotmail.fr', 'qswdfegrhtnjymuk', '$2b$10$JtGVcsYXJgRnu9p/QiLe8usKt.TM.TgukUUMkJFP6wkIMIp9bh9Ti', NULL, 73, NULL, NULL),
('florent@hotmail.fr', 'Flo', '$2b$10$5TzVhbzXn6sDMdP1qGeSgedyoJnefnPAkl7gfxMZsHFByyWgP2snS', 'http://localhost:8080/images/Plage.jpg164785807567674.jpg', 74, 'CEO', 'Paris'),
('jim.jeannon@gmail.com', 'Jimmy', '$2b$10$Izh.DJp8RrqIYXzmxeA8p.qjpevG5haJ2zuOoaKI9kxY4ZVNouEoa', 'http://localhost:8080/images/chat.jpg164820771016178.jpg', 78, 'Developer', 'Paris'),
('paulo@hotmail.fr', 'Polzo', '$2b$10$BscMAvWxGLPSPvs3g.ijFe974jGbh9cA28a.KY9NznLo/E7Tgo5oG', 'http://localhost:8080/images/avatar.jpg164814188510779.jpg', 79, 'Artiste', 'Nouméa'),
('richard@hotmail.fr', 'Lechevalier ', '$2b$10$2p/Mf9AnM7m.afIKzf4aSOy/FtD5.mtobvI6nf.NtFmEmSGyLGSXa', 'http://localhost:8080/images/chat.jpg164681627972780.jpg', 80, 'Chevalier', 'Brest');

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
