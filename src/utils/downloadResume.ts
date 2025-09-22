// utils/downloadResume.ts
export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/assets/resume/vicky_new_ats_resume.pdf";
  link.download = "Vignesh_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
