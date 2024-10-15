import { useState } from 'react'
import './App.css'
import BodyLeft from './components/BodyLeft/BodyLeft'
import BodyRight from './components/BodyRight/BodyRight'
import Navbar from './components/navbar/Navbar'

function App() {
const [ saveInfo, setSaveInfo] = useState([])

  return (
    <div className='max-w-[1280px] mx-auto'>
      <Navbar></Navbar>
      <div className='w-full border-t border-[#11111126] xl:my-8 lg:my-5 my-4'></div>
      <div className='md:flex justify-between lg:mx-3 md:mx-2 mx-2'>
        <div>
          <BodyLeft  saveInfo={ saveInfo}  setSaveInfo={setSaveInfo}></BodyLeft>
        </div>
        <div>
          <BodyRight saveInfo={ saveInfo}></BodyRight>
        </div>
      </div>
    </div>
  )
}

export default App
