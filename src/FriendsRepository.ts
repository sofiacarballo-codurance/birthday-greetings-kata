export class FriendsRepository {
    private friends: string[][];
    constructor() {
        this.friends = [
            ["Doe", "John", "1982/10/08", "john.doe@foobar.com"],
            ["Ann", "Mary", "1975/09/11", "mary.ann@foobar.com"]
        ]
    }

    getBirthdayFriends(currentDate: Date): string[][] {
        // eslint-disable-next-line prefer-const
        let birthdayFriendsList: string[][] = [];

        this.friends.forEach((friend) => {
            if(new Date(friend[2]).getMonth() === currentDate.getMonth() && new Date(friend[2]).getDate() === currentDate.getDate()) {
                birthdayFriendsList.push(friend);
            }
        });

        return birthdayFriendsList;
    }
}