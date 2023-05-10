import {EmailGenerator} from "../src/EmailGenerator";
import {Email} from "../src/Email";

describe('Email generator', () => {
  it('create email with subject "Happy Birthday!"', () => {
    const email: Email = new EmailGenerator().createEmail();

    expect(email.subject).toEqual("Happy Birthday!");
  });

  it('create email with body "Happy birthday, dear Rita!"', () => {
    const email: Email = new EmailGenerator().createEmail();

    expect(email.body).toEqual("Happy birthday, dear Rita!");
  });
});
