
export type MaterialsState = Readonly<{
    materials: Material[];
}>

export type Material = Readonly<{
    id: number,
    Material: string,
    Quantity: number,
    DescTxt: string,
    CustomerPrice: string,
    CustomerCurrency: string,
    RepairPrice: string,
    RepairCurrency: string,
    Available: number,
    ExtUnit: string,
    MatStatus: string,
    StorageLoc: string,
    StorageLocDesc: string,
    NDFQuote: string,
    NDFCounter: string,
    TSPercentage: string,
    TSPercentageCounter: string,
}>
