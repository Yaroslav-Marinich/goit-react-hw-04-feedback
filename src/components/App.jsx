import React, { useState } from 'react';
import { Container } from './Container/Container';
import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyle';
import { ErrorMsg } from './Error/Error';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const setStateUpdate = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotal = () => {
    const values = Object.values(state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositivePercent = () => {
    const { good } = state;
    return Math.floor((good / countTotal()) * 100) || 0;
  };

  const keys = Object.keys(state);
  const totalCount = countTotal();

  return (
    <div>
      <Container title="Please leave feedback">
        <Feedback options={keys} onStateUpdate={setStateUpdate} />
      </Container>
      <Container title="Statistics">
        {totalCount === 0 ? (
          <ErrorMsg message="No feedback given" />
        ) : (
          <Statistics
            options={keys}
            statistic={state}
            total={totalCount}
            positiveFeedback={countPositivePercent}
          />
        )}
      </Container>
      <GlobalStyle />
    </div>
  );
}

export default App;
