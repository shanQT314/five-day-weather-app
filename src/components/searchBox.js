import React, { Component } from "react";
import SearchInput from "./SearchInput";
import styles from "../styles";


class SearchBox extends Component {
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
            <div style={styles.SearchBoxDiv}>
                <h1>Enter a city and a state</h1>
                <SearchInput callBackFromParent={this.sendValueToParent} />
            </div> 
        );
    }
}

export default SearchBox;