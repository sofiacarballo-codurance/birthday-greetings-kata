import {EmailGenerator} from "../src/EmailGenerator";
import {Email} from "../src/Email";

describe('Email generator', () => {
  it('create email with subject "Happy Birthday!"', () => {
    const email: Email = new EmailGenerator().createEmail();

    expect(email.subject).toEqual("Happy Birthday!");
  });
});
