import "reflect-metadata";
// Method decorators
// Class decorators
// Accessor Decorators

//@controller
class MySingleton{

	private static instance: MySingleton;

	@enumerable(true)
	@runMeFirst
	public static MyStance() {
		if (!MySingleton.instance) {
			MySingleton.instance = new MySingleton();
		}

		return MySingleton.instance;
	}
}

// Decorators definitions
function runMeFirst(target: any, key: string, desc: PropertyDescriptor){
	console.log("Target: ",target);
	console.log("Keys: ",key);
    console.log("Desc: ",desc);
    
   // return ()=> target;
}

// Class decorators
function controller<T extends {new(...args:any[]):{}}>(constructor:T) {
	return class extends constructor {
		newProperty = "new property";
		hello = "override";
	}
}

// Method decorators
function enumerable(value: boolean) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		descriptor.enumerable = value;
		console.log("Desc: ",descriptor.enumerable);
	};
}
//console.log(MySingleton.MyStance())

class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

const point = new Point(7, 21);
console.log("Point", point.x)


function getProperty<T, K extends keyof T>(obj: T, key: K) { //
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
const a = getProperty<Object, keyof Object>(x, "constructor"); // okay

console.log("a: ", a)

function create<T>(c: {new(): T; }): T {
    return new c();
}
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Tag";
}

class Animal {
    numLegs: number=12;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

const lion =create(Lion).keeper.nametag;  // typechecks!
const bee = createInstance(Bee).keeper.hasMask;



@controller('/')
class Animal{
    @logParameter
    public leg: number=4;

    @LogMethod
     public walk(@logParameters name: string) {
        return "Walking now" + " " + name;
     }

    @LogMethod
    public run(@logParameters name: string) {
        //console.log("running now");
        return "running now" + " " + name;
    }
}

// Class
function controller(url: string) {
    return (target: typeof Animal) => {
        //console.log("Target: ", target);
        // for (const key in target.prototype) {
        //     console.log("Key: ", key);
        //     target.prototype.run();
        // }
        return target;
    }
}

// Method
function LogMethod(target: Animal, key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor  {
    const method = descriptor.value;
     descriptor.value = function (...args: any[]) {

        // convert list of greet arguments to string
        const params = args.map(a => JSON.stringify(a)).join();

        // invoke greet() and get its return value
        const result = method.apply(this, args);

        // convert result to string
        const r = JSON.stringify(result);

        // display in console the function call details
        console.log(`Call: ${descriptor}(${params}) => ${r}`);

        // return the result of invoking the method
        return result;
    }
    return descriptor;

    // console.log("target:",target);
    // console.log("propertyKey:", key);
    // console.log("descriptor:", descriptor);
    // const d = Object.getOwnPropertyDescriptor(target, key);
    // console.log("getOwnPropertyDescriptor:", d);
    // const method = descriptor.value;
    // console.log("method:", method);

}

//Property Decorator
function logParameter(target: any, propertyName: string) { 
     // property value
    let _val = target[propertyName]||{};

    // property getter method
    const getter = () => {
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };

    // property setter method
    const setter = (newVal: string) => {
        console.log(`Set: ${propertyName} => ${newVal}`);
        _val = newVal;
    };

    // Delete property.
    if (delete target[propertyName]) {

        // Create new property with getter and setter
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

function logParameters(target: any, propertyName: string, index: number) {

    // generate metadatakey for the respective method
    // to hold the position of the decorated parameters
    const metadataKey = `log_${propertyName}_parameters`;

    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
    console.log("target", target);
}

const demo = new Animal();
demo.leg=6
console.log(demo.leg);
demo.walk("James B");

