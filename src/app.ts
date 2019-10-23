import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import { Routes } from './routes';
import mongoose from 'mongoose';
//import DbConnUri from "../config.json";


class App {
	private app: Application;
	private route: Routes = new Routes();
	private PORT = process.env.NODE_ENV || 3004

	constructor() {
		this.app = express();
		this.Settings();
		this.Middlewares();
		this.Route();
		this.DbConnect();
		//TODO: add more ...

	}

	public Start(): void {
		const port = this.PORT;
		this.app.listen(port, () => console.log(`Server running on Port ${port}`))
			.on("error", (err: Error) => console.log(`Oops something went wrong! Erro ${err}`));
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
		this.app.set('port', this.PORT);
	}
	private DbConnect(): void {
		mongoose
			.connect("mongodb://localhost/express-app-tutorial", { useUnifiedTopology: true, useNewUrlParser: true })
			.then(() => console.log("db connected!"))
			.catch((err: Error) => console.log("Something went wrong! Error:", err.message));
	}
}

export default App;