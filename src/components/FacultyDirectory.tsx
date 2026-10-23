import React, { useState } from 'react';
import { Mail, Award, BookOpen, GraduationCap } from 'lucide-react';
import { FACULTY, FacultyMember } from '../data/instituteData';

interface FacultyDirectoryProps {
  isHindi: boolean;
}

export const FacultyDirectory: React.FC<FacultyDirectoryProps> = ({ isHindi }) => {
  const [filterDept, setFilterDept] = useState('All');

  const departments = ['All', 'Faculty of Education (B.Ed / BTC)', 'Faculty of Pharmacy (D.Pharma)', 'Faculty of Home Science', 'Faculty of Arts (B.A.)'];

  const filteredFaculty = filterDept === 'All'
    ? FACULTY
    : FACULTY.filter((f) => f.department === filterDept);

  return (
    <section id="faculty" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "विद्वत परिषद एवं प्राध्यापक वर्ग" : "Scholarly Mentorship & Academicians"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "संस्थान के विद्वान शिक्षक वर्ग" : "Our Distinguished Faculty"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "अनुभवी शिक्षाविद, पीसीआई पंजीकृत वरिष्ठ फार्मासिस्ट, डॉक्टरेट शोधार्थी एवं गृह विज्ञान विशेषज्ञों का समर्पित दल।"
              : "Led by experienced teacher educators, registered pharmacists, clinical nutritionists, and university gold medalists dedicated to student triumph."}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilterDept(dept)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterDept === dept
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {dept === 'All' ? (isHindi ? 'सभी संकाय' : 'All Departments') : dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden relative bg-stone-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                    {member.experience}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block">
                    {member.department}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-1 font-display group-hover:text-red-900 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-medium text-stone-600 mt-0.5">
                    {member.designation}
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 space-y-1 text-[11px] text-stone-500">
                    <div>
                      <strong className="text-stone-700">Qual:</strong> {member.qualification}
                    </div>
                    <div>
                      <strong className="text-stone-700">Specialization:</strong> {member.specialization}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-100">
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs text-stone-600 hover:text-red-900 flex items-center gap-1.5 transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
