import React from 'react';

import PDF from "../Card/CardImage/Welcome_To_Fillable_Sheet_PDF_v2.0.pdf";


 const Fillable = () => {
    return (
      <>
        <div className="fillable-pdf">
          <div id="example-collapse-text">
            Based on Dobey's Welcome To Fillable Player Sheet PDF, I added in
            fences, pools, and estate markers (lines at the back of houses to
            mark when you used an estate for a City Plan).
          </div>
          <embed
            src={`${PDF}#zoom=80&scrollbar=0&toolbar=0&navpanes=0`}
          ></embed>
        </div>
      </>
    );
}
export default Fillable