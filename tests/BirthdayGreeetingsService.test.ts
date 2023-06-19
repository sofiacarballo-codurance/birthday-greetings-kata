import {emailNotifier} from "../src/EmailNotifier";
import {BirthdayGreetingService} from "../src/BirthdayGreetingService";
import {friendsRepository} from "../src/FriendsRepository";
import {Friend} from "../src/Friend";
import {BirthdayGreetingNote} from "../src/BirthdayGreetingNote";

describe("Birthday Greetings Service", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("should send one email", () => {
    const friend = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com");
    jest.spyOn(friendsRepository, "getBirthdayFriends").mockReturnValue(
      [friend])
    const emailNotifierSpy = jest.spyOn(emailNotifier, "notify").mockReturnValue();
    const birthdayGreetingsService = new BirthdayGreetingService();
    birthdayGreetingsService.sendTodayGreetings();
    expect(emailNotifierSpy).toHaveBeenCalledTimes(1);
    const note = new BirthdayGreetingNote(friend.firstName);
    expect(emailNotifierSpy).toHaveBeenCalledWith(note, friend.email);
  })
  
  it("should send multiple emails", () => {
    const doeJohn = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com");
    const paulSmith = new Friend("Paul", "Smith", "1982/10/08", "paul.smith@foobar.com");
    const peterPan = new Friend("Peter", "Pan", "1982/10/08", "peter.pan@foobar.com");
    jest.spyOn(friendsRepository, "getBirthdayFriends").mockReturnValue(
      [doeJohn, paulSmith, peterPan])
    const emailNotifierSpy = jest.spyOn(emailNotifier, "notify").mockReturnValue();
    const birthdayGreetingsService = new BirthdayGreetingService();
    birthdayGreetingsService.sendTodayGreetings();
    expect(emailNotifierSpy).toHaveBeenCalledTimes(3);
    expect(emailNotifierSpy).toHaveBeenNthCalledWith(1, new BirthdayGreetingNote(doeJohn.firstName), doeJohn.email);
    expect(emailNotifierSpy).toHaveBeenNthCalledWith(2, new BirthdayGreetingNote(paulSmith.firstName), paulSmith.email);
    expect(emailNotifierSpy).toHaveBeenNthCalledWith(3, new BirthdayGreetingNote(peterPan.firstName), peterPan.email);
  })
})