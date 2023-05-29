import {FriendsRepository} from "../src/FriendsRepository";

describe("Friends repository", () => {
    it("get today's birthday friends", () => {
        const friendsRepository = new FriendsRepository();
        const currentDate = new Date("2023/10/08");
        const todaysFriendsBirthday: string[][] = friendsRepository.getBirthdayFriends(currentDate);

        expect(todaysFriendsBirthday).toStrictEqual([["Doe", "John", "1982/10/08", "john.doe@foobar.com"]])
    });

    it("get today's birthday friends", () => {
        const friendsRepository = new FriendsRepository();
        const currentDate = new Date("2023/10/08");
        const todaysFriendsBirthday: string[][] = friendsRepository.getBirthdayFriends(currentDate);

        expect(todaysFriendsBirthday).toStrictEqual([["Doe", "John", "1982/10/08", "john.doe@foobar.com"]])
    });
});