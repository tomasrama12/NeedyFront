import { User } from "./user";

export interface Rating {
    id: number;
    giverCI: string;
    giver: User;
    receiverCI: string;
    needId: number;
    stars: number;
    comment?: string;
}