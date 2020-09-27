
const colorReducer=(state=null,action)=>{
    switch(action.type){
        case'SET_COLOR':
            return action.data
        default:
            return state;
    }
}
export default colorReducer;