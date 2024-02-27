import { address } from "./address";

export interface userDetai{
    id: number;
    firstName : string;
    lastName :string;
    email :string;
    birthDate:string
    gender:string
    address:address
}