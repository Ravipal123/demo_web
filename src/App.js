import React from 'react';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-200">
      <Header/>
      <div className='flex flex-row flex-grow'>
        <Sidebar/>
        <MainContent/>
        {/* <Card/> */}
      </div>
      
    </div>
  );
}

export default App;
