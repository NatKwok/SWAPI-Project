import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Result from "../components/Result";

function Home() {





    return <>
           <div className="main">
      <h1>SWAPI Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"

          variant="outlined"
          fullWidth
          label="Search People"
        />
      </div>
      <Result />
    </div>
    </>
}

export default Home;