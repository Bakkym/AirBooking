import express from 'express';
import config from './config';
import cors from 'cors'

import customersRoutes from './routes/customers.routes';
import ticketsRoutes from './routes/tickets.routes';
import seatsRoutes from './routes/seats.routes'
import detailsRoutes from './routes/details.routes';

const app = express();


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/customers',cors(corsOptions),customersRoutes);
app.use(cors(corsOptions),ticketsRoutes);
app.use(cors(corsOptions),seatsRoutes);
app.use(cors(corsOptions),detailsRoutes)

export default app