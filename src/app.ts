import express,{Application, Request, Response} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

class App {
	private app: Application;
	private PORT = process.env.NODE_ENV||3004
	constructor(){
		this.app = express();
		this.settings();
		this.middlewares();
		this.routes();
		//this.start();
		
	}

	public start():void{
		const port = this.PORT;
		this.app.listen(port,()=>{console.log(`Server running on Port ${port}`)})
				.on("error",(err:Error)=> {console.log(`Oops something went wrong! Erro ${err}`)});
	}
	private routes():void{
		this.app.get("/", (req:Request, res:Response) => { res.send("Hello you all")});
	}

	private middlewares():void{
		this.app.use(morgan('dev'));
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
	private settings():void{
		this.app.set('port',this.PORT);
	}
}

export default App;