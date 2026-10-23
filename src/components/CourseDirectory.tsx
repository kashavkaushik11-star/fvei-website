import React, { useState } from 'react';
import { BookOpen, Clock, Users, ArrowRight, Award, CheckCircle, FileText, Download } from 'lucide-react';
import { COURSES, Course } from '../data/instituteData';

interface CourseDirectoryProps {
  isHindi: boolean;
  onSelectCourseSyllabus: (course: Course) => void;
  onApplyForCourse: (course: Course) => void;
}

export const CourseDirectory: React.FC<CourseDirectoryProps> = ({
  isHindi,
  onSelectCourseSyllabus,
  onApplyForCourse,
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredCourses = selectedDept === 'all'
    ? COURSES
    : COURSES.filter((c) => c.department === selectedDept);

  return (
    <section id="courses" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "शैक्षणिक संकाय एवं डिग्री पाठ्यक्रम" : "Academic Faculties & Degree Programs"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "संस्थान द्वारा संचालित प्रमुख पाठ्यक्रम" : "Our Academic Programs"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "NCTE, PCI, SCERT एवं राज्य विश्वविद्यालय द्वारा अनुमोदित बी.एड., बीटीसी (D.El.Ed), डी.फार्मा, बी.ए. एवं बी.एससी. गृह विज्ञान पाठ्यक्रम।"
              : "Quality programs designed under NCTE, PCI, and University standards with dedicated laboratories and intensive practical internships."}
          </p>
        </div>

        {/* Department Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: isHindi ? 'सभी ५ पाठ्यक्रम' : 'All 5 Programs' },
            { id: 'education', label: isHindi ? 'शिक्षक प्रशिक्षण (B.Ed & BTC)' : 'Teacher Education (B.Ed / BTC)' },
            { id: 'pharmacy', label: isHindi ? 'फार्मेसी (D.Pharma)' : 'Pharmacy (D.Pharma - PCI)' },
            { id: 'homescience', label: isHindi ? 'गृह विज्ञान (B.Sc Home Science)' : 'B.Sc Home Science' },
            { id: 'arts', label: isHindi ? 'कला संकाय (B.A.)' : 'Bachelor of Arts (B.A.)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDept(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedDept === tab.id
                  ? 'bg-red-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group hover:border-amber-500/60"
            >
              <div className="p-6">
                {/* Level and Intake Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    {course.level} · {course.duration}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    <span>Intake: {course.intake}</span>
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-red-900 transition-colors font-display leading-snug">
                  {isHindi ? course.hindiName : course.name}
                </h3>
                <div className="text-xs text-stone-500 font-serif-body mt-1">
                  {!isHindi ? course.hindiName : course.name}
                </div>

                {/* Highlights */}
                <div className="mt-4 p-2.5 rounded bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{course.highlight}</span>
                </div>

                {/* Eligibility */}
                <div className="mt-3.5 space-y-1.5 text-xs text-stone-600">
                  <div className="font-semibold text-stone-800">
                    {isHindi ? "पात्रता मानदंड (Eligibility):" : "Eligibility Criteria:"}
                  </div>
                  <p className="line-clamp-2">{course.eligibility}</p>
                </div>

                {/* Annual Fee Indicator */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">{isHindi ? "वार्षिक शिक्षण शुल्क:" : "Annual Tuition Fee:"}</span>
                  <span className="text-base font-extrabold text-stone-900 font-display">
                    ₹{course.annualFee.toLocaleString('en-IN')}{" "}
                    <span className="text-[10px] font-normal text-stone-400">/ yr</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center gap-2">
                <button
                  onClick={() => onSelectCourseSyllabus(course)}
                  className="flex-1 py-2 px-3 rounded-lg border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-100 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  <span>{isHindi ? "पाठ्यक्रम (Syllabus)" : "View Syllabus"}</span>
                </button>

                <button
                  onClick={() => onApplyForCourse(course)}
                  className="flex-1 py-2 px-3 rounded-lg bg-red-800 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <span>{isHindi ? "आवेदन करें" : "Apply Now"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
