/*
To control button width, you can use `width: "full"` and put the button in a
wrapper container with an Assembly width class.

Sometimes, for example, you might want a column or row of equal-width buttons.
*/
import React from 'react';
import Button from '../button';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div className="mb24 flex-parent">
          <div className="flex-child w120 mr12">
            <Button size="medium" width="full" onClick={noop}>
              Door
            </Button>
          </div>
          <div className="flex-child w120 mr12">
            <Button size="medium" width="full" onClick={noop}>
              Dog
            </Button>
          </div>
          <div className="flex-child w120 mr12">
            <Button size="medium" width="full" onClick={noop}>
              Dash
            </Button>
          </div>
        </div>
        <div className="w60">
          <div className="my3">
            <Button
              variant="secondary"
              size="medium"
              width="full"
              onClick={noop}
            >
              A
            </Button>
          </div>
          <div className="my3">
            <Button
              variant="secondary"
              size="medium"
              width="full"
              onClick={noop}
            >
              B
            </Button>
          </div>
          <div className="my3">
            <Button
              variant="secondary"
              size="medium"
              width="full"
              onClick={noop}
            >
              C
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

function noop() {}