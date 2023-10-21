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
