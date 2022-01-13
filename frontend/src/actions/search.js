export const GET_SEARCH = "GET_SEARCH"
export const RECEIVE_SEARCH = "RECEIVE_SEARCH"
export const FAIL_SEARCH = "FAIL_SEARCH"

const fetchingSearch = (payload) => ({
  type: GET_SEARCH,
  payload,
})

const fetchedSearch = (payload) => ({
  type: RECEIVE_SEARCH,
  payload,
})

const failedSearch = (payload) => ({
  type: FAIL_SEARCH,
  payload,
})

export const executeSearch = async (name, ingredients) => {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, ingredients }),
  })
  const searchResults = await response.json()
  return searchResults
}

// TODO: fix action
export const searchRecipes = (name, ingredients, params_url) => {
  return (dispatch) => {
    dispatch(fetchingSearch(params_url));
    executeSearch(name, ingredients)
      .then((res) => dispatch(fetchedSearch(res)))
      .catch((err) => dispatch(failedSearch(err)))
  }
}
