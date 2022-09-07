export class Carte {
  constructor(
    public idarticles: number,
    public image: string,
    public nom: string,
    public description: string
  ) {}

  //Il faut toujours utiliser le constructor et d'éviter ainsi de juste déclarer les variables
  // image! : string;
  // icone! : string;
  // nom!: string;
  // date! : Date;
  // like! : number;
  // prix! : number;
  // avis? : string;
}
