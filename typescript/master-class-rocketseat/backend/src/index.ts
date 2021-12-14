import express from 'express';
import routes from './routes';

const app = express();

const userName = 'raphael';

app.use(routes);


app.listen(3000);
