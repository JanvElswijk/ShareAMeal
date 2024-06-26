class User {
    constructor(id, firstName, lastName, street, city, isActive, emailAdress, password, phoneNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.isActive = isActive;
        this.emailAdress = emailAdress;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}

const users = [
    new User(
        1,
        "John",
        "Doe",
        "Main Street 1",
        "New York",
        true,
        "john@avans.nl",
        "1234",
        "0612345678"
    ),
    new User(
        2,
        "Jane",
        "Doe",
        "Main Street 2",
        "New York",
        true,
        "jane@avans.nl",
        "1234",
        "0612345678"
    ),
    new User(
        3,
        "Jack",
        "Doe",
        "Main Street 3",
        "New York",
        false,
        "jack@avans.nl",
        "1234",
        "0612345678"
    ),
    new User(
        4,
        "Jill",
        "Doe",
        "Main Street 4",
        "New York",
        false,
        "jill@avans.nl",
        "1234",
        "0612345678"
    ),
];

module.exports = { User, users };