import {Router, Request, Response} from 'express';

//
const router = Router();

router.get("/",(req: Request, res:Response)=>{ res.send("Hello you all")});

// class HomeRoutes{
// 	public router = Router();

// 	constructor(){
// 		this.routes();
// 	}
// 	public routes():void{		
// 		this.router.get("/",(req: Request, res:Response)=>{ res.send("Hello you all")});
// 	}



	
// }

export default router;