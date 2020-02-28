import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.send('Hello');
});

app.listen(5000, () => console.log('Listining on port 5000...'))