import { combineReducers } from "redux";

import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryGetReducer,
  categoryListReducer,
  categorySubGetReducer,
  categoryUpdateReducer,
} from "./categoryReducer";
import {
  productCountReducer,
  productCreateReducer,
  productDeleteReducer,
  productGetReducer,
  productListByCountReducer,
  productListReducer,
  productUpdateReducer,
  productUpdateStarReducer,
} from "./productReducer";
import {
  subCategoryCreateReducer,
  subCategoryDeleteReducer,
  subCategoryGetReducer,
  subCategoryListReducer,
  subCategoryUpdateReducer,
} from "./subCategoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  category: categoryGetReducer,
  categoryUpdate: categoryUpdateReducer,
  categorySub: categorySubGetReducer,
  subCategoryCreate: subCategoryCreateReducer,
  subCategoryList: subCategoryListReducer,
  subCategory: subCategoryGetReducer,
  subCategoryUpdate: subCategoryUpdateReducer,
  subCategoryDelete: subCategoryDeleteReducer,
  productCreate: productCreateReducer,
  productListByCount: productListByCountReducer,
  productDelete: productDeleteReducer,
  productGet: productGetReducer,
  productUpdate: productUpdateReducer,
  productList: productListReducer,
  productCount: productCountReducer,
  productUpdateStar: productUpdateStarReducer,
});

export default reducer;
