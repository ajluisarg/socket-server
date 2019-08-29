import { User } from './user';

export class UserList {
    private list: User[] = [];

    public addUser(user: User) {
        this.list.push(user);
        console.log(this.list);

        return user;
    }

    public updateName(id: string, name: string) {
        this.list.find(user => user.id === id).name = name;
        console.log(this.list);

    }

    public getList() {
        return this.list;
    }

    public getUser(id: string): User {
        return this.list.find(user => user.id === id);
    }

    public getUsersOfRoom(room: string): User[] {
        return this.list.filter(user => user.room === room);
    }

    public deleteUser(id: string){
        this.list = this.list.filter(user => user.id !== id);
        console.log(this.list);

    }

}