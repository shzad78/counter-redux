import { addOne, subtractOne } from '../constants'

export function addOneToCounter() {
  return {
    type: addOne,
    payload: 1
  }
};

export function subtractOneToCounter() {
  return {
    type: subtractOne,
    payload: 1
  }
};