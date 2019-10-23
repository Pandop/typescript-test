import { Request, Response } from 'express';
export interface IBook {
	GetAll(req: Request, res: Response): Promise<void | Response>;
	Create(req: Request, res: Response): Promise<void | Response>;
	GetById(req: Request, res: Response): Promise<void | Response>;
	Update(req: Request, res: Response): Promise<void | Response>;
	Remove(req: Request, res: Response): Promise<void | Response>;
}
