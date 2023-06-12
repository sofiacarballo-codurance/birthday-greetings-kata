import {emailNotifier} from "../src/EmailNotifier";
import {Friend} from "../src/Friend";
import {BirthdayGreetingService} from "../src/BirthdayGreetingService";

describe("Birthday Greetings Service", () => {
    it("should send one email", () => {
        const friendsRepositoryMock = jest.fn().mockReturnValue([new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com")]);
        const FriendsRepositoryMock = jest.fn().mockImplementation(() => ({
            getBirthdayFriends: friendsRepositoryMock
        }));
        const emailNotifierSpy = jest.spyOn(emailNotifier, "notify").mockReturnValue(true);
        // TODO: remove friends injection as parameter for birthdayGreetingsService
        const birthdayGreetingsService = new BirthdayGreetingService([new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com")]);
        birthdayGreetingsService.sendTodayGreetings();
        //TODO: check parameters
        expect(emailNotifierSpy).toHaveBeenCalledTimes(1);
    })
})