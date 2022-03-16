// //1
// let a=10,b=15;
// if (a==10) console.log("có"); else console.log("khong");
// if (a===10) console.log("có"); else console.log("khong");
// let x=5,y=6;
// if (x!=y) console.log("yes");else console.log("no");
// //2
// //a b=c=10
// //b if (a) => rỗng; if (b) => 'b is truthy'
// //3 a "hello"
// //3 b rỗng
// let a=-1,b=1;
// if (a+b) console.log("true"); else console.log("false");
// let x=Number(prompt("nhap number"));
// if (x%3==0) console.log(x/3);else console.log("number khong chia het cho 3 va du",x%3);
//4
let s='';
s=prompt("phép tính(+,-,*,/)");
let x=Number(prompt("nhập số 1"));
let y=Number(prompt("nhập số 2"));
// if (s=="+") result=x+y; else 
// if (s=="-") result=x-y; else 
// if (s=="*") result=x*y; else 
// if (s=="/") result=x/y;
switch(s)
{
    case "+": {result=x+y; break;}
    case "-": {result=x-y; break;}
    case "*": {result=x*y; break;}
    case "/": {result=x/y; break;}
}
console.log("kết quả:",result);
 

