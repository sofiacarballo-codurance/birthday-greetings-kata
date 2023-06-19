export class Friend {
    readonly firstName: string;
    private lastName: string;
    readonly birthday: string;
    readonly email: string;
    constructor(name: string, lastName: string, birthday: string, email: string) {
        this.firstName = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
    }
    
    public hasBirthdayToday() {
        const currentDate = new Date();
        
        return (this.isSameMonth(this.birthday, currentDate) && this.isSameDate(currentDate))
          || (this.wasBornFeb29() && !this.isLeapYear(currentDate) && this.isFeb28(currentDate));
    }
    
    private isSameDate(currentDate: Date) {
        return new Date(this.birthday).getDate() === currentDate.getDate();
    }
    
    private isSameMonth(birthday: string, currentDate: Date) {
        return new Date(birthday).getMonth() === currentDate.getMonth()
    }
    
    private wasBornFeb29() {
        const birthdayDate = new Date(this.birthday);
        return birthdayDate.getDate() === 29 && birthdayDate.getMonth() === 1;
    }
    
    private isLeapYear(currentDate: Date) {
        function checkLeapYear(year: number) {
            return new Date(year, 1, 29).getDate() === 29;
        }
        
        return checkLeapYear(currentDate.getFullYear());
    }
    
    private isFeb28(currentDate: Date) {
        return currentDate.getDate() === 28 && currentDate.getMonth() === 1;
    }
    
    
}