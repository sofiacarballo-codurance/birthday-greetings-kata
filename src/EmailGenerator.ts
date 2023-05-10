import {Email} from "./Email";

export class EmailGenerator {

    createEmail(firstName: string): Email {
        return new Email(firstName);
    }
}