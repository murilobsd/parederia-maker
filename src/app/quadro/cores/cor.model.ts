export class Cor {
  hex: string;

  constructor(obj?: any) {
    this.hex = obj && obj.hex || null;
  }
}
