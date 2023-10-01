import React, { CSSProperties } from "react";

import Select from "react-select";

export default function _Select({ options, onChange }) {
  let option = [];
  options.forEach((element) => {
    option.push({
      value: element.client_name,
      label: element.client_name,
    });
  });
  return <Select options={option} className="select" />;
}
