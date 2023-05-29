export class BirthdayGreetingService {
    private friends: string[][];
    constructor(friends: string[][]) {
        this.friends = friends;
    }

    sendTodayGreetings() {
        throw new Error("Not implement");
    }
}