const myDB = {
  users: [],
} as { users: User[] };

// Single Responsibility Principle

// The User class has only one responsibility: storing information about the user.
// Would it be a kind of Model??
class User {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = Math.random();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// The UserRepository class is responsible for communicating with the database to save and retrieve information about users.
class UserRepository {
  // If I use the User class as a Parameter, create a dependency??
  // The correct thing would be to create an Interface??
  save(user: User) {
    myDB.users.push(user);
  }

  get(id: number) {
    // Retrieve user from database
    return myDB.users.find((user) => user.id === id);
  }
}

// The UserService class is responsible for managing user save and recovery operations.
class UserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  saveUser(user: User) {
    const exists = this.getUser(user.id);

    if (exists) throw new Error("User already exists");

    return this.userRepository.save(user);
  }

  getUser(id: number) {
    return this.userRepository.get(id);
  }
}

//Factorys
const user = new User("John Doe"); // Models
const userRepository = new UserRepository(); // Repository || ORM
const userService = new UserService(userRepository); // Service
//Controllers

// Dependency Injection
userService.saveUser(user);
const savedUser = userService.getUser(user.id);
console.log(savedUser);
