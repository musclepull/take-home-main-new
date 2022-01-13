
import React, { Component } from "react"
import { connect } from "react-redux"
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom";

class RecipeList extends Component {

  render() {
    const { recipes } = this.props
    if (recipes) {
      return (
        <TableContainer component={Paper}>
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Name:</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipes && recipes.map((recipe) => (

                <TableRow
                  key={recipe._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    {recipe._id}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {recipe.name}
                  </TableCell>
                  <TableCell align="center">
                    <Link to={'/recipe/' + recipe._id} style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary" size="medium">
                        View Recipe
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    }
    else {
      return (
        <div></div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  const { search } = state
  return { ...search }
}


export default connect(mapStateToProps)(RecipeList)


