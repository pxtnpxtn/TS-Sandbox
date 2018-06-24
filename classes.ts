interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User Created: " + this.name);
  }
  public register() {
    console.log(this.name + " is now registered");
  }
  payInvoice() {
    console.log(this.name + " paid invoice");
  }
}

// Instantiate/Make instance
let john = new User("John Doe", "jdoe@gmail.com", 21);

console.log(john.age);

// Access Register method
john.register();

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(144, "Jane Doe", "janedoe@gmail.com", 30);
mike.payInvoice();
