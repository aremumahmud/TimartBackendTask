// test/order.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Import your Express app instance
const { expect } = chai;

chai.use(chaiHttp);

describe('Order API', () => {
    it('should retrieve a user\'s orders', (done) => {
        chai
            .request(app)
            .post('/graphql')
            .send({
                query: `
          query {
            orders(userId: 1) {
              id
              userId
              orderDate
              totalAmount
            }
          }
        `,
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                // Add more assertions as needed
                done();
            });
    });
    it('should create a new order', (done) => {
        chai
            .request(app)
            .post('/graphql')
            .send({
                query: `
              mutation {
                createOrder(userId: 2, orderDate: "2023-10-20", totalAmount: 75.50) {
                  id
                  userId
                  orderDate
                  totalAmount
                }
              }
            `,
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.data.createOrder.totalAmount.toFixed(2)).to.equal('75.50');
                // Add more assertions as needed
                done();
            });
    });
    // Add more test cases for order-related operations
});