
const colorHoverReducer=(state=null,action)=>{
    switch(action.type){
        case'SET_HOVER_COLOR':
            return action.data
        default:
            return state;
    }
}
export default colorHoverReducer;