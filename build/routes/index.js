"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = require("express");
var BookService_1 = tslib_1.__importDefault(require("../services/BookService"));
var Routes = (function () {
    function Routes() {
        this._book = new BookService_1.default();
        this._router = express_1.Router();
    }
    Object.defineProperty(Routes.prototype, "Router", {
        get: function () {
            return this.BookRoutes();
        },
        enumerable: true,
        configurable: true
    });
    Routes.prototype.BookRoutes = function () {
        this._router.route('/')
            .get(this._book.GetAll)
            .post(this._book.Create);
        this._router.route('/:id')
            .get(this._book.GetById)
            .delete(this._book.Remove);
        this._router.route('/:id/edit')
            .put(this._book.Update);
        return this._router;
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFpQztBQUNqQyxnRkFBc0Q7QUFNdEQ7SUFLQztRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQkFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBTSxFQUFFLENBQUM7SUFFekIsQ0FBQztJQUdELHNCQUFXLDBCQUFNO2FBQWpCO1lBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTywyQkFBVSxHQUFsQjtRQUdDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc1QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSx3QkFBTSJ9