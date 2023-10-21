# Database Setup, Data Insertion, and Query Optimization

This repository contains instructions and SQL scripts for setting up a MySQL database, inserting sample data, and optimizing a query for production use.

## Table of Contents

1. [Database Setup](#database-setup)
2. [Data Insertion](#data-insertion)
3. [Query Optimization](#query-optimization)
4. [Additional Notes](#additional-notes)

## 1. Database Setup

- Create a MySQL database with two tables: "Users" and "Orders."
- The "Users" table should contain fields for user information (e.g., username, email, etc.).
- The "Orders" table should contain fields for order information (e.g., order date, total amount, etc.).
- Establish a foreign key relationship between "Users" and "Orders."

## 2. Data Insertion

### Insert Users

- Use the provided SQL script to create a stored procedure that inserts 1000 users into the "Users" table. The users will have usernames like 'user0', 'user1', 'user2', and so on.

```sql
-- Create a stored procedure for inserting users
DELIMITER //
CREATE PROCEDURE InsertUsers()
BEGIN
    DECLARE i INT DEFAULT 0;
    WHILE i < 1000 DO
        INSERT INTO Users (username, email) VALUES (CONCAT('user', i), CONCAT('user', i, '@example.com'));
        SET i = i + 1;
    END WHILE;
END;
//
DELIMITER ;

-- Call the stored procedure to insert users
CALL InsertUsers();
```
### Insert Orders

- Use the provided SQL script to create a stored procedure that inserts 5000 orders into the "Orders" table. The orders will have random user_ids, order dates, and total amounts.

```sql
-- Create a stored procedure for inserting orders
DELIMITER //
CREATE PROCEDURE InsertOrders()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE user_count INT DEFAULT 1000;
    
    WHILE i <= 5000 DO
        -- Generate a random user_id between 1 and user_count
        DECLARE random_user_id INT;
        SET random_user_id = FLOOR(1 + (RAND() * user_count));
        
        -- Generate a random order_date (change date range as needed)
        DECLARE random_order_date DATE;
        SET random_order_date = DATE_ADD('2023-10-19', INTERVAL FLOOR(RAND() * 365) DAY);
        
        -- Generate a random total_amount (change range as needed)
        DECLARE random_total_amount DECIMAL(10, 2);
        SET random_total_amount = ROUND(50 + (RAND() * 450), 2);
        
        INSERT INTO Orders (user_id, order_date, total_amount)
        VALUES (random_user_id, random_order_date, random_total_amount);
        
        SET i = i + 1;
    END WHILE;
END;
//
DELIMITER ;

-- Call the stored procedure to insert orders
CALL InsertOrders();

```

## 3. Query Optimization

Write a SQL query that retrieves the top 10 users who have made the most orders. Optimize the query for performance.

Therefore we index both users and orders table

```sql
-- Create index for Users table
CREATE INDEX idx_user_id_Users ON Users(user_id);

-- Create index for Orders table
CREATE INDEX idx_user_id_Orders ON Orders(user_id);


```

## Additional Notes

- For security and maintainability, ensure you use a secure connection to your database and implement proper authentication and authorization mechanisms.
- Regularly back up your database to prevent data loss.
- Consider using an Object-Relational Mapping (ORM) library for your application to interact with the database, which can help with security and maintainability.


This consolidated README provides a complete guide for database setup, data insertion, and query optimization. Make sure to replace the database and table names as needed for your specific use case.
