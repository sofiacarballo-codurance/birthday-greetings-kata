export class BirthdayReminderNote {
    private readonly _subject: string;
    private readonly _body: string;
    
    constructor(recipientFirstName: string, birthdayPeopleFullName: string[][]) {
        this._subject = "Birthday Reminder";
        this._body = `Dear ${recipientFirstName}, `;
        if (birthdayPeopleFullName.length != 0) {
            const birthdayPeopleNameList = birthdayPeopleFullName.map(fullName => `${fullName[0]} ${fullName[1]}`).join(", ");
            
            this._body += `Today is ${birthdayPeopleNameList}'s birthday. Don't forget to send him a message !`
        }
    }

    get subject(): string {
        return this._subject;
    }

    get body(): string {
        return this._body;
    }
}