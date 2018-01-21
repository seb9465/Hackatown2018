import { templateJitUrl } from "@angular/compiler";

class User {
    id: number;
    name: string;
    imageSrc: any;
    usePerDay: number;
    totalUsePerMonth: number;
    achievementsList: any = [1, 2, 3];
    localisation: any = {
        lat: 42.33333,
        lng: -43.3333
    };
}

declare var require: any;
export class Users {
    private users: User[];

    constructor() {
        this.retreiveDataFromDatabase();
    }

    retreiveDataFromDatabase(): void {
        const user_data = require('./data_user.json').users;
        for (let us of user_data) {
            let temp = new User();
            temp.id = us.id;
            temp.name = us.name;
            temp.usePerDay = us.usePerDay;
            temp.totalUsePerMonth = us.totalUsePerMonth;
            temp.achievementsList = us.achievementsList;
            temp.localisation = us.localisation;
        }
    }

    getUsers(): User[] {
        return this.users;
    }
}
