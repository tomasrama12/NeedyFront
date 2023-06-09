export interface UpdateUser {
    firstName: string;
    lastName: string;
    address: string;
    zone: string;
    phone: string;
    gender: string;
    skillsId: number[];
    aboutMe?: string;
}