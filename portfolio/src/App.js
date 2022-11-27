import React, { useState }from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/Portfolio';
import { ResumePage } from './pages/ResumePage';

const pages = [
  { name: "about" },
  { name: "Portfolio" },
  { name: "contact" },
  { name: "resume" },
]

function App() {
  const [page, setPage] = useState(pages[0]);

  const currentPage = () => {
    switch(page.name) {
      case pages[0].name:
        return <AboutPage />
      case pages[1].name:
        return <PortfolioPage />
      case pages[2].name:
        return <ContactPage />
      case pages[3].name:
        return <ResumePage />
      default:
        return <AboutPage />
    }
  }

  return (
    <div>
      <Header>
         {/* App will know what page we're on & changing the page we're currently on */}
        <Nav page={page} pages={pages} setPage={setPage} />
      </Header>
      <main>
        {currentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
