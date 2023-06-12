import {emailNotifier} from "../src/EmailNotifier";
import {BirthdayGreetingService} from "../src/BirthdayGreetingService";
jest.mock("../src/FriendsRepository")
import {FriendsRepository} from "../src/FriendsRepository";
import {Friend} from "../src/Friend";

describe("Birthday Greetings Service", () => {
    it("should send one email", () => {
        const friendsRepositoryMock = new FriendsRepository();
        jest.spyOn(friendsRepositoryMock, "getBirthdayFriends").mockReturnValue([new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com")])
        const emailNotifierSpy = jest.spyOn(emailNotifier, "notify").mockReturnValue(true);
        const birthdayGreetingsService = new BirthdayGreetingService(friendsRepositoryMock);
        birthdayGreetingsService.sendTodayGreetings();
        //TODO: check parameters
        expect(emailNotifierSpy).toHaveBeenCalledTimes(1);
    })
})