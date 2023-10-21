
```markdown
# Node.js API with GraphQL and Knex.js

This is a Node.js API built with GraphQL, Sequelize, and Express. It provides endpoints for creating and retrieving users and orders. This README provides an overview of the project, installation instructions, usage examples, and testing information.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/your-node-api.git
   cd your-node-api
   ```
2. Install the project dependencies:
   ```sh
   npm install
   ```

3. Set up the Database:
    ```bash
      npm run preinstall
    ```
    To set up the database, you'll need a MySQL client installed on your machine. The client will execute scripts to create the necessary database and tables. If you're using software like XAMPP to connect to your SQL server, you can simply copy the file sql_scripts/create_table_and_database.sql and run it within the software.

4. Run database scripts to populate sample data (Nessesary for running tests):
   ```sh
   npm run postinstall

   ```

5. Create an ENV File for Secrets:

    ```env
    PORT=3000
    MySQL_HOST="localhost"
    MySQL_USER="exampleuser"
    MySQL_DATABASE="TimartTestTask"
    MySQL_PASSWORD="examplepassword"
    DIALECT="mysql"
    ```
    Make sure you replace `exampleuser` and `examplepassword` with their respective values

6. Start the API server:
   ```sh
   npm start
   ```

The server will be running at `http://localhost:3000/graphql`.

## Usage

### Create a New User

To create a new user, make a POST request to the `/graphql` endpoint with the following GraphQL query:

```graphql
mutation {
  createUser(username: "testuser", email: "testuser@example.com") {
    id
    username
    email
  }
}
```

### Create a New Order

To create a new order, make a POST request to the `/graphql` endpoint with the following GraphQL query:

```graphql
mutation {
  createOrder(userId: 1, orderDate: "2023-10-19", totalAmount: 100.00) {
    id
    userId
    orderDate
    totalAmount
  }
}
```

### Retrieve User Information

To retrieve user information by ID, make a POST request to the `/graphql` endpoint with the following GraphQL query:

```graphql
query {
  user(id: 1) {
    id
    username
    email
  }
}
```

### Retrieve User's Orders

To retrieve a user's orders, make a POST request to the `/graphql` endpoint with the following GraphQL query:

```graphql
query {
  orders(userId: 1) {
    id
    userId
    orderDate
    totalAmount
  }
}
```

## Validation and Error Handling

Proper input validation and error handling have been implemented in the API endpoints using the `express-validator` library. The API returns informative error messages for invalid requests.

## Unit Tests

Unit tests are available in the `test/` directory. To run the tests, use the following command:

```sh
npm test
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
```
