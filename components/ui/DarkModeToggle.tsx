"use client";
import { useTheme } from "next-themes";
import { Switch } from "components/ui/switch";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <span>🌞</span>
      <Switch checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <span>🌜</span>
    </div>
  );
}
