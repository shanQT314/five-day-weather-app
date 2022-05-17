import React, { Component } from "react";
import SearchInput from "./SearchInput";
import styles from "../styles";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.sendValueToParent = this.sendValueToParent.bind(this);
  }

  sendValueToParent(event) {
    this.props.callBackFromParent(event);
  }

  render() {
    return ( 
      <div style={styles.SearchBar}>
        <h2>React Weather App</h2>
        <SearchInput style={styles.headerForm} callBackFromParent={this.sendValueToParent} />
      </div>
    );
  }
}

export default SearchBar;
