import Icon from "./Icon";
import { useEffect, useState } from "react";


function App() {
  let [msg, setMsg] = useState("");
  let msgArr = "🐝 Namaste, World!".split('');
  let [ptr, setPtr] = useState(-1);

  // Arnav says I need to use useEffect
  useEffect(() => {
    setTimeout(() => {
      if (ptr < msgArr.length - 1) {
        setPtr(ptr + 1);
        setMsg(msg + msgArr[ptr+1]);
      }
      else {
        setPtr(-1);
        setMsg('');
      }
    }, 500);
    return () => {
    }
  }, [ptr]);

  // setInterval(() => {
  //   setMsg(msg + msgArr[ptr]);
  //   // console.log(ptr);
  //   ptr++;
  // }, 1000);

  return (
    <>
      <button><div className="hand">👋🏻</div> Get in touch </button>
      <h1>
        {msg}
        <span id="cursor">|</span></h1>
      <div className="intro">
        i'm Razen
      </div>
      <div className="icons-container">
        <Icon iconName={'twitter'} className="icon" />
        <Icon iconName={'linkedin'} className="icon" />
        <Icon iconName={'github'} className="icon" />
      </div>
    </>
  );
}

export default App;
