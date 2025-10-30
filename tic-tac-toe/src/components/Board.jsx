function Board({ squares, onClick, winningLine }) {
  return (
    <div className="grid grid-cols-3 gap-2 w-72 h-72 mx-auto">
      {squares.map((square, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`text-5xl font-bold border-4 rounded-lg transition-all ${
            winningLine?.includes(i)
              ? 'bg-green-100 border-green-500'
              : 'bg-white border-gray-300 hover:bg-gray-50'
          } ${square === 'X' ? 'text-blue-600' : 'text-red-600'}`}
        >
          {square}
        </button>
      ))}
    </div>
  )
}

export default Board
