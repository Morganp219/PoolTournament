export class Game {
    gameType: GameType;
    gameId: string;
    solidPlayerId: string;
    stripePlayerId: string;

    constructor(gameType: GameType, gameId: string, solidPlayerId: string, stripePlayerId: string) {
        this.gameType = gameType;
        this.gameId = gameId;
        this.solidPlayerId = solidPlayerId;
        this.stripePlayerId = stripePlayerId;
    }
}

enum GameType {
    NORMAL,
    EIGHTBALL,
    NINEBALL
}





// From Swift (Game Mock Data)
// var games: [Game] = [Game(gameId: "1", gameType: .NORMAL, solidPlayerId: "1", stripePlayerId: "2", winnerId: "1"), Game(gameId: "2", gameType: .NINEBALL, solidPlayerId: "2", stripePlayerId: "1", winnerId: "2")]
const games: Game[] = [new Game(GameType.NORMAL, "1", "1", "2"), new Game(GameType.NINEBALL, "2", "2", "1")];