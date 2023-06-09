export interface Rating {
    id: number;
    giverCI: string;
    receiverCI: string;
    needId: number;
    stars: number;
    comment?: string;
}