import HelloTab from './tabs/HelloTab';
import AboutTab from './tabs/AboutTab';
import ProjectsTab from './tabs/ProjectsTab';
import ContactTab from './tabs/ContactTab';

const ContentArea = ({ activeTab, activeFile }) => {
  const renderContent = () => {
    switch (activeTab) {
      case '_hello':
        return <HelloTab />;
      case '_about-me':
        return <AboutTab activeFile={activeFile} />;
      case '_projects':
        return <ProjectsTab />;
      case '_contact-me':
        return <ContactTab />;
      default:
        return <HelloTab />;
    }
  };

  return (
    <main className="flex-1 overflow-auto">
      {renderContent()}
    </main>
  );
};

export default ContentArea;
