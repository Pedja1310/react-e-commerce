import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

import { selectDirectorySection } from "../../redux/direcotry/directory.selectors.js";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherComponentProps }) => (
      <MenuItem key={id} {...otherComponentProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
