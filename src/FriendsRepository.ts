import {Friend} from "./Friend";

class FriendsRepository {
    private friends: Friend[];
    constructor() {
        this.friends = [
            new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com"),
            new Friend("Sam", "Smith", "1994/10/08", "sam.smith@foobar.com"),
            new Friend("Ann", "Mary", "1975/09/11", "mary.ann@foobar.com")
        ]
    }

    getBirthdayFriends(): Friend[] {
        // eslint-disable-next-line prefer-const
        let birthdayFriendsList: Friend[] = [];

        this.friends.forEach((friend) => {
            if (friend.hasBirthdayToday()) {
                birthdayFriendsList.push(friend);
            }
        });

        return birthdayFriendsList;
    }

    getNonBirthdayFriends(): Friend[] {
        throw Error("Not implemented");
    }
}

export const friendsRepository = new FriendsRepository();