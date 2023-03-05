import {AnimatePresence} from 'framer-motion'
import {HomePage} from "./component/HomePage";
import {Navigate, Route, Routes, useLocation} from "react-router";
import {useMemo} from "react";
import {ImagePage} from "./component/ImagePage";

export const AnimatedRoutes = () =>{
    const useQuery = () => {
        const {search} = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery()

    return <AnimatePresence>
    <Routes>
        <Route path = "/home" element ={<HomePage/>}/>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="*" element={<Navigate to="home"/>}/>
        <Route path="/image/:index" element={<ImagePage/>}/>
    </Routes>
    </AnimatePresence>

}
