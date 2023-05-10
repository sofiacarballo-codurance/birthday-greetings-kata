import {Email} from "./Email";

export class EmailGenerator {

    createEmail(): Email {
        return new Email();
    }
}