import Index from "@/pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Index />
    </BrowserRouter>
  );
}

export default App;