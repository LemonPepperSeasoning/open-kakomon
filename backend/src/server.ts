import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc';
import routes from './routes'


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
        title: "Open Kakomon API with Swagger",
        version: "0.1.0",
        description:
            "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "Takahiro Ishiguro",
            url: "lemonpepperseasoning.github.io",
            email: "takahiro.swe@gmail.com",
        },
        },
        servers: [
        {
            url: "http://localhost:8080",
        },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/models/*.ts"],
};

const app = express();

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use('/api', routes)

export default app;