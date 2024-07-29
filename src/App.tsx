import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Formsubmission,
  HomePage,
  IPfinder,
  JokesGenerator,
  PasswordValidator,
} from "./components";
import { Suspense } from "react";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Suspense>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/form-submission" Component={Formsubmission} />
              <Route path="/jokes-generator" Component={JokesGenerator} />
              <Route path="/password-validator" Component={PasswordValidator} />
              <Route path="/ip-finder" Component={IPfinder} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
