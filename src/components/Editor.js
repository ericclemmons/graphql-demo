import "codemirror/mode/gfm/gfm";

import Codemirror from "react-codemirror";
import React from "react";

import "./Editor.css";

export default class Editor extends React.Component {
  getValue = () => {
    return this.refs.editor.getCodeMirror().getValue();
  }

  render() {
    return (
      <Codemirror
        autoSave
        options={{
          mode: "gfm",
          lineNumbers: false,
          theme: "material",
        }}
        ref="editor"

        {...this.props}
      />
    );
  }
}
