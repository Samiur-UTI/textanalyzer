const request = require('supertest');
const express = require('express');
const fileRoutes = require('../src/routes/file.routes'); 

// Mock the authentication middleware
jest.mock('../src/middleware/auth.middleware', () => (req, res, next) => next());

const app = express();
app.use(express.json());
app.use(fileRoutes);

describe('File Routes', () => {
    // Test for /count-word route
    it('GET /count-word should return word count', async () => {
        const res = await request(app).get('/count-word');
        expect(res.statusCode).toEqual(200); // Adjust based on your implementation
        // Add more assertions here
    });

    // Test for /count-character route
    it('GET /count-character should return character count', async () => {
        // Similar to the above
    });

    // Test for /count-sentence route
    it('GET /count-sentence should return sentence count', async () => {
        // Similar to the above
    });

    // Test for /count-paragraph route
    it('GET /count-paragraph should return paragraph count', async () => {
        // Similar to the above
    });

    // Test for /count-longest route
    it('GET /count-longest should return largest words in paragraphs', async () => {
        // Similar to the above
    });

    // // Test for /file-upload route
    // it('POST /file-upload should handle file upload', async () => {
    //     // Note: File upload testing might require additional setup with supertest
    //     const res = await request(app)
    //         .post('/file-upload')
    //         .attach('file', 'path/to/test/file.txt'); // Adjust file path and field name
    //     expect(res.statusCode).toEqual(200); // Adjust based on your implementation
    //     // Add more assertions here
    // });
});
