import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick (){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('another button clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=> alert('third clicked')}>Third</button>
      {/* vejailla */}
      <button onClick={()=> addToFive(3)}>Fourth</button>
    </>
  )
}

export default App
