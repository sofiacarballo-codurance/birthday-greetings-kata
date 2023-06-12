import {emailNotifier} from "../src/EmailNotifier";
import {BirthdayGreetingService} from "../src/BirthdayGreetingService";
import {friendsRepository} from "../src/FriendsRepository";
import {Friend} from "../src/Friend";
import {BirthdayGreetingNote} from "../src/BirthdayGreetingNote";

describe("Birthday Greetings Service", () => {
    it("should send one email", () => {
        const friend = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com");
        jest.spyOn(friendsRepository, "getBirthdayFriends").mockReturnValue(
          [friend])
        const emailNotifierSpy = jest.spyOn(emailNotifier, "notify").mockReturnValue(true);
        const birthdayGreetingsService = new BirthdayGreetingService();
        birthdayGreetingsService.sendTodayGreetings();
        expect(emailNotifierSpy).toHaveBeenCalledTimes(1);
        const note = new BirthdayGreetingNote(friend.firstName);
        expect(emailNotifierSpy).toHaveBeenCalledWith(note, friend.email);
    })
})