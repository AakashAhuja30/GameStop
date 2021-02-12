const initState = {
    game:{},
    game_screenshot:{},
    isLoading:true,
}

const detailReducer = (state=initState,action) => {
    switch (action.type){
        case 'FETCH_DETAILS':
            return {...state,
                game:action.payload.detailGame,
                game_screenshot:action.payload.detailScreenshot,
                isLoading:false
            }
        
        case 'LOADING_DETAILS':
            return{
                ...state,
                isLoading:true
            }
        default:
            return {...state}
    }

};

export default detailReducer;