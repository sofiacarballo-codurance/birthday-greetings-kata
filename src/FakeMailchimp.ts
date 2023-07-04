class FakeMailchimp {
  
  send(email: string, subject: string, body: string) {
    throw Error("Not implemented");
  }
}

export const fakeMailchimp = new FakeMailchimp();