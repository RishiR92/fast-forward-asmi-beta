import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Calendar, MessageSquare, Phone, Users, Brain, Target } from "lucide-react";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", { phoneNumber, email });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Asmi
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
              Join Beta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6 relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  Early Access
                </Badge>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
                  Your Chief of Staff
                </h1>
                <h2 className="text-3xl text-gray-300 leading-relaxed max-w-lg font-light animate-fade-in delay-200">
                  built inside WhatsApp.
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg animate-fade-in delay-400">
                  Asmi remembers what you say, preps you before meetings, and follows up — so you don't have to.
                </p>
              </div>
              
              <form onSubmit={handleBetaSignup} className="space-y-4 max-w-md animate-fade-in delay-600">
                <div className="flex gap-3">
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-gray-300 px-8 font-medium"
                  >
                    Join Beta
                  </Button>
                </div>
              </form>
            </div>

            <div className="relative animate-float">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-sm mx-auto border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-lg">Sync up with Reducto</div>
                    <div className="text-gray-400">3PM</div>
                  </div>
                </div>
                <div className="space-y-4 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Context:</span>
                      <div className="text-white">YC founder, Series A at $15M ARR</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="h-3 w-3 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Last chat:</span>
                      <div className="text-white">Interested in your API integration</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-3 w-3 text-green-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Talk about:</span>
                      <div className="text-white">Partnership timeline, technical requirements</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-right mt-6">2:58 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-green-900/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 group">
              <h2 className="text-5xl font-bold text-red-400 mb-8 group-hover:scale-105 transition-transform duration-700">
                Without Asmi
              </h2>
              <ul className="space-y-6">
                {[
                  "Walk into meetings unsure who you're talking to or what was last discussed",
                  "Promise follow-ups in voice notes and chats, but forget to act",
                  "Spend 10–15 mins prepping before every important call",
                  "Juggle WhatsApp, calendar, Notion, and reminders just to stay on top",
                  "Chase people manually to close loops on intros, updates, or tasks"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8 group">
              <h2 className="text-5xl font-bold text-green-400 mb-8 group-hover:scale-105 transition-transform duration-700">
                With Asmi
              </h2>
              <ul className="space-y-6">
                {[
                  "Get pre-meeting briefs on WhatsApp: last convo, who they are, what to say",
                  "Asmi tracks every spoken commitment and follows up at the right time",
                  "Skip the scramble — you're always 2 steps ahead, context-first",
                  "Voice-note \"Reschedule that to Friday 3PM\" → synced across Google/Outlook",
                  "Nudges your team, partners, or investors — without you lifting a finger"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Built for <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">high-velocity</span> operators
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Asmi handles the cognitive overhead so you can focus on what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Infinite Memory, Instant Recall",
                description: "Voice notes, conversations, decisions — Asmi never forgets context or commitments.",
                color: "purple"
              },
              {
                icon: Users,
                title: "Meeting Briefs",
                description: "Get context on who you're meeting, your last conversation, and key talking points.",
                color: "blue"
              },
              {
                icon: Calendar,
                title: "Natural Language Scheduling",
                description: "\"Schedule coffee with Sarah next Tuesday at 3pm\" — works with Google, Outlook, Apple.",
                color: "green"
              },
              {
                icon: Phone,
                title: "Contact-Aware",
                description: "Uses contact names from your phone — no need to explain who people are.",
                color: "pink"
              },
              {
                icon: Target,
                title: "Follow-ups Handled For You",
                description: "Automatically follows up on commitments via WhatsApp — no more chasing people.",
                color: "orange"
              },
              {
                icon: MessageSquare,
                title: "Just Talk — It Gets It",
                description: "Just speak naturally — Asmi understands context and intent from voice messages.",
                color: "indigo"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group backdrop-blur-sm">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Personas */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Built for <span className="gradient-text">high-context</span> operators
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-700 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl mb-4">🧑‍🚀</div>
                <h3 className="text-2xl font-bold text-white">Founders</h3>
                <p className="text-slate-300 italic mb-4">
                  "I voice-note investor updates at midnight. Asmi turns them into follow-ups, summaries, and calendar events — before I forget."
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Remember every investor conversation</li>
                  <li>• Never miss a follow-up</li>
                  <li>• Prep for every meeting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-teal-900/50 border-blue-700 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl mb-4">🧑‍💼</div>
                <h3 className="text-2xl font-bold text-white">Startup Teams</h3>
                <p className="text-slate-300 italic mb-4">
                  "No more chasing teammates. I just say it once. Asmi tracks it, reminds them, and gives me updates before standup."
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Coordinate without context-switching</li>
                  <li>• Automate status updates</li>
                  <li>• Never drop commitments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-700 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-2xl font-bold text-white">VCs & Angels</h3>
                <p className="text-slate-300 italic mb-4">
                  "I don't prep decks for calls anymore. Asmi gives me the founder's context, last chat, and deal notes in WhatsApp — right before we speak."
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Track every founder interaction</li>
                  <li>• Remember deal terms and updates</li>
                  <li>• Perfect intro preparation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What early users are saying</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <blockquote className="text-slate-300 mb-4">
                  "Feels like I hired an EA and never had to explain anything."
                </blockquote>
                <div className="text-sm text-slate-400">— Founder, Series B SaaS</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <blockquote className="text-slate-300 mb-4">
                  "Finally, an AI that actually understands the context of fast-moving conversations."
                </blockquote>
                <div className="text-sm text-slate-400">— VP Growth, Unicorn Startup</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <blockquote className="text-slate-300 mb-4">
                  "I can't believe how much mental overhead this removes. Game changer."
                </blockquote>
                <div className="text-sm text-slate-400">— Partner, Tier 1 VC</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              How Asmi works
            </h2>
            <p className="text-2xl text-gray-400 font-light">Three steps. Zero effort. High leverage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                number: "1",
                title: "Say it",
                description: "Voice note or text Asmi inside WhatsApp — no commands, just talk naturally.",
                examples: [
                  "\"Remind me to follow up with Tony on pricing.\"",
                  "\"Schedule intro call with Alex next Tuesday at 3PM.\""
                ]
              },
              {
                number: "2", 
                title: "It remembers",
                description: "Asmi understands what matters, connects it to past context, and tracks it.",
                examples: [
                  "• Remembers convos, decisions, promises — no manual entry needed",
                  "• Builds your contextual memory graph across meetings & messages"
                ]
              },
              {
                number: "3",
                title: "You stay sharp", 
                description: "Asmi handles the rest — scheduling, briefing, nudging, reminding — before you even ask.",
                examples: [
                  "• Prepares talking points before your next call",
                  "• Follows up with your team or investors", 
                  "• Sends gentle nudges automatically in WhatsApp"
                ]
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-8 group">
                <div className="w-20 h-20 bg-gradient-to-r from-white/10 to-white/5 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-3xl font-semibold text-white group-hover:scale-105 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
                <div className="bg-white/5 rounded-2xl p-6 text-left space-y-3 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                  {step.examples.map((example, i) => (
                    <div key={i} className="text-gray-300 text-sm leading-relaxed">{example}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Example Output Visual */}
          <div className="mt-20 max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-500">
              <div className="space-y-4 text-white">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Your call with Alex is prepped.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">💼</span>
                  <span>Series A, $50M ARR</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Last chat: Pricing concerns</span>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Talk about: Expansion plan, next steps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 relative">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            We're onboarding 100 people who move faster than their calendar.
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the beta and get your AI Chief of Staff inside WhatsApp.
          </p>

          <form onSubmit={handleBetaSignup} className="max-w-md mx-auto space-y-6">
            <Input
              type="tel"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm h-14 text-lg"
            />
            <Input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm h-14 text-lg"
            />
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold h-14 text-lg transition-all duration-300 hover:scale-105"
            >
              Join the Beta
            </Button>
          </form>

          <p className="text-sm text-gray-400 mt-6">
            No credit card required. Early access closes December 15th.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 md:mb-0">
              Asmi
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>&copy; 2024 Asmi. Built for founders who move fast.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
