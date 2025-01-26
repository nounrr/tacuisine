-- Création de la base de données (si elle n'existe pas déjà)
CREATE DATABASE IF NOT EXISTS kozintk_db;

-- Utilisation de la base de données
USE kozintk_db;

-- Table des utilisateurs
CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_utilisateur VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL, -- Stocker le hash du mot de passe, PAS le mot de passe en clair
    date_naissance DATE,
    ville VARCHAR(255) NOT NULL,
    sexe VARCHAR(25) NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

);

-- Table des catégories de recettes
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(255) UNIQUE NOT NULL
);

-- Table des ingrédients
CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_ingredient VARCHAR(255) UNIQUE NOT NULL
);

-- Table des recettes
CREATE TABLE recettes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    instructions TEXT,
    temps_preparation INT, -- en minutes
    temps_cuisson INT, -- en minutes
    portions INT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    utilisateur_id INT,
    categorie_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

-- Table de liaison entre les recettes et les ingrédients (relation Many-to-Many)
CREATE TABLE recettes_ingredients (
    recette_id INT,
    ingredient_id INT,
    quantite VARCHAR(50), -- Par exemple "100g", "1 cuillère à soupe"
    PRIMARY KEY (recette_id, ingredient_id),
    FOREIGN KEY (recette_id) REFERENCES recettes(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

-- Table des favoris des utilisateurs
CREATE TABLE favoris (
    utilisateur_id INT,
    recette_id INT,
    PRIMARY KEY (utilisateur_id, recette_id),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (recette_id) REFERENCES recettes(id)
);

-- Table des "suivis" (relation entre utilisateurs)
CREATE TABLE suivis (
    utilisateur_id INT, -- L'utilisateur qui suit
    chef_id INT,        -- Le chef suivi
    PRIMARY KEY (utilisateur_id, chef_id),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (chef_id) REFERENCES utilisateurs(id)
);

-- Table des likes
CREATE TABLE likes (
    utilisateur_id INT,
    recette_id INT,
    PRIMARY KEY (utilisateur_id, recette_id),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (recette_id) REFERENCES recettes(id)
);
