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
            min: { width: 50, height: 25 },
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
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true,
        },
      });
  }, []);

  return (
    <div className='container-fluid' style={{ height: '100%', overflow: 'hidden' }}>
      <div className="row">
        <div className="col">

          <div className="resize-drag component" style={{ width: '100%', height: '50vh' }}>
            Component 1
          </div>

        </div>
        <div className="col">

          <div className="resize-drag component" style={{ width: '100%', height: '50vh' }}>
            Component 2
          </div>

        </div>
        </div>

        <div class="row">

          <div className="resize-drag component" style={{ width: '100%', height: '30vh' }}>
            Component 3
          </div>
        </div>
      </div>
    
  );
};

export default App;
