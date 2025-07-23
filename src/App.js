import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            toast({
                title: t('waitlist.toast.email_required'),
                description: t('waitlist.toast.email_required_desc'),
                variant: "destructive",
            });
            return;
        }
        console.log("Waitlist submission:", { email, suggestion });
        setIsSubmitted(true);
        toast({
            title: t('waitlist.toast.welcome'),
            description: t('waitlist.toast.welcome_desc'),
        });
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", children: _jsx("img", { src: "/arch-weave-logo.png", alt: "ArchWeave Logo", className: "w-8 h-8 object-contain dark:brightness-110 dark:contrast-125" }) }), _jsx("span", { className: "text-xl font-bold", children: "ArchWeave" })] }), _jsxs("nav", { className: "hidden md:flex items-center space-x-8", children: [_jsx("a", { href: "#features", className: "text-muted-foreground hover:text-foreground transition-colors", children: t('waitlist.nav.features') }), _jsx("a", { href: "#benefits", className: "text-muted-foreground hover:text-foreground transition-colors", children: t('waitlist.nav.benefits') })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(LanguageSelector, {}), _jsx(ThemeToggle, {}), _jsx(Button, { className: "hidden md:inline-flex", children: t('waitlist.nav.join') })] })] }) }) }), _jsx("section", { className: "relative overflow-hidden py-20 md:py-32", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [_jsxs(Badge, { variant: "secondary", className: "mb-6", children: [_jsx(Zap, { className: "mr-1 h-3 w-3" }), t('waitlist.badge')] }), _jsxs("h1", { className: "text-4xl font-bold tracking-tight sm:text-6xl mb-6", children: [t('waitlist.hero.title'), _jsxs("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: [" ", t('waitlist.hero.title_highlight')] })] }), _jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: t('waitlist.hero.subtitle') }), !isSubmitted ? (_jsx("div", { className: "max-w-md mx-auto mb-12", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx(Input, { type: "email", placeholder: t('waitlist.email.placeholder'), value: email, onChange: (e) => setEmail(e.target.value), className: "h-12 text-center", required: true }), _jsxs(Button, { type: "submit", size: "lg", className: "w-full text-lg", children: [t('waitlist.email.button'), _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] })] }) })) : (_jsxs("div", { className: "max-w-md mx-auto mb-12 text-center", children: [_jsx(CheckCircle, { className: "h-16 w-16 text-green-500 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: t('waitlist.success.title') }), _jsx("p", { className: "text-muted-foreground", children: t('waitlist.success.subtitle') })] })), _jsxs("div", { className: "flex items-center justify-center gap-8 text-sm text-muted-foreground", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), t('waitlist.benefits.early')] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), t('waitlist.benefits.free')] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), t('waitlist.benefits.shape')] })] })] }) }) }), _jsx("section", { id: "features", className: "py-20", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: t('waitlist.features.title') }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: t('waitlist.features.subtitle') })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
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
                            ].map((feature, i) => (_jsxs(Card, { className: "p-6 hover:shadow-lg transition-shadow", children: [_jsx(feature.icon, { className: "h-10 w-10 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: feature.title }), _jsx("p", { className: "text-muted-foreground", children: feature.desc })] }, i))) })] }) }), _jsx("section", { className: "py-20 bg-muted/30", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: t('waitlist.audience.title') }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: t('waitlist.audience.subtitle') })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
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
                            ].map((item, i) => (_jsxs(Card, { className: "p-6 text-center", children: [_jsx(item.icon, { className: "h-12 w-12 mx-auto mb-4 text-primary" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: item.title }), _jsx("p", { className: "text-muted-foreground", children: item.desc })] }, i))) })] }) }), _jsx("section", { id: "benefits", className: "py-20 bg-muted/50", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: t('waitlist.benefits.title') }), _jsx("p", { className: "text-xl text-muted-foreground", children: t('waitlist.benefits.subtitle') })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
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
                            ].map((item, i) => (_jsxs(Card, { className: "p-6 text-center", children: [_jsx(item.icon, { className: "h-12 w-12 mx-auto mb-4 text-primary" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: item.title }), _jsx("p", { className: "text-muted-foreground", children: item.desc })] }, i))) })] }) }), !isSubmitted && (_jsx("section", { className: "py-20", children: _jsx("div", { className: "container", children: _jsx("div", { className: "max-w-2xl mx-auto", children: _jsxs(Card, { className: "p-8", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx(MessageSquare, { className: "h-12 w-12 mx-auto mb-4 text-primary" }), _jsx("h3", { className: "text-2xl font-bold mb-2", children: t('waitlist.suggestions.title') }), _jsx("p", { className: "text-muted-foreground", children: t('waitlist.suggestions.subtitle') })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "suggestion", children: t('waitlist.suggestions.label') }), _jsx(Textarea, { id: "suggestion", placeholder: t('waitlist.suggestions.placeholder'), value: suggestion, onChange: (e) => setSuggestion(e.target.value), className: "mt-2 min-h-[100px] resize-none" })] }), _jsx(Button, { className: "w-full", variant: "outline", onClick: () => {
                                                if (suggestion.trim()) {
                                                    console.log("Suggestion:", suggestion);
                                                    setSuggestion("");
                                                    toast({
                                                        title: t('waitlist.suggestions.success'),
                                                        description: t('waitlist.suggestions.success_desc'),
                                                    });
                                                }
                                            }, disabled: !suggestion.trim(), children: t('waitlist.suggestions.button') })] })] }) }) }) })), _jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-purple-600", children: _jsxs("div", { className: "container text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: t('waitlist.cta.title') }), _jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: t('waitlist.cta.subtitle') }), !isSubmitted && (_jsxs(Button, { size: "lg", variant: "secondary", className: "text-lg px-8", children: [t('waitlist.cta.button'), _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }))] }) }), _jsx("footer", { className: "bg-background border-t py-12", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "flex items-center justify-center space-x-2 mb-4", children: [_jsx("div", { className: "h-8 w-8 rounded-lg flex items-center justify-center", children: _jsx("img", { src: "/arch-weave-logo.png", alt: "ArchWeave Logo", className: "w-8 h-8 object-contain dark:brightness-110 dark:contrast-125" }) }), _jsx("span", { className: "text-xl font-bold", children: "ArchWeave" })] }), _jsx("p", { className: "text-sm text-muted-foreground", children: t('waitlist.footer.tagline') })] }) }) })] }));
}
