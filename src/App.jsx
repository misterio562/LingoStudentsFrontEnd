import Routes from "./Routes/Router";

import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
