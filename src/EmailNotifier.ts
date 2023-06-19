import {BirthdayGreetingNote} from "./BirthdayGreetingNote";

class EmailNotifier {

    notify(note: BirthdayGreetingNote, friendEmail: string) {
        throw Error("Not implemented");
    }
}
export const emailNotifier = new EmailNotifier();