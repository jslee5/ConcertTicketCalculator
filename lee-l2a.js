function main() {
    // T1:Adults 0, child 2 subtotal = 51, tax 3.57 and total cost 54.57
    // T2: Adults 2, child 0. Subtotal = 73.50, tax 5.145 total cost 78.645
    // T3: adults 2 , child 2. Subtotal = 124.5. Tax =8.715 , total cost = 133.215
    var tAX, aDULTcost, cHILDcost;
    
    tAX = 0.07;
    aDULTcost = 36.75;
    cHILDcost = 25.50;
    var name;
    var phone, numAdult, numChild;
    var subtotal, salesTax, totalCost;
    
    window.alert("This program calculates concert tickets total cost");
    window.alert("JLee Presents Programming Live!");
    window.alert("Enter Name");
    name = window.prompt('Enter a value for name');
    window.alert("Phone Number");
    phone = window.prompt('Enter a value for phone');
    window.alert("Adult Tickets Needed");
    numAdult = window.prompt('Enter a value for numAdult');
    window.alert("Child Tickets Needed");
    numChild = window.prompt('Enter a value for numChild');
    subtotal = numAdult * aDULTcost + (numChild + cHILDcost);
    salesTax = subtotal * tAX;
    totalCost = subtotal + salesTax;
    window.alert("JLee Presents Programming Live!");
    window.alert("Thank you " + name + " at " + phone + ". Details of your total cost " + totalCost + " can be found below:");
    window.alert("Adult Tickets:" + numAdult);
    window.alert("Child Tickets:" + numChild);
    window.alert("Subtotal is: $ " + subtotal + ", Tax is: $" + salesTax + " for a total cost of: $ " + totalCost);
    window.alert("Thank you for using this program.  This program was designed by Lee");
}
