// test/user.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Import your Express app instance
const { expect } = chai;

chai.use(chaiHttp);

describe('User API', () => {
    it('should retrieve user information by ID', (done) => {
        chai
            .request(app)
            .post('/graphql')
            .send({
                query: `
          query {
            user(id: 1) {
              id
              username
              email
            }
          }
        `,
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.data.user.username).to.equal('user1'); // Adjust this as per your expected data
                done();
            });
    });
    it('should create a new user', (done) => {
        chai
            .request(app)
            .post('/graphql')
            .send({
                query: `
              mutation {
                createUser(username: "newuser", email: "newuser@example.com") {
                  id
                  username
                  email
                }
              }
            `,
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.data.createUser.username).to.equal('newuser');
                // Add more assertions as needed
                done();
            });
    });

    // Add more test cases for user-related operations
});