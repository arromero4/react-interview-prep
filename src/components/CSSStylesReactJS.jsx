import React, {useState} from "react";
import "../App.css";
function CSSStylesReactJS() {

  const [theme, setTheme] = useState(false)

  const styles = {
    internal: {
      color: "blue",
    },
    dark: {
      backgroundColor: 'white',
      color: 'black'
    },
    ligth:{
      backgroundColor: 'black',
      color: 'white'
    }
  };

  const toggleTheme = () => {
    setTheme(!theme)
  }
  return (
    <div>
      <h1>External style with import</h1>
      <h2 
      style={theme ? styles.dark:styles.ligth}>Internal using toggle button
      </h2>
      
      <h3 style={{ color: "green"}}>Inline</h3>

      <button
      className="btn btn-warning"
      onClick={toggleTheme}
      >Toggle button with Bootstrap</button>
    
    </div>
  );
}

export default CSSStylesReactJS;
