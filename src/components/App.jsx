import { Component } from 'react';
import { Container } from './Container/Container';
import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyle';
import { ErrorMsg } from './Error/Error';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setStateUpdate = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotal = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositivePercent = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotal()) * 100) || 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const totalCount = this.countTotal();

    return (
      <div>
        <Container title="Please leave feedback">
          <Feedback options={keys} onStateUpdate={this.setStateUpdate} />
        </Container>
        <Container title="Statistics">
          {totalCount === 0 ? (
            <ErrorMsg message="No feedback given" />
          ) : (
            <Statistics
              options={keys}
              statistic={this.state}
              total={totalCount}
              positiveFeedback={this.countPositivePercent}
            />
          )}
        </Container>
        <GlobalStyle />
      </div>
    );
  }
}
