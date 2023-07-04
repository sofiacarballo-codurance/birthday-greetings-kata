import {BirthdayGreetingNote} from "./BirthdayGreetingNote";
import {fakeMailchimp} from "./FakeMailchimp";

class EmailNotifier {

    notify(note: BirthdayGreetingNote, friendEmail: string) {
        fakeMailchimp.send(friendEmail, note.subject, note.body);
    }
}
export const emailNotifier = new EmailNotifier();