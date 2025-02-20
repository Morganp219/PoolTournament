//
//  Player.swift
//  PoolTV
//
//  Created by Morgan Pritchard on 2/20/25.
//


struct Player {
    let id: String
    var name: String
    var win: Double
    var avg: Double
    var loss: Double
}

var players: [Player] = [Player(id: "1", name: "Jeremy Skrdlant", win: 90, avg: 100, loss: 0), Player(id: "2", name: "Harlan Tasci", win: 100, avg: 100, loss: 0)]
