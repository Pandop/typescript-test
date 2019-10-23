import App from './app';
import database from './database';

// create app instance
const app = new App();

// connect db
database.connect();

// start server
app.start();
