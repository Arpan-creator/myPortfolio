import React from "react";

const Resume: React.FC = () => {
  const handleClick = () => {
    // 1️⃣ Open PDF in a new tab
    window.open(process.env.PUBLIC_URL + "/Resume.pdf", "_blank");

    // 2️⃣ Trigger automatic download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Resume.pdf";
    link.download = "Arpan_Kundu_Resume.pdf"; // downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="text-2xl text-textColor text-lg font-mono hover:text-primaryColor"
    >
      Resume
    </button>
  );
};

export default Resume;