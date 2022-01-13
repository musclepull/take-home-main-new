import { GET_SEARCH, RECEIVE_SEARCH, FAIL_SEARCH } from "../actions"

const initialState = {
  recipes: null,
  isLoading: false,
  isDoneLoading: false,
  params_url: "",
  error: null,
}

const searchFetching = (state, payload) => {
  return { ...state, isLoading: true, params_url: payload }
}

const searchFetched = (state, payload) => {
  return { ...state, isLoading: false, isDoneLoading: true, recipes: payload }
}

const searchFailed = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH:
      return searchFetching(state,payload)
    case RECEIVE_SEARCH:
      return searchFetched(state, payload)
    case FAIL_SEARCH:
      return searchFailed(state, payload)
    default:
      return state
  }
}
