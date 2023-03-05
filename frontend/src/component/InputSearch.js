import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './InputSearch.css'
import actions from "../actions";

export const InputSearch =()=>{
    const[param,setParam] = useState('')
    let dispatch = useDispatch()

    const cbInput = () =>{
        dispatch(actions.fetchAction.fetchImage(param))
    }

    let searchParam = useSelector(s=>s.fetchReducer.param)

    const cbReset =()=>{
        dispatch(actions.fetchAction.clearImage())
        document.getElementById("myForm").reset()
        dispatch(actions.fetchAction.clearDatabase)
    }

    return (
        <div className="inputSearch">
            <h1>Image Search Website</h1>
            <form className="inputForm" id="myForm" action="#" onSubmit={cbInput}>
                <input className="searchInput" type="text" placeholder="Please search here" onChange={e=>setParam(e.target.value)}/>
                <input className="searchButton" type="submit" placeholder="Search"/>
            </form>
            <button className="resetButton" onClick={cbReset}>Reset</button>
            {searchParam && <h2>Results for: {searchParam}</h2>}
        </div>
    )
}
