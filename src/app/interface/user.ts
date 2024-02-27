export class User{
    id : number;
    name : string;
    userName: string;
    password: string;
    constructor(id: number, name: string, userName: string, password: string ){
        this.id=id;
        this.name=name;
        this.userName=userName;
        this.password=password
    }
}