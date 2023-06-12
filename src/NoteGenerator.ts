import {BirthdayGreetingNote} from "./BirthdayGreetingNote";
import {BirthdayReminderNote} from "./BirthdayReminderNote";

export class NoteGenerator {

    createHappyBirthdayNote(firstName: string): BirthdayGreetingNote {
        return new BirthdayGreetingNote(firstName);
    }
    
    createBirthdayReminderNote(recipientFirstName: string, birthdayPersonFullName: string[][]) {
        return new BirthdayReminderNote(recipientFirstName, birthdayPersonFullName);
    }
}