import { addOne, subtractOne } from '../constants'

export function addOnetoCounter(){
  return { 
    type: addOne
  }

}
export function subtractOnetoCounter(){
   return { 
     type: subtractOne
   }
}