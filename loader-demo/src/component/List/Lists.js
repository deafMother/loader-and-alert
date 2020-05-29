import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../action";
import List from "./List";
import Loader from "../Loader/Loading";

const FetchList = ({ fetchPosts, loading }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(loading);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <List />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.loader,
  };
};

export default connect(mapStateToProps, { fetchPosts })(FetchList);
