import axios from "axios";
import {BasicUrl, AccessKey} from "../helper";
import {actionType} from "../helper";

const fetchImage = (param) =>async dispatch=>{
    await axios.get(BasicUrl,{
        params:{
            query: param,
            orientation: 'landscape'
        },
        headers: {
            Authorization: `Client-ID ${AccessKey}`
        }
    })
        .then(res => {
            let {data:{results}} = res
            let imageList = results.map(item=>({
                des:item.alt_description,
                thumb: item.urls.thumb,
            }))
            dispatch({
                type: actionType.FETCH_IMAGE,
                payload: imageList
            })
            dispatch({
                type: actionType.FETCH_PARAM,
                payload: param
            })
        })
        .catch(e => {})
}


const saveImage = (list) => async dispatch=>{
    list?.forEach( (img,index)=>{
        axios.post(`http://localhost:3000/image`,{
            index:index,
            des:img.des,
            url:img.thumb
        }).catch(e=>
        console.log(e))}
    )
}


const clearImage = () => dispatch=>{
    dispatch({
        type: actionType.FETCH_IMAGE,
        payload: []
    })
}

const clearDatabase = async ()=> {
    await axios.delete(`http://localhost:3000/image`).catch(e=>console.log(e))
}



export default {
    fetchImage,
    saveImage,
    clearImage,
    clearDatabase
}
