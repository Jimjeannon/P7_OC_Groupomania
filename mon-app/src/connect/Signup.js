
import '../App.css';

function App() {
  return (
    <div className="App">
     
     <img src="./logos/icon.png" alt="" />
   <form>
  <label>
    Email
    <input type="text" name="email" />
  </label>
  <label>
    Pseudo
    <input type="text" name="pseudo" />
  </label>
  <label>
    Mot de passse 
    <input type="text" name="mot de passe" />
  </label>
  <p>En cliquant sur inscription Groupomania vous acceptez les conditions d'utilisations</p>
  <input type="checkbox"></input>
  <input type="submit" value="Envoyer" />
</form>
    </div>
  );
}

export default App;
