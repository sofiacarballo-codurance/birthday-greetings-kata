export class BirthdayReminderNote {
    private readonly _subject: string;
    private readonly _body: string;

    constructor(recipientFirstName: string, birthdayPerson: string) {
        this._subject = "Birthday Reminder";
        this._body = `Dear ${recipientFirstName}, Today is ${birthdayPerson}'s birthday. Don't forget to send him a message !`
    }

    get subject(): string {
        return this._subject;
    }

    get body(): string {
        return this._body;
    }
}