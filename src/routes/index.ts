import {Router, Request, Response,RequestHandler,NextFunction} from 'express';

//
// const router = Router();

//router.get("/",(req: Request, res:Response)=>{ res.send("Hello you all")});



function bodyValidator(keys: string[]): RequestHandler {
	// middleware to check keys are present
	return (req: Request, res: Response, next: NextFunction) => {
		// body is not contained in request
		if (!req.body) {
			return res.status(422).send(`Invalid request`);
		}

		// keys do not exist in request body
		for (let k of keys) {
			if (!req.body[k]) {
				return res.status(422).send(`
					<div style="max-width:30rem; background: #fefefe; margin: 2rem auto; padding: 2rem; border: 1px solid #e74c3c; text-align: center; ">
						<h5 style="color: red;" >Missing Property ${k}</h5>		
						<div style="">
							<a href="/auth/login">Login</a>
						</div>			
					</div>
				`);
			}
		}
		// Keys exist, run next middleware
		next();
	}
}

export enum MetadataKeys {
	PATH = 'path',
	METHOD = 'method',
	MIDDLEWARE = 'middleware',
	VALIDATOR = "validator"
}
export enum MethodType {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	PATCH = 'patch',
	REMOVE = 'delete'
}

function validators(...keys: string[]){
	return (target: any, key: string|symbol, desc: PropertyDescriptor)=>{
		Reflect.defineProperty(target, MetadataKeys.VALIDATOR, {value: keys});
	}
}

interface IRouteHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler
}

function routerBinder(method: string) {
	return (path: string) => {
		
		return (target: any, key: string|symbol, desc: IRouteHandlerDescriptor) => {
			Reflect.defineProperty( target, MetadataKeys.PATH, {value: path});

			console.log("routerBinder", MetadataKeys.METHOD, method)
			Reflect.defineProperty( target, MetadataKeys.METHOD, {value: method}); // 
		};
	}
}
export const get = routerBinder(MethodType.GET);
export const post = routerBinder(MethodType.POST);
export const put = routerBinder(MethodType.PUT);
export const patch = routerBinder(MethodType.PATCH);
export const remove = routerBinder(MethodType.REMOVE);


export class AppRouter {

	private static instance: Router;

	public static getInstance(): Router {
		if (!AppRouter.instance) {
			AppRouter.instance = Router();
		}
		return AppRouter.instance;
	}
}

function controller(routePrefix:string) : ClassDecorator{
	return (target: Function) => {

		const router = AppRouter.getInstance();

		for (let key in target.prototype) {

			const routeHandler = target.prototype[key];

			const path: string = Reflect.get(target.prototype, MetadataKeys.PATH);

			const method:MethodType = Reflect.get(target.prototype, MetadataKeys.METHOD);

			const requiredBodyProps = Reflect.get(target.prototype, MetadataKeys.VALIDATOR) || [];

			const validator = bodyValidator(requiredBodyProps);

			console.log("Path::::=>", path);
			console.log("method::::=>", method);
			console.log("requiredBodyProps::::=>", validator);
			
			if(path){

				console.log("`${routePrefix}${path}`::::=>", `${routePrefix}${path}`, router[method]);

				router[method](`${routePrefix}${path}`, validator, routeHandler);
			}
		}

	}
}

// function get(path: string){
// 	return (target: any, key: string|symbol, desc: PropertyDescriptor)=>{
// 		Reflect.defineProperty(target, "path", {value: path});
// 	}
// }

// function post(method: string){
// 	return (target: any, key: string|symbol, desc: PropertyDescriptor)=>{
// 		Reflect.defineProperty(target, MetadataKeys.METHOD, {value: method});
// 	}
// }

@controller('/auth')
class HomeRoutes{
	@get('/login')
	public getLogin(req: Request, res: Response): void {
		res.status(200).send(`
			<div style="max-width:50rem; background: #fefefe; margin: 2rem auto; padding: 2rem; border: 1px solid dodgerBlue; ">
				<form method="POST">
					<div style="width: 100%;">
						<label style="display: block">Email</label>
						<input name="email" type="email" style="width: 100%; margin-bottom: .5rem; padding: 10px"/>
					</div>
					<div>
						<label style="display: block">Password</label>
						<input name="password" type="password" style="width: 100%; margin-bottom: .5rem; padding: 10px"/>
					</div>
					<button style="background: blue; padding: 10px 20px; border: none; color: #efefef">Submit</button>
				</form>
			</div>
			
		`);
	};

	@post('/login')
	@validators("email", "password")
	public postLogin(req: Request, res: Response): void {
		const { email, password } = req.body;
		console.log("Email>:", email, "Password>:", password);
		if (email === 'hi@hi.com' && password === 'pass') {
			//req.session = { loggedIn: true };
			res.redirect('/');
			return;
		}
		res.send('Invalid email or password');
	};

}

//export default new HomeRoutes().router;
import { Router } from 'express';
import BooksController from '../services/BookService';
//
// const router = Router();

// router.get("/", (req: Request, res: Response) => { res.send("Hello you all") });

export class Routes {

	private readonly _router: Router;
	private readonly _book: BooksController;

	constructor() {
		this._book = new BooksController();
		this._router = Router();
		// this.BookRoutes();
	}

	/// Routes Getter
	public get Router() {
		return this.BookRoutes();	// return this._router;
	}

	private BookRoutes(): Router {

		// Route for POST & GET
		this._router.route('/')
			.get(this._book.GetAll)
			.post(this._book.Create);

		// GET /:id =>Getting, Updating and Deleting individual Items
		this._router.route('/:id')
			.get(this._book.GetById)
			.delete(this._book.Remove);

		// PUT /:id/edit => updating Item
		this._router.route('/:id/edit')
			.put(this._book.Update);

		return this._router;
	}
}

// export default Routes;
