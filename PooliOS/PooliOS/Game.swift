//
//  Game.swift
//  PooliOS
//
//  Created by Morgan Pritchard on 2/20/25.
//

enum GameType {
    case NORMAL, EIGHTBALL, NINEBALL
}

struct Game {
    let gameId: String
    var gameType: GameType
    var solidPlayerId: String
    var stripePlayerId: String
    var winnerId: String
}

var games: [Game] = [Game(gameId: "1", gameType: .NORMAL, solidPlayerId: "1", stripePlayerId: "2", winnerId: "1"), Game(gameId: "2", gameType: .NINEBALL, solidPlayerId: "2", stripePlayerId: "1", winnerId: "2")]
