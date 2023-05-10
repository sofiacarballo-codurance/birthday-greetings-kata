import {Email} from "./Email";
import {ReminderEmail} from "./ReminderEmail";

export class EmailGenerator {

    createEmail(firstName: string): Email {
        return new Email(firstName);
    }

    createReminderEmail() {
        return new ReminderEmail();
    }
}