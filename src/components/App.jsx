import React, { Component } from 'react';
import { Statistics } from './statistic/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          addGood={this.addGoodFeedback}
          addNeutral={this.addNeutralFeedback}
          addBad={this.addBadFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
