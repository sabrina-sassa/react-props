import './App.css';
import {ImgUrl,HandleName, Profile} from './profil/profile-component';
import img from './user-icon.png'

function App() {
  const alertMyInput=fName=>alert(fName)
  return (
    <div className="App" >
      <ImgUrl><img src={img} alt="" /></ImgUrl>
      <Profile fullname="Lahouaoui Sabrina " bio="ddjffjhfkf" profession="IT"></Profile>
      <HandleName alertMyInput={alertMyInput}/>
    </div>
  );
}

export default App;
