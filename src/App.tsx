import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Initial from './pages/Initial';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
