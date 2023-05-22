import PropTypes from 'prop-types';
import { Container, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <Container>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
