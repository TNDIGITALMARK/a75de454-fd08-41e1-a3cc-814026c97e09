import Link from 'next/link';
import Image from 'next/image';
import { Code2, Database, Sparkles, CheckCircle2, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a1d2e]">
      {/* Navigation */}
      <nav className="border-b border-[#334155]/50 backdrop-blur-sm sticky top-0 z-50 bg-[#1e293b]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#00d9ff] hover:brightness-110 transition-all">
                Lasy AI
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tools" className="text-white hover:text-[#00d9ff] transition-colors text-sm font-medium">
                AI Tools
              </Link>
              <Link href="/solutions" className="text-white hover:text-[#00d9ff] transition-colors text-sm font-medium">
                Solutions
              </Link>
              <Link href="/pricing" className="text-white hover:text-[#00d9ff] transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-white hover:text-[#00d9ff] transition-colors text-sm font-medium">
                About Us
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-white hover:text-[#00d9ff] transition-colors px-4 py-2 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-[#0ea5e9] text-white px-5 py-2 rounded-full font-medium hover:brightness-110 transition-all text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase leading-tight tracking-tight">
                UNLOCKING THE FUTURE<br />OF INTELLIGENCE
              </h1>
              <p className="text-base text-[#94a3b8] max-w-lg">
                Revolutionary workflows with AI driven insights and automation
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/chat"
                  className="bg-[#0ea5e9] text-white px-6 py-2.5 rounded-full font-medium hover:brightness-110 transition-all inline-flex items-center gap-2 text-sm"
                >
                  Explore Features
                </Link>
                <button className="border border-white/30 text-white px-6 py-2.5 rounded-full font-medium hover:bg-white/5 transition-all text-sm">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-80 lg:h-[400px] flex items-center justify-center">
              <Image
                src="/generated/hero-3d-illustration.png"
                alt="AI Technology Visualization"
                width={450}
                height={450}
                className="object-contain"
                priority
              />
              {/* Decorative dots */}
              <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-[#00d9ff] rounded-full"></div>
              <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-[#a855f7] rounded-full"></div>
              <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-[#84cc16] rounded-full"></div>
              <div className="absolute top-32 left-10 w-1.5 h-1.5 bg-[#00d9ff] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">AI Tools</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Codegenius */}
            <Link href="/tools/codegenius">
              <div className="bg-transparent border border-[#0ea5e9] rounded-xl p-6 hover:bg-[#0ea5e9]/5 transition-all cursor-pointer group">
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
                    <Code2 className="text-[#0ea5e9] w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Codegenius
                </h3>
                <p className="text-[#94a3b8] text-sm">
                  Automated code generation &amp; debugging
                </p>
              </div>
            </Link>

            {/* DataWave */}
            <Link href="/tools/datawave">
              <div className="bg-transparent border border-[#a855f7] rounded-xl p-6 hover:bg-[#a855f7]/5 transition-all cursor-pointer group">
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
                    <Database className="text-[#a855f7] w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  DataWave
                </h3>
                <p className="text-[#94a3b8] text-sm">
                  Intelligent data analysis &amp; visualization
                </p>
              </div>
            </Link>

            {/* CreativeFlow */}
            <Link href="/tools/creativeflow">
              <div className="bg-transparent border border-[#84cc16] rounded-xl p-6 hover:bg-[#84cc16]/5 transition-all cursor-pointer group">
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
                    <Sparkles className="text-[#84cc16] w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  CreativeFlow
                </h3>
                <p className="text-[#94a3b8] text-sm">
                  AI-powered content and design
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Features</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <div className="relative h-72 flex items-center justify-center">
              <Image
                src="/generated/feature-network-illustration.png"
                alt="AI Features Network"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <button className="bg-[#0ea5e9] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:brightness-110 transition-all">
                  READY TO TRANSFORM?<br />
                  START YOUR FREE TRIAL TODAY!
                </button>
              </div>

              <p className="text-[#94a3b8] text-sm leading-relaxed">
                It's early years of release and later than that this emerged created one and latest one that the technology.
              </p>

              <div className="space-y-3">
                {[
                  'Machine Learning',
                  'Natural Language Processing',
                  'Computer Vision',
                  'Predictive Analytics',
                  'Cloud Integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#00d9ff] w-4 h-4 flex-shrink-0" />
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#334155]/50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#00d9ff] mb-2">Lasy AI</h3>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Product</h4>
              <ul className="space-y-1.5">
                <li><Link href="/features" className="text-[#94a3b8] hover:text-white transition-colors text-xs">Features</Link></li>
                <li><Link href="/pricing" className="text-[#94a3b8] hover:text-white transition-colors text-xs">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Company</h4>
              <ul className="space-y-1.5">
                <li><Link href="/blog" className="text-[#94a3b8] hover:text-white transition-colors text-xs">Blog</Link></li>
                <li><Link href="/faq" className="text-[#94a3b8] hover:text-white transition-colors text-xs">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Resources</h4>
              <ul className="space-y-1.5">
                <li><Link href="/support" className="text-[#94a3b8] hover:text-white transition-colors text-xs">Support</Link></li>
              </ul>
            </div>

            <div className="flex items-start gap-3">
              <Link href="https://twitter.com" target="_blank" className="text-[#0ea5e9] hover:brightness-110 transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-[#0ea5e9] hover:brightness-110 transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-[#0ea5e9] hover:brightness-110 transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-[#0ea5e9] hover:brightness-110 transition-all">
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-[#334155]/50">
            <p className="text-[#94a3b8] text-xs text-center">
              © 2025 Lasy AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
