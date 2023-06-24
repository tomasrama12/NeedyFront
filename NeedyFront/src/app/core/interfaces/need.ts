import { Skill } from "./skill";
import { User } from "./user";

export interface Need {
    id: number;
    title: string;
    requestor: User;
    appliers: User[];
    acceptedApplier?: User;
    status: string;
    description?: string;
    creationDate: Date;
    needDate: Date;
    acceptedDate?: Date;
    requestedSkills: Skill[];
    needAddress: string;
    modality: string;
    imageSrc: string;
}