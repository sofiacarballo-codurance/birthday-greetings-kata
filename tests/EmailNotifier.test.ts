import {emailNotifier} from "../src/EmailNotifier";
import {BirthdayGreetingNote} from "../src/BirthdayGreetingNote";
import {fakeMailchimp} from "../src/FakeMailchimp";

describe('Email notifier should', ()  => {
  it('send email using the generated note', () => {
    
    const firstName = "name";
    const friendEmail = "some.email@foo.com";
    const birthdayGreetingNote = new BirthdayGreetingNote(firstName);
    const fakeMailchimpSpy = jest.spyOn(fakeMailchimp, "send").mockReturnValue();
    
    emailNotifier.notify(birthdayGreetingNote, friendEmail)
    
    expect(fakeMailchimpSpy).toHaveBeenCalledTimes(1);
    expect(fakeMailchimpSpy).toHaveBeenCalledWith(friendEmail, birthdayGreetingNote.subject, birthdayGreetingNote.body);
  })
})