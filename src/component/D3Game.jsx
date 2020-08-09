import React, {useState, useEffect} from 'react'
import {Dropdown, DefaultButton, PrimaryButton, Stack } from "office-ui-fabric-react"

const D3Game = () => {
  const initialState = {
    initialize: false,
    n: undefined,

  }
  const [state, setstate] = useState(initialState)
  const options = [
    {key: "2", text: "2"},
    {key: "5", text: "5"},
    {key: "10", text: "10"},
    {key: "20", text: "20"},
    {key: "26", text: "26"}
  ]
  const dropdownStyles = {
    dropdown: {width: 400, margin: "10px auto 10px auto"}
  }
  const onChangeNumberRobot = (event, item) => {
    if (!item) {return}
    setstate(s => ({...s, n: item.key.toString()}))
  }
  
  const setRobot = () => { setstate(s => ({...s, initialize: true}))}
  const startGame = () => {
    
  }




  return (
    <div>
      <section>
        <Stack horizontal tokens={{childrenGap: 50}}>
          <Dropdown 
            placeholder="Select a number"
            label="How many robots do you want to create?"
            onChange={onChangeNumberRobot}
            options={options}
            styles={dropdownStyles} />
          <DefaultButton text="Initialize Game" onClick={setRobot} disabled={!state.n}/>
          <PrimaryButton text="Start Combat" onClick={startGame} disabled={!state.initialize}/>
        </Stack>
      </section>
      <section>

      </section>

    </div>
    
  )
}

export default D3Game