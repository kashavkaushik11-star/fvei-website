import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CourseDirectory } from './components/CourseDirectory';
import { NoticeBoardSection } from './components/NoticeBoardSection';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { StudentCorner } from './components/StudentCorner';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { OnlineAdmissionModal } from './components/OnlineAdmissionModal';
import { NoticeModal } from './components/NoticeModal';
import { SyllabusModal } from './components/SyllabusModal';
import { ProspectusModal } from './components/ProspectusModal';
import { GrievanceModal } from './components/GrievanceModal';
import { MandatoryDisclosuresModal } from './components/MandatoryDisclosuresModal';

import { Course, Notice, COURSES, NOTICES } from './data/instituteData';

export default function App() {
  const [isHindi, setIsHindi] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Modal states
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [prefilledCourseId, setPrefilledCourseId] = useState<string | undefined>(undefined);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [selectedCourseSyllabus, setSelectedCourseSyllabus] = useState<Course | null>(null);
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);
  const [grievanceModalOpen, setGrievanceModalOpen] = useState(false);
  const [disclosuresModalOpen, setDisclosuresModalOpen] = useState(false);

  // Smooth scroll helpers
  const scrollToId = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAdmissionWithCourse = (course: Course | string) => {
    const courseId = typeof course === 'string' ? course : course.id;
    setPrefilledCourseId(courseId);
    setAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-950">
      {/* 1. Official Top Information & Helpline Bar */}
      <TopBar
        isHindi={isHindi}
        setIsHindi={setIsHindi}
        onOpenGrievance={() => setGrievanceModalOpen(true)}
        onOpenNotice={() => scrollToId('notices')}
        onOpenProspectus={() => setProspectusModalOpen(true)}
      />

      {/* 2. Main Institution Header & Seal */}
      <Header
        isHindi={isHindi}
        onOpenAdmissionModal={() => {
          setPrefilledCourseId(undefined);
          setAdmissionModalOpen(true);
        }}
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onScrollToFee={() => scrollToId('courses')}
      />

      {/* 3. Primary Sticky Navigation */}
      <Navbar
        isHindi={isHindi}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAdmissionModal={() => {
          setPrefilledCourseId(undefined);
          setAdmissionModalOpen(true);
        }}
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onOpenDisclosures={() => setDisclosuresModalOpen(true)}
      />

      {/* 4. Breaking Notification Marquee */}
      <AnnouncementTicker
        isHindi={isHindi}
        onSelectNotice={(notice) => setSelectedNotice(notice)}
        onViewAllNotices={() => scrollToId('notices')}
      />

      {/* 5. Main Hero Section */}
      <main className="flex-1">
        <Hero
          isHindi={isHindi}
          onOpenAdmissionModal={() => {
            setPrefilledCourseId(undefined);
            setAdmissionModalOpen(true);
          }}
          onOpenProspectus={() => setProspectusModalOpen(true)}
          onScrollToCourses={() => scrollToId('courses')}
          onScrollToFee={() => scrollToId('courses')}
          onScrollToFacilities={() => scrollToId('facilities')}
        />

        {/* 6. About the Institute, Vision, Leadership */}
        <AboutSection
          isHindi={isHindi}
          onOpenProspectus={() => setProspectusModalOpen(true)}
        />

        {/* 7. Comprehensive Academic Course Catalog & Syllabus */}
        <CourseDirectory
          isHindi={isHindi}
          onSelectCourseSyllabus={(course) => setSelectedCourseSyllabus(course)}
          onApplyForCourse={(course) => handleOpenAdmissionWithCourse(course)}
        />

        {/* 9. Official Circulars & Notice Board */}
        <NoticeBoardSection
          isHindi={isHindi}
          onSelectNotice={(notice) => setSelectedNotice(notice)}
        />

        {/* 10. Campus Facilities & Model High Court */}
        <FacilitiesShowcase
          isHindi={isHindi}
          onOpenGallery={() => scrollToId('gallery')}
        />

        {/* 12. Student Life, Anti-Ragging Cell & Alumni Accolades */}
        <StudentCorner
          isHindi={isHindi}
          onOpenGrievance={() => setGrievanceModalOpen(true)}
        />

        {/* 13. Institutional Photo & Event Gallery with Lightbox */}
        <GallerySection
          isHindi={isHindi}
        />

        {/* 14. Contact, Map & Quick Counseling Inquiry Form */}
        <ContactSection
          isHindi={isHindi}
        />
      </main>

      {/* 15. Comprehensive Institutional Footer */}
      <Footer
        isHindi={isHindi}
        onOpenAdmissionModal={() => {
          setPrefilledCourseId(undefined);
          setAdmissionModalOpen(true);
        }}
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onOpenDisclosures={() => setDisclosuresModalOpen(true)}
        onOpenGrievance={() => setGrievanceModalOpen(true)}
      />

      {/* Interactive Modals */}
      <OnlineAdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        initialCourseId={prefilledCourseId}
        isHindi={isHindi}
      />

      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
        isHindi={isHindi}
      />

      <SyllabusModal
        course={selectedCourseSyllabus}
        onClose={() => setSelectedCourseSyllabus(null)}
        onApplyForCourse={(course) => {
          setSelectedCourseSyllabus(null);
          handleOpenAdmissionWithCourse(course);
        }}
        isHindi={isHindi}
      />

      <ProspectusModal
        isOpen={prospectusModalOpen}
        onClose={() => setProspectusModalOpen(false)}
        onApplyOnline={() => {
          setProspectusModalOpen(false);
          setAdmissionModalOpen(true);
        }}
        isHindi={isHindi}
      />

      <GrievanceModal
        isOpen={grievanceModalOpen}
        onClose={() => setGrievanceModalOpen(false)}
        isHindi={isHindi}
      />

      <MandatoryDisclosuresModal
        isOpen={disclosuresModalOpen}
        onClose={() => setDisclosuresModalOpen(false)}
        isHindi={isHindi}
      />
    </div>
  );
}
