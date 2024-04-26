
// single selection 
// Mulptiple selection

import { useState } from "react"
import data from "./data"
import './styles.css';


export default function Accordian(){
    
    const [selected , setSelected] = useState(null)
    const[multiSelection, setMultiSelection] = useState(false)
    const[multiple, setMultiple] = useState([]);

    function singleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const  findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        
        setMultiple(cpyMultiple)

    }

    return <div className="wrapper">
        <button onClick={() => setMultiSelection(!multiSelection)}> { multiSelection ? "Disable Multi select" : "Enable Multi Select"}</button> 
        <div className="accordian">
            {
                data && data.length > 0 ? // check if data is present or not
                data.map(dataItem => <div  key={dataItem.id}  className="item">  
                            <div  onClick={multiSelection ? 
                                           () => handleMultiSelection(dataItem.id)
                                           :() => singleSelection(dataItem.id)} className="title">
                                <h3 > {dataItem.Question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                                <div className="content">
                                    {dataItem.answer}
                                    </div>
                                : null
                            }
                        </div>)
                        : <div> No data found </div>
            }
        </div>

    </div>
   
}