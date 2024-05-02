import './App.css'
import Button from '@mui/material/Button';


function App() {

  let handelButton = () => {
    console.log("Button was clicked");
  };
  
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant='outlined' onClick={handelButton}>Click Me</Button>
    </>
  )
}

export default App
