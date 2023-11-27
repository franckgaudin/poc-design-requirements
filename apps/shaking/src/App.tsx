import { Button } from "@caoua/latte";

function App() {

  return (
    <>
        <h1>Hello!</h1>
        <Button onPress={() => console.log("click me!")} children="Press me" />
    </>
  )
}

export default App
