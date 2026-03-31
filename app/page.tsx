import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rss, Mail, Bell, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-sans font-bold tracking-tight">Yomu</span>
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/signin">
            <Button variant="ghost" className="font-medium">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button className="font-medium">Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-24">
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-background to-background dark:from-slate-900/30" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-indigo-500" />
              <span>Never miss your favorite content</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight leading-[1.1]">
              Your feeds,<br />
              <span className="font-serif italic text-indigo-600 dark:text-indigo-400">delivered daily.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Yomu aggregates your RSS feeds and sends you a daily email digest of new posts. 
              Stay informed without the feed fatigue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signup">
                <Button size="lg" className="text-lg px-8 h-12 gap-2 font-medium">
                  Start Free
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/signin">
                <Button size="lg" variant="outline" className="text-lg px-8 h-12 font-medium">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
                <div className="size-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Rss className="size-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">Aggregate Feeds</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Import your RSS feeds from anywhere. We support all major RSS formats and platforms.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
                <div className="size-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Mail className="size-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">Daily Digests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get one email per day with all your new posts. No spam, just your content.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
                <div className="size-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Bell className="size-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">Smart Notifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customize what you want to be notified about. Filter by keywords, authors, or categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Simple, focused reading
            </h2>
            <div className="space-y-4">
              {[
                "Unlimited feed subscriptions",
                "Daily email digests at your preferred time",
                "Readable article formatting",
                "Archive and save posts for later",
                "No tracking, no ads",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50">
                  <CheckCircle2 className="size-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to simplify your reading?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of readers who trust Yomu for their daily content.
            </p>
            <Link href="/signup">
              <Button size="lg" className="text-lg px-10 h-12 font-medium">
                Get Started for Free
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Yomu. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
