import { useState } from 'react';
import { STINK_PROJECTS, StinkProject, REGIONS } from './data/stinkData';
import { StinkHeader } from './components/stink/StinkHeader';
import { StinkDock } from './components/stink/StinkDock';
import { StinkGrid } from './components/stink/StinkGrid';
import { StinkDirectorsView } from './components/stink/StinkDirectorsView';
import { StinkAboutView } from './components/stink/StinkAboutView';
import { StinkFilmModal } from './components/stink/StinkFilmModal';
import { StinkSearchModal } from './components/stink/StinkSearchModal';
import { StinkContactModal } from './components/stink/StinkContactModal';
import { StinkFooter } from './components/stink/StinkFooter';

export default function App() {
  const [activeTab, setActiveTab] = useState<'latest' | 'directors' | 'about'>('latest');
  const [currentRegionCode, setCurrentRegionCode] = useState<string>('UK');
  const [selectedDirector, setSelectedDirector] = useState<string | null>(null);
  const [activeFilm, setActiveFilm] = useState<StinkProject | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const currentRegion = REGIONS.find((r) => r.code === currentRegionCode)?.name || 'United Kingdom';

  // Unified showcase of all work across commercials, music videos, narrative shorts, and features
  const displayedProjects = STINK_PROJECTS.filter((p) => {
    return selectedDirector
      ? p.director.toLowerCase() === selectedDirector.toLowerCase()
      : true;
  });

  const handleSelectDirectorFromRoster = (directorName: string) => {
    setSelectedDirector(directorName);
    setActiveTab('latest');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetHome = () => {
    setSelectedDirector(null);
    setActiveTab('latest');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative">
      
      {/* Top Header with Centered NOCTRA FILMS Wordmark, Region, and Search */}
      <StinkHeader
        currentRegion={currentRegion}
        onOpenSearch={() => setSearchOpen(true)}
        onResetView={handleResetHome}
      />

      {/* Main Content Area */}
      <main className="min-h-[85vh]">
        {activeTab === 'latest' && (
          <StinkGrid
            projects={displayedProjects}
            onSelectProject={(proj) => setActiveFilm(proj)}
            selectedDirector={selectedDirector}
            onClearDirectorFilter={() => setSelectedDirector(null)}
          />
        )}

        {activeTab === 'directors' && (
          <StinkDirectorsView
            onSelectDirector={handleSelectDirectorFromRoster}
          />
        )}

        {activeTab === 'about' && <StinkAboutView />}
      </main>

      {/* NOCTRA Footer & Global Directory */}
      <StinkFooter />

      {/* Signature Floating Frosted Capsule Dock */}
      <StinkDock
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'latest') setSelectedDirector(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentRegionCode={currentRegionCode}
        onSelectRegion={(code) => setCurrentRegionCode(code)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Cinema Lightbox Film Modal */}
      <StinkFilmModal
        project={activeFilm}
        onClose={() => setActiveFilm(null)}
        onSelectDirector={(director) => {
          setSelectedDirector(director);
          setActiveTab('latest');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Search Overlay across all projects */}
      <StinkSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        projects={STINK_PROJECTS}
        onSelectProject={(p) => setActiveFilm(p)}
      />

      {/* Contact & Pitch Overlay */}
      <StinkContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        currentRegion={currentRegion}
      />
    </div>
  );
}
