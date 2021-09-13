class Player {
    constructor(pseudo, position, _life = 100) {
        this.pseudo = pseudo;
        this.position = position;
        this._life = _life;
    }
    getPosition() {
        return this.position;
    }
    moveTo(position) {
        this.position = position;
    }
    getPseudo() {
        return this.pseudo;
    }
    changePseudo(pseudo) {
        this.pseudo = pseudo;
    }
    get life() {
        return this._life;
    }
    set life(value) {
        this._life += value;
    }
    static sendMessage(player, message) {
        console.log(`${player.getPseudo()} : ${message}`);
    }
}
let player = new Player("Adrien", { x: 1, y: 1, z: 1 });
player.life;
player.life = 10;
player.getPosition();
player.moveTo({ x: 5, y: 5, z: 1 });
player.changePseudo("Adrien2");
Player.sendMessage(player, "Hello world!");
