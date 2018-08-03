/*
A slightly wider, outlined button with an alternate color, using [IconText](#mbxicontext) to prefix the text with an icon.
*/
import React from 'react';
import Button from '../button';
import IconText from '../../icon-text';

export default class Example extends React.Component {
  render() {
    return (
      <Button onClick={() => {}} width="large" outline={true} color="purple">
        <IconText iconBefore="floppy">Save your map</IconText>
      </Button>
    );
  }
}
