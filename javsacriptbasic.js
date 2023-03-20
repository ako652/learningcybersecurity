//operators//
console.log(2+4)
console.log(18-9)
console.log(0/0)
//string//
console.log("stephanie are you studying or feeling bored")
console.log("melanie" + "stephanie")
console.log("stephanie".toUpperCase())
console.log("stephanie".toLowerCase())

let hello = "hello world"


if (hello) {
    console.log(hello)
}
let myarr= [1,"2", {id:2}, [4,5]]
console.log(myarr[0])
console.log(myarr[2].id)
const x = "surname"

const turto = {
name: "john",
[x] :"ako",
skills: ["js","html","css", "ux"],
area : {
    location:"fvg",
    country :"italy",
    street : "something"


}

}
const objectkeys=Object.keys(turto)
console.log(turto[objectkeys[2]])
console.log(Object.values(turto))

const car={
brand:"ford",
color: "silver",
year:"2019",
}
const car2 =Object.assign(car)
console.log(car2.brand)
car2.origin="toyota"
console.log(car2)

function myadd(a,b){
    
    if (a==b) {
       
        return (a+b )*3
    } else {
        return a + b
    }
}
console.log(myadd(3,3))

function myfunc (a,b){
    if (a==50||b==50||a+b==50){
        return true

    }else {
        return false
    }
}
console.log(myfunc(20,30))

function mystring(str,pos){
   return  str.slice(0,pos) + str.slice(pos + 1)
}
console.log(mystring("strive",3))

function highestval(...arg){
    const sorted = arg.sort((a,b)=>b-a)
    return sorted[0]
}
console.log(highestval(5,6,9))
function myrange(a,b){
    if (a >= 40 && a <=60 && b >=40 && b <=60) {
        return true 
    } else if (a >=70 && a <=100 && b >=70 && b <=100) {
        return true

    }else
    return false

    
}
console.log(myrange(20,10))

function stringcopies(str,n){
    let copies="";
    for (let i=0;i<n; i++){
        copies+=str + "\n";
        

    }
    return copies
    
}
console.log(stringcopies("strive",4))
function cityname(str) {
    if (str.cityname("los")|| str.cityname ("new")){
        return str

    }else{
        return false
    }
}

function arrgof(...arg){
    let newsum=0
for (let i=0; i=arg.length; i++ ){
     newsum+= arg[i]
     console.log(newsum)
}
return newsum
}
console.log(arrgof(2,3,9))