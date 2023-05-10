import {EmailGenerator} from "../src/EmailGenerator";
import {Email} from "../src/Email";

describe('Email generator', () => {
  it('create email with subject "Happy Birthday!"', () => {
    const email: Email = new EmailGenerator().createEmail("Rita");

    expect(email.subject).toEqual("Happy Birthday!");
  });

  it('create email with body "Happy birthday, dear Rita!"', () => {
    const email: Email = new EmailGenerator().createEmail("Rita");

    expect(email.body).toEqual("Happy birthday, dear Rita!");
  });

  it('create email with body "Happy birthday, dear Sofía!"', () => {
    const email: Email = new EmailGenerator().createEmail("Sofía");

    expect(email.body).toEqual("Happy birthday, dear Sofía!");
  });

  it('create email with body "Happy birthday, dear Daida!"', () => {
    const email: Email = new EmailGenerator().createEmail("Daida");

    expect(email.body).toEqual("Happy birthday, dear Daida!");
  });
});
