import Header from './components/HeaderComponent';
import BodyUnreleasedContainer from './components/BodyComponentUnreleased';
import BodyReleasedContainer from './containers/BodyContainerReleased';
import './App.css';


function App() {
  const currentDate = new Date();
  const releaseDate = new Date('31 Dec 2023');
  const options = {month: 'short', day: 'numeric', year: 'numeric' };
  const formattedCurrentDate = currentDate.toLocaleDateString(undefined, options);
  const formattedReleaseDate = releaseDate.toLocaleDateString(undefined, options);
  return (
    <div>
      <Header />
      {formattedCurrentDate < formattedReleaseDate ? (
        <BodyUnreleasedContainer />
      ) : (
        <BodyReleasedContainer />
      )}
    </div>
  );
}

export default App;
