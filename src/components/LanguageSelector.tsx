
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

export const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <Select value={language} onValueChange={(value: 'pt' | 'en') => setLanguage(value)}>
            <SelectTrigger className="w-[120px]">
                <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <SelectValue />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="en">English</SelectItem>
            </SelectContent>
        </Select>
    );
};
