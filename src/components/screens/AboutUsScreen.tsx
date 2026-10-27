import React from 'react';
import { Heart, Award, BookOpen, Users, CheckCircle, Sparkles } from 'lucide-react';

interface AboutUsScreenProps {
  onExplorePrograms: () => void;
  onContactUs: () => void;
}

export const AboutUsScreen: React.FC<AboutUsScreenProps> = ({
  onExplorePrograms,
  onContactUs,
}) => {
  return (
    <div className="w-full bg-white flex flex-col">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#8ec3eb] to-[#7db7e1] text-white px-6 lg:px-12 py-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-condensed tracking-wider font-semibold text-sky-100 block mb-1">
            Empowering Every Learner Across the Philippines
          </span>
          <h1 className="font-condensed text-3xl lg:text-5xl font-bold uppercase tracking-tight">
            ABOUT MYTUTORPH
          </h1>
          <p className="mt-3 text-xs lg:text-sm text-sky-50 leading-relaxed font-body max-w-xl">
            MyTutorPH is a dedicated educational network founded on a simple premise: every child possesses extraordinary potential when met with patience, individualized instruction, and neurodiversity-affirming support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onExplorePrograms}
              className="bg-white text-sky-900 font-condensed text-xs uppercase font-bold px-5 py-2.5 shadow-sm hover:bg-sky-50 transition cursor-pointer"
            >
              Explore Our Programs
            </button>
            <button
              onClick={onContactUs}
              className="bg-sky-900/30 text-white border border-white/40 font-condensed text-xs uppercase font-bold px-5 py-2.5 hover:bg-sky-900/50 transition cursor-pointer"
            >
              Speak with a Specialist
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="p-6 lg:p-10 space-y-10">
        {/* Core Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-[#8ec3eb] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Affirming & Nurturing
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We create emotionally safe, judgment-free learning spaces where children feel valued, respected, and encouraged to embrace their unique neurodevelopmental profiles.
            </p>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-[#8ec3eb] flex items-center justify-center mb-3">
              <Award className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Certified Specialists
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our team consists of licensed professional teachers (LPT), SPED educators, educational diagnosticians, and behavioral mentors with years of hands-on classroom and clinic experience.
            </p>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb]">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-[#8ec3eb] flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Evidence-Based Methods
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              From Orton-Gillingham multisensory literacy to structured cognitive interventions and play-based inquiry, our instructional roadmaps produce measurable confidence and retention.
            </p>
          </div>
        </section>

        {/* Our Story & Philosophy */}
        <section className="border border-gray-200 bg-white p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-condensed font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-xs inline-block">
                Our Educational Philosophy
              </span>
              <h2 className="font-condensed text-2xl sm:text-3xl font-bold text-[#35363a] uppercase leading-tight">
                No Two Children Learn the Exact Same Way
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Traditional classrooms often move at a rigid pace that leaves neurodiverse learners, kinesthetic thinkers, or children facing temporary developmental hurdles feeling overwhelmed.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                At <strong>MyTutorPH</strong>, we tailor every single lesson to the learner’s pacing, interests, and sensory needs. We bridge classroom gaps while igniting intrinsic curiosity through playful, focused, and respectful interaction.
              </p>
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#8ec3eb]" />
                  <span>Personalized 1-on-1 and micro-group tutoring</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#8ec3eb]" />
                  <span>DepEd & international curriculum alignment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#8ec3eb]" />
                  <span>Continuous parental collaboration & milestone debriefs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
                alt="Teacher helping an engaged student with learning materials"
                className="w-full h-80 object-cover shadow-md border-2 border-white"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#8ec3eb] text-white p-4 shadow-lg max-w-xs">
                <span className="font-condensed text-lg font-bold uppercase block">
                  1,200+ Happy Learners
                </span>
                <span className="text-[11px] text-sky-100">
                  Guided across Metro Manila, Cebu, and nationwide online programs.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#4c4d51] to-[#3a3b3e] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-condensed text-xl font-bold uppercase">
              Ready to Give Your Child Clear, Nurturing Support?
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Connect with our educational specialists to schedule a free initial diagnostic consultation.
            </p>
          </div>
          <button
            onClick={onContactUs}
            className="hero-btn-gradient text-white font-condensed text-xs uppercase font-bold px-6 py-2.5 rounded-xs cursor-pointer whitespace-nowrap"
          >
            Contact Us Today
          </button>
        </section>
      </div>
    </div>
  );
};
