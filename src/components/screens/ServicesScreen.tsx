import React, { useState } from 'react';
import { INSURANCE_CATEGORIES } from '../../data/insuranceData';
import { GraduationCap, CheckCircle, FileText, ArrowRight } from 'lucide-react';

interface CategoryItemInfo {
  id: string;
  name: string;
  category: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
}

interface ServicesScreenProps {
  onSelectItem: (item: CategoryItemInfo) => void;
  onContactSpecialist: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onSelectItem,
  onContactSpecialist,
}) => {
  // Booking inquiry state
  const [selectedService, setSelectedService] = useState('SPED & Learning Intervention');
  const [learnerName, setLearnerName] = useState('');
  const [learnerAge, setLearnerAge] = useState('');
  const [notes, setNotes] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (learnerName && learnerAge) {
      const ref = `TTR-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setRequestSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Banner: changed from grey to Yellow #fbc232 */}
      <section className="bg-[#fbc232] border-b border-[#dfab28] text-[#2a2208] px-6 lg:px-12 py-9">
        <span className="text-[10px] uppercase font-condensed tracking-wider font-bold text-[#6e5008] block mb-1">
          Specialized Educational Programs & Tutoring
        </span>
        <h1 className="font-condensed text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#261f06]">
          MYTUTORPH SERVICES
        </h1>
        <p className="mt-2 text-xs lg:text-sm text-[#382c09] max-w-xl font-body leading-relaxed">
          Explore our complete range of SPED programs, diagnostic assessments, early intervention, play-based modules, and subject-focused tutoring tailored to your child’s goals.
        </p>
      </section>

      <div className="p-6 lg:p-10 space-y-10">
        {/* Quick Consultation Callout Box */}
        <section className="bg-amber-50/70 border-2 border-[#fbc232] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fbc232] text-[#2a2208] flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase">
                Free Initial Learning Needs Consultation
              </h3>
              <p className="text-xs text-gray-600">
                Discuss your child’s learning profile with a licensed educational coordinator.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+63289201456"
              className="font-condensed text-xl font-bold text-[#2b5da6] hover:text-[#1d4177]"
            >
              (02) 8920 1456
            </a>
            <button
              onClick={onContactSpecialist}
              className="bg-[#fbc232] hover:bg-[#eab327] text-[#2a2208] text-xs font-condensed uppercase px-4 py-2 font-bold cursor-pointer rounded-xs border border-[#dfab28] shadow-xs"
            >
              Contact Specialist
            </button>
          </div>
        </section>

        {/* Detailed Catalog by Division */}
        {Object.entries(INSURANCE_CATEGORIES).map(([catKey, category]) => (
          <section key={catKey}>
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-2 mb-4">
              <h2 className="font-condensed text-2xl font-bold text-[#35363a] uppercase">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    onSelectItem({
                      ...item,
                      category: category.title,
                    })
                  }
                  className="border border-gray-200 p-4 bg-white hover:border-[#fbc232] hover:shadow-sm transition cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-condensed text-base font-bold text-[#35363a] group-hover:text-[#2b5da6] uppercase">
                        {item.name}
                      </h3>
                      <span className="text-[10px] uppercase font-condensed font-bold text-[#2a2208] bg-[#fbc232]/30 px-2 py-0.5 rounded-xs border border-[#fbc232]/50">
                        {item.startingAt}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-gray-400">{item.typicalCoverage}</span>
                    <span className="text-[#2b5da6] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Online Learning Diagnostic & Program Intake Form */}
        <section className="border border-gray-200 bg-[#fbfbfb] p-6">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-[#fbc232]" />
            <h2 className="font-condensed text-2xl font-bold text-[#35363a] uppercase">
              Schedule an Assessment or Program Intake
            </h2>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Submit your student details below to reserve an assessment schedule or start your personalized learning journey.
          </p>

          {requestSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-5 text-emerald-900 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h4 className="font-condensed text-lg font-bold uppercase">
                  Intake Request Registered: {bookingRef}
                </h4>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you! We have received your request for <strong>{learnerName}</strong>. Our instructional supervisor will contact you within 24 hours to finalize assessment materials and tutor matching.
              </p>
              <button
                type="button"
                onClick={() => setRequestSubmitted(false)}
                className="text-xs font-condensed font-bold uppercase text-emerald-700 hover:underline cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Program Focus
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none font-condensed"
                  >
                    <option value="SPED & Learning Intervention">SPED & Learning Intervention</option>
                    <option value="Diagnostic Assessment">Diagnostic Reading/Math Assessment</option>
                    <option value="Early Intervention">Early Intervention (Ages 2-6)</option>
                    <option value="Play-based Learning">Play-based Learning</option>
                    <option value="Subject Focused Tutoring">Subject Focused Tutoring (Math/Science/English)</option>
                    <option value="College / High School Prep">College / Science HS Prep</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={learnerName}
                    onChange={(e) => setLearnerName(e.target.value)}
                    placeholder="e.g. Gabriel Reyes"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#fbc232]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Student Age / Grade Level *
                  </label>
                  <input
                    type="text"
                    required
                    value={learnerAge}
                    onChange={(e) => setLearnerAge(e.target.value)}
                    placeholder="e.g. 7 years old / Grade 2"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none font-condensed focus:outline-none focus:border-[#fbc232]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                  Specific Learning Goals, Challenges, or IEP Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details on learning style, attention span, reading challenges, teacher recommendations, or diagnosis if any..."
                  className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#fbc232]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-gray-500">
                  Prefer a phone conversation? Call <strong>+63 (02) 8920 1456</strong>
                </span>
                <button
                  type="submit"
                  className="bg-[#fbc232] hover:bg-[#eab327] text-[#2a2208] font-condensed text-xs uppercase font-bold px-6 py-2 rounded-xs cursor-pointer border border-[#dfab28] shadow-xs"
                >
                  Submit Intake Form
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
