"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var morgan_1 = tslib_1.__importDefault(require("morgan"));
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var routes_1 = require("./routes");
var mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var config_json_1 = tslib_1.__importDefault(require("./config/config.json"));
var App = (function () {
    function App() {
        this.route = new routes_1.Routes();
        this._dbURI = config_json_1.default.DbUri;
        this._port = process.env.NODE_ENV || 3004;
        this.app = express_1.default();
        this.Settings();
        this.Middlewares();
        this.Route();
        this.DbConnect();
    }
    App.prototype.Start = function () {
        var _this = this;
        this.app.listen(this._port, function () { return console.log("Server started on Port " + _this._port); })
            .on("error", function (err) { return console.log("Oops! Error: " + err); });
    };
    App.prototype.Route = function () {
        this.app.use(this.route.Router);
    };
    App.prototype.Middlewares = function () {
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.Settings = function () {
        this.app.set('port', this._port);
    };
    App.prototype.DbConnect = function () {
        mongoose_1.default
            .connect(this._dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
            .then(function () { return console.log("db connected!"); })
            .catch(function (err) { return console.log("Oops! Error(:|)", err.message); });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBa0U7QUFDbEUsMERBQTRCO0FBQzVCLG9FQUFxQztBQUVyQyxtQ0FBa0M7QUFDbEMsOERBQWdDO0FBQ2hDLDZFQUEwQztBQUcxQztJQU1DO1FBSlEsVUFBSyxHQUFXLElBQUksZUFBTSxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFHLHFCQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLFVBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUE7UUFHcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVNLG1CQUFLLEdBQVo7UUFBQSxpQkFHQztRQUZBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLEtBQUksQ0FBQyxLQUFPLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQzthQUNwRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBVSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsR0FBSyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ08sbUJBQUssR0FBYjtRQUVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHlCQUFXLEdBQW5CO1FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ08sc0JBQVEsR0FBaEI7UUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTyx1QkFBUyxHQUFqQjtRQUNDLGtCQUFRO2FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3pFLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQzthQUN4QyxLQUFLLENBQUMsVUFBQyxHQUFVLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRixVQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQUdELGtCQUFlLEdBQUcsQ0FBQyJ9