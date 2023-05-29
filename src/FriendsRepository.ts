import {Friend} from "./Friend";

export class FriendsRepository {
    private friends: Friend[];
    constructor() {
        this.friends = [
            new Friend("Doe", "John", "1982/10/08", "john.doe@foobar.com"),
            new Friend("Ann", "Mary", "1975/09/11", "mary.ann@foobar.com")
        ]
    }

    getBirthdayFriends(currentDate: Date): Friend[] {
        // eslint-disable-next-line prefer-const
        let birthdayFriendsList: Friend[] = [];

        this.friends.forEach((friend) => {
            this.isBirthdayToday(friend, currentDate) ? birthdayFriendsList.push(friend) : false;
        });

        return birthdayFriendsList;
    }

    private isBirthdayToday(friend: Friend, currentDate: Date) {
        return this.isSameMonth(friend.birthday, currentDate) && this.isSameDate(friend, currentDate);
    }

    private isSameDate(friend: Friend, currentDate: Date) {
        return new Date(friend.birthday).getDate() === currentDate.getDate();
    }

    private isSameMonth(birthday: string, currentDate: Date) {
        return new Date(birthday).getMonth() === currentDate.getMonth()
    }
}