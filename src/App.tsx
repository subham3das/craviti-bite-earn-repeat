import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import SearchPage from "./pages/SearchPage";
import NearMePage from "./pages/NearMePage";
import TasksPage from "./pages/TasksPage";
import ReelsPage from "./pages/ReelsPage";
import ProfilePage from "./pages/ProfilePage";
import WalletPage from "./pages/WalletPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/near-me" element={<NearMePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
