import {Friend} from "./Friend";
import {emailNotifier} from "./EmailNotifier";
import {Note} from "./Note";

export class BirthdayGreetingService {
    private friends: Friend[];

    constructor(friends: Friend[]) {
        this.friends = friends;
    }

    sendTodayGreetings() {
        emailNotifier.notify(new Note("Ana"), "email")
    }
}