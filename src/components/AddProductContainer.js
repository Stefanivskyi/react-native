import { connect } from 'react-redux'
import { addProduct } from '../actions/index'
import AddProduct from './AddProduct'

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (title) => {
      dispatch(addProduct(title))
    }
  }
}
const AddProductContainer = connect(
    null,
    mapDispatchToProps
)(AddProduct)

export default AddProductContainer
