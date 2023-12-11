import { useState } from 'react'
import IdCard from './components/IdCard.jsx' 
import Greetings from './components/Greetings.jsx'
import Random from './components/RandomValue.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const idCards = [
  {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg",
},

{  
lastName:'Delores ',
firstName:'Obrien',
gender:'female',
height:172,
birth: new Date("1988-05-11"),
picture:"https://randomuser.me/api/portraits/women/44.jpg"},

]


  return (
    <div>
     
    {idCards.map((card, index) => (
      <IdCard key={index} {...card} />
    ))}
      
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

    </div>
    
  )
}

export default App
