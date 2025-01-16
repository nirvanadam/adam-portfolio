import web_bnsp from "../assets/images/certificate/web_bnsp.jpg";
import fe_binar from "../assets/images/certificate/fe_binar.jpg";
import toefl_itp from "../assets/images/certificate/toefl_itp.jpg";
import most_fe from "../assets/images/certificate/most_fe.jpg";

export const certificates = [
  {
    title: "Certification Scheme of Web Developer",
    institution: "Badan Nasional Sertifikasi Profesi",
    credentialId: "12304661",
    year: "Apr 2024 - Apr 2027",
    image: web_bnsp,
    file: "Certificate of Competence Certification Scheme of Web Developer.pdf",
  },
  {
    title: "Certificate of Achievement: TOEFL ITP",
    institution: "Center for Foreign Language Training",
    credentialId: "CFLT-20240126-CFLT-00790",
    year: "Jan 2024 - Jan 2026",
    image: toefl_itp,
    file: "Certificate TOEFL ITP.pdf",
  },
  {
    title: "Certificate of Completion: Frontend Javascript",
    institution: "Bincar Academy",
    credentialId: "FES2302KM4041",
    year: "Jun 2023",
    image: fe_binar,
    file: "Certificate of Completion Frontend Javascript.pdf",
  },
  {
    title:
      "Certificate of Appreciation: The Most Progressive Student in Binar Academy Bootcamp",
    institution: "Bincar Academy",
    credentialId: "-",
    year: "Jun 2023",
    image: most_fe,
    file: "Certificate of Appreciation Frontend Javascript.pdf",
  },
];
