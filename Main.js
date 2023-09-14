import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./index.css';

function Main() {
    const[taskname , settaskname]=useState('')
    const[tasklist , settasklist]=useState([])
    
    function addtask()
    {
      settasklist([...tasklist , taskname])
    }

    const tasklistcontent = tasklist.map((task , index)=>{
        return(
            <div>
                <p>{task}</p>
                <button onclick={()=>deletetask(index)}>delete</button>
            </div>
        )
     })

    function deletetask(index)
    {
        var duparray = [...tasklist]
        duparray.splice(index , 1)
        settasklist(duparray)
     }

    return(
        <div className='row d-flex container'>
            <div className='text-bolder'>
                <h1 class="head">TODO LIST</h1>
            </div>
            <div className='d-flex'>
            <div  className='col-md-10'>
                 <input className="box" type="text" placeholder='enter task' value={taskname}
                onChange={(e)=>{settaskname(e.target.value)}}
                />
            </div>
                <button className='btn' onClick={addtask}>ADD</button>

                <br/>
                <div className = 'row d-flex'>
                {tasklistcontent}
                </div>
            </div>
        </div>
    );
}
export default Main;