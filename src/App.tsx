import './App.css'
import {TestComponent} from "./Components/TestComponent.tsx";
import {Slot} from "./Components/Slot.tsx";

function App() {

  return (
    <>
        <TestComponent />
        <TestComponent>
            <Slot name={'heading'}>
                <h1>Custom slotted title</h1>
            </Slot>
        </TestComponent>
    </>
  )
}

export default App
