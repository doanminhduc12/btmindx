//B1
var s=prompt("Đăng nhập");
var kt=1;
if (s=="Admin") {var pass=prompt("Nhập mật khẩu");} else 
  if (s=="") console.log("Canceled"); else
    {console.log("Tôi không biết bạn");kt=0;}
if (kt==1)
{ if (pass=="mindX") console.log("Chào mừng!"); else  
    if (pass=="") console.log("Đã huỷ"); else 
       if (pass!="") console.log("Mật khẩu sai");}
//B2
function min(a,b){
    if (a>b) return b;else return a;
}