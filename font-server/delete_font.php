<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

// Include the Database class
require './DB/Database.php';

// Retrieve font ID from POST request
$data = json_decode(file_get_contents('php://input'), true);
$fontId = isset($data['id']) ? intval($data['id']) : 0;

$response = [];

// Validate input
if ($fontId <= 0) {
    $response['status'] = 'error';
    $response['message'] = 'Invalid font ID';
    echo json_encode($response);
    exit;
}

// Create a new database connection
$db = new Database();
$connection = $db->getConnection(); // Get the connection using the public method

// Prepare to fetch font info
$stmt = $connection->prepare("SELECT name, location FROM uploaded_font WHERE id = ?");
$stmt->bind_param("i", $fontId);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $font = $result->fetch_assoc();
    $fileName = $font['name'];
    $filePath = $font['location'];

    // Delete the file from the server
    if (file_exists($filePath)) {
        if (unlink($filePath)) {
            // Delete the record from the database
            $stmt = $connection->prepare("DELETE FROM uploaded_font WHERE id = ?");
            $stmt->bind_param("i", $fontId);

            if ($stmt->execute()) {
                $response['status'] = 'success';
                $response['message'] = 'Font deleted successfully';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Error deleting record from database: ' . $stmt->error;
            }
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Error deleting file from server';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'File does not exist';
    }

    $stmt->close();
} else {
    $response['status'] = 'error';
    $response['message'] = 'Font not found';
}

// Close the database connection
$db->close();

// Output the JSON response
echo json_encode($response);
?>
