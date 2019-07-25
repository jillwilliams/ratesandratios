const infoExpand1 = ( ) => {
    return ("The relationship between the three values in the triangle is both bottom numbers always multiply to make the top number. <br> Working from top to bottom, the top number divided by one of the bottom numbers, will give you the other bottom number. <br> This rule applies regardless of which bottom number you use in the Math Triangle.");
}
const infoExpand = ( ) => {
    document.getElementById("demo1").innerHTML = infoExpand1( );
};
const infoClose = ( ) => {
    return " ";
}
const infoClose1 = ( ) => {
    document.getElementById("demo1").innerHTML = infoClose( );
};
// Now do 3 practice buttons for story problems
// PROBLEM #1
const firstProblem = ( ) => {
    return "35 minutes";
}
const answer1 = ( ) => {
    document.getElementById("demo2").innerHTML = firstProblem( );
};
// PROBLEM #2
const secondProblem = ( ) => {
    return "105mph";
}
const answer2 = ( ) => {
    document.getElementById("demo3").innerHTML = secondProblem( );
};
// PROBLEM #3
const thirdProblem = ( ) => {
    return "54mph";
}
const answer3 = ( ) => {
    document.getElementById("demo4").innerHTML = thirdProblem( );
};
// PROBLEM #5-8 SOLUTIONS
const practiceAnswers1 = ( ) => {
    return ("#5 = 6 <br> #6 = 4 <br> #7 = 30 <br> #8 = 3");
}
const revealSolutions = ( ) => {
    document.getElementById("demo5").innerHTML = practiceAnswers1( );
};