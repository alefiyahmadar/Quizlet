import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  return (
    <div className="pdf-viewer">
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className="navigation">
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
