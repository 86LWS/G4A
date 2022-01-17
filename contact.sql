-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mar. 11 jan. 2022 à 14:19
-- Version du serveur :  5.7.25
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `contact`
--

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE `nom` (
  `id_personne` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prénom` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `nom`
--

INSERT INTO `nom` (`id_personne`, `nom`, `prénom`) VALUES
(2, 'dupont', 'ellias'),
(3, 'Dupont', 'ines'),
(4, 'Dupont', 'Léa'),
(5, 'Dupont', 'hugo'),
(6, 'Leplusdrole', 'Anthoine'),
(7, 'Adam', 'Célia'),
(8, 'Adam', 'Val'),
(9, 'dupont', 'Sam'),
(10, 'Adam', 'Alex'),
(11, 'Adam', 'Lilou'),
(12, 'Adam', 'Ramy');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `texte` text NOT NULL,
  `id_personne` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id`, `texte`, `id_personne`) VALUES
(1, 'Merci, je veux confirmer la réception de mes capteurs. Merci, très bon travail!', 2),
(2, 'Comment fait-on pour acheter un capteur', 3),
(3, 'Quelles sont les couleurs disponibles pour les capteurs', 4),
(4, 'Bonjour, combien de capteurs avez vous produit?', 5),
(5, 'Où etes vous situés', 6),?
(6, 'Je ne reçois pas mon capteur que faire??', 7),
(7, 'message 2', 8),
(8, 'zzz', 9),
(9, 'AAAAA', 10),
(10, 'ZZZ', 11),
(11, 'ZZZ', 12);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `nom`
--
ALTER TABLE `nom`
  ADD PRIMARY KEY (`id_personne`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nom_constraint` (`id_personne`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `auteur`
--
ALTER TABLE `nom`
  MODIFY `id_personne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `personne_constraint` FOREIGN KEY (`id_personne`) REFERENCES `nom` (`id_personne`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
