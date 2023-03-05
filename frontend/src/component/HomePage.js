import {ImageList} from "./ImageList";
import {motion} from 'framer-motion';
import {InputSearch} from "./InputSearch";
import './HomePage.css'

export const HomePage=()=>{
    document.title = "Home Page"
    return(
        <motion.div>
        <div className="homePage">
            <InputSearch/>
            <ImageList/>
        </div>
        </motion.div>
    )
}
