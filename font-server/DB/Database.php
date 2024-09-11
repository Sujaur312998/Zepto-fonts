<?php

class Database {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "font_group";
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // Public method to get the connection
    public function getConnection() {
        return $this->conn;
    }

    public function createTableIfNotExists($tableName, $createTableQuery) {
        $query = "SHOW TABLES LIKE '$tableName'";
        $result = $this->conn->query($query);

        if ($result->num_rows == 0) {
            if ($this->conn->query($createTableQuery) === TRUE) {
                echo "Table '$tableName' created successfully";
            } else {
                echo "Error creating table: " . $this->conn->error;
            }
        } else {
            echo "Table '$tableName' already exists";
        }
    }

    public function close() {
        $this->conn->close();
    }
}

?>
