import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import SolutionsPage from '@/pages/solutions';
import IndustriesPage from '@/pages/industries';
import ConsultingPage from '@/pages/consulting';
import ManufacturingPage from '@/pages/manufacturing';
import TechnologyPage from '@/pages/technology';
import NetworkPage from '@/pages/network';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useHashLocation } from "wouter/use-hash-location";
import { ThemeProvider } from '@/context/ThemeContext';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/consulting" component={ConsultingPage} />
      <Route path="/manufacturing" component={ManufacturingPage} />
      <Route path="/technology" component={TechnologyPage} />
      <Route path="/network" component={NetworkPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <WouterRouter hook={useHashLocation}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
