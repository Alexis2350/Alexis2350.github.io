
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center bg-tour-gray-light"><LoginPage /></div>} />
          <Route path="/register" element={<div className="min-h-screen flex items-center justify-center bg-tour-gray-light"><RegisterPage /></div>} />
          <Route path="/guides" element={<div className="min-h-screen flex items-center justify-center bg-white">Página de Guías (En desarrollo)</div>} />
          <Route path="/how-it-works" element={<div className="min-h-screen flex items-center justify-center bg-white">Cómo Funciona (En desarrollo)</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Páginas temporales para navegación
const LoginPage = () => {
  return (
    <div className="w-full max-w-md px-4">
      <a href="/" className="block text-center mb-8">
        <span className="text-2xl font-bold text-tour-blue">Tour<span className="text-tour-green">Mate</span></span>
      </a>
      <LoginForm />
    </div>
  );
};

const RegisterPage = () => {
  return (
    <div className="w-full max-w-md px-4">
      <a href="/" className="block text-center mb-8">
        <span className="text-2xl font-bold text-tour-blue">Tour<span className="text-tour-green">Mate</span></span>
      </a>
      <RegisterForm />
    </div>
  );
};

// Importamos los componentes después de definir las páginas que los usan
import { LoginForm } from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";

export default App;
