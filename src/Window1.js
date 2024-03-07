// Window1.js
import React from 'react';
import { Resizable } from 'react-resizable';

const Window1 = () => {
  const [width, setWidth] = React.useState(200); // Initial width

  const handleResize = (event, { size }) => {
    setWidth(size.width); // Update width when resized
  };

  return (
    <Resizable
      width={width}
      height={200}
      onResize={handleResize}
      minConstraints={[100, 100]} // Minimum size constraints
    >
      <div className="window1">
        Window 1 Content
      </div>
    </Resizable>
  );
};

export default Window1;
