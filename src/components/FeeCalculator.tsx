import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Download, HelpCircle } from 'lucide-react';
import { COURSES, Course } from '../data/instituteData';

interface FeeCalculatorProps {
  isHindi: boolean;
  onApplyWithSelectedProgram: (courseId: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({
  isHindi,
  onApplyWithSelectedProgram,
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES[0].id);
  const [category, setCategory] = useState<'GEN' | 'OBC' | 'SC_ST' | 'EWS'>('GEN');
  const [isGirlCandidate, setIsGirlCandidate] = useState<boolean>(false);
  const [includeHostel, setIncludeHostel] = useState<boolean>(false);
  const [includeTransport, setIncludeTransport] = useState<boolean>(false);

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  // Fee calculation logic
  const baseTuition = selectedCourse.annualFee;
  const examAndUniv = 3500;
  const libraryAndTech = 2500;
  const refundableDeposit = 2000;
  const hostelCharges = includeHostel ? 42000 : 0;
  const transportCharges = includeTransport ? 12000 : 0;

  // Concession calculation
  let discountPercentage = 0;
  if (category === 'SC_ST') discountPercentage += 25;
  else if (category === 'EWS') discountPercentage += 15;
  else if (category === 'OBC') discountPercentage += 10;

  if (isGirlCandidate) discountPercentage += 10;

  const maxDiscountPercentage = Math.min(discountPercentage, 40); // Cap at 40% on base tuition
  const scholarshipConcession = Math.round((baseTuition * maxDiscountPercentage) / 100);

  const subtotalAcademic = baseTuition + examAndUniv + libraryAndTech + refundableDeposit;
  const netPayable = subtotalAcademic - scholarshipConcession + hostelCharges + transportCharges;

  const installment1 = Math.round(netPayable * 0.55);
  const installment2 = netPayable - installment1;

  return (
    <section id="fee-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "पारदर्शी शुल्क एवं छात्रवृत्ति" : "Transparent Fee & Concessions"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "इंटरैक्टिव शुल्क कैलकुलेटर २०२६-२७" : "Interactive Fee Calculator 2026-27"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "अपने चुने गए पाठ्यक्रम, श्रेणी व छात्रावास विकल्प के अनुसार पारदर्शी वार्षिक शुल्क एवं अनुमानित छात्रवृत्ति रियायत का तुरंत आकलन करें।"
              : "Estimate your exact annual academic charges, applicable category fee concessions, and installment schedules for the 2026-27 academic year."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Options Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            {/* Step 1: Program Choice */}
            <div>
              <label htmlFor="fee-course-select" className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-2">
                {isHindi ? "१. पाठ्यक्रम का चयन करें (Select Program)" : "1. Select Academic Program"}
              </label>
              <select
                id="fee-course-select"
                aria-label={isHindi ? "पाठ्यक्रम का चयन करें" : "Select academic program"}
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm font-medium focus:ring-2 focus:ring-red-800 focus:outline-none"
              >
                {COURSES.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} ({course.duration}) — ₹{course.annualFee.toLocaleString('en-IN')}/yr
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Category */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-2">
                {isHindi ? "२. सामाजिक श्रेणी (Social Category / Quota)" : "2. Social Category & Fee Concession"}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'GEN', label: 'General / Unreserved', disc: 'Standard' },
                  { id: 'OBC', label: 'OBC (Non-Creamy)', disc: '10% Merit' },
                  { id: 'SC_ST', label: 'SC / ST Quota', disc: '25% Post-Matric' },
                  { id: 'EWS', label: 'EWS (Economically Weaker)', disc: '15% Concession' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id as any)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      category === item.id
                        ? 'border-red-900 bg-red-50/70 text-red-900 ring-1 ring-red-900'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.id.replace('_', '/')}</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">{item.disc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Girl Candidate Benefit */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-3.5 rounded-lg border border-amber-200 bg-amber-50/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isGirlCandidate}
                  onChange={(e) => setIsGirlCandidate(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                />
                <div className="text-xs">
                  <span className="font-bold text-amber-950">
                    {isHindi ? "कन्या शिक्षा प्रोत्साहन छात्रवृत्ति (Beti Bachao Concession)" : "Special Girl Student Empowerment Scholarship"}
                  </span>
                  <p className="text-amber-800 text-[11px] mt-0.5">
                    {isHindi ? "अतिरिक्त १०% शिक्षण शुल्क छूट लागू होगी।" : "Applies an additional 10% fee waiver to encourage female education in law & computing."}
                  </p>
                </div>
              </label>
            </div>

            {/* Step 4: Optional Facilities */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-2">
                {isHindi ? "३. अतिरिक्त परिसर सुविधाएं (Optional Amenities)" : "3. Optional Campus Facilities"}
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100/60 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeHostel}
                      onChange={(e) => setIncludeHostel(e.target.checked)}
                      className="w-4 h-4 text-red-800 rounded border-stone-300"
                    />
                    <div>
                      <div className="text-xs font-bold text-stone-800">
                        {isHindi ? "छात्रावास एवं मेस (Residential Hostel & Meals)" : "Campus Hostel & Mess Facility"}
                      </div>
                      <div className="text-[11px] text-stone-500">24x7 Security, RO Purified Water, Wi-Fi, 4 Veg Meals Daily</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-stone-700">₹42,000 / yr</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100/60 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeTransport}
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-4 h-4 text-red-800 rounded border-stone-300"
                    />
                    <div>
                      <div className="text-xs font-bold text-stone-800">
                        {isHindi ? "महाविद्यालय बस परिवहन (College Bus Transit)" : "College Transport / Bus Route Pass"}
                      </div>
                      <div className="text-[11px] text-stone-500">Coverage across 25+ pickup points in the city and surrounding areas</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-stone-700">₹12,000 / yr</span>
                </label>
              </div>
            </div>
          </div>

          {/* Breakdown & Summary Column */}
          <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {isHindi ? "वार्षिक शुल्क प्राक्कलन" : "Fee Estimate Summary"}
                </span>
                <h3 className="text-lg font-bold font-display text-stone-100 mt-0.5">
                  {selectedCourse.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-400">Duration</span>
                <div className="text-xs font-bold text-stone-200">{selectedCourse.duration}</div>
              </div>
            </div>

            {/* Line Item Breakdown */}
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex justify-between py-1">
                <span>Annual Base Tuition Fee</span>
                <span className="font-semibold text-stone-100">₹{baseTuition.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>University Exam & Registration Fee</span>
                <span className="font-semibold text-stone-100">₹{examAndUniv.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Saraswati Library & Practical Lab Charges</span>
                <span className="font-semibold text-stone-100">₹{libraryAndTech.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Refundable Caution Money (One-time)</span>
                <span className="font-semibold text-stone-100">₹{refundableDeposit.toLocaleString('en-IN')}</span>
              </div>

              {scholarshipConcession > 0 && (
                <div className="flex justify-between py-1 text-emerald-400 font-semibold border-t border-stone-800 pt-2">
                  <span>Category & Merit Concession ({maxDiscountPercentage}%)</span>
                  <span>- ₹{scholarshipConcession.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeHostel && (
                <div className="flex justify-between py-1 text-stone-300">
                  <span>Hostel & Mess Facility</span>
                  <span className="font-semibold text-stone-100">+ ₹{hostelCharges.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeTransport && (
                <div className="flex justify-between py-1 text-stone-300">
                  <span>Bus Transit Service</span>
                  <span className="font-semibold text-stone-100">+ ₹{transportCharges.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            {/* Net Total Box */}
            <div className="pt-4 border-t border-stone-800">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold uppercase text-stone-400">
                  {isHindi ? "कुल शुद्ध देय वार्षिक शुल्क:" : "Net Payable Annual Fee:"}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
                  ₹{netPayable.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[11px] text-stone-400 mt-1">
                *Eligible for direct State Government Post-Matric & NSP scholarship reimbursement.
              </p>
            </div>

            {/* Installment Options */}
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700/80 text-xs space-y-2">
              <div className="font-bold text-amber-300">
                {isHindi ? "लचीली द्वि-किस्त व्यवस्था (Semester Installments):" : "Flexible 2-Installment Option:"}
              </div>
              <div className="flex justify-between text-stone-300">
                <span>1st Installment (At Admission):</span>
                <span className="font-bold text-stone-100">₹{installment1.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>2nd Installment (Even Semester):</span>
                <span className="font-bold text-stone-100">₹{installment2.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Apply Action */}
            <button
              onClick={() => onApplyWithSelectedProgram(selectedCourse.id)}
              className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>{isHindi ? "इस पाठ्यक्रम हेतु ऑनलाइन आवेदन करें" : "Apply Online for This Course"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
