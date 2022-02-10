import Sidebar from "./components/Sidebar";
import Header from "./components/Header"
import Main from "./components/Main"
function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-2">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
