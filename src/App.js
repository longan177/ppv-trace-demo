import Article from "./Article";
import Nav from "./Nav";
import { FirebaseProvider } from "./FirestoreContext";

function App() {
  return (
    <FirebaseProvider>
      <Nav />
      <Article />
    </FirebaseProvider>
  );
}

export default App;
