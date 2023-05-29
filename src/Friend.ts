export class Friend {
    private name: string;
    private lastName: string;
    readonly birthday: string;
    private email: string;
    constructor(name: string, lastName: string, birthday: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
    }
}