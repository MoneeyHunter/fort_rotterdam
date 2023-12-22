//Membuat Copyright

import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <span className="text-[8px] md:text-text-s absolute bottom-4 left-10">
      &copy; {year} Fort Rotterdam. Hak Cipta Dilindungi Undang-Undang.
    </span>
  );
};

export default Copyright;
