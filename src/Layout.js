// Layout.js
import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { Resizable } from 'react-resizable';
import Window1 from './Window1';
import Window2 from './Window2';
import Window3 from './Window3';
import Footer from './Footer';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Layout = () => {
  return (
    <ResponsiveReactGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="window1" data-grid={{ w: 4, h: 4, x: 0, y: 0 }}>
        <Resizable>
          <Window1 />
        </Resizable>
      </div>
      <div key="window2" data-grid={{ w: 4, h: 4, x: 4, y: 0 }}>
        <Resizable>
          <Window2 />
        </Resizable>
      </div>
     
      <div key="footer" data-grid={{ w: 12, h: 2, x: 0, y: 6 }}>
        <Footer />
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default Layout;
