import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Result from "../components/Result";

function Home() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }



    return <>
           <div className="main">
      <h1>SWAPI Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search People"
        />
      </div>
      <Result input={inputText}/>
    </div>
    </>
}

export default Home;