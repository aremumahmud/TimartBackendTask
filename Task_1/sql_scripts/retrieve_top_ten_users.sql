SELECT Users.username, COUNT(Orders.order_id) AS order_count
FROM Users
JOIN Orders USING (user_id) -- Use the index on user_id
GROUP BY Users.username
ORDER BY order_count DESC
LIMIT 10;
