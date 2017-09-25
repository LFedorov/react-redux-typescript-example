import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

import Actions, { increment, decrement } from '../store/calc/actions';
import { StoreState } from '../store';

import { Button } from '../components/button';

interface AppProps {
  amount?: number;
  onIncrement?: (amount: number) => void;
  onDecrement?: (amount: number) => void;
}

interface AppState {
  amount: number;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    amount: 1,
  };

  onIncrementStore = () => {
    if (this.props.onIncrement) {
      this.props.onIncrement(3);
    }
  };

  onDecrementStore = () => {
    if (this.props.onDecrement) {
      this.props.onDecrement(1);
    }
  };

  onIncrementState = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 1,
    }));
  };

  onDecrementState = () => {
    this.setState(prevState => ({
      amount: prevState.amount - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <div>Props: {this.props.amount}</div>
        <div>State: {this.state.amount}</div>
        <div>
          <Button onClick={this.onIncrementStore}>inc props</Button>
          <Button onClick={this.onDecrementStore}>dec props</Button>
          <Button onClick={this.onIncrementState}>inc state</Button>
          <Button onClick={this.onDecrementState}>dec state</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  amount: state.calc.amount,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  ...bindActionCreators(
    {
      onIncrement: increment,
      onDecrement: decrement,
    },
    dispatch,
  ),
});

export default connect<AppProps>(mapStateToProps, mapDispatchToProps)(App);
