export class User{
    constructor(public id: number,
                public firstName: string,
                public lastName: string,
                public age: number,
                public email: string,
                public admin: boolean,
                public login: string,
                public password: string
                                    ) {}
}