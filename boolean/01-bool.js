var a = false;
var b = false;

// ==========

// or
//if (a || b)  {
// console.log ("Mietzekatze");
//}

// and
//if (a && b)  {
//    console.log ("Mietzekatze");
//}

// not
//if (!a)  {
//    console.log ("Mietzekatze");
//}

// neither
if (!a && !b)  {
    console.log ("Mietzekatze");
}

if (!(a || b))  {
    console.log ("Mietzekatze");
}

 //   a         b          a || b     !a && !b     !(a || b)        
 //   false     false      false      true         true
 //   true      false      true       false        false
 //   false     true       true       false        false
 //   true      true       true       false        false