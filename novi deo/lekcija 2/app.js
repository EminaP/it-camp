//prompt("unesi neku vrednost");
//a = prompt("unesi broj 5");
//if (a == 5) {
// console.log("uneli ste broj 5");
//}
//a = prompt("unesite vrednost");
//if (a % 2 == 0) {
//  console.log("uneli ste paran broj");
//}
// if (a % 2 == 1) {
///  console.log("uneli ste neparan broj");
// }

//primer 1

//a = prompt("unesite vrednost");
//if (a % 2 == 0) {
// console.log("uneli ste paran broj");
//} else {
// console.log("uneli ste neparan broj");
//}

//primer 2

//broj1 = Number(prompt("unesite vrednost"));
//broj2 = Number(prompt("unesite vrednost"));
//if (broj1 === broj2) {
//  console.log("brojevi su jednaki");
//} else {
//  console.log("brojevi nisu jednaki");
//}

broj1 = Number(prompt("broj1"));
broj2 = Number(prompt("broj2"));
broj3 = Number(prompt("broj3"));

if (broj1 > broj2 && broj1 > broj3) {
  console.log("broj1 je najveci=", broj1);
}
if (broj1 > broj2 && broj2 > broj3) {
  console.log("broj2 drugi po velicini=", broj2);
}
if (broj3 < broj2 && broj3 < broj1) {
  console.log("broj3 je najmanji=", broj3);
}
if (broj2 > broj1 && broj2 > broj3) {
  console.log("broj2 je najveci=", broj2);
}
if (broj2 > broj1 && broj3 > broj2) {
  console.log("broj3 drugi po velicini=", broj3);
}
if (broj1 < broj2 && broj1 < broj3) {
  console.log("broj1 je najmanji=", broj1);
}
