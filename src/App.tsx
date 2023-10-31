import { useState } from 'react';
import './App.css';
import Square from './Square';
function App() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [currenPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | ''>('');
  function handleClick(insertAt: number) {
    if (calculateWinner(squares) || squares[insertAt] !== "")
      return

    const nextArtists = [
      ...squares.slice(0, insertAt),
      currenPlayer,
      ...squares.slice(insertAt + 1)
    ];

    setSquares(nextArtists);

    let winner = (calculateWinner(nextArtists) as 'X' | 'O' | '');
    if (winner)
      setWinner(winner);
    if (currenPlayer === 'X')
      setCurrentPlayer('O');
    else
      setCurrentPlayer('X');

  }

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  const handleReset = () => {
    setSquares(Array(9).fill(''));
    setWinner('');
    setCurrentPlayer('X');
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', backgroundColor: '#00c0a4', height: '100vh' }}>
      <div style={{ fontSize: '1.5rem', color: 'white' }}>{winner ? `Winner is ${winner}` : !squares.includes('') ? 'Game is draw reset the game to continue' : `Player ${currenPlayer}'s turn`}</div>
      <div style={{ display: 'inline-block' }}>
        <div className='border-bottom'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} styles={{ borderRight: '5px solid rgb(243, 106, 106)', borderTopRightRadius: '5px' }} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} styles={{ borderRight: '5px solid rgb(243, 106, 106)', borderTopRightRadius: '5px' }} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className='border-bottom'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} styles={{ borderRight: '5px solid rgb(243, 106, 106)' }} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} styles={{ borderRight: '5px solid rgb(243, 106, 106)' }} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div >
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} styles={{ borderRight: '5px solid rgb(243, 106, 106)', borderBottomRightRadius: '5px' }} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} styles={{ borderRight: '5px solid rgb(243, 106, 106)', borderBottomRightRadius: '5px' }} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button onClick={() => handleReset()} style={{ backgroundColor: 'rgb(243, 106, 106)', fontSize: '1.5rem', border: 'none', borderRadius: '5px', color: 'white' }}>Reset the Game</button>
    </div >
  );
}

export default App;
