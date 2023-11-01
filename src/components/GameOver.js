import './GameOver.css'


const GameOver = ({retry}) => {
  return (
    <div>
      <h1>end</h1>
      <h1>game</h1>
     <button onClick={retry}>resetar jogo</button>

    </div>
  )
}

export default GameOver
