import mongoose from 'mongoose';

class DB {
	public static connect(){
		mongoose.connect("mongodb://localhost/express-app-tutorial",
			{
				useUnifiedTopology: true ,
				useNewUrlParser: true
			})
			.then(value=> {console.log("db connected successfuly: ", value)})
			.catch((err:Error)=>{console.log("Something went wrong! Error:", err.message)});
   }
}
 export default DB;