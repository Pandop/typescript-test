import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import { Routes } from './routes';
import mongoose from 'mongoose';
import config from "./config/config.json";


class App {
	private app: Application;
	private route: Routes = new Routes();
	private readonly _dbURI = config.DbUri;
	private readonly _port = process.env.NODE_ENV || 3004

	constructor() {
		this.app = express();
		this.Settings();
		this.Middlewares();
		this.Route();
		this.DbConnect();
		// TODO: add more ...
	}

	public Start(): void {
		this.app.listen(this._port, () => console.log(`Server started on Port ${this._port}`))
			.on("error", (err: Error) => console.log(`Oops! Error: ${err}`));
	}
	private Route(): void {
		//const indexRouter = new indexRoutes();
		this.app.use(this.route.Router);
	}

	private Middlewares(): void {
		this.app.use(morgan('dev'));
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
	private Settings(): void {
		this.app.set('port', this._port);
	}
	private DbConnect(): void {
		mongoose
			.connect(this._dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
			.then(() => console.log("db connected!"))
			.catch((err: Error) => console.log("Oops! Error(:|)", err.message));
	}
}

// export app
export default App;