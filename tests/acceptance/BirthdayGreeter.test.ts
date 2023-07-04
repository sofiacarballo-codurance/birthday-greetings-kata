import {BirthdayGreetingService} from "../../src/BirthdayGreetingService";
import {BirthdayGreetingNote} from "../../src/BirthdayGreetingNote";
import {Friend} from "../../src/Friend";
import {fakeMailchimp} from "../../src/FakeMailchimp";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023/10/08'));

describe("Birthday Greeting", () => {
    it("should send a birthday greeting email to the friends that have their birthdays today", () => {
        const birthdayGreetingService: BirthdayGreetingService = new BirthdayGreetingService();
        const fakeMailchimpNotifierSpy = jest.spyOn(fakeMailchimp, "send").mockReturnValue();
        birthdayGreetingService.sendTodayGreetings();

        const doeJohn = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com");
        const doeJohnNote = new BirthdayGreetingNote(doeJohn.firstName);
        const samSmith = new Friend("Sam", "Smith", "1994/10/08", "sam.smith@foobar.com");
        const samSmithNote = new BirthdayGreetingNote(samSmith.firstName);

        expect(fakeMailchimpNotifierSpy).toHaveBeenCalledTimes(2);
        expect(fakeMailchimpNotifierSpy).toHaveBeenNthCalledWith(1, doeJohn.email, doeJohnNote.subject, doeJohnNote.body);
        expect(fakeMailchimpNotifierSpy).toHaveBeenNthCalledWith(2, samSmith.email, samSmithNote.subject, samSmithNote.body);
    });
})