function main() {
    // T1:Adults 0, child 2 subtotal = 51, tax 3.57 and total cost 54.57
    // T2: Adults 2, child 0. Subtotal = 73.50, tax 5.145 total cost 78.645
    // T3: adults 2 , child 2. Subtotal = 124.5. Tax =8.715 , total cost = 133.215
    var tAX, aDULTcost, cHILDcost;
    
    tAX = 0.07;
    aDULTcost = 36.75;
    cHILDcost = 25.50;
    
    // Introductory message with concert title
    welcome();
    concertDetails(tAX, aDULTcost, cHILDcost);
    
    // End of program message
    finish();
}

function calcCost(tAX, aDULTcost, cHILDcost, adultTickets, childTickets, name, phone) {
    var subTotal, salesTax, totalCost;
    
    subTotal = adultTickets * aDULTcost + childTickets * cHILDcost;
    salesTax = subTotal * tAX;
    totalCost = subTotal + salesTax;
    createReport(adultTickets, childTickets, name, phone, subTotal, salesTax, totalCost);
}

function concertDetails(tAX, aDULTcost, cHILDcost) {
    var adultTickets, childTickets;
    var name;
    var phone;
    
    window.alert("Adult Tickets Needed");
    adultTickets = window.prompt('Enter a value for adultTickets');
    window.alert("Child Tickets Needed");
    childTickets = window.prompt('Enter a value for childTickets');
    window.alert("Enter your name");
    name = window.prompt('Enter a value for name');
    window.alert("Enter your Phone Number");
    phone = window.prompt('Enter a value for phone');
    calcCost(tAX, aDULTcost, cHILDcost, adultTickets, childTickets, name, phone);
}

function createReport(adultTickets, childTickets, name, phone, subTotal, salesTax, totalCost) {
    window.alert("J Cole presents Dreamville Festival 2022");
    window.alert("Thank you " + name + " at " + phone + ". Details of your total cost " + totalCost + " can be found below:");
    window.alert("Adult Tickets: " + adultTickets);
    window.alert("Child Tickets: " + childTickets);
    window.alert("Subtotal is: $ " + subTotal + ", Tax is: $" + salesTax + " for a total cost of: $ " + totalCost);
}

function finish() {
    window.alert("Thank you for using this program.  This program was designed by Lee");
}

function welcome() {
    window.alert("This program calculates total cost of concert tickets");
    window.alert("J Cole presents Dreamville Festival 2022");
}
