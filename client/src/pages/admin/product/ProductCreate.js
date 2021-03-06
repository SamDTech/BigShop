import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/Nav/AdminNav";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import {
  EditOutlined,
  DeleteOutlined,
  LaptopOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";
import { productCreate } from "../../../actions/productActions";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import {
  categoryGetSubs,
  categoryList,
} from "../../../actions/categoryActions";
import FileUpload from "../../../components/forms/FileUpload";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["black", "brown", "silver", "white", "blue"],
  brands: ["Apple", "Lenovo", "Samsung", "Microsoft", "ASUS"],
  color: "",
  brand: "",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { product, success, error } = useSelector(
    (state) => state.productCreate
  );

  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = useSelector((state) => state.categoryList);

  const {
    loading: loadingCategorySubs,
    error: errorCategorySubs,
    subs,
  } = useSelector((state) => state.categorySub);

  useEffect(() => {
    dispatch(categoryList());
    if (categories) {
      setValues({ ...values, categories: categories });
    }
  }, [values.title]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch create product actions
    dispatch(productCreate(userInfo.token, values));
    // window.alert(`${product.title} created!`);
    toast.success("product created");

    if (error) {
      toast.error(error);
    
    } 
    // else {
    //   window.location.reload();
    // }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });

    dispatch(categoryGetSubs(e.target.value));
    setShowSub(true);
  };
  useEffect(() => {
    if (subs) {
      setSubOptions(subs);
    }
  }, [subs, values.category]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-red h1" />
          ) : (
            <h4>Product Create</h4>
          )}
          <hr />
          <div className="p-3">
            <FileUpload
              values={values}
              setLoading={setLoading}
              setValues={setValues}
            />
          </div>
          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            handleCategoryChange={handleCategoryChange}
            subOptions={subOptions}
            showSub={showSub}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
