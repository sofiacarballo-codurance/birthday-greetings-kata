export class Email {
    subject: string;
    body: string;

    constructor(firstName: string) {
        this.subject = "Happy Birthday!";
        this.body = `Happy birthday, dear ${firstName}!`;
    }
}