/*
  TODO: Create reducer and state updates here for recipe
*/


import { GET_RECIPE, RECEIVE_RECIPE, FAIL_GET_RECIPE } from "../actions"

const initialState = {
  recipe: null,
  error: null,
}

const fetchingRecipe = (state) => {
  return { ...state}
}

const recipeFetched = (state, payload) => {
  return { ...state, recipe: payload }
}

const recipeFetchFailed = (state, payload) => {
  return { ...state, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return fetchingRecipe()
    case RECEIVE_RECIPE:
      return recipeFetched(state, payload)
    case FAIL_GET_RECIPE:
      return recipeFetchFailed(state, payload)
    default:
      return state
  }
}
