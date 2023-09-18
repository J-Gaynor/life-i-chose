import logo from '../assets/killy_animation.gif';

function Header() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='header-nav'>
          <h1 id='header-link'>killy</h1>
        </div>
        <ul id='dropdown-menu'>
          <li id='link1' ><a href='https://open.spotify.com/artist/0gCGZZ1Ibo5QsOnll977PD' target='_blank' without rel='noreferrer'><h2 id='spotify'>Spotify</h2></a></li>
          <li id='link2'><a href='https://music.apple.com/us/artist/killy/202317329' target='_blank' without rel='noreferrer'><h2 id='apple'>Apple Music</h2></a></li>
          <li id='link3'><a href='https://www.amazon.co.uk/music/player/artists/B001LWB8BQ/killy' target='_blank' without rel='noreferrer'><h2 id='amazon'>Amazon Music</h2></a></li>
          <li id='link4'><a href='https://www.youtube.com/@KILLYmusic' target='_blank' without rel='noreferrer'><h2 id='youtube'>YouTube</h2></a></li>
        </ul>
        <a href="https://killy.co" target="_blank" rel="noreferrer" id='app-logo'>
          <img src={logo} alt='logo' id='app-logo-img'/>
        </a>
      </header>
    </div>
  );
}

export default Header;