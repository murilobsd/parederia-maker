/*
Item do menu do quadro.
*/
export class Item {
    id: string;
    symbol: string; // imagem

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.symbol = obj && obj.symbol || null;
    }
}