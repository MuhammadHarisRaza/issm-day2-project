import React from 'react'
import { Hero, Navbar } from './components'
import styles from "./style"
import "./index.css"
import { data } from './constants'
import Card from './components/Card'

const App = () => {

  console.log(data)
  return (
    <div >
      <Navbar />
      <Hero />
      <div className="flex flex-wrap sm:justify-start  overflow-x-scroll relative z-[1]">
        {data.map((data) => <Card data={data} />)}
      </div>
    </div>
  )
}

export default App