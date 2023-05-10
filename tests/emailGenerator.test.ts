import {EmailGenerator} from "../src/EmailGenerator";
import {Email} from "../src/Email";
import {ReminderEmail} from "../src/ReminderEmail";

describe('Email generator should', () => {
  it('create email with subject "Happy Birthday!"', () => {
    const email: Email = new EmailGenerator().createEmail("Rita");

    expect(email.subject).toEqual("Happy Birthday!");
  });

  describe("create email with body", () => {
    it.each([
      ["Rita", "Happy birthday, dear Rita!"],
      ["Sofía", "Happy birthday, dear Sofía!"],
      ["Daida", "Happy birthday, dear Daida!"]
    ])("create email with body \"Happy birthday, dear %s!\"", (firstName, expected) => {
      const email: Email = new EmailGenerator().createEmail(firstName);

      expect(email.body).toBe(expected);
    });
  });

  it('create email with subject "Birthday Reminder"', () => {
    const reminderEmail: ReminderEmail = new EmailGenerator().createReminderEmail();

    expect(reminderEmail.subject).toBe("Birthday Reminder");
  });
});
