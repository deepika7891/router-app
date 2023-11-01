import React, { useState, useEffect } from 'react';


function ToDo() {

  const [list, setlist] = useState("");
  const [listdata, setlistdata] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false)

  const addTask = () => {
    setlistdata([...listdata, list]);
    setlist('');
    localStorage.setItem("data", JSON.stringify([...listdata, list]));
  }
  // add a list in array 


  // remove a list data 
  const removeTask = (index) => {
    const updatedTasks = listdata.filter((_, i) => i !== index);
    setlistdata(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));
  };

  const editTask = (index) => {
    setEditIndex(index);
    setlist(listdata[index]);
    setIsEdit(true)
  }

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data && data.length > 0) {
      setlistdata(data);
    }
  }
  
  const save = () => {
    listdata[editIndex] = list;
    localStorage.setItem("data", JSON.stringify(listdata));
    getData()
    setlist("")
    setIsEdit(false)
  }


  return (
    <>
      <div className='container-fluid'>
        <div className='todo-container'>
          <h1 style={{ marginLeft: "20px", fontWeight: "500" }}>  Todo List</h1>

          {/* type custom list  */}
          <textarea type="textarea" placeholder='Add Activity' className='todo-text' value={list}
            onChange={e => setlist(e.target.value)} />
          {/* add Button */}
          {isEdit ?
            <button className='add-btn' onClick={save}>save</button>
            :
            <button className='add-btn' onClick={addTask}>Add</button>
          }

          <ul className='todo-ul'>
            {listdata && listdata.map((data, i) => (
              <li className='todo-li' key={i}>
                {data}

                <button className='closebtn' onClick={() => removeTask(i)}>X</button>
                <button className='closebtn' onClick={() => editTask(i)}>Edit</button>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


export default ToDo;