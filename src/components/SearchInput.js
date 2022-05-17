import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styles from "../styles";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "",
          warning: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.sendValueToParent = this.sendValueToParent.bind(this);
      }

    handleChange(event) {
        this.setState({ value: event.target.value });
      }

    sendValueToParent(event) {
        event.preventDefault();
        if (this.state.value.trim() === "" || this.state.value.match(/\d+/g) !== null) {
          this.setState({ warning: true });
        } else {
          this.props.callBackFromParent(this.state.value);
          this.setState({ warning: false });
        }
      }

      render() {
        return (
          <div>
                <Form onSubmit={this.sendValueToParent}>
                <input
                    placeholder="St. George, Utah.."
                    onChange={this.handleChange}
                    value={this.state.value}
                    type="text"
                    autoFocus
                />
                <Button style={styles.searchButton} variant="success" size="sm" onClick={this.sendValueToParent}>Get Weather</Button>
                </Form>
          </div>     
        );
    }
}

export default SearchInput;