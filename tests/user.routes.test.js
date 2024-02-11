const request = require('supertest');
const app = require('../src/app'); 

describe('POST /user/signup', () => {
    it('should create a new user and return 201 status', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                email: 'test@example.com',
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('message', 'User created successfully');
    });
});

describe('POST /user/login', () => {
    it('should authenticate user and return a token with 200 status', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});


// Tests for invalid cases in signup
describe('POST /user/signup with invalid data', () => {
    it('should return 400 status for missing email', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 status for invalid email format', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                email: 'test',
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 status for empty password', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                email: 'test',
                password: '',
                firstName: 'John',
                lastName: 'Doe'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 status for password length less than 8', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                email: 'test',
                password: 'password',
                firstName: 'John',
                lastName: 'Doe'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 status for empty first name', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                email: 'test@example.com',
                password: 'password123',
                firstName: '',
                lastName: 'Doe'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 status for empty last name', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({
                email: 'test@example.com',
                password: 'password123',
                firstName: 'John',
                lastName: ''
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

});

// Tests for invalid cases in login
describe('POST /user/login with invalid data', () => {
    it('should return 400 status for missing email', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                password: 'password123'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 status for missing password', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'test@example.com'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    // Test for invalid email
    it('should return 400 status for invalid email', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'invalidemail',
                password: 'password123'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    // Test for password less than 8 characters
    it('should return 400 status for password less than 8 characters', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'test@example.com',
                password: 'pass'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('errors');
    });

    // Add more cases as necessary (e.g., incorrect password)
});

