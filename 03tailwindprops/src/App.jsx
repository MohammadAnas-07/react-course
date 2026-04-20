
import './App.css'
import Card from './components/Card'

let myObj = {
  name: 'Anas',
  age: 25,
  address: {
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India'
  }
}
let newArr = [1,2,3,4,5,6,7,8,9]

function App() {

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="Anas" myArr={newArr}/>
    <Card username='Json' post='Staff Engineer'/>
    <Card/>
    </>
  )
}

export default App
