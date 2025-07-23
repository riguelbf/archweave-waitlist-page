import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
export const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
    return (_jsxs(Select, { value: language, onValueChange: (value) => setLanguage(value), children: [_jsx(SelectTrigger, { className: "w-[120px]", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-4 w-4" }), _jsx(SelectValue, {})] }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "pt", children: "Portugu\u00EAs" }), _jsx(SelectItem, { value: "en", children: "English" })] })] }));
};
