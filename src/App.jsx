import {useEffect, useState} from 'react'
import './App.css'
import Button from "./Components/Button.jsx";

function App() {
  const [count, setCount] = useState(0)
  const tele = window.Telegram.WebApp

  useEffect(() => {
    tele.ready();
  }, []);

  const onCheckout = () => {
    tele.MainButton.text = 'Pay now';
    tele.MainButton.show();
  }
  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        Increment count
      </Button>
      <Button onClick={onCheckout}>
        Checkout
      </Button>
      <p>Count is: {count}</p>
    </>
  )
}

export default App
