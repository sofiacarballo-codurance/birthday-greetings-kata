import {emailNotifier} from "./EmailNotifier";
import {BirthdayGreetingNote} from "./BirthdayGreetingNote";
import {friendsRepository} from "./FriendsRepository";

export class BirthdayGreetingService {

    sendTodayGreetings() {
        const birthdayFriends = friendsRepository.getBirthdayFriends();
        birthdayFriends.forEach((friend) => {
            emailNotifier.notify(new BirthdayGreetingNote(friend.firstName), friend.email)
        });
        
    }
}