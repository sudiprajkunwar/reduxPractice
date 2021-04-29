import React from "react";

const token =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc5NzU3MDk2LCJqdGkiOiI0YzEwOGMxNTc0MjE0YTQyODBmOTJkZDJjYzI1OTMwNSIsInVzZXJfaWQiOjF9.rBKjNDUVig6bRIaTux-WG84M0-bCSSXM4F-_zuqB_wU";

const createEmployee =
  "http://167.172.57.10.:8000/employee/v1/department/create/";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.formData(this.state);
    const data = { ...this.state };
    console.log("post data", data);
    console.log("submit");

    fetch(createEmployee, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="Inputname">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Name"
              required
            />
          </div>

          <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputPhone">Phone</label>
            <input
              onChange={this.handleChange}
              name="phone"
              value={this.state.phone}
              type="number"
              class="form-control"
              id="phone"
              placeholder="Enter Phone"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
