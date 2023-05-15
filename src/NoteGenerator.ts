import {Note} from "./Note";
import {BirthdayReminderNote} from "./BirthdayReminderNote";

export class NoteGenerator {

    createHappyBirthdayNote(firstName: string): Note {
        return new Note(firstName);
    }

    createBirthdayReminderNote(recipientFirstName: string, birthdayPersonFullName: string[]) {
        return new BirthdayReminderNote(recipientFirstName, birthdayPersonFullName);
    }
}