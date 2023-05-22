import PropTypes from 'prop-types';
import { WrapperBtn, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ addGood, addNeutral, addBad }) => {
  return (
    <WrapperBtn>
      <Button type="button" onClick={addGood}>
        Good
      </Button>
      <Button type="button" onClick={addNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={addBad}>
        Bad
      </Button>
    </WrapperBtn>
  );
};

FeedbackOptions.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
};
