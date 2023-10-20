export type Drinks = {
    name: string;
    value: number | string;
    description?: string;
    volume?: string;
}

export type DrinksData = {
    type: string;
    id: number;
    drinks: Drinks[];
}
