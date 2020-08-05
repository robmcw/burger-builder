import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axiosOrders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Rob McW",
        address: {
          Street: "Fake Street",
          zipode: "JHKSI89",
          country: "France",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => this.setState({ loading: false }))
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter you contect data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Your street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal code"
            placeholder="Your post code"
          />
          <Button clicked={this.orderHandler} btnType="Success">
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
