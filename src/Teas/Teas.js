import { Fragment } from 'react';
import AvailableTeas from './AvailableTeas';
import TeaSummary from './TeaSummary';

const Teas = () => {
  return (
    <Fragment>
      <TeaSummary />
      <AvailableTeas />
    </Fragment>
  );
};

export default Teas;
