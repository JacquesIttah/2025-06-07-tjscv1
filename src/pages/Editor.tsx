import React from "react";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.connected";
import MemeForm from "../components/MemeForm/MemeForm.connected";

function Editor() {
  return (
    <>
      <MemeSVGViewer />
      <MemeForm />
    </>
  );
}

export default Editor;
