const Game = require('../src/game').default

describe('Game', () => {
  let game, p1, p2
  beforeEach(() => {
    p1 = 'Salem'
    p2 = 'Nate'
    game = new Game(p1, p2)
  })

  describe('turn', () => {
    it("Inserts an 'X' into the top center", async () => {
      game.turn(0, 1)
      expect(game.board[0][1]).toBe('X')
    })

    it("Inserts an 'X' into the top left", async () => {
      game.turn(0)
      expect(game.board[0][0]).toBe('X')
    })
  })

  describe('hasWinner', () => {
    it('Wins if any row is filled', async () => {
      for (let r = 0; r < game.board.length; r++) {
        for (let c = 0; c < game.board[r].length; c++) {
          game.board[r][c] = 'X'
        }
        expect(game.hasWinner()).toBe(true)

        for (let c = 0; c < game.board[r].length; c++) {
          game.board[r][c] = null
        }
      }
    })

    it('Wins if any column is filled', async () => {
      for (let r = 0; r < game.board.length; r++) {
        for (let c = 0; c < game.board[r].length; c++) {
          game.board[c][r] = 'X'
        }
        expect(game.hasWinner()).toBe(true)

        for (let c = 0; c < game.board[r].length; c++) {
          game.board[c][r] = null
        }
      }
    })

    it('Wins if down-left diagonal is filled', async () => {
      for (let r = 0; r < game.board.length; r++) {
        game.board[r][r] = 'X'
      }
      expect(game.hasWinner()).toBe(true)
    })

    it('Wins if up-right diagonal is filled', async () => {
      for (let r = 0; r < game.board.length; r++) {
        game.board[2 - r][r] = 'X'
      }
      expect(game.hasWinner()).toBe(true)
    })
  })
})
