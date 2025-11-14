'use client';

import Link from 'next/link';
import { Code2, Database, Sparkles, FileText, Image, BarChart3, MessageSquare, Briefcase, PenTool, Users, Clock, Star } from 'lucide-react';

const AI_TOOLS = [
  {
    id: 'blog-writer',
    name: 'Blog Writer',
    description: 'Generate engaging blog posts and articles with AI-powered content creation',
    icon: FileText,
    color: '#0ea5e9',
    category: 'Content Generation',
    estimatedTime: '2-5 min',
    features: ['SEO Optimization', 'Multiple Formats', 'Tone Customization'],
    href: '/tools/blog-writer'
  },
  {
    id: 'market-research',
    name: 'Market Research Analyzer',
    description: 'Analyze market trends, competitor data, and generate comprehensive reports',
    icon: BarChart3,
    color: '#a855f7',
    category: 'Business Analysis',
    estimatedTime: '3-7 min',
    features: ['Trend Analysis', 'Competitor Insights', 'Data Visualization'],
    href: '/tools/market-research'
  },
  {
    id: 'social-media-planner',
    name: 'Social Media Planner',
    description: 'Create, schedule, and optimize social media content across platforms',
    icon: Users,
    color: '#84cc16',
    category: 'Marketing',
    estimatedTime: '1-3 min',
    features: ['Multi-Platform', 'Content Calendar', 'Engagement Analytics'],
    href: '/tools/social-media'
  },
  {
    id: 'document-summarizer',
    name: 'Document Summarizer',
    description: 'Extract key insights and summaries from long documents instantly',
    icon: FileText,
    color: '#00d9ff',
    category: 'Productivity',
    estimatedTime: '1-2 min',
    features: ['Key Points', 'Multiple Formats', 'Quick Summaries'],
    href: '/tools/summarizer'
  },
  {
    id: 'code-generator',
    name: 'Code Generator',
    description: 'Generate, debug, and optimize code across multiple programming languages',
    icon: Code2,
    color: '#0ea5e9',
    category: 'Development',
    estimatedTime: '2-4 min',
    features: ['Multi-Language', 'Best Practices', 'Code Explanation'],
    href: '/tools/code-generator'
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    description: 'Create stunning AI-generated images from text descriptions',
    icon: Image,
    color: '#a855f7',
    category: 'Creative',
    estimatedTime: '1-3 min',
    features: ['Style Control', 'High Resolution', 'Multiple Variations'],
    href: '/tools/image-generator'
  },
  {
    id: 'business-planner',
    name: 'Business Planner',
    description: 'Generate comprehensive business plans and strategic documents',
    icon: Briefcase,
    color: '#84cc16',
    category: 'Business',
    estimatedTime: '5-10 min',
    features: ['Financial Projections', 'Market Analysis', 'Strategy Builder'],
    href: '/tools/business-planner'
  },
  {
    id: 'creative-writer',
    name: 'Creative Writer',
    description: 'Craft stories, poems, and creative content with AI assistance',
    icon: PenTool,
    color: '#00d9ff',
    category: 'Creative',
    estimatedTime: '3-5 min',
    features: ['Multiple Genres', 'Character Development', 'Plot Assistance'],
    href: '/tools/creative-writer'
  }
];

const CATEGORIES = ['All', 'Content Generation', 'Business Analysis', 'Marketing', 'Productivity', 'Development', 'Creative', 'Business'];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1117] to-[#1a1d2e]">
      {/* Navigation */}
      <nav className="border-b border-[#00d9ff]/20 backdrop-blur-sm sticky top-0 z-50 bg-[#0f1117]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-[#00d9ff] hover:brightness-110 transition-all">
              Lasy AI
            </Link>

            <div className="flex items-center space-x-6">
              <Link href="/" className="text-[#cbd5e1] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/chat" className="text-[#cbd5e1] hover:text-white transition-colors">
                Chat
              </Link>
              <Link href="/dashboard" className="text-[#cbd5e1] hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">AI Tool Library</h1>
          <p className="text-[#9ca3af] text-xl max-w-3xl mx-auto">
            Explore our curated collection of AI-powered tools designed to boost your productivity and creativity
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                category === 'All'
                  ? 'bg-[#0ea5e9] text-white shadow-cyan-glow'
                  : 'bg-[#1e293b] text-[#cbd5e1] border border-[#00d9ff]/30 hover:border-[#0ea5e9] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className="bg-[#1e293b] border border-[#00d9ff]/30 rounded-xl p-6 hover:shadow-cyan-glow-strong hover:border-[#0ea5e9] transition-all group"
              >
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${tool.color}20`, borderColor: tool.color, borderWidth: '1px' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: tool.color }} />
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#84cc16] fill-[#84cc16]" />
                    <span className="text-[#cbd5e1] text-sm">4.8</span>
                  </div>
                </div>

                {/* Tool Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-[#9ca3af] text-sm mb-4 line-clamp-2">
                  {tool.description}
                </p>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-[#0f1117] px-3 py-1 rounded-full mb-4">
                  <span className="text-[#00d9ff] text-xs font-semibold">{tool.category}</span>
                </div>

                {/* Estimated Time */}
                <div className="flex items-center gap-2 text-[#9ca3af] text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{tool.estimatedTime}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#cbd5e1] text-xs">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tool.color }}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-[#00d9ff]/20">
                  <div className="flex items-center justify-between text-[#00d9ff] font-semibold text-sm group-hover:text-[#0ea5e9]">
                    <span>Try Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0ea5e9]/20 to-[#a855f7]/20 border border-[#00d9ff]/30 rounded-2xl p-12 text-center shadow-cyan-glow">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom AI Tool?
          </h2>
          <p className="text-[#9ca3af] text-lg mb-8 max-w-2xl mx-auto">
            Contact our team to discuss custom AI solutions tailored to your specific needs
          </p>
          <Link
            href="/contact"
            className="bg-[#0ea5e9] text-white px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all shadow-cyan-glow hover:shadow-cyan-glow-strong inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
