import {BirthdayGreetingService} from "../../src/BirthdayGreetingService";
import {FriendsRepository} from "../../src/FriendsRepository";
import {Friend} from "../../src/Friend";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023/10/08'));

describe("Birthday Greeting", () => {
    it("should send a birthday greeting email to the friends that has their birthdays today", () => {
        const friendsRepository: FriendsRepository = new FriendsRepository();
        const birthdayFriends: Friend[] = friendsRepository.getBirthdayFriends();
        const birthdayGreetingService: BirthdayGreetingService = new BirthdayGreetingService(birthdayFriends);

        birthdayGreetingService.sendTodayGreetings();
        // fake notifier or test smtp
        // https://www.npmjs.com/package/fake-smtp-server
        expect(false);
    });
})