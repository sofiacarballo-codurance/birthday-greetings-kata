import {emailNotifier} from "./EmailNotifier";
import {Note} from "./Note";

export class BirthdayGreetingService {

    sendTodayGreetings() {
        emailNotifier.notify(new Note("Ana"), "email")
    }
}