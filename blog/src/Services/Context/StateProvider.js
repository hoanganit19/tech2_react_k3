import React, { Component, createContext } from "react";

export const StateContext = createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.dispatch = {};
  }

  render() {
    const { children } = this.props;

    return (
      <StateContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}

export default StateProvider;
