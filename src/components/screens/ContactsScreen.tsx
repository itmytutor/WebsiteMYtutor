import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, GraduationCap } from 'lucide-react';

interface ContactsScreenProps {
  onExplorePrograms?: () => void;
}

export const ContactsScreen: React.FC<ContactsScreenProps> = ({}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    topic: 'SPED & Learning Intervention',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Banner: changed from skyblue to Grey #ebeceb */}
      <section className="bg-[#ebeceb] border-b border-gray-300 text-[#35363a] px-6 lg:px-12 py-9">
        <span className="text-[10px] uppercase font-condensed tracking-wider font-bold text-gray-500 block mb-1">
          Admissions, Consultations & Inquiries
        </span>
        <h1 className="font-condensed text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#222326]">
          CONTACT MYTUTORPH
        </h1>
        <p className="mt-2 text-xs lg:text-sm text-gray-600 max-w-xl font-body leading-relaxed">
          Connect directly with our educational coordinators to discuss your child’s unique needs, request learning assessments, or arrange 1-on-1 tutoring sessions.
        </p>
      </section>

      <div className="p-6 lg:p-10 space-y-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-8 h-8 rounded-full bg-gray-200 text-[#35363a] flex items-center justify-center mb-3">
              <Phone className="w-4 h-4 text-[#2b5da6]" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Admissions Hotline
            </h3>
            <p className="text-xs text-gray-500 mb-2">Speak directly with a coordinator</p>
            <a
              href="tel:+639159937065"
              className="font-condensed text-lg font-bold text-[#2b5da6] hover:text-[#1c3f73] block"
            >
              +63 915 993 7065
            </a>
            <span className="text-[10px] text-gray-400 mt-1 block">
              Mon - Fri: 8:00 AM - 5:00 PM
            </span>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-8 h-8 rounded-full bg-gray-200 text-[#35363a] flex items-center justify-center mb-3">
              <Mail className="w-4 h-4 text-[#2b5da6]" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Email Coordination
            </h3>
            <p className="text-xs text-gray-500 mb-2">Typically answered within 3 business hours</p>
            <div className="space-y-1 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 block">Email:</span>
                <a
                  href="mailto:admin@mytutorph.com"
                  className="font-semibold text-gray-700 hover:text-[#2b5da6]"
                >
                  admin@mytutorph.com
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-8 h-8 rounded-full bg-gray-200 text-[#35363a] flex items-center justify-center mb-3">
              <MapPin className="w-4 h-4 text-[#2b5da6]" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Learning Center Hub
            </h3>
            <p className="text-xs text-gray-500 mb-2">Main Office</p>
            <address className="not-italic text-xs text-gray-700 space-y-0.5">
              <p className="font-semibold">MyTutorPH Learning Center</p>
              <p>2/F Lucky Plaza Bldg., Burgos St.,</p>
              <p>La Paz, Iloilo City</p>
            </address>
          </div>
        </div>

        {/* Online Contact Message Form */}
        <section id="inquiry-form" className="border border-gray-200 bg-[#f9f9f9] p-6 scroll-mt-20">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-[#2b5da6]" />
            <h2 className="font-condensed text-2xl font-bold text-[#35363a] uppercase">
              Send an Inquiry or Book an Assessment
            </h2>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Tell us about your learner and how we can best support their growth:
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-6 text-emerald-900 space-y-3 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-condensed text-xl font-bold uppercase">
                Inquiry Received, {formData.name}!
              </h4>
              <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                Thank you for contacting MyTutorPH. Our learning coordinator will review your notes regarding &quot;{formData.topic}&quot; and reply to <strong>{formData.email}</strong> within 1 business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    childName: '',
                    topic: 'SPED & Learning Intervention',
                    message: '',
                  });
                }}
                className="gray-btn text-xs font-condensed uppercase px-4 py-1.5 font-bold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maria.santos@example.com"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0917-123-4567"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Student Name & Grade Level
                  </label>
                  <input
                    type="text"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder="e.g. Lucas Santos (Grade 3)"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none font-condensed"
                >
                  <option value="SPED & Learning Intervention">SPED (Special Education)</option>
                  <option value="Diagnostic Assessment">Diagnostic Assessment & Reading Inventory</option>
                  <option value="Learning Intervention">Learning Intervention & Remediation</option>
                  <option value="Early Intervention">Early Intervention (Ages 2-6)</option>
                  <option value="Play-based Learning">Play-based Learning</option>
                  <option value="Subject Focused Tutoring">Subject Focused Tutoring (Math / Science / English)</option>
                  <option value="Entrance Exam Review">College / Science High School Exam Prep</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                  How Can We Best Help Your Child? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your child's current challenges, favorite subjects, learning pacing, or schedule preferences..."
                  className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-gray-400">
                  Your family&apos;s privacy is strictly protected.
                </span>
                <button
                  type="submit"
                  className="bg-[#2b5da6] hover:bg-[#224d8b] text-white font-condensed text-xs uppercase font-bold px-6 py-2.5 rounded-xs flex items-center gap-1.5 cursor-pointer shadow-sm transition"
                >
                  <span>Submit</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
