import React from 'react';
import { X, BookOpen, Download, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { Course } from '../data/instituteData';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onApplyForCourse: (course: Course) => void;
  isHindi: boolean;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  onClose,
  onApplyForCourse,
  isHindi,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 to-stone-900 text-white p-6 flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {course.level} · {course.duration}
              </span>
              <span className="text-xs text-stone-300">Intake: {course.intake} Seats</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              {course.name}
            </h3>
            <p className="text-xs text-amber-200/90 font-serif-body mt-0.5">
              {course.hindiName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close syllabus view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider mb-1.5">
              Program Overview
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-serif-body">
              {course.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
            <div>
              <span className="text-stone-500 block">Eligibility:</span>
              <strong className="text-stone-800">{course.eligibility}</strong>
            </div>
            <div>
              <span className="text-stone-500 block">Annual Tuition:</span>
              <strong className="text-stone-800">₹{course.annualFee.toLocaleString('en-IN')} / year</strong>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-stone-500 block">Examination Scheme:</span>
              <strong className="text-stone-800">70% External + 30% Internal</strong>
            </div>
          </div>

          {/* Semester-wise breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider mb-3">
              Semester-wise Curriculum & Subject Modules
            </h4>
            <div className="space-y-3">
              {course.semesters.map((s, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
                  <div className="text-xs font-bold text-red-900 border-b border-stone-100 pb-2 mb-2">
                    {s.sem}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {s.subjects.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
            <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider mb-2">
              Career Avenues & Placement Horizons
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.careerProspects.map((cp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 text-xs font-medium"
                >
                  {cp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-stone-50 p-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              alert(`Downloading complete syllabus PDF for ${course.name}`);
            }}
            className="px-4 py-2 border border-stone-300 hover:bg-stone-100 rounded-lg text-xs font-semibold text-stone-700 flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-stone-500" />
            <span>Download Full Syllabus PDF</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onApplyForCourse(course);
            }}
            className="px-5 py-2.5 bg-red-900 hover:bg-red-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow cursor-pointer"
          >
            <span>Apply Online for {course.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
