import React from 'react'

const Calculator = () => {
  const handleClick = (number) => () =>{
    console.log(number)
  }
  return (
    <div>
      <button className="normal-btns" onClick={handleClick(1)}>1</button>
      <button className="normal-btns" onClick={handleClick(2)}>2</button>
      <button className="normal-btns" onClick={handleClick(3)}>3</button>
      <button className="normal-btns" onClick={handleClick(4)}>4</button>
      <button className="normal-btns" onClick={handleClick(5)}>5</button>
      <button className="normal-btns" onClick={handleClick(6)}>6</button>
      <button className="normal-btns" onClick={handleClick(7)}>7</button>
      <button className="normal-btns" onClick={handleClick(8)}>8</button>
      <button className="normal-btns" onClick={handleClick(9)}>9</button>
      <button className="normal-btns" onClick={handleClick(0)}>0</button>
    </div>
  )
}
export default Calculator