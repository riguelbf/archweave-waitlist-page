import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (_jsxs(Button, { variant: "ghost", size: "icon", onClick: () => setTheme(theme === "light" ? "dark" : "light"), className: "w-9 h-9", children: [_jsx(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), _jsx(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), _jsx("span", { className: "sr-only", children: "Toggle theme" })] }));
};
