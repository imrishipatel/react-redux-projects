import React, { PureComponent } from "react";

class Postform extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Post</h1>

        <form action="">
          <div>
            <label htmlFor="">Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
