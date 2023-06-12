import {BirthdayGreetingService} from "../../src/BirthdayGreetingService";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023/10/08'));

describe("Birthday Greeting", () => {
    it("should send a birthday greeting email to the friends that has their birthdays today", () => {
        const birthdayGreetingService: BirthdayGreetingService = new BirthdayGreetingService();

        birthdayGreetingService.sendTodayGreetings();
        // fake notifier or test smtp
        // https://www.npmjs.com/package/fake-smtp-server
        expect(false);
    });
})