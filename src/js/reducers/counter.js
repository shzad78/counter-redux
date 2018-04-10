import { addOne, subtractOne } from '../constants'

const counter= function(state=0, action ){

switch (action.type){
case addOne: 
    {
return state +1
}
case subtractOne:
 {
return state - 1
}

}
return state;
}
export default counter ;