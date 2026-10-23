export interface Course {
  id: string;
  name: string;
  hindiName: string;
  department: 'education' | 'pharmacy' | 'homescience' | 'arts' | 'science';
  duration: string;
  level: 'UG' | 'Diploma';
  intake: number;
  eligibility: string;
  annualFee: number;
  highlight: string;
  description: string;
  semesters: {
    sem: string;
    subjects: string[];
  }[];
  careerProspects: string[];
}

export interface Notice {
  id: string;
  title: string;
  hindiTitle?: string;
  category: 'Admissions' | 'Examinations' | 'Results' | 'Events' | 'Circular';
  date: string;
  dispatchNo: string;
  isNew?: boolean;
  content: string;
  attachmentName: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  email: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Teaching Lab' | 'Pharmacy Lab' | 'Home Science' | 'Cultural' | 'Sports';
  imageUrl: string;
  caption: string;
}

export const INSTITUTE_DETAILS = {
  name: "Fakirchand Vidyapeeth Educational Institute",
  shortName: "FCV Educational Institute",
  hindiName: "फ़कीरचंद विद्यापीठ शिक्षा संस्थान",
  motto: "विद्या ददाति विनयम (Knowledge Bestows Humility)",
  established: "1984",
  recognition: "Approved by NCTE (Teacher Education), PCI (Pharmacy Council of India) & UGC",
  accreditation: "NAAC Accredited Grade 'A' | SCERT & BTE Affiliated | ISO 9001:2015",
  affiliation: "Affiliated to State University, SCERT & Board of Technical Education",
  aisheCode: "C-41982",
  collegeCode: "FCV-047",
  address: "Fakirchand Vidyapeeth Campus, Knowledge City, Grand Trunk Enclave, Pin - 201001",
  phone: "8791357168",
  formattedPhone: "+91 8791357168",
  tollFree: "8791357168",
  email: "kahav.kaushikk11@gmail.com",
  principalEmail: "kahav.kaushikk11@gmail.com",
  workingHours: "Monday to Saturday: 9:00 AM – 5:00 PM",
};

