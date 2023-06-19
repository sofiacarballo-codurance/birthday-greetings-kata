import {friendsRepository} from "../src/FriendsRepository";
import {Friend} from "../src/Friend";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023/10/08'));

describe("Friends repository", () => {
    it("get today's birthday friends", () => {
        const todaysFriendsBirthday: Friend[] = friendsRepository.getBirthdayFriends();
        const doeJohn = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com")
        const samSmith = new Friend("Sam", "Smith", "1994/10/08", "sam.smith@foobar.com")

        expect(todaysFriendsBirthday).toStrictEqual([doeJohn, samSmith])
    });
});