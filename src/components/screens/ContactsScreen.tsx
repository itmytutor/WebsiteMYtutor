import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';

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
      {/* Banner */}
      <section className="bg-[#8ec3eb] text-white px-6 lg:px-12 py-8">
        <span className="text-[10px] uppercase font-condensed tracking-wider font-semibold text-sky-100 block mb-1">
          Admissions, Consultations & Inquiries
        </span>
        <h1 className="font-condensed text-3xl lg:text-4xl font-bold uppercase tracking-tight">
          CONTACT MYTUTORPH
        </h1>
        <p className="mt-2 text-xs lg:text-sm text-sky-50 max-w-xl font-body">
          Connect directly with our educational coordinators to discuss your child’s unique needs, request learning assessments, or arrange 1-on-1 tutoring sessions.
        </p>
      </section>

      <div className="p-6 lg:p-10 space-y-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <Phone className="w-4 h-4" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Admissions Hotline
            </h3>
            <p className="text-xs text-gray-500 mb-2">Speak directly with a coordinator</p>
            <a
              href="tel:+63289201456"
              className="font-condensed text-lg font-bold text-sky-700 hover:text-sky-900 block"
            >
              +63 (02) 8920 1456
            </a>
            <span className="text-[10px] text-gray-400 mt-1 block">
              Mon – Sat: 8:00 AM – 6:00 PM PHT
            </span>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Email Coordination
            </h3>
            <p className="text-xs text-gray-500 mb-2">Typically answered within 3 business hours</p>
            <div className="space-y-1 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 block">General Admissions:</span>
                <span className="font-semibold text-gray-700">admissions@mytutorph.com</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">Assessments & SPED:</span>
                <span className="font-semibold text-gray-700">sped@mytutorph.com</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Learning Center Hub
            </h3>
            <p className="text-xs text-gray-500 mb-2">Main office & diagnostic clinic</p>
            <address className="not-italic text-xs text-gray-700 space-y-0.5">
              <p className="font-semibold">MyTutorPH Learning Center</p>
              <p>Katipunan Avenue, Loyola Heights</p>
              <p>Quezon City, Metro Manila, Philippines</p>
            </address>
          </div>
        </div>

        {/* Online Contact Message Form */}
        <section className="border border-gray-200 bg-[#f9f9f9] p-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-[#8ec3eb]" />
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
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#8ec3eb]"
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
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#8ec3eb]"
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
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#8ec3eb]"
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
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#8ec3eb]"
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
                  className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#8ec3eb]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-gray-400">
                  Your family&apos;s privacy is strictly protected.
                </span>
                <button
                  type="submit"
                  className="hero-btn-gradient text-white font-condensed text-xs uppercase font-bold px-6 py-2.5 rounded-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
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
