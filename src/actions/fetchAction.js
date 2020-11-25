import axios from "axios";
import {GET_FEEDS} from "./types";


export const getFeeds = () => async (dispatch) => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list?page&limit=100" ,
      );
      console.log(res)
  
      if (res) {
        const feeds =  await res.data;

        console.log(feeds,"action")

        dispatch({
          type: GET_FEEDS,
          payload: feeds
          
        });
      
   
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  