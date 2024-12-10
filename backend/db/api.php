<?php
header('Content-Type: application/json');

// Inclure les fichiers nécessaires
include('./db.php');
include('./functions.php');

// Récupérer la table demandée
$table = $_GET['table'] ?? null;

if (!$table) {
    echo json_encode(['status' => 'error', 'message' => 'Table name not specified']);
    exit;
}

try {
    switch ($table) {
        case 'users':
            $data = getuser($pdo);
            break;
        case 'categories':
            $data = getAllCategories($pdo);
            break;
        case 'recipes':
            $data = getRecipesWithIngredients($pdo);
            break;
        case 'ingredientslist':
            $data = getAllIngredients($pdo);
            break;
            case 'ingredientslist':
                $data = getAllIngredients($pdo);
                break;
                case 'verify_user':
                    $email = $_POST['email'] ?? null;
                    $password = $_POST['password'] ?? null;
        
                    if (!$email || !$password) {
                        echo json_encode(['status' => 'error', 'message' => 'Email et mot de passe requis']);
                        exit;
                    }
        
                    $response = verifyUser($pdo, $email, $password);
        
                    // Retournez la réponse en JSON
                    echo json_encode($response, JSON_PRETTY_PRINT);
                    exit;
      
        default:
            echo json_encode(['status' => 'error', 'message' => 'Invalid table specified']);
            exit;
    }

    // Réponse JSON
    echo json_encode(['status' => 'success', 'data' => $data], JSON_PRETTY_PRINT);

} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
