//// [numLit.ts]
1..toString();
1.0.toString();
1.toString(); // error: Numeric literal '1.' cannot be followed by an expression.
1.+2.0 + 3. ;

// Preserve whitespace where important for JS compatibility
var i: number = 1;
var test1 = i.toString();  
var test2 = 2.toString(); // error: Numeric literal '2.' cannot be followed by an expression.
var test3 = 3 .toString(); // preserve whitepace
var test4 = 3.['toString']();
var test5 = 3
.toString(); // preserve whitepace
var test6 = new Number(4).toString();
var test7 = 3. + 3.

//// [numLit.js]
1..toString();
1.0.toString();
1.toString(); // error: Numeric literal '1.' cannot be followed by an expression.
1. + 2.0 + 3.;
// Preserve whitespace where important for JS compatibility
var i = 1;
var test1 = i.toString();
var test2 = 2.toString(); // error: Numeric literal '2.' cannot be followed by an expression.
var test3 = 3 .toString(); // preserve whitepace
var test4 = 3.['toString']();
var test5 = 3
    .toString(); // preserve whitepace
var test6 = new Number(4).toString();
var test7 = 3. + 3.;
