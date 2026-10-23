import React, { useState } from 'react';
import {
  X,
  GraduationCap,
  CheckCircle2,
  Printer,
  Download,
  ArrowRight,
  ArrowLeft,
  Scale,
  ShieldCheck,
  CreditCard,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES, INSTITUTE_DETAILS } from '../data/instituteData';

interface OnlineAdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  isHindi: boolean;
}

export const OnlineAdmissionModal: React.FC<OnlineAdmissionModalProps> = ({
  isOpen,
  onClose,
  initialCourseId,
  isHindi,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    candidateName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: 'Male',
    category: 'GEN',
    mobile: '',
    email: '',
    aadhaar: '',
    address: '',
    tenthBoard: 'CBSE',
    tenthYear: '2022',
    tenthPercentage: '',
    twelfthBoard: 'CBSE',
    twelfthYear: '2024',
    twelfthPercentage: '',
    graduationDegree: '',
    graduationPercentage: '',
    programId: initialCourseId || COURSES[0].id,
    needHostel: false,
    needTransport: false,
    declaration: false,
  });

  const [submittedApplicationId, setSubmittedApplicationId] = useState<string | null>(null);
  const [submissionDate, setSubmissionDate] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const selectedCourse = COURSES.find((c) => c.id === formData.programId) || COURSES[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final submission simulation
      const randomId = `FCV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedApplicationId(randomId);
      setSubmissionDate(new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }));

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      setStep(5);
    }
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display leading-tight">
                {isHindi ? "ऑनलाइन प्रवेश आवेदन पोर्टल २०२६-२७" : "Online Admission Portal 2026-27"}
              </h3>
              <p className="text-xs text-amber-300/90 font-serif-body">
                {INSTITUTE_DETAILS.name} · NCTE, PCI & UGC Approved
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker (Steps 1 to 4) */}
        {step <= 4 && (
          <div className="bg-stone-50 border-b border-stone-200 px-6 py-3 shrink-0">
            <div className="flex items-center justify-between max-w-xl mx-auto text-xs font-semibold">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-red-900 font-bold' : 'text-stone-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-red-900 text-white' : 'bg-stone-200'}`}>1</span>
                <span className="hidden sm:inline">{isHindi ? "व्यक्तिगत विवरण" : "Personal"}</span>
              </div>
              <div className="w-8 h-0.5 bg-stone-200"></div>
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-red-900 font-bold' : 'text-stone-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-red-900 text-white' : 'bg-stone-200'}`}>2</span>
                <span className="hidden sm:inline">{isHindi ? "शैक्षणिक अंक" : "Academic"}</span>
              </div>
              <div className="w-8 h-0.5 bg-stone-200"></div>
              <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-red-900 font-bold' : 'text-stone-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-red-900 text-white' : 'bg-stone-200'}`}>3</span>
                <span className="hidden sm:inline">{isHindi ? "पाठ्यक्रम चयन" : "Program"}</span>
              </div>
              <div className="w-8 h-0.5 bg-stone-200"></div>
              <div className={`flex items-center gap-1.5 ${step >= 4 ? 'text-red-900 font-bold' : 'text-stone-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 4 ? 'bg-red-900 text-white' : 'bg-stone-200'}`}>4</span>
                <span className="hidden sm:inline">{isHindi ? "घोषणा व जमा" : "Submit"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-2">
                {isHindi ? "अभ्यर्थी का व्यक्तिगत विवरण (Candidate Information)" : "Candidate Identity & Contacts"}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Candidate Full Name (अभ्यर्थी का पूरा नाम) *
                  </label>
                  <input
                    type="text"
                    name="candidateName"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.candidateName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Father's / Guardian's Name (पिता/अभिभावक का नाम) *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    placeholder="e.g. Suresh Sharma"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Mother's Name (माता का नाम) *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    required
                    placeholder="e.g. Sunita Devi"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Date of Birth (जन्म तिथि) *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Gender (लिंग) *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  >
                    <option value="Male">Male (पुरुष)</option>
                    <option value="Female">Female (महिला)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Category (श्रेणी) *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  >
                    <option value="GEN">General / Unreserved</option>
                    <option value="OBC">OBC (Non-Creamy Layer)</option>
                    <option value="SC">Scheduled Caste (SC)</option>
                    <option value="ST">Scheduled Tribe (ST)</option>
                    <option value="EWS">Economically Weaker Section (EWS)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Mobile Number (मोबाइल नंबर) *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="10-digit Mobile No."
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Email Address (ईमेल) *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="candidate@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Permanent Residential Address (स्थाई पता) *
                </label>
                <textarea
                  name="address"
                  required
                  rows={2}
                  placeholder="House No, Village/Colony, District, State, PIN"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs focus:ring-2 focus:ring-red-900 focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-red-900 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <span>{isHindi ? "अगला चरण (Next)" : "Save & Continue to Academic Details"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-2">
                {isHindi ? "शैक्षणिक योग्यता एवं प्राप्तांक" : "Academic Records & Marks Details"}
              </div>

              {/* 10th Class */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
                <div className="text-xs font-bold text-stone-900 flex items-center justify-between">
                  <span>Class 10th (High School / Matriculation) *</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1">Board / Council</label>
                    <input
                      type="text"
                      name="tenthBoard"
                      required
                      placeholder="e.g. CBSE / State Board"
                      value={formData.tenthBoard}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Passing Year</label>
                    <input
                      type="text"
                      name="tenthYear"
                      required
                      placeholder="e.g. 2022"
                      value={formData.tenthYear}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Aggregate % / CGPA</label>
                    <input
                      type="text"
                      name="tenthPercentage"
                      required
                      placeholder="e.g. 84.5%"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* 12th Class */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
                <div className="text-xs font-bold text-stone-900 flex items-center justify-between">
                  <span>Class 12th (Intermediate / Higher Secondary) *</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1">Board / Council</label>
                    <input
                      type="text"
                      name="twelfthBoard"
                      required
                      placeholder="e.g. CBSE / State Board"
                      value={formData.twelfthBoard}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Passing Year</label>
                    <input
                      type="text"
                      name="twelfthYear"
                      required
                      placeholder="e.g. 2024"
                      value={formData.twelfthYear}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Aggregate % / CGPA</label>
                    <input
                      type="text"
                      name="twelfthPercentage"
                      required
                      placeholder="e.g. 78.2%"
                      value={formData.twelfthPercentage}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Graduation (Optional / for LL.B. / LL.M. / B.Ed) */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
                <div className="text-xs font-bold text-stone-900 flex items-center justify-between">
                  <span>Graduation Degree (Required for B.Ed & BTC / D.El.Ed)</span>
                  <span className="text-[10px] text-stone-500 font-normal">Optional for 12th Pass (D.Pharma / B.A. / B.Sc)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1">Degree & University</label>
                    <input
                      type="text"
                      name="graduationDegree"
                      placeholder="e.g. B.A. / B.Sc / B.Com from Delhi Univ"
                      value={formData.graduationDegree}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Aggregate Percentage</label>
                    <input
                      type="text"
                      name="graduationPercentage"
                      placeholder="e.g. 62.4%"
                      value={formData.graduationPercentage}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-red-900 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <span>{isHindi ? "पाठ्यक्रम चयन पर जाएं" : "Continue to Program Selection"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-2">
                {isHindi ? "पाठ्यक्रम एवं अतिरिक्त सुविधाएं" : "Program Choice & Campus Facilities"}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-2">
                  Select Desired Academic Program *
                </label>
                <div className="space-y-2">
                  {COURSES.map((course) => (
                    <label
                      key={course.id}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                        formData.programId === course.id
                          ? 'border-red-900 bg-red-50/70 ring-1 ring-red-900'
                          : 'border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="programId"
                        value={course.id}
                        checked={formData.programId === course.id}
                        onChange={handleChange}
                        className="mt-1 text-red-900"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900">{course.name}</span>
                          <span className="font-bold text-red-900">₹{course.annualFee.toLocaleString('en-IN')}/yr</span>
                        </div>
                        <div className="text-stone-500 text-[11px] mt-0.5">
                          {course.duration} · Intake: {course.intake} Seats · {course.highlight}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 bg-stone-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="needHostel"
                    checked={formData.needHostel}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-900 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-800">I require in-campus Hostel & Mess accommodation</span>
                    <span className="text-stone-500 block text-[11px]">Separate boys & girls hostels with 24x7 security and nutritious dining</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 bg-stone-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="needTransport"
                    checked={formData.needTransport}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-900 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-800">I require College Bus Transportation Service</span>
                    <span className="text-stone-500 block text-[11px]">Bus pass issued for daily transit from designated pickup nodes</span>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-red-900 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <span>{isHindi ? "घोषणा एवं सत्यापन पर जाएं" : "Proceed to Declaration"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-2">
                {isHindi ? "दस्तावेज़ सत्यापन एवं अंतिम घोषणा" : "Document Verification & Formal Undertaking"}
              </div>

              {/* Review summary box */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs space-y-2">
                <div className="font-bold text-stone-900 mb-2">Application Summary Preview:</div>
                <div className="grid grid-cols-2 gap-2 text-stone-700">
                  <div><strong>Candidate:</strong> {formData.candidateName || 'Rahul Sharma'}</div>
                  <div><strong>Program:</strong> {selectedCourse.name}</div>
                  <div><strong>Father:</strong> {formData.fatherName || 'Suresh Sharma'}</div>
                  <div><strong>Category:</strong> {formData.category}</div>
                  <div><strong>Mobile:</strong> {formData.mobile || '+91 9876543210'}</div>
                  <div><strong>Annual Tuition:</strong> ₹{selectedCourse.annualFee.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* Mandatory Checklist */}
              <div className="space-y-2.5 text-xs text-stone-700 bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                <div className="font-bold text-amber-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Documents to be produced at physical counseling:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-stone-600 text-[11px]">
                  <li>Class 10th Marksheet & Passing Certificate (Original + 3 Xerox)</li>
                  <li>Class 12th Marksheet & Migration Certificate</li>
                  <li>Graduation Marksheet (for B.Ed & BTC / D.El.Ed applicants)</li>
                  <li>Category / Caste Certificate (SC/ST/OBC/EWS) if claiming reservation</li>
                  <li>Recent Passport Size Colored Photographs (6 copies)</li>
                  <li>Aadhaar Card copy & Character Certificate from last attended institution</li>
                </ul>
              </div>

              {/* Declaration checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration"
                    required
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-red-900 rounded"
                  />
                  <span className="text-xs text-stone-700 leading-relaxed">
                    I hereby certify that all information submitted in this application is true and complete to the best of my knowledge. I understand that any false statement or omission will result in immediate disqualification or cancellation of admission in accordance with the regulatory rules of Fakirchand Vidyapeeth, NCTE and PCI.
                  </span>
                </label>
              </div>

              {/* Simulated Registration Fee Notice */}
              <div className="p-3 bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-700" />
                  <span className="text-stone-700 font-medium">Application Processing & Prospectus Fee:</span>
                </div>
                <span className="font-bold text-stone-900">₹500.00 (Exempted for Online Submission)</span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={!formData.declaration}
                  className={`px-6 py-2.5 rounded-lg text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer ${
                    formData.declaration
                      ? 'bg-emerald-700 hover:bg-emerald-800'
                      : 'bg-stone-400 cursor-not-allowed'
                  }`}
                >
                  <FileCheck className="w-4 h-4" />
                  <span>{isHindi ? "आवेदन अंतिम रूप से जमा करें" : "Submit & Generate Official Slip"}</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 5: Official Printable Admission Slip */}
          {step === 5 && (
            <div className="space-y-6">
              {/* Success celebration banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-1" />
                <h4 className="text-base font-bold text-emerald-950 font-display">
                  {isHindi ? "आवेदन सफलतापूर्वक पंजीकृत हो गया है!" : "Application Registered Successfully!"}
                </h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Your provisional admission application has been registered for the Academic Year 2026-27.
                </p>
              </div>

              {/* Printable Official Slip */}
              <div
                id="printable-admission-slip"
                className="bg-white p-6 sm:p-8 rounded-xl border-2 border-stone-800 shadow-sm relative font-serif-body"
              >
                {/* Official College Letterhead Rim */}
                <div className="text-center pb-4 border-b-2 border-stone-800">
                  <div className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                    ॥ {INSTITUTE_DETAILS.motto} ॥
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 font-display uppercase tracking-tight mt-1">
                    {INSTITUTE_DETAILS.name}
                  </h2>
                  <div className="text-xs font-semibold text-stone-700">
                    {INSTITUTE_DETAILS.hindiName}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">
                    {INSTITUTE_DETAILS.recognition} · {INSTITUTE_DETAILS.accreditation}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    AISHE Code: {INSTITUTE_DETAILS.aisheCode} | College Code: {INSTITUTE_DETAILS.collegeCode}
                  </div>

                  <div className="mt-3 inline-block bg-stone-900 text-white text-[11px] font-bold px-4 py-1 rounded uppercase tracking-wider">
                    PROVISIONAL ADMISSION ACKNOWLEDGMENT SLIP (2026-27)
                  </div>
                </div>

                {/* Candidate Particulars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 pb-5 text-xs border-b border-stone-300">
                  <div className="sm:col-span-2 space-y-2">
                    <div className="flex justify-between border-b border-stone-100 pb-1">
                      <span className="text-stone-500 font-sans">Application / Reg. ID:</span>
                      <strong className="text-red-900 font-mono text-sm">{submittedApplicationId}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-1">
                      <span className="text-stone-500 font-sans">Candidate's Name:</span>
                      <strong className="text-stone-900 uppercase">{formData.candidateName || 'Rahul Sharma'}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-1">
                      <span className="text-stone-500 font-sans">Father's Name:</span>
                      <span className="text-stone-800">{formData.fatherName || 'Suresh Sharma'}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-1">
                      <span className="text-stone-500 font-sans">Date of Birth / Gender:</span>
                      <span className="text-stone-800">{formData.dob || '15/07/2004'} ({formData.gender})</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-1">
                      <span className="text-stone-500 font-sans">Category / Quota:</span>
                      <span className="text-stone-800 font-semibold">{formData.category}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-1">
                      <span className="text-stone-500 font-sans">Mobile & Email:</span>
                      <span className="text-stone-800">{formData.mobile || '+91 9876543210'} | {formData.email || 'student@fcv.edu.in'}</span>
                    </div>
                  </div>

                  {/* Photo & Barcode box */}
                  <div className="flex flex-col items-center justify-between p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <div className="w-24 h-28 border border-dashed border-stone-400 bg-stone-100 flex flex-col items-center justify-center text-[10px] text-stone-500 text-center p-2">
                      <div className="font-sans font-semibold">Affix Passport Photograph</div>
                      <div className="text-[8px] text-stone-400 mt-1">3.5cm x 4.5cm</div>
                    </div>
                    {/* Simulated Barcode */}
                    <div className="w-full text-center mt-2 pt-2 border-t border-stone-200">
                      <div className="font-mono text-[9px] tracking-widest text-stone-800">
                        ||||| | |||| ||| ||||| || |
                      </div>
                      <div className="text-[8px] text-stone-500 font-mono mt-0.5">{submittedApplicationId}</div>
                    </div>
                  </div>
                </div>

                {/* Course Allotment Details */}
                <div className="py-4 text-xs space-y-2 border-b border-stone-300">
                  <div className="font-bold text-stone-900 font-sans uppercase tracking-wide">
                    Program & Enrollment Details:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700">
                    <div><strong>Applied Course:</strong> {selectedCourse.name}</div>
                    <div><strong>Course Duration:</strong> {selectedCourse.duration}</div>
                    <div><strong>Annual Tuition Fee:</strong> ₹{selectedCourse.annualFee.toLocaleString('en-IN')}</div>
                    <div><strong>Hostel Required:</strong> {formData.needHostel ? 'Yes (Requested)' : 'No'}</div>
                    <div><strong>Registration Status:</strong> <span className="text-emerald-700 font-bold">Provisional / Verified</span></div>
                    <div><strong>Submission Timestamp:</strong> {submissionDate}</div>
                  </div>
                </div>

                {/* Verification & Registrar Signatures */}
                <div className="pt-8 flex items-end justify-between text-xs">
                  <div className="text-center">
                    <div className="w-32 border-b border-stone-500 mb-1"></div>
                    <span className="text-[10px] text-stone-600 font-sans">Candidate's Signature</span>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-red-900/40 mx-auto flex items-center justify-center text-[9px] text-red-900 font-bold rotate-[-15deg] p-1">
                      SEAL OF REGISTRAR FCV
                    </div>
                    <span className="text-[10px] text-stone-400 font-sans">College Seal</span>
                  </div>

                  <div className="text-center">
                    <div className="font-serif italic text-sm text-stone-800 font-bold">Vandana Mishra</div>
                    <div className="w-36 border-b border-stone-500 mb-1"></div>
                    <span className="text-[10px] text-stone-600 font-sans">Convener, Admission Committee</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-xs cursor-pointer"
                >
                  Close Window
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrintSlip}
                    className="px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-2 shadow cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-amber-400" />
                    <span>Print Provisional Slip</span>
                  </button>

                  <button
                    onClick={() => {
                      alert(`Application slip downloaded for ${submittedApplicationId}. Please retain a copy for physical counseling.`);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-red-900 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-2 shadow cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Save PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
