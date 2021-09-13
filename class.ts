type PlayerPositionType = { x: number, y: number, z: number }

class Player {
  static test: number = 10;

  constructor(
      private pseudo: string,
      private position: PlayerPositionType,
      private _life: number = 100
  ) {}

  public getPosition(): PlayerPositionType {
    return this.position;
  }

  public moveTo(position: PlayerPositionType) {
    this.position = position;
  }

  public getPseudo(): string {
    return this.pseudo;
  }

  public changePseudo(pseudo: string) {
    this.pseudo = pseudo;
  }

  get life(): number {
    return this._life;
  }

  set life(value) {
    this._life += value;
  }

  static sendMessage(player: Player, message: string) {
    console.log(`${player.getPseudo()} : ${message}`);
  }
}

let player = new Player("Adrien", {x: 1, y: 1, z: 1});

player.life;
player.life = 10;
player.getPosition();
player.moveTo({ x: 5, y: 5, z: 5 });
player.changePseudo("Adrien2");

Player.sendMessage(player, "Hello world!");
