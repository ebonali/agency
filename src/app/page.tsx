import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-full w-full bg-[#09090b]">
           <Image 
            src="/hero.png" 
            alt="Agency Background" 
            fill 
            className="object-cover opacity-20 blur-sm"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="animate-float mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Leading Digital & Logistics Agency
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
              Elevate Your Presence with <br />
              <span className="gradient-text">Ridoway Agency</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              From bespoke digital solutions to expert interstate moving services. 
              We bridge the gap between innovation and reliability, delivering 
              unmatched excellence at every step.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90">
                Start Your Journey
              </button>
              <button className="glass-morphism rounded-full px-8 py-4 text-base font-bold transition-all hover:bg-white/5">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Solutions</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We provide a wide range of premium services tailored to meet your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div key={index} className="glass-morphism group rounded-2xl p-8 transition-all hover:-translate-y-2 hover:bg-white/5">
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/5">
               <Image 
                src="/hero.png" 
                alt="Our Expertise" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Expert Interstate <span className="text-primary">Moving Solutions</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                Crossing state lines? We cover FL, GA, AL, SC, TN and beyond. 
                Experience a stress-free transition with our top-rated moving experts.
              </p>
              <ul className="space-y-4">
                {['Licensed & Insured', 'State-to-State Specialists', 'Safe & Reliable Transport', 'White-Glove Handling'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 rounded-full bg-white text-black px-8 py-3 text-sm font-bold transition-all hover:bg-white/90">
                Get a Moving Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center shadow-2xl sm:px-12">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Ready to transform your vision?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/80">
            Join hundreds of satisfied clients who trust Ridoway Agency for their digital growth and moving needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-xl hover:bg-gray-50 transition-all active:scale-95">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const SERVICES = [
  {
    title: "Web Development",
    description: "Building high-performance, modern web applications that scale with your business.",
    icon: (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Brand Strategy",
    description: "Crafting unique visual identities and strategies that make your brand stand out.",
    icon: (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.14L3 21l1.159-4.275m7.841-3.225A19.98 19.98 0 0113 21l2.841-4.275M12 11a9 9 0 110-18 9 9 0 010 18z" /></svg>,
    gradient: "from-rose-500 to-orange-600"
  },
  {
    title: "Interstate Moving",
    description: "Premium state-to-state moving solutions with meticulous care for your belongings.",
    icon: (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2.5a1.5 1.5 0 01-3 0V17a1 1 0 011-1h2zm11-1h-6V7a1 1 0 011-1h3.293a1 1 0 01.707.293l1.707 1.707A1 1 0 0121 8.707V15a1 1 0 01-1 1h-1m-6 0a1 1 0 001 1h2a1 1 0 001-1m-7 1a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>,
    gradient: "from-emerald-500 to-teal-600"
  },
];
