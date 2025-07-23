import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, MessageSquare, Sparkles, Database, Zap, ArrowRight, Star, Code, Users, Search, FileText, Layers, Bot } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: t("waitlist.toast.email_required"),
        description: t("waitlist.toast.email_required_desc"),
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwkgrdjq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          suggestion: suggestion || undefined,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSuggestion("");
        toast({
          title: t("waitlist.toast.welcome"),
          description: t("waitlist.toast.welcome_desc"),
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente em instantes.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro inesperado",
        description: "Falha ao se conectar ao serviço.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/arch-weave-logo.png"
                  alt="ArchWeave Logo"
                  className="w-8 h-8 object-contain dark:brightness-110 dark:contrast-125"
                />
              </div>
              <span className="text-xl font-bold">ArchWeave</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('waitlist.nav.features')}
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('waitlist.nav.benefits')}
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
              <Button className="hidden md:inline-flex">
                {t('waitlist.nav.join')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="mr-1 h-3 w-3" />
              {t('waitlist.badge')}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              {t('waitlist.hero.title')}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}{t('waitlist.hero.title_highlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('waitlist.hero.subtitle')}
            </p>

            {!isSubmitted ? (
              <div className="max-w-md mx-auto mb-12">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder={t('waitlist.email.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-center"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full text-lg">
                    {t('waitlist.email.button')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            ) : (
              <div className="max-w-md mx-auto mb-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('waitlist.success.title')}</h3>
                <p className="text-muted-foreground">
                  {t('waitlist.success.subtitle')}
                </p>
              </div>
            )}

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {t('waitlist.benefits.early')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {t('waitlist.benefits.free')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {t('waitlist.benefits.shape')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('waitlist.features.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('waitlist.features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: t('waitlist.feature.editor.title'),
                desc: t('waitlist.feature.editor.desc')
              },
              {
                icon: Database,
                title: t('waitlist.feature.erd.title'),
                desc: t('waitlist.feature.erd.desc')
              },
              {
                icon: Layers,
                title: t('waitlist.feature.workflow.title'),
                desc: t('waitlist.feature.workflow.desc')
              },
              {
                icon: Bot,
                title: t('waitlist.feature.ai.title'),
                desc: t('waitlist.feature.ai.desc')
              },
              {
                icon: Search,
                title: t('waitlist.feature.search.title'),
                desc: t('waitlist.feature.search.desc')
              },
              {
                icon: Code,
                title: t('waitlist.feature.workspace.title'),
                desc: t('waitlist.feature.workspace.desc')
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('waitlist.audience.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('waitlist.audience.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('waitlist.audience.architects'),
                desc: t('waitlist.audience.architects_desc'),
                icon: Code
              },
              {
                title: t('waitlist.audience.leads'),
                desc: t('waitlist.audience.leads_desc'),
                icon: Users
              },
              {
                title: t('waitlist.audience.teams'),
                desc: t('waitlist.audience.teams_desc'),
                icon: Layers
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('waitlist.benefits.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('waitlist.benefits.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('waitlist.benefit.early.title'),
                desc: t('waitlist.benefit.early.desc'),
                icon: Sparkles
              },
              {
                title: t('waitlist.benefit.shape.title'),
                desc: t('waitlist.benefit.shape.desc'),
                icon: MessageSquare
              },
              {
                title: t('waitlist.benefit.free.title'),
                desc: t('waitlist.benefit.free.desc'),
                icon: Star
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      {!isSubmitted && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="text-center mb-6">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{t('waitlist.suggestions.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('waitlist.suggestions.subtitle')}
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="suggestion">{t('waitlist.suggestions.label')}</Label>
                    <Textarea
                      id="suggestion"
                      placeholder={t('waitlist.suggestions.placeholder')}
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      className="mt-2 min-h-[100px] resize-none"
                    />
                  </div>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={async () => {
                      try {
                        const res = await fetch("https://formspree.io/f/xkgzjvlj", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ suggestion }),
                        });

                        if (!res.ok) throw new Error("Formspree error");

                        setSuggestion("");
                        toast({
                          title: t("waitlist.suggestions.success"),
                          description: t("waitlist.suggestions.success_desc"),
                        });
                      } catch (err) {
                        toast({
                          title: t("waitlist.suggestions.error"),
                          description: t("waitlist.suggestions.error_desc"),
                          variant: "destructive",
                        });
                      }
                    }}
                    disabled={!suggestion.trim()}
                  >
                    {t('waitlist.suggestions.button')}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('waitlist.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('waitlist.cta.subtitle')}
          </p>
          {!isSubmitted && (
            <Button size="lg" variant="secondary" className="text-lg px-8">
              {t('waitlist.cta.button')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <img
                  src="/arch-weave-logo.png"
                  alt="ArchWeave Logo"
                  className="w-8 h-8 object-contain dark:brightness-110 dark:contrast-125"
                />
              </div>
              <span className="text-xl font-bold">ArchWeave</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('waitlist.footer.tagline')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}