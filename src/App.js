import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
