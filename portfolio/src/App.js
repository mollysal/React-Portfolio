import React, { useState }from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';

const pages = [
  { name: "about" },
  { name: "portfolio" },
  { name: "contact" },
  { name: "resume" }
]

function App() {
  const [page, setPage] = useState(pages[0]);

  const currentPage = () => {
    // switch(page) {
    //   case pages[0].name:
    //     return <AboutPage />
    //   case pages[1].name:
    //     return <Portfolio />
    //   case pages[2].name:
    //     return <Contact />
    //   case pages[3].name:
    //     return <Resume />
    //   default:
    //     return <AboutPage />
    // }
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
