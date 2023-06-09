export interface UpdateNeed {
    needId: number;
    description: string;
    needAddress: string;
    modality: string;
    needDate: Date;
    requestedSkills: number[];
}