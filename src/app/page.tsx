import Link from 'next/link';
import Image from 'next/image';
import { Code2, Database, Sparkles, CheckCircle2, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1117] to-[#1a1d2e]">
      {/* Navigation */}
      <nav className="border-b border-[#00d9ff]/20 backdrop-blur-sm sticky top-0 z-50 bg-[#0f1117]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#00d9ff] hover:brightness-110 transition-all">
                Lasy AI
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tools" className="text-[#cbd5e1] hover:text-white transition-colors">
                AI Tools
              </Link>
              <Link href="/solutions" className="text-[#cbd5e1] hover:text-white transition-colors">
                Solutions
              </Link>
              <Link href="/pricing" className="text-[#cbd5e1] hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-[#cbd5e1] hover:text-white transition-colors">
                About Us
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-[#cbd5e1] hover:text-white transition-colors px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-[#0ea5e9] text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-white uppercase leading-tight">
                UNLOCKING THE FUTURE<br />OF INTELLIGENCE
              </h1>
              <p className="text-lg text-[#9ca3af] max-w-xl">
                Revolutionary workflows with AI driven insights and automation
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/chat"
                  className="bg-[#0ea5e9] text-white px-7 py-3 rounded-lg font-semibold hover:brightness-110 transition-all shadow-cyan-glow hover:shadow-cyan-glow-strong inline-flex items-center gap-2"
                >
                  Explore Features
                </Link>
                <button className="border-2 border-[#00d9ff] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#00d9ff]/10 transition-all">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              <Image
                src="/generated/hero-3d-illustration.png"
                alt="AI Technology Visualization"
                width={500}
                height={500}
                className="object-contain animate-pulse-slow"
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-[#a855f7] rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#84cc16] rounded-full animate-pulse delay-200"></div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">AI Tools</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Codegenius */}
            <Link href="/tools/codegenius">
              <div className="bg-[#1e293b] border border-[#00d9ff] rounded-xl p-8 hover:shadow-cyan-glow-strong transition-all cursor-pointer group">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center border border-[#0ea5e9]">
                    <Code2 className="text-[#0ea5e9] w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00d9ff] transition-colors">
                  Codegenius
                </h3>
                <p className="text-[#9ca3af]">
                  Automated code generation &amp; debugging
                </p>
              </div>
            </Link>

            {/* DataWave */}
            <Link href="/tools/datawave">
              <div className="bg-[#1e293b] border border-[#a855f7] rounded-xl p-8 hover:shadow-purple-glow transition-all cursor-pointer group">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]">
                    <Database className="text-[#a855f7] w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#a855f7] transition-colors">
                  DataWave
                </h3>
                <p className="text-[#9ca3af]">
                  Intelligent data analysis &amp; visualization
                </p>
              </div>
            </Link>

            {/* CreativeFlow */}
            <Link href="/tools/creativeflow">
              <div className="bg-[#1e293b] border border-[#84cc16] rounded-xl p-8 hover:shadow-cyan-glow-strong transition-all cursor-pointer group">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#84cc16]/10 flex items-center justify-center border border-[#84cc16]">
                    <Sparkles className="text-[#84cc16] w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#84cc16] transition-colors">
                  CreativeFlow
                </h3>
                <p className="text-[#9ca3af]">
                  AI-powered content and design
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f1117]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Features</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <div className="relative h-80 flex items-center justify-center">
              <Image
                src="/generated/feature-network-illustration.png"
                alt="AI Features Network"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="bg-[#0ea5e9] text-white inline-block px-6 py-3 rounded-lg font-semibold shadow-cyan-glow">
                READY TO TRANSFORM?<br />
                <span className="text-sm font-normal">START YOUR FREE TRIAL TODAY!</span>
              </div>

              <p className="text-[#9ca3af] text-lg">
                It's early years of release and later than that this emerged created one and latest one that the technology.
              </p>

              <div className="space-y-4">
                {[
                  'Machine Learning',
                  'Natural Language Processing',
                  'Computer Vision',
                  'Predictive Analytics',
                  'Cloud Integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#00d9ff] w-5 h-5 flex-shrink-0" />
                    <span className="text-[#cbd5e1]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00d9ff]/20 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">Lasy AI</h3>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-[#9ca3af] hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-[#9ca3af] hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-[#9ca3af] hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="text-[#9ca3af] hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="text-[#9ca3af] hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-[#9ca3af] hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/support" className="text-[#9ca3af] hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#00d9ff]/20">
            <p className="text-[#9ca3af] text-sm mb-4 md:mb-0">
              © 2025 Lasy AI. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" target="_blank" className="text-[#00d9ff] hover:brightness-110 transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-[#00d9ff] hover:brightness-110 transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-[#00d9ff] hover:brightness-110 transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-[#00d9ff] hover:brightness-110 transition-all">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
