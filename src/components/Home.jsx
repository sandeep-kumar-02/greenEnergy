import { Link } from 'react-router-dom';
import '../styles/home.css';
import Navbar from './Navbar';
import dam from '../images/dam.jpg';
import solar from '../images/solar.jpg';
import windmill from '../images/windmill.jpg';
import laws from '../images/laws.jpg';
import fund from '../images/fund.jpg';
import meetings from '../images/meetings.jpg';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaRegHeart } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <header className="header">
      <Navbar />
    <div className="title">
        <h1>Green Earth</h1>
        <Link to='/' className="hero-button">Know More</Link>
    </div>
    </header>

    {/* Action section */}
    <section className="actions">
  <h1>Actions To Be Taken</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempora?</p>
  <div className="row">
                    <div className="action-col">
                        <h3>Bio Fuel</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime excepturi aut facilis earum delectus, quod accusamus blanditiis sed est modi voluptas temporibus natus! Autem, cum.</p>
                    </div>
                    <div className="action-col">
                      <h3>Solar Energy</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime excepturi aut facilis earum delectus, quod accusamus blanditiis sed est modi voluptas temporibus natus! Autem, cum.</p>
                    </div>
                    <div className="action-col">
                      <h3>Thermal Energy</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime excepturi aut facilis earum delectus, quod accusamus blanditiis sed est modi voluptas temporibus natus! Autem, cum.</p>
                    </div>
  </div>
</section>

    {/* World Initiatives */}
      <section className="world">
        <h1>Worlds Initiatives</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vero.</p>
        <div className="row">
          <div className="world-col">
            <img src={dam}/>
          </div>
          <div className="world-col">
            <img src={solar} />
          </div>
          <div className="world-col">
            <img src={windmill} />
          </div>
        </div>
      </section>

      {/* Legal Efforts */ }
<section className="legal">
  <h1>Legal Activities</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, provident?</p>
    <div className="row">
      <div className="legal-col">
        <img src={meetings} />
        <h3>UNO Meetings</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, saepe!</p>
      </div>
      <div className="legal-col">
        <img src={laws} />
        <h3>Laws</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, saepe!</p>
      </div>
      <div className="legal-col">
        <img src={fund} />
        <h3>Fund Generation</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, saepe!</p>
      </div>
    </div>
</section>

{/* Call to Action */}
<section className="cta">
  <h1>Contribute your efforts <br/>Anywhere From The World</h1>
  <Link to="/">CONTACT US</Link>
</section>

<section className="footer">
  <h4>About Us</h4>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quas nulla at autem temporibus <br/>ullam et quo quidem similique voluptatibus.</p>
  <div className="icons">
    <i className="fa"><FaFacebookF/></i>
    <i className="fa"><FaTwitter/></i>
    <i className="fa"><FaInstagram/></i>
    <i className="fa"><FaLinkedinIn/></i>
  </div>
  <p>Made with <i className='fa-heart'><FaRegHeart/></i></p> 
</section>

    </>
  )
}

export default Home