import { Router, Request, Response } from 'express';
import BooksController from '../controllers/booksController';
//
// const router = Router();

// router.get("/", (req: Request, res: Response) => { res.send("Hello you all") });

export class Routes {

	private readonly _router: Router;
	private readonly _book: BooksController;

	constructor() {
		this._book = new BooksController();
		this._router = Router();
		//this.BookRoutes();
	}

	///Routes Getter
	public get Router() {
		return this.BookRoutes();	//return this._router;
	}

	private BookRoutes(): Router {
		//GET/
		this._router.route('/')
			.get(this._book.GetAll)
			.post(this._book.Create);

		// GET /:id =>Getting, Updating and Deleting individual Items
		this._router.route('/:id')
			.get(this._book.GetById)
			.delete(this._book.Remove);

		//PUT /:id/edit => updating Item
		this._router.route('/:id/edit')
			.put(this._book.Update);

		return this._router;
	}
}

//export default Routes;