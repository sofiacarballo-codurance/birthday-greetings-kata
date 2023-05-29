export class FriendsRepository {
    private friends: string[][];
    constructor() {
        this.friends = [
            ["Doe", "John", "1982/10/08", "john.doe@foobar.com"],
            ["Ann", "Mary", "1975/09/11", "mary.ann@foobar.com"]
        ]
    }

    getBirthdayFriends(): string[][] {
        throw new Error("Not implemented");
    }
}