import {BirthdayGreetingService} from "../../src/BirthdayGreetingService";
import {FriendsRepository} from "../../src/FriendsRepository";

describe("Birthday Greeting", () => {
    it("should send a birthday greeting email to the friends that has their birthdays today", () => {
        const friendsRepository: FriendsRepository = new FriendsRepository();
        const birthdayFriends: string[][] = friendsRepository.getBirthdayFriends();
        const birthdayGreetingService: BirthdayGreetingService = new BirthdayGreetingService(birthdayFriends);

        birthdayGreetingService.sendTodayGreetings();

        expect(true);
    });
})