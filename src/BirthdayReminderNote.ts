export class BirthdayReminderNote {
    private readonly _subject: string;
    private readonly _body: string;

    constructor(recipientFirstName: string) {
        this._subject = "Birthday Reminder";
        this._body = `Dear ${recipientFirstName},`
    }

    get subject(): string {
        return this._subject;
    }

    get body(): string {
        return this._body;
    }
}