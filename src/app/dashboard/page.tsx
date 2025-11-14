'use client';

import Link from 'next/link';
import { MessageSquare, FileText, Image, BarChart3, Clock, TrendingUp, Zap, Brain } from 'lucide-react';

const MOCK_STATS = {
  totalConversations: 247,
  totalTokensUsed: 1247893,
  favoriteTools: 'Content Generation',
  avgResponseTime: '1.2s'
};

const MOCK_RECENT_ACTIVITY = [
  {
    id: '1',
    type: 'chat',
    title: 'Business Strategy Discussion',
    time: '2 hours ago',
    icon: MessageSquare,
    color: '#0ea5e9'
  },
  {
    id: '2',
    type: 'document',
    title: 'Blog Post: AI in 2025',
    time: '5 hours ago',
    icon: FileText,
    color: '#a855f7'
  },
  {
    id: '3',
    type: 'image',
    title: 'Marketing Material Generation',
    time: '1 day ago',
    icon: Image,
    color: '#84cc16'
  },
  {
    id: '4',
    type: 'analysis',
    title: 'Sales Data Analysis',
    time: '2 days ago',
    icon: BarChart3,
    color: '#0ea5e9'
  }
];

const QUICK_ACCESS_TOOLS = [
  {
    id: 'content',
    name: 'Content Generator',
    description: 'Create blog posts, articles, and copy',
    icon: FileText,
    color: '#0ea5e9',
    href: '/tools/content-generator'
  },
  {
    id: 'analysis',
    name: 'Data Analyzer',
    description: 'Extract insights from your data',
    icon: BarChart3,
    color: '#a855f7',
    href: '/tools/data-analyzer'
  },
  {
    id: 'creative',
    name: 'Creative Assistant',
    description: 'Brainstorm and ideate solutions',
    icon: Brain,
    color: '#84cc16',
    href: '/tools/creative-assistant'
  },
  {
    id: 'chat',
    name: 'AI Chat',
    description: 'General purpose conversation',
    icon: MessageSquare,
    color: '#00d9ff',
    href: '/chat'
  }
];

export default function DashboardPage() {
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
              <Link href="/tools" className="text-[#cbd5e1] hover:text-white transition-colors">
                Tools
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-[#9ca3af] text-lg">Welcome back! Here's your AI activity overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1e293b] border border-[#00d9ff]/30 rounded-xl p-6 shadow-cyan-glow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center border border-[#0ea5e9]">
                <MessageSquare className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#84cc16]" />
            </div>
            <p className="text-[#9ca3af] text-sm mb-1">Total Conversations</p>
            <p className="text-3xl font-bold text-white">{MOCK_STATS.totalConversations}</p>
          </div>

          <div className="bg-[#1e293b] border border-[#a855f7]/30 rounded-xl p-6 shadow-purple-glow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]">
                <Zap className="w-6 h-6 text-[#a855f7]" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#84cc16]" />
            </div>
            <p className="text-[#9ca3af] text-sm mb-1">Tokens Used</p>
            <p className="text-3xl font-bold text-white">{MOCK_STATS.totalTokensUsed.toLocaleString()}</p>
          </div>

          <div className="bg-[#1e293b] border border-[#84cc16]/30 rounded-xl p-6 hover:shadow-cyan-glow transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#84cc16]/10 flex items-center justify-center border border-[#84cc16]">
                <Brain className="w-6 h-6 text-[#84cc16]" />
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm mb-1">Favorite Tool</p>
            <p className="text-xl font-bold text-white">{MOCK_STATS.favoriteTools}</p>
          </div>

          <div className="bg-[#1e293b] border border-[#00d9ff]/30 rounded-xl p-6 hover:shadow-cyan-glow transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00d9ff]/10 flex items-center justify-center border border-[#00d9ff]">
                <Clock className="w-6 h-6 text-[#00d9ff]" />
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm mb-1">Avg Response Time</p>
            <p className="text-3xl font-bold text-white">{MOCK_STATS.avgResponseTime}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-[#1e293b] border border-[#00d9ff]/30 rounded-xl p-6 shadow-cyan-glow">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {MOCK_RECENT_ACTIVITY.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="bg-[#0f1117] border border-[#00d9ff]/20 rounded-lg p-4 hover:border-[#0ea5e9] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${activity.color}20`, borderColor: activity.color, borderWidth: '1px' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: activity.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold group-hover:text-[#00d9ff] transition-colors">
                          {activity.title}
                        </p>
                        <p className="text-[#9ca3af] text-sm">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Access Tools */}
          <div className="bg-[#1e293b] border border-[#00d9ff]/30 rounded-xl p-6 shadow-cyan-glow">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
            <div className="grid grid-cols-2 gap-4">
              {QUICK_ACCESS_TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    className="bg-[#0f1117] border border-[#00d9ff]/20 rounded-lg p-4 hover:border-[#0ea5e9] hover:shadow-cyan-glow transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${tool.color}20`, borderColor: tool.color, borderWidth: '1px' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: tool.color }} />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1 group-hover:text-[#00d9ff] transition-colors">
                      {tool.name}
                    </p>
                    <p className="text-[#9ca3af] text-xs">{tool.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Usage Chart Placeholder */}
        <div className="mt-8 bg-[#1e293b] border border-[#00d9ff]/30 rounded-xl p-6 shadow-cyan-glow">
          <h2 className="text-2xl font-bold text-white mb-6">Usage Analytics</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#00d9ff]/30 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-[#0ea5e9] mx-auto mb-4" />
              <p className="text-[#9ca3af] text-lg">Interactive usage chart</p>
              <p className="text-[#9ca3af] text-sm">Track your AI interactions over time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
