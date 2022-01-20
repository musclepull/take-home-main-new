import React, { Component } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { HomeWrapper } from "./styles"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import RecipeList from "../RecipeList"
import * as actions from "../../actions"
import history from "../../history";

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"]

class Home extends Component {

  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleIngredient = this.handleIngredient.bind(this)
    this.fetchSearch = this.fetchSearch.bind(this)
    this.state = {
      term: "",
      ingredients: [],
      params: ""
    }
  }

  componentDidMount() {

    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get('term');
    const flour = queryParams.get('flour');
    const sugar = queryParams.get('sugar');
    const salt = queryParams.get('salt');
    const milk = queryParams.get('milk');
    const butter = queryParams.get('butter');

    if(term != null){  
        this.state.term = term;
        if(flour != null){
          this.state.ingredients.push("flour");
        }
        if(sugar != null){
          this.state.ingredients.push("sugar");
        } 
        if(salt != null){
          this.state.ingredients.push("salt");
        } 
        if(milk != null){
          this.state.ingredients.push("milk");
        } 
        if(butter != null){
          this.state.ingredients.push("butter");
        }   
        this.fetchSearch();
    }
}

  fetchSearch() {
    let count = this.state.ingredients.length - 1
    let appendParms = "";
    let baseParam = "/?term=" + this.state.term + "&";
    this.state.ingredients.forEach(function (item, index) {
      if(index === count){
        appendParms += (item + "=1")
      }
      else{
        appendParms += (item + "=1&")
      }
    })

    let fullParam = baseParam + appendParms;
    history.push(fullParam)
    this.props.searchRecipes(this.state.term, this.state.ingredients, fullParam);
  }
  handleSearch(event) {
    const term = event.target.value    
    this.setState({ term })
  }
  handleIngredient(ingredient, event) {
    const { ingredients } = { ...this.state }
    if (event.target.checked) {
      ingredients.push(ingredient)
    } else {
      const foundIngredient = ingredients.indexOf(ingredient)
      ingredients.splice(foundIngredient, 1)
    }
    this.setState({ ingredients })
  }
  render() {
    const { term, ingredients } = this.state
    const {isLoading,isDoneLoading } = this.props
    return (
      <HomeWrapper>
        <Input
          id="searchInput"
          autoFocus={true}
          fullWidth={true}
          onChange={this.handleSearch}
          value={term}
        />
        <div>
          <h3>Ingredients on hand</h3>
          {ingredientList.map((ingredient) => (
            <FormControlLabel
              key={ingredient}
              control={
                <Checkbox
                  checked={ingredients.includes(ingredient)}
                  onChange={this.handleIngredient.bind(this, ingredient)}
                  value={ingredient}
                />
              }
              label={ingredient}
            />
          ))}
        </div>
        <Button onClick={this.fetchSearch}>search</Button>
        <Divider />
        {isLoading && <LinearProgress />}
        <Divider />
        {/*
          TODO: Add a recipe component here.
          I'm expecting you to have it return null or a component based on the redux state, not passing any props from here
          I want to see how you wire up a component with connect and build actions.
        */
          isDoneLoading && <h3>Search Results</h3>}
          <RecipeList/>        
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { search } = state
  return { ...search }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchRecipes: actions.searchRecipes,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
