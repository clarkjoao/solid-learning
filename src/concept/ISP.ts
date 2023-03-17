// Interface Segregation Principle

/*Imagine you are creating an application to manage user accounts. 
You have an interface called "Account" that defines methods such as "deposit", "withdraw" and "check balance".

However, you also need to create a special account for companies, which has the additional capability 
of transferring money to other accounts. 
If you include this "transfer" method in the "Account" interface, this means that all accounts, 
including personal accounts, would need to have this method, even though it does not apply to them.

This is where the Interface Segregation Principle comes in. 
Instead of including the "transfer" method in the "Account" interface, 
you can create a new interface called "Business Account" that extends the "Account" interface and adds 
this method. 
This way, only business accounts need to implement this method, and not all accounts.
*/

// Account interface
interface Account {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  checkBalance(): number;
}

// Business Account interface
interface BusinessAccount extends Account {
  transfer(amount: number, destinationAccount: Account): void;
}

// Personal Account implementation
class PersonalAccount implements Account {
  balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }

  checkBalance(): number {
    return this.balance;
  }
}

// Business Account implementation
class BusinessAccount implements BusinessAccount {
  balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }

  checkBalance(): number {
    return this.balance;
  }

  transfer(amount: number, destinationAccount: Account): void {
    this.withdraw(amount);
    destinationAccount.deposit(amount);
  }
}
