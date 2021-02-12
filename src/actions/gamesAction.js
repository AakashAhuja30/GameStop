import axios from 'axios';
import {popularGamesUrl,upcomingGamesUrl,newGamesUrl,searchGameUrl} from '../api';

// Action Creater -  a function that returns an action object
export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newData = await axios.get(newGamesUrl());
    

    dispatch({
         type:'FETCH_GAMES',
         payload: {
            popularGames: popularData.data.results,
            upcomingGames: upcomingData.data.results,
            newGames: newData.data.results
         }
        })
};

export const fetchSearch = (game_name) => async(dispatch) => {

   const searchedData = await axios.get(searchGameUrl(game_name));

   dispatch({
      type:'FETCH_SEARCHED',
      payload: {
         searched:searchedData.data.results
      }
     })

}


// ACTION

// Dispatch sends the action object to the reducer


