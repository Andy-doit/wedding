import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from "./page/CardPage";

import GuestManagement from "./page/ManagePage";






function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/:slug" element={<CardPage />} />
        
          <Route 
            path="manage" 
            element={
    
                <GuestManagement />
            } 
          />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
