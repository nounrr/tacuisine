<?php

function getAllIngredientCategories($pdo) {
    $query = "SELECT id, name, icon FROM ingredientcategories";
    $stmt = $pdo->query($query);
    return $stmt->fetchAll();
}

function getAllCategories($pdo) {
    $query = "SELECT id, name, icon FROM categories";
    $stmt = $pdo->query($query);
    return $stmt->fetchAll();
}
function getAllIngredients($pdo) {
    $query = "SELECT i.id, i.name, ic.name AS category, i.icon
              FROM ingredientslist i
              LEFT JOIN ingredientcategories ic ON i.category_id = ic.id";
    $stmt = $pdo->query($query);
    return $stmt->fetchAll();
}

/**
 * Récupère les recettes avec leurs ingrédients regroupés.
 */
function getRecipesWithIngredients($pdo) {
    $query = "
        SELECT 
            r.id AS recipe_id,
            r.title AS recipe_title,
            r.description AS recipe_description,
            r.image AS recipe_image,
            c.name AS category_name,
            u.name AS created_by,
            r.created_at,
            i.name AS ingredient_name,
            ri.quantity AS ingredient_quantity
        FROM recipes r
        LEFT JOIN recipeingredients ri ON r.id = ri.recipe_id
        LEFT JOIN ingredientslist i ON ri.ingredient_id = i.id
        LEFT JOIN categories c ON r.category_id = c.id
        LEFT JOIN users u ON r.created_by = u.id
        ORDER BY r.id, i.name
    ";
    $stmt = $pdo->query($query);
    $data = $stmt->fetchAll();

    // Groupement des recettes et de leurs ingrédients
    $grouped = [];
    foreach ($data as $row) {
        $recipe_id = $row['recipe_id'];
        if (!isset($grouped[$recipe_id])) {
            $grouped[$recipe_id] = [
                'recipe_id' => $row['recipe_id'],
                'recipe_title' => $row['recipe_title'],
                'recipe_description' => $row['recipe_description'],
                'recipe_image' => $row['recipe_image'],
                'category_name' => $row['category_name'],
                'created_by' => $row['created_by'],
                'created_at' => $row['created_at'],
                'ingredients' => []
            ];
        }
        $grouped[$recipe_id]['ingredients'][] = [
            'ingredient_name' => $row['ingredient_name'],
            'ingredient_quantity' => $row['ingredient_quantity']
        ];
    }
    return array_values($grouped);
}

/**
 * Récupère toutes les recettes favorites avec détails utilisateur et recette.
 */
function getAllFavorites($pdo) {
    $query = "
        SELECT 
            f.id AS favorite_id,
            u.name AS user_name,
            r.title AS recipe_title,
            r.description AS recipe_description,
            r.image AS recipe_image
        FROM favorites f
        LEFT JOIN users u ON f.user_id = u.id
        LEFT JOIN recipes r ON f.recipe_id = r.id
    ";
    $stmt = $pdo->query($query);
    return $stmt->fetchAll();
}

/**
 * Vérifie les informations d'un utilisateur.
 *
 * @param PDO $pdo
 * @param string $email
 * @param string $password
 * @return array
 */
function verifyUser($pdo, $email, $password) {
    // Rechercher l'utilisateur par email
    $query = "SELECT id, name, email, profile_picture, password FROM users WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    // Vérifiez si l'utilisateur existe
    if (!$user) {
        return ['status' => 'error', 'message' => 'Utilisateur inexistant'];
    }

    // Vérifiez le mot de passe
    if (!password_verify($password, $user['password'])) {
        return ['status' => 'error', 'message' => 'Mot de passe incorrect'];
    }

    // Si tout est correct, retournez les données de l'utilisateur
    return [
        'status' => 'success',
        'data' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'profile_picture' => $user['profile_picture']
        ]
    ];
}
