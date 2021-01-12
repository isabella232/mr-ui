/*
Basic.
*/
import React from 'react';
import ControlSearch from '../control-search';

export default class Example extends React.Component {
  render() {
    return (
      <ControlSearch
        id="test"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]}
        onChange={
          (/* value, id */) => {
            /* console.log(value, id); */
          }
        }
      />
    );
  }
}
