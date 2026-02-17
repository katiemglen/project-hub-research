"use client";

import { useState } from "react";

export default function PdfButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const content = document.getElementById("research-content");
      if (!content) return;

      // Add PDF mode class for styling overrides
      content.classList.add("pdf-mode");

      const canvas = await html2canvas(content, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: "#0f0f1a",
        logging: false,
        windowWidth: 900,
      });

      content.classList.remove("pdf-mode");

      const imgData = canvas.toDataURL("image/jpeg", 0.85);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 5;
      const usableWidth = pageWidth - margin * 2;
      const imgWidth = usableWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let yOffset = 0;
      let pageNum = 0;

      while (yOffset < imgHeight) {
        if (pageNum > 0) {
          pdf.addPage();
        }
        pdf.addImage(
          imgData,
          "JPEG",
          margin,
          margin - yOffset,
          imgWidth,
          imgHeight
        );
        yOffset += pageHeight - margin * 2;
        pageNum++;
      }

      pdf.save("project-hub-research.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("PDF generation failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#60a5fa] hover:bg-[#3b82f6] text-white font-medium text-sm rounded-full shadow-lg shadow-blue-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Download as PDF"
    >
      {loading ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">PDF</span>
        </>
      )}
    </button>
  );
}
