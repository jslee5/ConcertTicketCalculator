# T1: Balance 100 Overdrafts: 2 Output Expected for fee: 5
# 
# T2: Balance 100 Overdrafts: 0 Output Expected for fee: 1
# 
# T3: Balance 345 Overdrafts: 2 Output Expected for fee: 7.45
# 
# T4: Balance 345 Overdrafts: 0 Expected output for fee:3.45
# 
# T5: Balance 350.90 Overdrafts: 2 Expected outputs for fee: 7.509
# 
# T6: Balance 350.90 Overdrafts: 0 Expected output for fee: 3.509
mINfee = 0.01
oVERpenalty = 2.00
print("This program calculates the monthly checking account fees charged by the institution")
print("Welcome to Wake Tech Financial")
print("Enter Account Balance")
userBalance = float(input())
print("Enter Number of Overdrafts")
userOverdrafts = int(input())
totalMinfee = userBalance * mINfee
totalOverfee = userOverdrafts * oVERpenalty
totalFee = totalMinfee + totalOverfee
print("Your total fees for account came to $" + str(totalFee))
print("Thank you for using Wake Tech Financial Services. This program was designed by Lee")
