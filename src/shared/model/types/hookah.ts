export type HookahDataType = {
    title: string;
    menu: {
        human: Source,
        hookah: Source,
        id: number;
        price: number;
    }[]
};

export type Source = {
    src: string;
    count: string;
}
