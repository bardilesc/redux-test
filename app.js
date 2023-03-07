const createStore =  require("redux").createStore;
const combineReducers =  require("redux").combineReducers;

/// #### Actions    
const buy_rp = 'BUY_RP'
const donate_rp = 'DONATE_RP'

const buy_rp_action = (qty)=>{
    return{
        type:"BUY_RP",
        payload: qty
    }
}

const donate_rp_action = (qty)=>{
    return{
        type:"DONATE_RP",
        payload: qty
    }
}

/// #### Reducers
const default_rp_state = {
    rp: 1000,
    hextech: 0
}

const rp_reducer = (state = default_rp_state, action)=>{
    switch(action.type){
        case "BUY_RP":{
            return{
                ...state, // para mantener los estados anteriores como hextech
                rp: state.rp + action.payload
            }
        }
        case "DONATE_RP":{
            return{
                ...state, // para mantener los estados anteriores como hextech
                rp: state.rp - action.payload
            }
        }
        default: return state
    }
}

const default_exp_games_state = {
    wildrift: "Bronce",
    lol: "Unranked"
}

const default_exp_games_reducer = (state = default_exp_games_state, action) => {
    switch(action.type){
        default: return state
    }
}

const rootReducers = combineReducers({
    rp_reducer,
    default_exp_games_reducer
})

/// #### Store
const store = createStore(rootReducers)

store.subscribe(()=>{
    console.log("Quantity ", store.getState());
} )

store.dispatch(buy_rp_action(1000))
store.dispatch(donate_rp_action(2000))



