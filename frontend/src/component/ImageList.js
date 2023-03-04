import {useDispatch, useSelector} from "react-redux";
import './ImageList.css'
import actions from "../actions";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export const ImageList=()=>{

    let list = useSelector(s=>s.fetchReducer.list)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    useEffect(()=>{dispatch(actions.fetchAction.saveImage(list))},[list])

    return(
        <div className="imageContainer">
            {list&& list.map((img,index)=><div className="imageList" key ={index}
            style ={{background:`url('${img?.thumb}') no-repeat center center/cover fixed`}}
            onClick={()=>{
                navigate(`/image/${index}`)
            }}
            >
            </div>)}
        </div>
    )
}