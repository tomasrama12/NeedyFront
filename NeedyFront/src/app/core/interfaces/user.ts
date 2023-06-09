import { Skill } from "./skill";

export interface User {
    ci: string;
    firstName: string;
    lastName: string;
    address: string;
    zone: string;
    phone: string;
    age: number;
    skills: Skill[];
    avgRating?: number;
    aboutMe?: string;
}