import React from 'react';

import PDF from "../Card/CardImage/Welcome_To_Fillable_Sheet_PDF_v2.0.pdf";


 const Fillable = () => {
    return (
      <>
        <div className="fillable-pdf">
          <p id="example-collapse-text">
            Based on Dobey's Welcome To{" "}
            <a href="https://boardgamegeek.com/boardgame/233867/welcome/files">
              Fillable Player Sheet PDF
            </a>
          </p>
          <embed
            src={`${PDF}#zoom=80&scrollbar=0&toolbar=0&navpanes=0`}
          ></embed>
        </div>
      </>
    );
}
export default Fillable