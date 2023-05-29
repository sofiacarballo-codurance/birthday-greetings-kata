import {Friend} from "./Friend";

export class BirthdayGreetingService {
    private friends: Friend[];

    constructor(friends: Friend[]) {
        this.friends = friends;
    }

    sendTodayGreetings() {
        throw new Error("Not implement");
    }
}