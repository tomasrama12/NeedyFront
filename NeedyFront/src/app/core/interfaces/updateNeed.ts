export interface UpdateNeed {
    needId: number;
    title: string;
    needAddress: string;
    modality: string;
    needDate: Date;
    description: string;
    requestedSkills: number[];
}