
import './Header.css'

const Header = () => {
  return (
    <div className='header container-xxl'>
      <div className="header-content">
      <div className="divider-head"></div>
        <h2>Our route<span> to success</span></h2>
      </div>
      <div className="header-modul">
        <div className="one">
           <div className='moden-header1'> <span>1</span> <p>Expertise</p></div>
           <div className='moden-header hide'> <span>2</span> <p>Expertise</p> </div>
           </div>
           <div className="two">
           <div className='moden-header'> <span>2</span> <p>Agility</p> </div>
           <div className='moden-header hide'> <span>2</span> <p>Expertise</p> </div>
           </div>
           <div className="three">
           <div className='moden-header'> <span>3</span> <p>Integrity</p> </div>
           <div className='moden-header hide'> <span>2</span> <p>Expertise</p> </div>
           </div>
           <div className="four">
           <div className='moden-header'> <span>4</span> <p>Innovative </p> </div>
           <div className='moden-header hide'> <span>2</span> <p>Expertise</p> </div>
           </div>
           <div className="five">
           <div className='moden-header'> <span>5</span> <p>Client Centric</p> </div>
           <div className='moden-header hide'> <span>2</span> <p>Expertise</p> </div>
           </div>
           <div className="six">
           <div className='moden-header'> <span>6</span> <p>Collaboration</p> </div>
           <div className='moden-header hide'> <span>2</span> <p>Expertise</p> </div>
           </div>
        </div>
        
    </div>
  )
}

export default Header
