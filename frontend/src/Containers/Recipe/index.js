// TODO Create a connected component to render a fetched recipe
import React, { Component, useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { RecipeWrapper } from "./styles"
import Button from "@material-ui/core/Button"
import * as actions from "../../actions"
import history from "../../history";

class Recipe extends Component {

    constructor(props) {
        super(props)
        this.fetchRecipe = this.fetchRecipe.bind(this)
        this.state = {
            name: "",
            instructions: "",
            ingredients: [],
        }
    }

    componentDidMount() {
        this.fetchRecipe();
    }

    fetchRecipe() {
        const recipe_id = window.location.pathname.replace("/recipe/", "");
        this.props.getRecipe(recipe_id);
    }

    render() {
        const { recipe, params_url } = this.props
        return (
            <RecipeWrapper>
                {recipe && recipe.map((_recipe) => (
                    <div key={_recipe._id}>
                        <h3>Recipe for {_recipe.name}</h3>
                        <h4>Ingredients:</h4>
                        <ul>
                            {_recipe.ingredients && _recipe.ingredients.map((ingredient) => (
                                <li key={ingredient._id}><strong>{ingredient.amount} {ingredient.unit}</strong> of <strong>{ingredient.name}</strong></li>
                            ))}
                        </ul>
                        <br />
                        <h4>Instructions:</h4>
                        {_recipe.instructions}
                    </div>
                ))}
                <br/>
                <Button onClick={() => history.push(params_url)} variant="outlined" color="primary" size="medium">
                    Return To Search
                </Button>

            </RecipeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const { search, recipe } = state
    return { ...search, ...recipe }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getRecipe: actions.getRecipe,
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)