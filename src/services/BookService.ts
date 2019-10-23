import { Request, Response } from 'express';
import { IBook } from './IBookServices';

export class BooksController implements IBook {
	public async GetAll(req: Request, res: Response) {
		await res.status(200).json([{ message: "Hellow from GET '/'" }]);
	}

	public async Create(req: Request, res: Response) {
		await res.status(200).json({ message: "Hellow from POST '/'" });
	}

	public async GetById(req: Request, res: Response) {
		const id: string = req.params.id;
		await res.status(200).json({ id: id, message: `Hellow from GET '/${id}'` });
	}

	public async Update(req: Request, res: Response) {
		const id: string = req.params.id;
		await res.status(200).json({ id: id, message: `Hellow from Update '/${id}'` });
	}

	public async Remove(req: Request, res: Response) {
		const id: string = req.params.id;
		await res.status(200).json({ id: id, message: `Hellow from DELETE '/${id}'` });
	}
}

//Export the controller
export default BooksController;