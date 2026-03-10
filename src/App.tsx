/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Bike,
  Car,
  Truck,
  Gauge,
  CircleDot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Book Now', href: '#book', primary: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-workshop-dark/90 backdrop-blur-md py-4 border-b border-workshop-border' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-workshop-orange rounded-lg flex items-center justify-center">
            <Wrench className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase italic">Innes Mechanical</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`${link.primary ? 'bg-workshop-orange text-black px-5 py-2 rounded-lg font-bold hover:scale-105 transition-transform' : 'text-sm font-medium hover:text-workshop-orange transition-colors'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-workshop-dark border-b border-workshop-border md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 flex flex-col gap-4"
  >
    <div className="w-12 h-12 bg-workshop-orange/10 rounded-xl flex items-center justify-center mb-2">
      <Icon className="text-workshop-orange w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-workshop-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-workshop-orange transition-colors"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-workshop-orange selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-workshop-orange/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-workshop-orange/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-workshop-orange/10 border border-workshop-orange/20 text-workshop-orange text-xs font-bold uppercase tracking-widest">
              <MapPin className="w-3 h-3" /> Byron Bay's Trusted Workshop
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Honest Service. <br />
              <span className="text-workshop-orange">Expert Repairs.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
              Keeping Byron Bay moving. Specialising in motorcycles, but fully equipped for cars and trucks too. No bull, just quality mechanical work for every vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="btn-primary flex items-center justify-center gap-2">
                Book a Service
              </a>
              <a href="tel:0400000000" className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-workshop-border relative group">
              <img 
                src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/520254481_1140993728047875_8095848726945875304_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-BAVCXQPdJ4Q7kNvwHrzn_f&_nc_oc=Adk9hwopvfEpGaaU1FwEWSleMqoQHqgpUaGfm5iykvY4RkfvSWbcqK0wtKloIfOLvME&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=SjxymdMe0u9RNrWSuCucDA&oh=00_AfuxxVjxow1LHVHwSNs46gst2FAVE-F-4EK0E5NPpn-tgg&oe=69A730B8" 
                alt="Motorcycle Workshop Byron Bay" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-workshop-dark/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card bg-workshop-dark/60 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-workshop-dark bg-workshop-orange flex items-center justify-center text-[10px] font-bold text-black">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-workshop-orange mb-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="font-semibold">50+ Local Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-workshop-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We provide comprehensive mechanical care for all makes and models. Whether you're on two wheels or four, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Bike} 
              title="Moto Servicing" 
              description="Logbook servicing, oil changes, and full safety inspections to keep your warranty intact and your bike running smooth."
            />
            <ServiceCard 
              icon={Car} 
              title="Cars & Trucks" 
              description="Full mechanical repairs and servicing for cars, 4x4s, and light trucks. We keep your workhorse running reliable."
            />
            <ServiceCard 
              icon={CircleDot} 
              title="Tyres" 
              description="Huge range of tyres for bikes, cars, and 4x4s. Professional fitting and balancing while you wait in most cases."
            />
            <ServiceCard 
              icon={Gauge} 
              title="Diagnostics" 
              description="State-of-the-art diagnostic tools to pinpoint electronic and mechanical faults accurately on any vehicle."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-workshop-border">
                <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/593353585_1267373098743270_5804776683851365817_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Qxpx4SMSJwMQ7kNvwFReuQn&_nc_oc=AdmP4h6z07_FHTnElGyl3o45a4ymixsmpGOGspHeQ6D2NAPocaKvOQ4BO7nrLBYErzY&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=PryD3pGqah5ngahadfrYow&oh=00_AfuGOHPnqfRj_TXltrm-fHlS7zghjS-EcAXE6YMskjbVCA&oe=69A70F62" alt="Moto Detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-workshop-border mt-8">
                <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/486253861_1050701510410431_7715399383181483416_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=83fKYjfVYaYQ7kNvwGuei6z&_nc_oc=AdnwnWCC2vW7UmrZL6UWWB8KsRrZI0o-0n-QkjF13RT8ITJ-sXC94Vibif3l6HaTVxc&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=DCLnQrnIEnQlONldBpNakQ&oh=00_Afuk4vz45EICsnDA1OXD_m2ErJdQTOAw4XDwNeRtpDOCyg&oe=69A70483" alt="Moto Detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Why Byron Locals <br />Trust Innes Mechanical</h2>
            <div className="flex flex-col gap-6">
              {[
                { title: "Local & Independent", desc: "Owned and operated right here in Byron Bay. We know the local conditions." },
                { title: "Experienced Mechanics", desc: "Decades of experience across all major brands—Japanese, European, and American." },
                { title: "Honest Pricing", desc: "No hidden costs. We'll always call you before starting any extra work." },
                { title: "Fast Turnaround", desc: "We know you need your vehicle. We aim for same-day service whenever possible." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-workshop-orange w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-workshop-orange text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Book", desc: "Book online or give us a quick buzz to find a time that suits you." },
              { step: "02", title: "Drop Off", desc: "Drop your vehicle at our Byron workshop in the morning." },
              { step: "03", title: "Drive Away", desc: "We'll text you when it's ready. Pick it up and get back on the road." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-6xl font-black opacity-20 font-mono">{item.step}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-black/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Common Questions</h2>
            <p className="text-white/60">Everything you need to know before booking your vehicle in.</p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <FAQItem 
              question="Do you service cars and trucks as well as bikes?" 
              answer="Yes! While we are known for our motorcycle expertise, we are a fully equipped mechanical workshop capable of servicing and repairing cars, 4x4s, and light trucks." 
            />
            <FAQItem 
              question="How long does a standard service take?" 
              answer="A minor service typically takes 2-3 hours. Major services can take a full day. We always aim to have your vehicle back to you by the end of the day." 
            />
            <FAQItem 
              question="Do you work on all motorcycle brands?" 
              answer="Yes, we work on all major brands including Honda, Yamaha, Kawasaki, Suzuki, BMW, Ducati, Triumph, Harley-Davidson, and KTM." 
            />
            <FAQItem 
              question="Do I need to book in advance?" 
              answer="We recommend booking at least 3-4 days in advance, especially for larger jobs. However, for urgent repairs or tyres, give us a call and we'll do our best to squeeze you in." 
            />
            <FAQItem 
              question="Can I get tyres fitted the same day?" 
              answer="If we have the tyres in stock, absolutely. If we need to order them, it usually takes 24 hours to arrive." 
            />
            <FAQItem 
              question="Do you provide roadworthy certificates?" 
              answer="Yes, we are an authorised inspection station for NSW Pink Slips (eSafety Checks) for both bikes and cars." 
            />
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-24 px-6 bg-workshop-card/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to Book?</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours to confirm your spot. For urgent repairs, please call us directly.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-6 glass-card">
                <div className="w-12 h-12 bg-workshop-orange/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-workshop-orange" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase font-bold tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">0400 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 glass-card">
                <div className="w-12 h-12 bg-workshop-orange/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-workshop-orange" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase font-bold tracking-widest">Email Us</p>
                  <p className="text-xl font-bold">service@innesmechanical.com.au</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Name</label>
                <input type="text" className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Phone</label>
                <input type="tel" className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" placeholder="0400 000 000" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Email</label>
                <input type="email" className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Vehicle Make & Model</label>
                <input type="text" className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" placeholder="e.g. Yamaha MT-07 or Toyota Hilux" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Year</label>
                <input type="text" className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" placeholder="2022" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Service Needed</label>
                <select className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors appearance-none">
                  <option>Motorcycle Service</option>
                  <option>Car / 4x4 Service</option>
                  <option>Repair / Diagnostics</option>
                  <option>Tyre Fitting</option>
                  <option>Pink Slip / Inspection</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Preferred Date</label>
                <input type="date" className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-wider text-white/40">Message</label>
                <textarea rows={4} className="bg-workshop-dark border border-workshop-border rounded-xl p-4 focus:border-workshop-orange outline-none transition-colors" placeholder="Tell us about any specific issues..."></textarea>
              </div>
              <button className="btn-primary md:col-span-2 mt-4">
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-workshop-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-workshop-orange rounded flex items-center justify-center">
                <Wrench className="text-black w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tighter uppercase italic">Innes Mechanical</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Expert mechanical care in the heart of Byron Bay. Dedicated to keeping local riders and drivers safe on the road.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border border-workshop-border flex items-center justify-center hover:bg-workshop-orange hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-workshop-border flex items-center justify-center hover:bg-workshop-orange hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">Opening Hours</h4>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between text-workshop-orange">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">Quick Links</h4>
            <div className="flex flex-col gap-3 text-white/60 text-sm">
              <a href="#services" className="hover:text-workshop-orange transition-colors">Services</a>
              <a href="#why-us" className="hover:text-workshop-orange transition-colors">Why Choose Us</a>
              <a href="#faq" className="hover:text-workshop-orange transition-colors">FAQ</a>
              <a href="#book" className="hover:text-workshop-orange transition-colors">Book a Service</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">Location</h4>
            <div className="flex flex-col gap-4 text-white/60 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-workshop-orange shrink-0" />
                <span>123 Workshop Way, <br />Byron Bay NSW 2481</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-workshop-orange shrink-0" />
                <span>0400 000 000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-workshop-border text-center text-white/20 text-xs">
          © {new Date().getFullYear()} Innes Mechanical. All rights reserved. Built for Byron Locals.
        </div>
      </footer>
    </div>
  );
}
