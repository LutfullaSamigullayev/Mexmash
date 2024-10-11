import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { Card } from "./components/Card"


function App() {

  return (
    <div className=" w-full h-full  flex ">
      <Nav />
      <div className="w-full">
        <Header />
        <div className="border h-full border-red-500">
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default App
