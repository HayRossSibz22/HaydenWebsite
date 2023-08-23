// make a react component for stable widgets
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Widgets extends React.Component {
    render() {
      return (
        <StickyContainer>
          {/* Other elements can be in between `StickyContainer` and `Sticky`,
          but certain styles can break the positioning logic used. */}
          <Sticky>
            {({
              style,
  
              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => (
              <header style={style}>
                {/* ... */}
              </header>
            )}
          </Sticky>
          {/* ... */}
        </StickyContainer>
      );
    }
  };

