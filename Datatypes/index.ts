var a:number
a=1200
console.log(a);

var arr:any[]
arr=[1,2,3,4]
console.log(arr);


var b:string
b="swathi"
console.log(b);

var c:boolean
c=true
console.log(c);

var d:any[]
d=[1,2,3,4, 'swathi', true]
console.log(d);

// var e:number  //whenever we give datatype so in value also mached to that data type other wise it will not work will get error
// e='swathi'    //i have give datatype as number but i gave value in string so it will give error
// console.log(e);

//class
//without constructor
console.log('=======Class=======');

class user{
    firstName:string = "testyantra"
    lastName:string
    id:number
    display(){
        console.log("inside the display function");
        
    }
}


var obj = new user();
console.log(obj.display());
console.log(obj.firstName);


//the main purposs of typescript constructor is typescript injection
//class with constructor
console.log('=======Constructor=======');

class person{
    name: string
    id:number
    constructor(name,id){
        this.name = name,
        this.id = id   
    }
}

var p = new person("virat", 21)
console.log(p.name);

//interface
//the main purpose of interface in any programming language is to create scendarization
console.log('=======Interface=======');

interface car{
    brand:string
    price:number
    result():string
}


class honda implements car{
    brand: string
    price: number;
    name: string
    color: string
    result(): string {
        return "abcd"
    }
}

var car1 = new honda()
var x = car1.result()
console.log(x);

var car2: car = {
    brand:"honda",
    price:200000,
    result(){
        return "ab"
    },
}

console.log(car2.result());
console.log(car2.brand);
console.log(car2.price);

console.log('=======enum=======');

enum books{
    book1=10,
    book2,   // if we assign initial value after if we dont assign value to variable automatically it will increment by one
    book3,   // if i return this book3 it will get me output as 12
    book4
}

//if i dont assign any value to the variable name it will start from 0 value and it will increment by one value
//book1,  
//book2,
//book3,
//book4    // if i return book4 it will get me output as 3 
//if i will give string value to the variable name it will get me undefined

function displayBooks(): books{
    if(true){
        return books.book3
    }
}
//in our application if we have a set of constants which we need to use multiple times during the execution then we can group together all the constants inside one enumerated datatype or enum

console.log(displayBooks());

//Generics
console.log('=======Generic=======');

function displayValue<t>(item:t){
    return item
}
console.log(displayValue(254000));
console.log(displayValue("Techno Elavate"));













