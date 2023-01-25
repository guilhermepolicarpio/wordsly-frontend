import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Initial from './pages/Initial';
import Learn from './pages/Learn';
import UserPage from './pages/UserPage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="sign-in" />
          <Route path="sign-up" />
          <Route path="/learn"  element={<Learn />} />
          <Route path="/userpage"  element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
