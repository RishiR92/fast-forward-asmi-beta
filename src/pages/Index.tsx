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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">Asmi</div>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Join Beta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-800">
                  Early Access
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Your calendar is full.{" "}
                  <span className="gradient-text">Your head is fuller.</span>
                </h1>
                <h2 className="text-2xl text-slate-300 leading-relaxed max-w-lg font-medium">
                  Let Asmi handle the chaos.
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                  The Chief of Staff you never had — built inside WhatsApp.
                </p>
              </div>
              
              <form onSubmit={handleBetaSignup} className="space-y-4 max-w-md">
                <div className="flex gap-3">
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8"
                  >
                    Join Beta
                  </Button>
                </div>
                <p className="text-sm text-slate-400">
                  For people who run fast and think faster.
                </p>
              </form>
            </div>

            <div className="relative animate-float">
              <div className="whatsapp-mockup rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                <div className="bg-slate-800 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">A</span>
                    </div>
                    <span className="text-white font-medium">Asmi</span>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-white text-sm">
                    📅 Your 3pm with Sarah Chen is ready
                    <br /><br />
                    <strong>Context:</strong> YC founder, Series A at $15M ARR
                    <br />
                    <strong>Last chat:</strong> Interested in your API integration
                    <br />
                    <strong>Talk about:</strong> Partnership timeline, technical requirements
                  </div>
                  <div className="text-xs text-slate-400 text-right">2:58 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-red-400">❌ Without Asmi</h2>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Walk into meetings unsure who you're talking to or what was last discussed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Promise follow-ups in voice notes and chats, but forget to act</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Spend 10–15 mins prepping before every important call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Juggle WhatsApp, calendar, Notion, and reminders just to stay on top</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Chase people manually to close loops on intros, updates, or tasks</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-green-400">✅ With Asmi</h2>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Get pre-meeting briefs on WhatsApp: last convo, who they are, what to say</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Asmi tracks every spoken commitment and follows up at the right time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Skip the scramble — you're always 2 steps ahead, context-first</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Voice-note "Reschedule that to Friday 3PM" → synced across Google/Outlook</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Nudges your team, partners, or investors — without you lifting a finger</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Built for <span className="gradient-text">high-velocity</span> operators
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Asmi handles the cognitive overhead so you can focus on what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">🧠 Infinite Memory, Instant Recall</h3>
                <p className="text-slate-300">
                  Voice notes, conversations, decisions — Asmi never forgets context or commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">👥 Meeting Briefs</h3>
                <p className="text-slate-300">
                  Get context on who you're meeting, your last conversation, and key talking points.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">📅 Natural Language Scheduling</h3>
                <p className="text-slate-300">
                  "Schedule coffee with Sarah next Tuesday at 3pm" — works with Google, Outlook, Apple.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">📇 Contact-Aware</h3>
                <p className="text-slate-300">
                  Uses contact names from your phone — no need to explain who people are.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">🔁 Follow-ups Handled For You</h3>
                <p className="text-slate-300">
                  Automatically follows up on commitments via WhatsApp — no more chasing people.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">🎤 Just Talk — It Gets It</h3>
                <p className="text-slate-300">
                  Just speak naturally — Asmi understands context and intent from voice messages.
                </p>
              </CardContent>
            </Card>
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
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How it works
            </h2>
            <p className="text-xl text-slate-300">Three steps. Zero friction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">Text</h3>
              <p className="text-slate-300">
                Send voice messages or text to Asmi in WhatsApp. Natural, conversational.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">Remember</h3>
              <p className="text-slate-300">
                Asmi processes, remembers, and connects everything to your existing context.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">Act</h3>
              <p className="text-slate-300">
                Asmi schedules, reminds, briefs, and nudges — automatically and intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            We're onboarding 100 people who move faster than their calendar.
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Join the beta and get your AI Chief of Staff inside WhatsApp.
          </p>

          <form onSubmit={handleBetaSignup} className="max-w-md mx-auto space-y-4">
            <Input
              type="tel"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <Input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-white text-purple-900 hover:bg-white/90 font-semibold"
            >
              Join the Beta
            </Button>
          </form>

          <p className="text-sm text-purple-200 mt-4">
            For people who run fast and think faster.
          </p>
          <p className="text-sm text-purple-300 mt-2">
            No credit card required. Early access closes December 15th.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">Asmi</div>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2024 Asmi. Built for founders who move fast.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
