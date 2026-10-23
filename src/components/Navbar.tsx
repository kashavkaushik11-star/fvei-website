import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Bell,
  Users,
  Building2,
  FileText,
  PhoneCall,
  Scale,
  Sparkles,
  Info
} from 'lucide-react';

interface NavbarProps {
  isHindi: boolean;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenAdmissionModal: () => void;
  onOpenProspectus: () => void;
  onOpenDisclosures: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isHindi,
  activeSection,
  setActiveSection,
  onOpenAdmissionModal,
  onOpenProspectus,
  onOpenDisclosures,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setAcademicsDropdown(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white shadow-lg border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-13">
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 text-sm font-medium">
            <button
              onClick={() => scrollTo('hero')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'hero' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "मुख्य पृष्ठ" : "Home"}
            </button>

            <button
              onClick={() => scrollTo('about')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'about' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "संस्थान परिचय" : "About Us"}
            </button>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                onClick={() => scrollTo('courses')}
                onMouseEnter={() => setAcademicsDropdown(true)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                  activeSection === 'courses' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{isHindi ? "पाठ्यक्रम एवं संकाय" : "Academics & Courses"}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Hover Dropdown */}
              <div
                onMouseLeave={() => setAcademicsDropdown(false)}
                className={`absolute left-0 mt-1 w-64 bg-stone-900 text-stone-100 rounded-lg shadow-xl border border-stone-700 py-2 transition-all ${
                  academicsDropdown ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold text-amber-400 uppercase tracking-wider border-b border-stone-800">
                  {isHindi ? "अध्ययन संकाय" : "Academic Faculties"}
                </div>
                <button
                  onClick={() => scrollTo('courses')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-stone-800 hover:text-amber-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Teacher Education (B.Ed & BTC / D.El.Ed)</span>
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                </button>
                <button
                  onClick={() => scrollTo('courses')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-stone-800 hover:text-amber-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Pharmacy (D.Pharma - PCI Approved)</span>
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                </button>
                <button
                  onClick={() => scrollTo('courses')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-stone-800 hover:text-amber-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Home Science (B.Sc Home Science)</span>
                  <Building2 className="w-3.5 h-3.5 text-amber-500" />
                </button>
                <button
                  onClick={() => scrollTo('courses')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-stone-800 hover:text-amber-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Arts & Humanities (B.A. Degree)</span>
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollTo('fee-section')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'fee-section' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "प्रवेश एवं शुल्क संरचना" : "Admissions & Fee"}
            </button>

            <button
              onClick={() => scrollTo('notices')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'notices' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span>{isHindi ? "सूचना पट्ट" : "Notice Board"}</span>
            </button>

            <button
              onClick={() => scrollTo('facilities')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'facilities' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "सुविधाएं व प्रयोगशालाएं" : "Facilities & Labs"}
            </button>

            <button
              onClick={() => scrollTo('faculty')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'faculty' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "शिक्षक वर्ग" : "Faculty"}
            </button>

            <button
              onClick={() => scrollTo('student-corner')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'student-corner' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "छात्र प्रकोष्ठ" : "Student Life"}
            </button>

            <button
              onClick={() => scrollTo('gallery')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'gallery' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "दीर्घा (Gallery)" : "Gallery"}
            </button>

            <button
              onClick={onOpenDisclosures}
              className="px-2.5 py-1.5 text-xs text-amber-300 hover:text-amber-200 hover:bg-white/5 rounded transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>{isHindi ? "अनिवार्य प्रकटीकरण" : "Disclosures"}</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                activeSection === 'contact' ? 'text-amber-400 bg-white/10 font-bold' : 'text-stone-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {isHindi ? "संपर्क" : "Contact"}
            </button>
          </div>

          {/* Right Mobile Toggle & Fast Admission Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAdmissionModal}
              className="lg:hidden text-xs bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-3 py-1.5 rounded-md cursor-pointer"
            >
              {isHindi ? "प्रवेश" : "Apply"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-md focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-t border-stone-800 px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => scrollTo('hero')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "मुख्य पृष्ठ" : "Home"}
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "संस्थान परिचय" : "About Us"}
          </button>
          <button
            onClick={() => scrollTo('courses')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "पाठ्यक्रम एवं संकाय" : "Academic Programs"}
          </button>
          <button
            onClick={() => scrollTo('fee-section')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "प्रवेश एवं शुल्क संरचना" : "Admissions & Fee"}
          </button>
          <button
            onClick={() => scrollTo('notices')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-amber-300 font-semibold"
          >
            {isHindi ? "सूचना पट्ट (Notice Board)" : "Notice Board"}
          </button>
          <button
            onClick={() => scrollTo('facilities')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "सुविधाएं व प्रयोगशालाएं (Labs & Campus)" : "Facilities & Laboratories"}
          </button>
          <button
            onClick={() => scrollTo('faculty')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "शिक्षक वर्ग" : "Faculty"}
          </button>
          <button
            onClick={() => scrollTo('student-corner')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "छात्र प्रकोष्ठ व रैगिंग रोधी सेल" : "Student Life & Anti-Ragging"}
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "दीर्घा (Gallery)" : "Gallery"}
          </button>
          <button
            onClick={onOpenDisclosures}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-amber-300"
          >
            {isHindi ? "अनिवार्य प्रकटीकरण (Mandatory Disclosures)" : "Mandatory Disclosures"}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-stone-800 text-stone-200 hover:text-amber-300"
          >
            {isHindi ? "संपर्क" : "Contact"}
          </button>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-md text-center text-sm shadow cursor-pointer"
            >
              {isHindi ? "ऑनलाइन आवेदन २०२६-२७" : "Apply Online 2026-27"}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProspectus();
              }}
              className="w-full py-2 bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-md text-center cursor-pointer"
            >
              {isHindi ? "विवरणिका (Prospectus) डाउनलोड" : "Download Prospectus"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
