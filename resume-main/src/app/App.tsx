import { Mail, Phone, MapPin, Award, Briefcase, GraduationCap, FileText, Languages } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-10">
          <h1 className="text-4xl font-bold mb-2">D.T. DHARSHINI</h1>
          <p className="text-xl text-blue-100 mb-6">B.Com Student | Finance & Banking Enthusiast | Research Presenter</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9789087906</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>dtdharshini23@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 px-8 py-6 border-r border-gray-200">
            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">PROFESSIONAL SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed">
                An enthusiastic and academically driven B.Com student with strong interest in finance, banking, and financial markets. Through academic research presentations, certification courses, TN Skill training, microfinance exposure, and corporate internship experience, she has developed a foundational understanding of financial systems, loan processing, investment concepts, and taxation basics. She is eager to begin her professional career in a corporate or financial organization where she can apply analytical thinking and grow into a responsible finance professional.
              </p>
            </section>

            {/* Key Highlights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">KEY HIGHLIGHTS</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Presented research papers at national and international conferences demonstrating analytical and research skills.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Completed certifications in GST filing and stock, currency, and commodity trading.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Gained corporate exposure through internship at Lucas TVS Limited.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Passionate learner with strong curiosity about financial markets and banking systems.</span>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                EDUCATION
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">Bachelor of Commerce (B.Com – General)</h3>
                <p className="text-blue-800 font-medium">Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai</p>
                <p className="text-sm text-gray-600 mb-3">Affiliated to University of Madras</p>
                
                <div className="mt-3">
                  <p className="font-semibold text-gray-800 mb-2">Focus Areas:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      <span className="text-gray-700">Accounting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      <span className="text-gray-700">Finance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      <span className="text-gray-700">Banking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      <span className="text-gray-700">Business Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Internship Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                INTERNSHIP EXPERIENCE
              </h2>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Internship Trainee</h3>
                <p className="text-blue-800 font-medium">Lucas TVS Limited – Chennai</p>
                <p className="text-sm text-gray-600 mb-3">May 2024 – June 2024</p>
                
                <p className="font-semibold text-gray-800 mb-2">Learning Areas:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-900">▸</span>
                    <span>Understanding corporate workflow and organizational structure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-900">▸</span>
                    <span>Observing financial and operational coordination across departments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-900">▸</span>
                    <span>Developing professional discipline, reporting practices, and teamwork</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-900">▸</span>
                    <span>Supporting assigned tasks with sincerity and punctuality</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Research & Academic Contributions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                RESEARCH & ACADEMIC CONTRIBUTIONS
              </h2>
              
              <div className="mb-4">
                <h3 className="font-bold text-gray-900">International Conference</h3>
                <p className="text-sm text-blue-800 mb-1">Saveetha College of Liberal Arts & Sciences</p>
                <p className="text-gray-700 italic">Research Paper: "Financial Sherlock Holmes: Investigating Fraud and Misconduct through Forensic Auditing"</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">National Conference</h3>
                <p className="text-sm text-blue-800 mb-1">Dwaraka Doss Goverdhan Doss Vaishnav College</p>
                <p className="text-gray-700 italic">Research Paper: "Modern Future of Stock Market Investor"</p>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="bg-gray-50 px-6 py-6">
            {/* Core Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">CORE SKILLS</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Financial Concepts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Banking Fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Interest Calculation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Customer Relations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Loan Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Investment Awareness</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Presentation Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Communication</span>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900 flex items-center gap-2">
                <Award className="w-5 h-5" />
                CERTIFICATIONS
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-900">
                  <p className="font-semibold text-gray-900 text-sm">GST Filing Certification</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-900">
                  <p className="font-semibold text-gray-900 text-sm">Stock, Currency & Commodity Trading Certification</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-900">
                  <p className="font-semibold text-gray-900 text-sm">TNSD - Micro Finance Executive Course</p>
                  <p className="text-xs text-gray-600 mt-1">Duration: 2 Months</p>
                  <p className="text-xs text-gray-600">Tamil Nadu Skill Development Certification Course</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">TECHNICAL SKILLS</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">MS Word</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">MS Excel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Tally</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">MS PowerPoint</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Basic Accounting Software</span>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                LANGUAGES
              </h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">English</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div key={dot} className="w-2 h-2 rounded-full bg-blue-900"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Tamil</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div key={dot} className="w-2 h-2 rounded-full bg-blue-900"></div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 italic">
            I, D.T. Dharshini, hereby declare that the information provided above is true and accurate to the best of my knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
