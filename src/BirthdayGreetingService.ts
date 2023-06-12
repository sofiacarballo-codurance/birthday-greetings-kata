import {emailNotifier} from "./EmailNotifier";
import {Note} from "./Note";
import {FriendsRepository} from "./FriendsRepository";

export class BirthdayGreetingService {
    private friendsRepository: FriendsRepository;

    constructor(friendsRepository: FriendsRepository) {
        this.friendsRepository = friendsRepository;
    }

    sendTodayGreetings() {
        emailNotifier.notify(new Note("Ana"), "email")
    }
}