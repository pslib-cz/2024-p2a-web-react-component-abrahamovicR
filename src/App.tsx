import './App.css'
import ViewBox from './components/PercentView'




const App = () => {
  let cislo: number = 33

  return (
    <>
      <ViewBox value={20} max={100} makeColor={(p) => `hsl(80,100%,${p*50}%)`}/>
      <ViewBox value={60} max={100} makeColor={(p) => `hsl(80,100%,${p*50}%)`}/>
      <ViewBox value={90} max={100} makeColor={(p) => `hsl(80,100%,${p*50}%)`}/>
    </>
  )
}

export default App