import React from "react";

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(getControlItem) {}
  return (
    <div className="flex flex-col gap-3">{formControls.map(controlItems)}</div>
  );
}

export default FormControls;
