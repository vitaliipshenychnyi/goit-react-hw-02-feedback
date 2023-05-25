import PropTypes from 'prop-types';
import { WrapperBtn, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperBtn>
      {options.map((option, idx) => (
        <Button type="button" key={idx} name={option} onClick={onLeaveFeedback}>
          {option.charAt(0).toUpperCase() + option.substr(1)}
        </Button>
      ))}
    </WrapperBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
