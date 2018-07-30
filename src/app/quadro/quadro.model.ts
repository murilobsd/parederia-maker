export class Quadro {
    largura: number;
    altura: number;
    preco: number;
    id: string;
    cor: string;
    name: string;

    constructor(obj?: any) {
        this.largura = obj && obj.largura || null;
        this.altura = obj && obj.altura || null;
        this.preco = obj && obj.preco || null;
        this.id = obj && obj.id || null;
        this.cor = obj && obj.cor || null;
        this.name = obj && obj.name || null;
    }
}