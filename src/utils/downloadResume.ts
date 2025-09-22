// utils/downloadResume.ts
export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/assets/resume/resume.pdf";
  link.download = "Vignesh_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
