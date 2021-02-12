import axios from 'axios';
import {gameDetailsUrl,gameScreenshotUrl} from '../api';

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type:'LOADING_DETAILS'
       })

    const detailData = await axios.get(gameDetailsUrl(id));
    const detailScreenshot = await axios.get(gameScreenshotUrl(id));

    dispatch({
        type:'FETCH_DETAILS',
        payload: {
           detailGame: detailData.data,
           detailScreenshot:detailScreenshot.data.results
        }
       })
};
