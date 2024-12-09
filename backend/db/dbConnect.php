<?php
$host = '127.0.0.1:3307';
$dbname = 'cuisine_db';
$username = 'root';
$password = '';


try {
    // Création de la connexion PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

    // Configuration des options PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    echo "Connexion réussie à la base de données.";

   
} catch (PDOException $e) {
    // Gestion des erreurs de connexion
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
