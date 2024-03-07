import React, { useEffect } from 'react';
import interact from 'interactjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your CSS file

const App = () => {
  useEffect(() => {
    // Initialize interactjs for resizable behavior
    interact('.resize-drag')
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: 'parent',
          }),
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],
        inertia: true,
        listeners: {
          move(event) {
            const { target } = event;
            const { x, y } = target.dataset;
            target.style.width = `${event.rect.width}px`;
            target.style.height = `${event.rect.height}px`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
        },
      })
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ],
      });
  }, []);

  return (
    <div className='cona' style={{ backgroundColor: "black", width: '100%', height: '100vh' }}>
      <div className="row" style={{ backgroundColor:"red"}}>
        <div className="col-sm">
          <div className="resize-drag component" style={{ width: '100%', height: '50vh' }}>
            Component 1
          </div>
        </div>
        <div className="col-sm">
          <div className="resize-drag component" style={{ width: '100%', height: '50vh' }}>
            Component 2
          </div>
        </div>
      </div>
      <div className="resize-drag component" style={{ width: '100%', height: '50vh' }}>
        Component 3
      </div>
    </div>
  );
};

export default App;
