alert("helloo !")





var a = new Date();
var b = new Date(prompt("find your age","put your date of birth:")); 
var c  =  a.getTime()-b.getTime();
document.write("your age is" + "  "  + c /(1000*3600*24*365));

