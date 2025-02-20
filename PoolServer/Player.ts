export class Player {
    id: string;
    name: string;
    wins: number;
    avg: number;
    loss: number;

    constructor(id: string, name: string, wins: number, avg: number, loss: number) {
        this.id = id;
        this.name = name;
        this.wins = wins;
        this.avg = avg;
        this.loss = loss;
    }
}


//From Swift (Player Mock data)
// var players: [Player] = [Player(id: "1", name: "Jeremy Skrdlant", win: 90, avg: 100, loss: 0), Player(id: "2", name: "Harlan Tasci", win: 100, avg: 100, loss: 0)]
const players: Player[] = [new Player("1", "Jeremy Skrdlant", 90, 100, 0), new Player("2", "Harlan Tasci", 100, 100, 0)];