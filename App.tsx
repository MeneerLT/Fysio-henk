import React, { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { WarningBanner } from './components/WarningBanner';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hoi, ik ben Henk van Fy-fit. Vervelend dat je ergens last van hebt. Waar zit de pijn precies?'
    }
  ]);
  const [showWarning, setShowWarning] = useState(false);

  const handleSendMessage = (content: string) => {
    setMessages(prev => [...prev, { role: 'user', content }]);
  };

  const handleBotResponse = (content: string) => {
    setMessages(prev => [...prev, { role: 'assistant', content }]);
    
    const emergencyWords = ['112', 'huisartsenpost', 'spoed', 'ambulance', 'verlamd'];
    if (emergencyWords.some(word => content.toLowerCase().includes(word))) {
      setShowWarning(true);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Header />
      {showWarning && <WarningBanner />}
      <main className="flex flex-1 overflow-hidden relative">
        <div className="flex-1 flex flex-col min-w-0 bg-white relative">
          <ChatInterface 
            messages={messages} 
            onSendMessage={handleSendMessage} 
            onBotResponse={handleBotResponse}
          />
        </div>
        <div className="hidden lg:block w-80 border-l border-slate-200 bg-slate-50 overflow-y-auto">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;