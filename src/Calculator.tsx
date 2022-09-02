import React , {useState} from 'react'

const Calculator = () => {
  const [userEnteringNums, setUserEnteringNums] = useState(true)
  const [numberOne, setNumberOne] = useState<number | null>(null)
  const [numberTwo, setNumberTwo] = useState<number | null>(null)

  const handleClick = (num1 : number) => () => setNumberOne(num1)

  const handleOperations = (e) => () =>{
    setUserEnteringNums(false)
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
      <button className="add-btn"     onClick={(e : Event) => console.log(e``)}>+</button>
    </div>
  )
}
export default Calculator