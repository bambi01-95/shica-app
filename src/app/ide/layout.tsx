import { ThemeProvider } from "../../../contexts/ThemeContext";
import "./shica.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}