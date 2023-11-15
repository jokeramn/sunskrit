export type Drinks = {
    name: string;
    value: number | string;
    description?: string;
    volume?: string;
    info?: InfoDrinkData;
}

export type DrinksData = {
    type: string;
    id: number;
    drinks: Drinks[];
}

export type InfoDrinkData =  {
    structure?: string;
    brewTime?: string;
    aroma?: string;
}
