import {FriendsRepository} from "../src/FriendsRepository";
import {Friend} from "../src/Friend";

describe("Friends repository", () => {
    it("get today's birthday friends", () => {
        const friendsRepository = new FriendsRepository();
        const currentDate = new Date("2023/10/08");
        const todaysFriendsBirthday: Friend[] = friendsRepository.getBirthdayFriends(currentDate);
        const friend = new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com")

        expect(todaysFriendsBirthday).toStrictEqual([friend])
    });
});