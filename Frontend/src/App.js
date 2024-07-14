import React from 'react';
import Texteditor from "./Components/Texteditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  const documentId = uuidV4(); // Generate a new document ID

  return (
    <Router>
      <Routes>
        {/* Redirect from root to the exact path with the generated document ID */}
        <Route path="/" element={<Navigate to={`/documents/${documentId}`} replace />} />

        {/* Route to handle documents with specific IDs */}
        <Route path="/documents/:id" element={<Texteditor />} />
      </Routes>
    </Router>
  );
}

export default App;