export const COURSES: Course[] = [
  {
    id: 'bed',
    name: 'B.Ed. (Bachelor of Education)',
    hindiName: 'बी.एड. (शिक्षा स्नातक) २-वर्षीय डिग्री पाठ्यक्रम',
    department: 'education',
    duration: '2 Years (4 Semesters)',
    level: 'UG',
    intake: 100,
    eligibility: 'Graduation / Post Graduation with min. 50% marks (45% for SC/ST/OBC) as per NCTE norms',
    annualFee: 51250,
    highlight: 'NCTE Approved, Model Practice Teaching, CTET/UPTET Special Coaching',
    description: 'Premier two-year professional teacher training curriculum approved by NCTE. Focuses on modern pedagogical methods, child psychology, school internship, inclusive instruction, and multimedia classroom techniques.',
    semesters: [
      { sem: 'Semester I', subjects: ['Childhood & Growing Up', 'Contemporary India & Education', 'Language Across Curriculum', 'Understanding ICT & Applications', 'Micro-Teaching Practicum'] },
      { sem: 'Semester II', subjects: ['Learning and Teaching', 'Pedagogy of School Subject I (Language/Science/Math/Social)', 'Pedagogy of School Subject II', 'Drama and Art in Education'] },
      { sem: 'Semester III', subjects: ['School Internship (16 Weeks Teaching in Partner Schools)', 'Action Research Project', 'Teaching Learning Material (TLM) Workshop'] },
      { sem: 'Semester IV', subjects: ['Gender, School & Society', 'Creating an Inclusive School', 'Health, Yoga & Physical Education', 'Environmental Education', 'Final Teaching Assessment'] }
    ],
    careerProspects: ['Government TGT / PGT School Teacher (KVS, NVS, DSSSB, State Schools)', 'CTET & State TET Qualified Educator', 'Private Senior Secondary School Faculty', 'Educational Counselor & Content Developer', 'School Academic Administrator']
  },
  {
    id: 'btc',
    name: 'BTC / D.El.Ed. (Diploma in Elementary Education)',
    hindiName: 'बीटीसी / डी.एल.एड. (प्रारंभिक शिक्षा में द्विवर्षीय डिप्लोमा)',
    department: 'education',
    duration: '2 Years (4 Semesters)',
    level: 'Diploma',
    intake: 100,
    eligibility: 'Graduation in any discipline with min. 50% marks (45% for reserved categories) & State Counseling Merit',
    annualFee: 41000,
    highlight: 'SCERT & NCTE Approved, Foundation for Primary & Upper Primary Teaching',
    description: 'Rigorous two-year elementary teacher training program designed for primary and junior high school teaching. Emphasizes foundational literacy, child development, innovative teaching-learning materials, and extensive primary school practicum.',
    semesters: [
      { sem: 'Semester I', subjects: ['Child Development & Learning Process', 'Principles of Teaching-Learning', 'Hindi, Science & Mathematics Pedagogy', 'Social Studies Foundation', 'Computer Education & Art'] },
      { sem: 'Semester II', subjects: ['Present Indian Society & Elementary Education', 'Primary Education & New Initiatives', 'English Language & Environmental Studies', 'Work Experience & Physical Training'] },
      { sem: 'Semester III', subjects: ['Educational Evaluation, Action Research & Innovation', 'Inclusive Education', 'Sanskrit / Urdu Teaching', 'Primary School Practice Teaching (1 Month Internship)'] },
      { sem: 'Semester IV', subjects: ['Educational Management & Administration', 'Early Childhood Care and Education (ECCE)', 'Peace Education & Sustainable Development', 'Comprehensive Field Practicum'] }
    ],
    careerProspects: ['Government Primary & Upper Primary Assistant Teacher (PRT)', 'State Basic Education Board Educator', 'Pre-Primary & Elementary School Coordinator', 'TET/Super-TET Competitive Aspirant', 'Children Educational Program Specialist']
  },
  {
    id: 'dpharma',
    name: 'D.Pharma (Diploma in Pharmacy)',
    hindiName: 'डी.फार्मा (फार्मेसी में द्विवर्षीय डिप्लोमा)',
    department: 'pharmacy',
    duration: '2 Years (Annual System)',
    level: 'Diploma',
    intake: 60,
    eligibility: '10+2 with Physics, Chemistry and Biology / Mathematics (min. 45% marks) from a recognized board',
    annualFee: 65000,
    highlight: 'Pharmacy Council of India (PCI) Approved, Registered Pharmacist License',
    description: 'Specialized healthcare curriculum training registered pharmacists in drug dispensing, pharmaceutical chemistry, pharmacology, pharmacognosy, hospital pharmacy, and modern medical store management with high-tech formulation labs.',
    semesters: [
      { sem: 'First Year (Theory & Practical)', subjects: ['Pharmaceutics I', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Human Anatomy & Physiology', 'Social Pharmacy', 'State-of-the-Art Formulation Lab Training'] },
      { sem: 'Second Year (Theory & Practical)', subjects: ['Pharmacology', 'Community Pharmacy & Management', 'Biochemistry & Clinical Pathology', 'Pharmacotherapeutics', 'Hospital & Clinical Pharmacy', 'Pharmacy Law & Ethics (PCI Norms)'] }
    ],
    careerProspects: ['Registered Pharmacist (State Pharmacy Council License)', 'Own Retail & Wholesale Medical Store / Chemist Franchise', 'Hospital Pharmacist in Govt & Multi-Specialty Hospitals', 'Quality Control & Production Executive in Pharma MNCs', 'Medical Representative (MR) & Healthcare Executive']
  },
  {
    id: 'ba',
    name: 'B.A. (Bachelor of Arts)',
    hindiName: 'बी.ए. (कला स्नातक) ३-वर्षीय डिग्री पाठ्यक्रम',
    department: 'arts',
    duration: '3 Years (6 Semesters)',
    level: 'UG',
    intake: 180,
    eligibility: '10+2 (Higher Secondary) in any stream from a recognized educational board',
    annualFee: 18500,
    highlight: 'Subjects: Hindi, English, History, Political Science, Economics & Sociology',
    description: 'Dynamic humanities curriculum focusing on critical inquiry, communication excellence, social development, history, and constitutional awareness. Comprehensive coaching orientation for government competitive examinations.',
    semesters: [
      { sem: 'Semester I-II', subjects: ['Hindi Literature / English Literature', 'Indian History & Culture', 'Political Theory & Indian Constitution', 'Sociological Foundations', 'General Studies & Value Education'] },
      { sem: 'Semester III-IV', subjects: ['Modern Indian History', 'Indian Administration & Governance', 'Contemporary Social Thought', 'Public Policy & Media Studies', 'Environmental Studies'] },
      { sem: 'Semester V-VI', subjects: ['International Relations', 'Modern World History', 'Social Research Methodology', 'Elective Specialization & Project Work'] }
    ],
    careerProspects: ['Civil Services (UPSC, State PSC / PCS)', 'Staff Selection Commission (SSC) & Banking Examinations', 'School & College Teaching after B.Ed / M.A.', 'Media, Journalism & Content Writing', 'Public Administration & Social Welfare NGOs']
  },
  {
    id: 'bsc-homescience',
    name: 'B.Sc. Home Science (Food, Nutrition & Human Development)',
    hindiName: 'बी.एससी. गृह विज्ञान (खाद्य, पोषण, वस्त्र एवं मानव विकास)',
    department: 'homescience',
    duration: '3 Years (6 Semesters)',
    level: 'UG',
    intake: 80,
    eligibility: '10+2 with Science / Home Science / Arts with min. 45% aggregate',
    annualFee: 26000,
    highlight: 'Advanced Nutrition & Dietetics Lab, Textile Designing, Preschool Management',
    description: 'Multidisciplinary scientific degree integrating clinical nutrition, diet planning, food processing, textile design, interior decoration, family resource management, child development, and women entrepreneurship.',
    semesters: [
      { sem: 'Semester I-II', subjects: ['Fundamentals of Food & Nutrition', 'Human Physiology & Hygiene', 'Textile Science & Care of Clothes', 'Child Development & Psychology', 'Food Analysis Lab Practicum'] },
      { sem: 'Semester III-IV', subjects: ['Clinical Nutrition & Diet Therapy', 'Food Preservation & Bakery Technology', 'Fabric Construction & Dyeing/Printing', 'Family Resource & Financial Management', 'Preschool Child Observation Lab'] },
      { sem: 'Semester V-VI', subjects: ['Community Nutrition & Public Health', 'Interior Design & Housing', 'Apparel Design & Garment Construction', 'Extension Education & Rural Development', 'Dietetic Internship & Product Development Project'] }
    ],
    careerProspects: ['Clinical Dietitian & Nutritionist in Hospitals & Health Centers', 'Food Quality Inspector & Food Processing Specialist', 'Textile & Fashion Apparel Designer', 'Child Care Center & Nursery School Director', 'Wellness Counselor & Diet Clinic Entrepreneur']
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'n-01',
    title: 'Admissions Open 2026-27: B.Ed, BTC (D.El.Ed), D.Pharma, B.A. & B.Sc Home Science',
    hindiTitle: 'सत्र २०२६-२७ के लिए प्रवेश प्रारंभ: बी.एड, बीटीसी (डी.एल.एड), डी.फार्मा, बी.ए. एवं बी.एससी. गृह विज्ञान',
    category: 'Admissions',
    date: '24 Oct 2026',
    dispatchNo: 'FCV/ADM/2026/104',
    isNew: true,
    content: 'Online and offline applications are invited for admission to NCTE approved B.Ed, SCERT approved BTC/D.El.Ed, PCI approved D.Pharma, and University affiliated B.A. & B.Sc Home Science for the Academic Session 2026-27. Contact admission helpline 8791357168.',
    attachmentName: 'Admission_Notification_2026-27.pdf'
  },
  {
    id: 'n-02',
    title: 'Notice regarding D.Pharma First & Second Year Board Examination Form Submission',
    hindiTitle: 'डी.फार्मा प्रथम व द्वितीय वर्ष बोर्ड परीक्षा फॉर्म भरने संबंधी आवश्यक सूचना',
    category: 'Examinations',
    date: '21 Oct 2026',
    dispatchNo: 'FCV/PHARMA/2026/088',
    isNew: true,
    content: 'All students enrolled in D.Pharma (Diploma in Pharmacy) are hereby notified that Board of Technical Education / Pharmacy Council examination forms can be verified and submitted through the college office up to 15th November 2026.',
    attachmentName: 'DPharma_Exam_Form_Guidelines.pdf'
  },
  {
    id: 'n-03',
    title: 'B.Ed & BTC (D.El.Ed) School Teaching Internship Schedule & Micro-Teaching Workshop',
    hindiTitle: 'बी.एड. एवं बीटीसी (डी.एल.एड) विद्यालय शिक्षण इंटर्नशिप व सूक्ष्म-शिक्षण कार्यशाला',
    category: 'Events',
    date: '17 Oct 2026',
    dispatchNo: 'FCV/EDU/2026/045',
    isNew: true,
    content: 'A 10-day Micro-Teaching and Lesson Planning workshop commences from Monday. All B.Ed and BTC pupil teachers are required to report in the College Multipurpose Hall in formal dress at 9:30 AM.',
    attachmentName: 'Teaching_Internship_Roster.pdf'
  },
  {
    id: 'n-04',
    title: 'B.Sc Home Science Nutrition & Food Preservation Practical Exhibition Announcement',
    hindiTitle: 'बी.एससी. गृह विज्ञान पोषण एवं खाद्य संरक्षण प्रायोगिक प्रदर्शनी की घोषणा',
    category: 'Events',
    date: '12 Oct 2026',
    dispatchNo: 'FCV/HMSC/2026/029',
    isNew: false,
    content: 'The Department of Home Science is hosting an Inter-College Nutrition, Bakery & Diet Planning Exhibition showcasing therapeutic diets, organic recipes, and textile craft on World Food & Health Day.',
    attachmentName: 'HomeScience_Exhibition_Guidelines.pdf'
  },
  {
    id: 'n-05',
    title: 'Government Post-Matric & Dashmottar Scholarship Verification Notice 2026',
    hindiTitle: 'दशमोत्तर छात्रवृत्ति एवं शुल्क प्रतिपूर्ति ऑनलाइन सत्यापन सूचना',
    category: 'Circular',
    date: '08 Oct 2026',
    dispatchNo: 'FCV/SCHOLAR/2026/054',
    isNew: false,
    content: 'Students of B.Ed, BTC, D.Pharma, B.A. and B.Sc Home Science who applied for State Government Post-Matric Scholarship must submit verified hard copies with income and caste certificates in Room No. 4 before 30th October 2026.',
    attachmentName: 'Scholarship_Checklist_2026.pdf'
  },
  {
    id: 'n-06',
    title: 'Free Health & Community Drug Awareness Camp by Pharmacy & Home Science Dept',
    hindiTitle: 'फार्मेसी एवं गृह विज्ञान विभाग द्वारा निःशुल्क स्वास्थ्य व पोषण परामर्श शिविर',
    category: 'Events',
    date: '03 Oct 2026',
    dispatchNo: 'FCV/HEALTH/2026/019',
    isNew: false,
    content: 'The Pharmacy and Home Science departments in collaboration with Community Health Centre (CHC) will organize a free blood pressure, hemoglobin, BMI screening, and nutrition counseling camp for rural families.',
    attachmentName: 'Health_Camp_Schedule.pdf'
  }
];

export const LEADERSHIP = [
  {
    role: "Patron & Founder Inspiration",
    name: "Late Pt. Fakirchand Ji",
    title: "Visionary Educationist & Social Reformer",
    hindiName: "स्व. पं. फ़कीरचंद जी",
    quote: "True education is the illumination that enables youth to serve society, lead with moral character, and spread knowledge to every home.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600"
  },
  {
    role: "Chairman / President's Desk",
    name: "Dr. Harish Chandra Sharma",
    title: "M.A., M.Ed., Ph.D., Eminent Educationist & Society President",
    hindiName: "डॉ. हरीश चंद्र शर्मा",
    quote: "At Fakirchand Vidyapeeth, we take immense pride in shaping skilled teachers, certified healthcare pharmacists, and accomplished scholars who transform rural and urban communities.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    role: "Principal's Desk",
    name: "Prof. (Dr.) Vandana Mishra",
    title: "M.Sc., M.Ed., Ph.D. in Education, Gold Medalist",
    hindiName: "प्रो. (डॉ.) वंदना मिश्रा",
    quote: "Our institution offers a harmonious blend of teacher education, pharmaceutical training, home science laboratories, and liberal arts supported by modern technology and dedicated mentoring.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f-01',
    name: 'Prof. (Dr.) Vandana Mishra',
    designation: 'Principal & Professor of Education',
    department: 'Faculty of Education (B.Ed / BTC)',
    qualification: 'M.Sc., M.Ed., Ph.D., UGC-NET (Gold Medalist)',
    experience: '22+ Years',
    specialization: 'Educational Pedagogy, Curriculum Design & Child Psychology',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-02',
    name: 'Dr. Ramesh Chandra Pandey',
    designation: 'Head of Department, Teacher Education (B.Ed & BTC)',
    department: 'Faculty of Education (B.Ed / BTC)',
    qualification: 'M.Ed., M.A. (Psychology), Ph.D. in Education',
    experience: '19+ Years',
    specialization: 'Elementary Education, Micro-Teaching & Action Research',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-03',
    name: 'Dr. Vivek Kumar Sharma',
    designation: 'Head of Department, Pharmacy (D.Pharma)',
    department: 'Faculty of Pharmacy (D.Pharma)',
    qualification: 'M.Pharm (Pharmaceutics), Ph.D., PCI Registered Pharmacist',
    experience: '14+ Years',
    specialization: 'Drug Formulation, Clinical Pharmacology & Hospital Pharmacy',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-04',
    name: 'Dr. Shalini Saxena',
    designation: 'Associate Professor & Head of Home Science',
    department: 'Faculty of Home Science',
    qualification: 'M.Sc. (Food & Nutrition), Ph.D., Registered Dietitian (RD)',
    experience: '16+ Years',
    specialization: 'Clinical Dietetics, Therapeutic Nutrition & Textile Science',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-05',
    name: 'Dr. Alok Nath Tripathi',
    designation: 'Associate Professor of Arts & Humanities',
    department: 'Faculty of Arts (B.A.)',
    qualification: 'M.A. (Hindi & Political Science), Ph.D., UGC-NET',
    experience: '17+ Years',
    specialization: 'Modern Hindi Literature, Indian Political System & Public Policy',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-06',
    name: 'Mrs. Neha Srivastava',
    designation: 'Lecturer in Pharmacy (Pharmaceutics & Chemistry)',
    department: 'Faculty of Pharmacy (D.Pharma)',
    qualification: 'M.Pharm (Pharmaceutical Chemistry), PCI Registered',
    experience: '8+ Years',
    specialization: 'Pharmaceutical Analysis, Pharmacognosy & Quality Control',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-07',
    name: 'Dr. Priya Gautam',
    designation: 'Assistant Professor of Psychology & Child Development',
    department: 'Faculty of Education (B.Ed / BTC)',
    qualification: 'M.A. (Child Development), M.Ed., Ph.D.',
    experience: '10+ Years',
    specialization: 'Early Childhood Education, Inclusive Pedagogy & Counseling',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f-08',
    name: 'Mrs. Ritu Sharma',
    designation: 'Assistant Professor of Textile & Apparel Design',
    department: 'Faculty of Home Science',
    qualification: 'M.Sc. (Clothing & Textiles), UGC-NET',
    experience: '9+ Years',
    specialization: 'Apparel Designing, Fabric Printing & Resource Management',
    email: 'kahav.kaushikk11@gmail.com',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
  }
];

export const FACILITIES = [
  {
    id: 'fac-1',
    title: 'Model Micro-Teaching & Educational Technology Lab',
    hindiTitle: 'मॉडल शिक्षण एवं शैक्षिक तकनीकी प्रयोगशाला',
    description: 'Equipped with smart interactive panels, simulation cameras, audio-visual instruction sets, and teaching-learning materials (TLM) for B.Ed and BTC pupil teachers.',
    stats: 'Seating for 120+ | Interactive 4K Panels | Video Recording Set',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fac-2',
    title: 'PCI Approved Advanced Pharmacy Laboratories',
    hindiTitle: 'पीसीआई अनुमोदित फार्मास्युटिक्स एवं फार्माकोग्नोसी लैब',
    description: 'Ultra-modern laboratories with distillation units, tablet punching machines, analytical digital balances, microscopes, and chemical testing equipment for D.Pharma practicals.',
    stats: '4 Specialised Labs | Tablet Machine | Analytical Balances',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fac-3',
    title: 'Home Science Food, Nutrition & Dietetics Lab',
    hindiTitle: 'गृह विज्ञान खाद्य, पोषण एवं पाककला प्रयोगशाला',
    description: 'Modern modular kitchen with commercial baking ovens, calorimeters, food preservation units, and diet formulation desks for practical food science training.',
    stats: 'Modular Kitchen | Baking Ovens | Food Testing Equipment',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fac-4',
    title: 'Central Saraswati Knowledge Library & Reading Hall',
    hindiTitle: 'केंद्रीय सरस्वती पुस्तकालय एवं ई-संसाधन केंद्र',
    description: 'Over 38,000 reference volumes, educational encyclopedias, pharmacy pharmacopoeias, home science treatises, journals, and digital computer study stations.',
    stats: '38,000+ Books | National Journals | E-Library Stations',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fac-5',
    title: 'Psychology Testing & Guidance Counseling Lab',
    hindiTitle: 'मनोविज्ञान परीक्षण एवं मार्गदर्शन परामर्श लैब',
    description: 'Standardized psychological test batteries, intelligence tests, aptitude apparatus, and personal counseling rooms for teacher trainees and student mental wellness.',
    stats: '150+ Standardized Tests | Individual Counseling Booths',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fac-6',
    title: 'Sports Turf, Gymnasium & Residential Hostels',
    hindiTitle: 'क्रीड़ा संकुल, व्यायामशाला एवं पृथक छात्रावास',
    description: 'Sprawling athletic turf for track and field, volleyball, badminton, and yoga pavilion. Separate residential hostels for boys and girls with 24x7 security, RO water, and nutritious meals.',
    stats: '4.5 Acre Sports Turf | Separate Boys & Girls Hostels',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'B.Ed & BTC Micro-Teaching Workshop in Action',
    category: 'Teaching Lab',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    caption: 'Pupil teachers demonstrating innovative teaching-learning materials and classroom lesson delivery.'
  },
  {
    id: 'g-2',
    title: 'D.Pharma Pharmaceutical Formulation Practical',
    category: 'Pharmacy Lab',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    caption: 'Students compounding syrups, tablets, and analyzing active drug ingredients under expert pharmacist supervision.'
  },
  {
    id: 'g-3',
    title: 'B.Sc Home Science Food & Nutrition Exhibition',
    category: 'Home Science',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    caption: 'Students presenting therapeutic diets, bakery specialties, and low-cost nutritious meal plans.'
  },
  {
    id: 'g-4',
    title: 'Annual Degree & Certificate Convocation Ceremony',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    caption: 'Dignitaries conferring degrees and merit certificates to B.Ed, BTC, D.Pharma, B.A. and Home Science graduates.'
  },
  {
    id: 'g-5',
    title: 'Annual Inter-College Cultural & Drama Festival',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    caption: 'Folk dance, educational street play (Nukkad Natak), and youth celebration in the central auditorium.'
  },
  {
    id: 'g-6',
    title: 'Annual Athletics Meet & Yoga Championship',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
    caption: 'Vidyapeeth students competing in athletics, volleyball tournaments, and yoga demonstrations.'
  }
];

export const TESTIMONIALS = [
  {
    name: "Sunita Chaudhary",
    batch: "B.Ed. Batch of 2022",
    designation: "Government TGT Teacher (Basic Shiksha Parishad)",
    quote: "The rigorous practice teaching and special CTET coaching sessions at Fakirchand Vidyapeeth helped me clear both CTET and Super TET on my first attempt. Today, I am proudly serving as a government teacher.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Mohit Verma",
    batch: "D.Pharma Batch of 2023",
    designation: "Registered Pharmacist & Medical Store Owner",
    quote: "The modern pharmacy labs and practical training under Dr. Vivek Sharma gave me total confidence in pharmaceutical formulation and dispensing. The institute facilitated my state pharmacy council registration smoothly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Pooja Kashyap",
    batch: "B.Sc. Home Science Batch of 2024",
    designation: "Clinical Nutritionist at District Healthcare Hospital",
    quote: "The advanced food science laboratory, bakery training, and community nutrition camps in nearby villages equipped me with real clinical knowledge. Fakirchand Vidyapeeth is truly the best institute in the region.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export const MANDATORY_DISCLOSURES = [
  { title: "NCTE (National Council for Teacher Education) B.Ed Approval", refNo: "NRC/NCTE/FCV/B.Ed/2024", file: "NCTE_BEd_Approval_Letter.pdf" },
  { title: "SCERT / NCTE BTC (D.El.Ed) Recognition Order", refNo: "SCERT/UP/BTC/Affln-084", file: "BTC_DElEd_Recognition.pdf" },
  { title: "PCI (Pharmacy Council of India) D.Pharma Approval Order", refNo: "PCI-1094/2024/Affln", file: "PCI_DPharma_Approval.pdf" },
  { title: "UGC Section 2(f) & 12(B) Permanent Recognition", refNo: "F.No. 8-42/98 (CPP-I)", file: "UGC_Recognition_Letter.pdf" },
  { title: "NAAC Institutional Accreditation Certificate (Grade 'A')", refNo: "NAAC/A&A/2023/FCV", file: "NAAC_Accreditation_A.pdf" },
  { title: "Board of Technical Education (BTE) Pharmacy Affiliation", refNo: "BTE/Affln/Pharma/2025", file: "BTE_Affiliation_DPharma.pdf" },
  { title: "Internal Complaints Committee (ICC) & Women's Cell Roster", refNo: "Statutory Order FCV-09", file: "ICC_Committee_Members.pdf" },
  { title: "Anti-Ragging Squad & 24x7 Helpline Directives", refNo: "UGC Ragging Prevention Reg.", file: "Anti_Ragging_Policy.pdf" }
];
