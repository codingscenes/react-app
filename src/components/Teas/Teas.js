import { Fragment } from 'react';
import AvailableTeas from './AvailableTeas';
import TeasSummary from './TeasSummary';

const Teas = () => {
  return (
    <Fragment>
      <TeasSummary />
      <AvailableTeas />
    </Fragment>
  );
};

export default Teas;
