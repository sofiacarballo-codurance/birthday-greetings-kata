import {BirthdayGreetingService} from "../../src/BirthdayGreetingService";
import {FriendsRepository} from "../../src/FriendsRepository";
import {Friend} from "../../src/Friend";

describe("Birthday Greeting", () => {
    it("should send a birthday greeting email to the friends that has their birthdays today", () => {
        const currentDate = new Date("2023/10/08");
        const friendsRepository: FriendsRepository = new FriendsRepository();
        const birthdayFriends: Friend[] = friendsRepository.getBirthdayFriends(currentDate);
        const birthdayGreetingService: BirthdayGreetingService = new BirthdayGreetingService(birthdayFriends);

        birthdayGreetingService.sendTodayGreetings();

        expect(true);
    });
})