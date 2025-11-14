'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, Sparkles, MessageSquare, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const MOCK_CONVERSATIONS = [
  {
    id: '1',
    role: 'user' as const,
    content: 'How can AI help with business planning?',
    timestamp: new Date(Date.now() - 3600000)
  },
  {
    id: '2',
    role: 'assistant' as const,
    content: 'AI can significantly enhance business planning by providing data-driven insights, predictive analytics, and automated forecasting. It helps identify market trends, optimize resource allocation, and simulate various scenarios for better decision-making.',
    timestamp: new Date(Date.now() - 3500000)
  },
  {
    id: '3',
    role: 'user' as const,
    content: 'What about creative writing assistance?',
    timestamp: new Date(Date.now() - 2400000)
  },
  {
    id: '4',
    role: 'assistant' as const,
    content: 'I excel at creative writing assistance! I can help with brainstorming ideas, developing characters, creating plot structures, refining your writing style, and overcoming writer\'s block. Whether you\'re working on fiction, blog posts, or marketing content, I can provide suggestions and feedback.',
    timestamp: new Date(Date.now() - 2300000)
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(MOCK_CONVERSATIONS);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a demo AI response. In a production environment, this would connect to a real AI model to provide intelligent, contextual answers to your questions.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

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
              <Link href="/dashboard" className="text-[#cbd5e1] hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/tools" className="text-[#cbd5e1] hover:text-white transition-colors">
                Tools
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Chat Interface */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#1e293b] rounded-xl shadow-cyan-glow border border-[#00d9ff]/30 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[#0f1117] border-b border-[#00d9ff]/20 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Assistant</h1>
                <p className="text-sm text-[#9ca3af]">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-[#0ea5e9] text-white'
                      : 'bg-[#0f1117] text-[#cbd5e1] border border-[#00d9ff]/30'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs mt-2 opacity-60">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#a855f7] flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#0f1117] text-[#cbd5e1] border border-[#00d9ff]/30 rounded-lg p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-[#0f1117] border-t border-[#00d9ff]/20 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-[#1e293b] border border-[#00d9ff]/30 rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-[#9ca3af]">
              <Sparkles className="w-4 h-4 text-[#00d9ff]" />
              <span>Pro tip: Be specific in your questions for better results</span>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <button
            onClick={() => setInput('Help me write a blog post about AI')}
            className="bg-[#1e293b] border border-[#00d9ff]/30 rounded-lg p-4 text-left hover:border-[#0ea5e9] hover:shadow-cyan-glow transition-all group"
          >
            <MessageSquare className="w-5 h-5 text-[#0ea5e9] mb-2 group-hover:text-[#00d9ff]" />
            <p className="text-white text-sm font-semibold mb-1">Content Writing</p>
            <p className="text-[#9ca3af] text-xs">Get help with blog posts and articles</p>
          </button>

          <button
            onClick={() => setInput('Analyze this data and provide insights')}
            className="bg-[#1e293b] border border-[#a855f7]/30 rounded-lg p-4 text-left hover:border-[#a855f7] hover:shadow-purple-glow transition-all group"
          >
            <MessageSquare className="w-5 h-5 text-[#a855f7] mb-2 group-hover:brightness-110" />
            <p className="text-white text-sm font-semibold mb-1">Data Analysis</p>
            <p className="text-[#9ca3af] text-xs">Extract insights from your data</p>
          </button>

          <button
            onClick={() => setInput('Generate creative ideas for my project')}
            className="bg-[#1e293b] border border-[#84cc16]/30 rounded-lg p-4 text-left hover:border-[#84cc16] hover:shadow-cyan-glow transition-all group"
          >
            <MessageSquare className="w-5 h-5 text-[#84cc16] mb-2 group-hover:brightness-110" />
            <p className="text-white text-sm font-semibold mb-1">Brainstorming</p>
            <p className="text-[#9ca3af] text-xs">Generate creative ideas quickly</p>
          </button>
        </div>
      </div>
    </div>
  );
}
