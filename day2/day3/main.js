// answer1
let firstName = "Praise"
let LastName ="Daniel"
let country="Nigeria" 
let age=17
let isMarried=true
let year=2025

console.log(typeof(firstName));
console.log(typeof(LastName));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// answer  2
let number="10"
let num = 10     
console.log(num===number)

let float = '9.8'
let check = 10
console.log( float === check);

// answer 3
let truthValue = "i am a boy"
let otherValue =   truthValue
console.log(truthValue == otherValue);

let value = 4 > 3  
console.log(value);

let cd= 2+3
let d = (cd>1 ? true : false)
console.log(d);


// ii

let xy = 3/ 10;
let yx = (xy>7 ? true : false )
console.log(yx);

let dx= 2+3
let dy = (dx<1 ? true : false)
console.log(dy);

let y = 7
let w= "am 10 years old"
console.log(y==w);

// ansewr4
console.log(4>3);   // true
console.log(4>=3); //true
console.log(4<3);   // false
console.log(4<=3);  //false
console.log(4==4);  //true
console.log(4===4) //true
console.log(4!=4)      //false
console.log(4 !== 4 )   //false
 console.log(4 != '4'  )  //false
console.log(4 == '4'   ) //true
console.log(4 != '4'  )   //false



// answer5
let lent= "python"
let jar="jargon"
console.log(lent.length);
console.log(jar.length);
let falsy = jar> lent
console.log(falsy);

// answer6
console.log(4 > 3 && 10 < 12);  //  true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //  true
console.log(4 > 3 || 10 > 12);  //true
console.log(!(4 > 3));              //false
console.log(!(4 < 3));              //true
console.log(!(false));          //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));  //true
let on= "jagons, Python"
console.log(on.includes("on"));

// anwer7
const now = new Date()
console.log(now.getFullYear()) 
console.log(now. getMonth());
console.log(now);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

// level2   
// answer1
// to calculate area of traiangle
let base =+prompt("Enter value for base");
let height =+prompt("Enter value for height");
let Area= 5.0* base*height;
console.log( `area of Triangle is ${Area}`);

// // to  the perimeter  answer2

let a = +prompt("Enter Value for a");
let b = +prompt("Enter Value for b");
let c = +prompt("Enter Value for c");
let perimeter= a+ b+ c
console.log( `perimeter of Triangle is ${perimeter}`);

// // area of rectangle answer3
let length = +prompt("Enter Value for length");
let width =+prompt("Enter Value for width");
let area = length*width
let perimeterOfrec = 2 * (length + width);
console.log( `area of rectangle is ${area} and perimeter of rectangle is ${perimeterOfrec}`);

// calculate the area of a circle answer4

const pi =3.14
let radius = +prompt("Enter Value for radius");
let areaOfcircle = pi * radius * radius
console.log(areaOfcircle);
let circumferenceOfcircle = 2  * pi * radius
 console.log(circumferenceOfcircle);
// console.log(`the area of the circle is ${areaOfcircle} the circumference is ${circumferenceOfcircle}`)



// answer 9
let hour = +prompt("Enter Value for hour");
let ratePerhour = +prompt("Enter Value for rate per hour");
let pay = hour  *  ratePerhour;
console.log(`pay of the person is ${pay}`);

// anwer 10
let Myname="Praise"
let Valuelength = (Myname.length)
console.log(Myname.length);
let nameLength = (Valuelength>=7? "the name is long" : "the name is short"  )
console.log(nameLength);

// answer11
let myfstname= "Praise"
let familyname = "Duwo"
let myfstnameLength= (myfstname.length)
let familynamelenth= (myfstname.length)
let  bothlength=(myfstnameLength = familynamelenth?"my firstname Aishatbola is longer than Ojibara" : "no    ")
console.log(bothlength);

// answer12
let myAge =60
let yourAge= 20
let valueAge= (myAge>yourAge? ` i am ${myAge} years older than you` : "no")
console.log(valueAge);

// answer 13

let userAge = +(prompt("what is your age"));
if (userAge > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${userAge}, you will be allowed to drive after ${18 - userAge} years`)
}
// answer14
let secondsInseconds = 60;
let secondsInHour = secondsInseconds * 60;
let secondsInDay = secondsInHour * 24;
let secondsInYear = secondsInDay * 365;
let yearsLive = Number(prompt("how many years have you live?"));
let secondsOld = yearsLive * secondsInYear;
console.log(`you are ${secondsOld} seconds olds`)