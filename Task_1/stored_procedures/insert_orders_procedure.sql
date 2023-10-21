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
