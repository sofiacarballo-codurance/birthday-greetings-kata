import {FriendsRepository} from "../src/FriendsRepository";
import {Friend} from "../src/Friend";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023/10/08'));

describe("Friends repository", () => {
    it("get today's birthday friends", () => {
        const friendsRepository = new FriendsRepository();
        const todaysFriendsBirthday: Friend[] = friendsRepository.getBirthdayFriends();
        const friend = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com")

        expect(todaysFriendsBirthday).toStrictEqual([friend])
    });
});