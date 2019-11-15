"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BooksController = (function () {
    function BooksController() {
    }
    BooksController.prototype.GetAll = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, res.status(200).json([{ message: "Hellow from GET '/'" }])];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    BooksController.prototype.Create = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, res.status(200).json({ message: "Hellow from POST '/'" })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    BooksController.prototype.GetById = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4, res.status(200).json({ id: id, message: "Hellow from GET '/" + id + "'" })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    BooksController.prototype.Update = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4, res.status(200).json({ id: id, message: "Hellow from Update '/" + id + "'" })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    BooksController.prototype.Remove = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4, res.status(200).json({ id: id, message: "Hellow from DELETE '/" + id + "'" })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return BooksController;
}());
exports.BooksController = BooksController;
exports.default = BooksController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvQm9va1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFBQTtJQXVCQSxDQUFDO0lBdEJhLGdDQUFNLEdBQW5CLFVBQW9CLEdBQVksRUFBRSxHQUFhOzs7OzRCQUM5QyxXQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEVBQUE7O3dCQUFoRSxTQUFnRSxDQUFDOzs7OztLQUNqRTtJQUVZLGdDQUFNLEdBQW5CLFVBQW9CLEdBQVksRUFBRSxHQUFhOzs7OzRCQUM5QyxXQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLENBQUMsRUFBQTs7d0JBQS9ELFNBQStELENBQUM7Ozs7O0tBQ2hFO0lBRVksaUNBQU8sR0FBcEIsVUFBcUIsR0FBWSxFQUFFLEdBQWE7Ozs7Ozt3QkFDekMsRUFBRSxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUNqQyxXQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsdUJBQXFCLEVBQUUsTUFBRyxFQUFFLENBQUMsRUFBQTs7d0JBQTNFLFNBQTJFLENBQUM7Ozs7O0tBQzVFO0lBRVksZ0NBQU0sR0FBbkIsVUFBb0IsR0FBWSxFQUFFLEdBQWE7Ozs7Ozt3QkFDeEMsRUFBRSxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUNqQyxXQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsMEJBQXdCLEVBQUUsTUFBRyxFQUFFLENBQUMsRUFBQTs7d0JBQTlFLFNBQThFLENBQUM7Ozs7O0tBQy9FO0lBRVksZ0NBQU0sR0FBbkIsVUFBb0IsR0FBWSxFQUFFLEdBQWE7Ozs7Ozt3QkFDeEMsRUFBRSxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUNqQyxXQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsMEJBQXdCLEVBQUUsTUFBRyxFQUFFLENBQUMsRUFBQTs7d0JBQTlFLFNBQThFLENBQUM7Ozs7O0tBQy9FO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLDBDQUFlO0FBMEI1QixrQkFBZSxlQUFlLENBQUMifQ==