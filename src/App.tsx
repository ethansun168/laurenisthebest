import './App.css'
import bluePikmin from './assets/blue-pikmin.png'
import redPikmin from './assets/red-pikmin.png'
import pinkPikmin from './assets/pink-pikmin.png'
import yellowPikmin from './assets/yellow-pikmin.png'
import FadingImage from './FadingImage'

const RainbowText = ({ children }: { children: React.ReactNode }) => {
  return <span className="rainbow-text">{children}</span>;
};

function App() {

  return (
    <div className='container'>
      <div className='item'>
        <FadingImage src={bluePikmin} />
        <FadingImage src={redPikmin} />
        <FadingImage src={pinkPikmin} />
      </div>
      <div className='item'>
        <RainbowText>lauren is the best</RainbowText>
      </div>
      <div className='item'>
        <FadingImage src={redPikmin} />
        <FadingImage src={pinkPikmin} />
        <FadingImage src={yellowPikmin} />

      </div>
    </div>
  )
}

export default App
