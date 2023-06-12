import {NoteGenerator} from "../src/NoteGenerator";
import {Note} from "../src/Note";
import {BirthdayReminderNote} from "../src/BirthdayReminderNote";

describe('Note generator should', () => {
  it('create email with subject "Happy Birthday!"', () => {
    const note: Note = new NoteGenerator().createHappyBirthdayNote("Rita");

    expect(note.subject).toEqual("Happy Birthday!");
  });

  describe("create note with body", () => {
    it.each([
      ["Rita", "Happy birthday, dear Rita!"],
      ["Sofía", "Happy birthday, dear Sofía!"],
      ["Daida", "Happy birthday, dear Daida!"]
    ])("create note with body \"Happy birthday, dear %s!\"", (firstName, expected) => {
      const note: Note = new NoteGenerator().createHappyBirthdayNote(firstName);

      expect(note.body).toBe(expected);
    });
  });

  it('create note with subject "Birthday Reminder"', () => {
    const birthdayReminderNote: BirthdayReminderNote = new NoteGenerator().createBirthdayReminderNote("", []);

    expect(birthdayReminderNote.subject).toBe("Birthday Reminder");
  });

  it('create note with a body with a recipient name', () => {
    const recipientFirstName = "Rita";
    const birthdayReminderNote: BirthdayReminderNote = new NoteGenerator().createBirthdayReminderNote(recipientFirstName, []);

    expect(birthdayReminderNote.body).toContain(`Dear ${recipientFirstName},`)
  })

  it('create note with a body with a birthday person split full name', () => {
    const recipientFirstName = "Rita";
    const birthdayPersonFullName = [["Sofía", "Carballo"]];
    const birthdayReminderNote: BirthdayReminderNote = new NoteGenerator().createBirthdayReminderNote(recipientFirstName, birthdayPersonFullName);

    expect(birthdayReminderNote.body).toBe("Dear Rita, Today is Sofía Carballo's birthday. Don't forget to send him a message !")
  })
  
  it('create note with a body with several birthday people', () => {
    const recipientFirstName = "Rita";
    const birthdayPersonFullName = [["Sofía", "Carballo"], ["Daida", "Medina"], ["Rita", "Teixeira"]];
    const birthdayReminderNote: BirthdayReminderNote = new NoteGenerator().createBirthdayReminderNote(recipientFirstName, birthdayPersonFullName);
    
    expect(birthdayReminderNote.body).toBe("Dear Rita, Today is Sofía Carballo, Daida Medina, Rita Teixeira's birthday. Don't forget to send him a message !")
  })
});