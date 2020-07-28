import { useState ,useEffect} from "react"
import getGifs from './../_helpers/getGifs';
export const useFecthGifs = (category) => {

    const [state , setState] =useState({
        data: [],
        loading: true
    });
      useEffect( ()=> {
        getGifs(category).then( imgs => {
            setState({
                data: imgs,
                loading: false
            });
        })
     }, [category]);
    return state
}

export default useFecthGifs;