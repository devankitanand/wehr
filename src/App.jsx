import { useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  useEffect(() => {
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      deferredPrompt = event;
      // Show the install button
      const installButton = document.createElement('button');
      installButton.innerText = 'Install App';
      installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
      });
      document.body.appendChild(installButton);
    });
  }, []);

  return (
    <div className="app-main-div">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
