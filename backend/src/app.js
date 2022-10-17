import express from 'express';
import config from './config';

import customersRoutes from './routes/customers.routes';
import ticketsRoutes from './routes/tickets.routes';

const app = express();


// settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({  extended: false  }));
 
app.use(customersRoutes);
app.use(ticketsRoutes);

export default app

