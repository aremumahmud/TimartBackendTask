-- Create the database
CREATE DATABASE TimartTestTask;

-- Use the database
USE TimartTestTask;

-- Create the Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
    -- Add other user information fields as needed
);

-- Create the Orders table
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    -- Add other order information fields as needed
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
