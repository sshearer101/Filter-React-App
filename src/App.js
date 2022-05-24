import React, { useState } from "react";

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list)

  function handleChange(e){
if(e.target.value === ''){
  setFilterList(list)
}
const newFilter = list.filter(item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
setFilterList(newFilter)
  }

  return(
    <div className=".app">
      <input 
        type="text"
        onChange={handleChange}
      >
      </input>
      <div>
        {filterList.map((item, id) => 
        <div key={id}>
        {item}
        </div>
          )}
      </div>
    </div>
  )
}

export default App;