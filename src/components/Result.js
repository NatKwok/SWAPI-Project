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

    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.uid}>{item.name}</li>
            ))}
        </ul>
    )
}

export default Result;