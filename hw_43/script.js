class User {
  password = 123456;
  constructor(name, role) {
    this.name = name;
    const adminRegex = /^admin$/i;
    const userRegex = /^user$/i;
    if (adminRegex.test(role) || userRegex.test(role)) {
      this.role = role;
    } else {
      alert("Inserted role isn't correct");
    }
  }
  getName() {
    return this.name;
  }
  getRole() {
    if (this.role) {
      return this.role;
    } else {
      return "This profil isn't have any role";
    }
  }
  login(password) {
    if (this.password === password) {
      return `${this.name} enter succesful`;
    } else {
      return `${this.name} enter denied`;
    }
  }
  logOut() {
    return `${this.name} exit succesful`;
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  changePassword(oldPassword) {
    if (this.password === oldPassword) {
      this.password = +prompt("Enter a new password", 0);
    } else {
      alert(
        "Your person recognized as a hacker, stay there and wait for police"
      );
    }
  }
}
let user = new User("John", "admin");
console.log(user.name);
console.log(user.getName());
console.log(user.getRole());
console.log(user.login());
console.log(user.logOut());
console.log(user.changeName("Silvia"));
console.log(user.changePassword(12345));

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }
  addUser(user) {
    if (user.__proto__ === User) {
      this.users.push(user);
    }
  }
  removveUser(user) {
    const idx = this.users.indexOf(user);
    if (idx !== -1) {
      this.users.splice(idx, 1);
    }
  }
  changeUserRole(user, newRole) {
    user.role = newRole;
  }
  getAllUsers() {
    return this.users;
  }
  removeAllUsers() {
    this.users = [];
  }
}
