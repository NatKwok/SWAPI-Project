import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
} from "@mui/material";

function People() {
  const [data, setData] = useState([]);

  //Retreive Data from Endpoint API
  const fetchData = async () => {
    fetch("https://swapi.tech/api/people?format=json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      });
  };

  //useEffect to call the function
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="text">List of People</h1>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1.25rem",
                },
              }}
            >
              <TableCell align="right">UID</TableCell>
              <TableCell align="right">Name</TableCell>

              <TableCell align="right">URL</TableCell>
            </TableHead>

            {data.map((item, index) => (
              <TableBody key={index.uid}>
                <TableCell align="right">{item.uid}</TableCell>
                <TableCell align="right">{item.name}</TableCell>

                <TableCell align="right">{item.url}</TableCell>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default People;
