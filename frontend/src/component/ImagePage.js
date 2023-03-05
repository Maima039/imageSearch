import {useDispatch, useSelector} from "react-redux";
import "./ImageList"
import {useParams} from "react-router";
import actions from "../actions";
import {useEffect} from "react";


export const ImagePage = () => {

    let Params = useParams()
    const {index} = Params
    let imageDetail = useSelector(s=>s?.fetchReducer?.list)[index]


    return (<>
            <div className="imagePage">
            <h2>{index}.{imageDetail?.des ? imageDetail?.des : 'No description'}</h2>
            <div className="imageList" style ={{background:`url('${imageDetail?.thumb}') no-repeat center ` }}>
            </div>
    </div>
        </>
    )
}
