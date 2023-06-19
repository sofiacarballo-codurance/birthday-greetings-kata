import {Friend} from "../src/Friend";

describe("Friend should", () => {
  it("have birthday today if the birth date is 29/02, the year is not leap year and today is 28/02", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2023/02/28'));
    
    const friendBornOnFebruary29 = new Friend("Lara", "Croft",
      "2000/02/29", "lara.croft@foobar.com");
    
    expect(friendBornOnFebruary29.hasBirthdayToday()).toBeTruthy();
  });
  
  it("not have birthday today if the birth date is 29/02, the year is leap year and today is 28/02", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2024/02/28'));
    
    const friendBornOnFebruary29 = new Friend("Lara", "Croft",
      "2000/02/29", "lara.croft@foobar.com");
    
    expect(friendBornOnFebruary29.hasBirthdayToday()).toBeFalsy();
  });
  
  it("not have birthday today if the birth date is not 29/02, the year is not leap year and today is 28/02", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2023/02/28'));
    
    const friendNotBornOnFebruary29 = new Friend("Lara", "Croft",
      "2000/02/15", "lara.croft@foobar.com");
    
    expect(friendNotBornOnFebruary29.hasBirthdayToday()).toBeFalsy();
  });
  
  it("not have birthday today if the birth date is 29/02, the year is not leap year and today is not 28/02", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2023/02/06'));
    
    const friendBornOnFebruary29 = new Friend("Lara", "Croft",
      "2000/02/29", "lara.croft@foobar.com");
    
    expect(friendBornOnFebruary29.hasBirthdayToday()).toBeFalsy();
  });
  
  it("have birthday today if the birth date is 29/02, the year is leap year and today is 29/02", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2024/02/29'));
    
    const friendBornOnFebruary29 = new Friend("Lara", "Croft",
      "2000/02/29", "lara.croft@foobar.com");
    
    expect(friendBornOnFebruary29.hasBirthdayToday()).toBeTruthy();
  });
})

