import {BirthdayGreetingService} from "../../src/BirthdayGreetingService";
import {emailNotifier} from "../../src/EmailNotifier";
import {BirthdayGreetingNote} from "../../src/BirthdayGreetingNote";
import {Friend} from "../../src/Friend";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023/10/08'));

describe("Birthday Greeting", () => {
    it("should send a birthday greeting email to the friends that has their birthdays today", () => {
        const birthdayGreetingService: BirthdayGreetingService = new BirthdayGreetingService();
        const emailNotifierSpy = jest.spyOn(emailNotifier, "notify").mockReturnValue();
        birthdayGreetingService.sendTodayGreetings();

        const doeJohn = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com");
        const doeJohnNote = new BirthdayGreetingNote(doeJohn.firstName);
        const samSmith = new Friend("Sam", "Smith", "1994/10/08", "sam.smith@foobar.com");
        const samSmithNote = new BirthdayGreetingNote(samSmith.firstName);

        expect(emailNotifierSpy).toHaveBeenCalledTimes(2);
        expect(emailNotifierSpy).toHaveBeenNthCalledWith(1, doeJohnNote, doeJohn.email);
        expect(emailNotifierSpy).toHaveBeenNthCalledWith(2, samSmithNote, samSmith.email);
    });
})