-- Create the database
CREATE DATABASE TimartTestTask;

-- Use the database
USE TimartTestTask;

-- Create the Users table
CREATE TABLE Users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    createdAt DATE NOT NULL,
    updatedAt DATE NOT NULL
   
);

-- Create the Orders table
CREATE TABLE Orders (
    id VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    orderDate DATE NOT NULL,
    totalAmount DECIMAL(10, 2) NOT NULL,
    createdAt DATE NOT NULL,
    updatedAt DATE NOT NULL,
    
    FOREIGN KEY (userId) REFERENCES Users(id)
);
