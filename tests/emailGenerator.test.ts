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
    const birthdayReminderNote: BirthdayReminderNote = new NoteGenerator().createBirthdayReminderNote();

    expect(birthdayReminderNote.subject).toBe("Birthday Reminder");
  });
});
