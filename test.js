/* afdsafjkdslafjdksla;fjdksla;fjdksal;jfkdsl;afjdksl;afjkdsl;afjkdsl;afjkdsal;fjsdkla;f  afdsafjkdslafjdksla;fjdksla;fjdksal;jfkdsl;afjdksl;afjkdsl;afjkdsl;afjkdsal;fjsdkla;f  afdsafjkdslafjdksla;fjdksla;fjdksal;jfkdsl;afjdksl;afjkdsl;afjkdsl;afjkdsal;fjsdkla;f  afdsafjkdslafjdksla;fjdksla;fjdksal;jfkdsl;afjdksl;afjkdsl;afjkdsl;afjkdsal;fjsdkla;f
*/
function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var obj;
    var y = obj.x;
    console.log(y);
}
