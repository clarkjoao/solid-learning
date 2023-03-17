// Dependency Inversion Principle

/*
Imagine you have a class "DataAccess" that is responsible for accessing and manipulating data in a database. 
Another class "UserService" needs to use this data access class to perform operations on user data.

A common mistake would be for the "UserService" class to directly access the "DataAccess" class. 
This creates a tight coupling between the two classes and makes it difficult to change the implementation 
of the data access layer in the future.

Instead, the Dependency Inversion Principle states that high-level modules should not depend on low-level modules,
 but rather both should depend on abstractions.

To apply this principle, you can create an interface "DataAccessLayer" that defines the methods for accessing 
and manipulating data. Both the "DataAccess" and "UserService" classes will depend on this interface, not on each other.
*/

// Data Access Layer interface
interface DataAccessLayer {
  getData(id: number): any;
  setData(data: any): void;
}

// Data Access implementation
class DataAccessRepository implements DataAccessLayer {
  getData(id: number): any {
    // implementation to get data from the database
  }
  setData(data: any): void {
    // implementation to set data in the database
  }
}

// User Service implementation
class DataService {
  constructor(private dataAccess: DataAccessLayer) {}

  getUserData(id: number): any {
    return this.dataAccess.getData(id);
  }

  setUserData(data: any): void {
    this.dataAccess.setData(data);
  }
}

const dataAccessRepository = new DataAccessRepository();
const dataService = new DataService(dataAccessRepository);
