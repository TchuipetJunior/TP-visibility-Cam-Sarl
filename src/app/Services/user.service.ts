import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            id: 1,
            firstName: 'james',
            lastName: 'smith',
            age: 35,
            email: 'james@smith.com',
            admin: true,
            login: 'jamesjames',
            password: 'jamesjames'
            
        },
        {
            id: 2,
            firstName: 'Donald',
            lastName: 'Thrump',
            age: 56,
            email: 'donald@thrump.com',
            admin: false,
            login: 'donalddonald',
            password: 'donalddonald'
        },
        {
            id: 3,
            firstName: 'jack',
            lastName: 'mard',
            age: 40,
            email: 'jack@mard.com',
            admin: true,
            login: 'jackjack',
            password: 'jackjack'
        }
       
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
    getUserById(id: number){
        const user = this.users.find(
           (userObject) => {
             return userObject.id == id;
           }
         );
         return user;
       }
}

