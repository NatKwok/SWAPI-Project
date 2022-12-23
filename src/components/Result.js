import { React, useState, useEffect } from 'react'


function Result(props) {

    const [data, setData] = useState([]);
    const fetchData = async () => {
      fetch("https://swapi.tech/api/people?format=json", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.results);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <ul>
            {data.map((item) => (
                <li key={item.uid}>{item.name}</li>
            ))}
        </ul>
    )
}

export default Result;