import express,{Application, Request, Response} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import './routes';
import {AppRouter} from './routes';


class App {
	private app: Application;
	private PORT = process.env.NODE_ENV||3004

	constructor(){
		this.app = express();
		this.settings();
		this.middlewares();
		this.routes();
		//TODO: add more ...
		
	}

	public start():void{
		const port = this.PORT;
		this.app.listen(port,()=>{console.log(`Server running on Port ${port}`)})
				.on("error",(err:Error)=> {console.log(`Oops something went wrong! Erro ${err}`)});
	}
	private routes():void{
		//const indexRouter = new indexRoutes();
		this.app.use(AppRouter.getInstance());
	}

	private middlewares():void{
		this.app.use(morgan('dev'));
		this.app.use(bodyParser.urlencoded({ extended: true }));
	}
	private settings():void{
		this.app.set('port',this.PORT);
	}
}

export default App;

// import './routes';
// import {AppRouter} from './routes';

// import express, { Application, Response, Request } from 'express'
// import bodyParser from 'body-parser';
// //import cookieSession from 'cookie-session';
// import morgan from 'morgan';
// const app = express();

// // Middlewares
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// //app.use(cookieSession({ keys: ['laskdjf'] }));
// app.use(AppRouter.getInstance());

// // Run server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
// // 	.on("error", (error: Error) => console.log("Something went wrong! Error:", error))

// export default app;