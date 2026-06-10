import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#253b5620_1px,transparent_1px),linear-gradient(to_bottom,#253b5620_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent,black)]"></div>
    </div>
    )
};

export default GridBackground;