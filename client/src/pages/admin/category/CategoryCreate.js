import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/Nav/AdminNav";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  categoryCreate,
  categoryDelete,
  categoryList,
} from "../../../actions/categoryActions";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const CategoryCreate = () => {
  const [name, setName] = useState("");

  //   step1 - create a keyword state
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, success } = useSelector(
    (state) => state.categoryCreate
  );
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = useSelector((state) => state.categoryList);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.categoryDelete);

  useEffect(() => {
    dispatch(categoryList());

    if (successDelete) {
      dispatch(categoryList());
    }
  }, [dispatch, successDelete]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(categoryCreate(userInfo.token, name));
    setName("");
  };

  const deleteHandler = (slug) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(categoryDelete(userInfo.token, slug));
    }

    if (successDelete) {
      toast.success("Deleted Successfully");
      dispatch(categoryList());
    } else if (errorDelete) {
      toast.error(error);
    }
  };

  // step 4
  const searched = (keyword) => (check) => {
   
    return check.name.toLowerCase().includes(keyword);
  };
  
  useEffect(() => {
    if (success) {
      toast.success("Category Created");
      dispatch(categoryList());
    } else if (error) {
      toast.error(error);
    }
  }, [dispatch, error, success]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h4>Create Category</h4>

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            btn='Create'
          />

          {/* step2  and step3 create input field */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

      

          {loadingCategories ? (
            <Loader />
          ) : errorCategories ? (
            <Message>{errorCategories}</Message>
          ) : (
            categories.filter(searched(keyword)).map((cat) => (
              <div key={cat.slug} className="alert alert-secondary">
                {cat.name}
                <span
                  className="float-right btn btn-sm"
                  onClick={() => deleteHandler(cat.slug)}
                >
                  {" "}
                  <DeleteOutlined className="text-danger" />{" "}
                </span>
                <Link to={`/admin/category/${cat.slug}`}>
                  {" "}
                  <span className="float-right btn btn-sm">
                    {" "}
                    <EditOutlined className="text-warning" />{" "}
                  </span>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
