import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../Style/Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';

const ImageSlider = () => (
  <div className='sliderContainer'>
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop interval={2000} showStatus={false} className='carouselContainer'>
      <div>
        <img alt="Slide 1" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65d9877b&is=65c7127b&hm=be4838c224e55ea6ba8927a529c377d79fff4bef1a4e35c0d63e0faadd849744&" className="carouselImage" />
      </div>
      <div>
        <img alt="Slide 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752088408094/2.png?ex=65d9877b&is=65c7127b&hm=e780502dd16513f61f7f76c66343774757556433a2db3abe78825f00a2b27c29&" className="carouselImage" />
      </div>
      <div>
        <img alt="Slide 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752545583144/3.png?ex=65d9877b&is=65c7127b&hm=fdbb401e6ca44b0dde5a61315c99f36d76eea6784d5b0f1e8818fe0d37f876c6&" className="carouselImage" />
      </div>
    </Carousel>
  </div>
);


const EventCard = ({ title, description, imageUrl }) => (
  <Card className='eventCard' style={{ boxShadow: '4px 6px 10px rgba(255, 254, 254, 0.5)' }}>
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={imageUrl}
      className='eventImage'
    />
    <CardContent className='eventCardContent'>
      <Typography variant="h5" className='eventTitle'>
        {title}
      </Typography>
      <Typography variant="body2" className='eventDescription'>
        {description}
      </Typography>
      <button className='button-name'>Enroll Now  </button>
    </CardContent>
  </Card>
);
<hr></hr>

const ProgramGrid = () => (
  <div className='programGrid'>
    <div className='programRow'>
      <div className='programCard'>
        <img alt="Program 1" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020190384198/5.png?ex=65d98d52&is=65c71852&hm=b4109f5252b78111b15bc7288d97574bf5f072cd83428a3ce0f84a49cc364d73&" className='programImage' />
        <div className='programName'>Courses</div>
      </div>
      <div className='programCard'>
        <img alt="Program 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020463149106/6.png?ex=65d98d52&is=65c71852&hm=31cb1a34d1bd095481029b17d2e52ea055a468b91cb389a4789500f41e646c89&" className='programImage' />
        <div className='programName'>Workshops</div>
      </div>
    </div>
    <div className='programRow'>
      <div className="programCard">
        <img alt="Program 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020731453440/7.png?ex=65d98d52&is=65c71852&hm=d1ddb5fd6482ae5ec26a42643ab3a7d3143c02fb65de715c2429b5baf6b6f06a&" className=" programImage" />
        <div className='programName'>Internships</div>
      </div>
      <div className='programCard'>
        <img alt="Program 4" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763021046030356/8.png?ex=65d98d52&is=65c71852&hm=0f5c25b778feaaaaff192e1d2317271f0f973466c7d9b141828e1940ea246890&" className=" programImage" />
        <div className='programName'>Webinars</div>
      </div>
    </div>


  </div>
);

const ClubCard = ({ imageSrc, clubName }) => {
  return (
    <div className="card">
      <div className="card-details">
        <img src={imageSrc} alt={clubName} />
        <p className="text-title">{clubName}</p>
        <p className="text-body">Here are the details of the card</p>
      </div>
      <button className="card-button">Join Now</button>
    </div>
  );
};

const MainContent = () => (
  <main className='main'>
    <ImageSlider />
    <h1>UPCOMING EVENTS</h1>
    <div className='eventsSection'>
      <EventCard
        title="Event 1"
        description="Description of event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205781810223521812/15.png?ex=65d99ed1&is=65c729d1&hm=37550d6c8cc7d2c9ff63498cd676b00bb0d9ef288e33f4efe4942db6a1713ea6&"
      />
      <EventCard
        title="Event 2"
        description="Description of event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205781810466918450/12.png?ex=65d99ed1&is=65c729d1&hm=637278f4f489dccba2d2859079be569a9b2dc9c875ddc3574d68e2f7366c3652&"
      />
      <EventCard
        title="Event 3"
        description="Description of event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205781810819244042/13.png?ex=65d99ed2&is=65c729d2&hm=dd74aff8e66c506dc122073806e573f92a9ab9f2788e91b62ced36b51337d297&"
      />
    </div>



    <h1>Our Programmes</h1>
    <ProgramGrid />



    <h1>OUR CLUBS</h1>
    <div className="clubCard" style={{
      display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
      backgroundImage: 'url(https://media.discordapp.net/attachments/1205756212445192263/1209453048263479348/club_background.png?ex=65e6f9ed&is=65d484ed&hm=62024ebbcb2b02ba5a8a0d863ad1cafd339cd7ff775e26a6258a1e18e062cebd&=&format=webp&quality=lossless&width=1322&height=662)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>

      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205786539808784394/15.png?ex=65d9a339&is=65c72e39&hm=cd0999048c7718602ec123238ee9168ab72b5816fe1ebf28138bab7a9fbcb91d&" clubName="Innovation Club" />
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787286873047080/12.jpg?ex=65d9a3eb&is=65c72eeb&hm=0f2ea5049c2bbaaa928563a0439a187735fec06ab9d6686827a4dc953c7b427b&" clubName="Technology Club" />
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787387301732393/14.jpg?ex=65d9a403&is=65c72f03&hm=6b9bb339bd0cf9f542ba52daf632df6829846fc6040e9cace1eb9d6c548e8bab&" clubName="R&D Club" />

    </div>

  </main>
);

const AboutSection = () => (
  <div>
    <div className='aboutSection'>
      <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', top: '0', marginLeft: '0px', marginRight: '0px' }}>
        <div style={{ flex: 1, textAlign: 'left', top: 0, color: '#ffffff' }}>
          <h1 style={{ textAlign: 'left', top: 0, marginBottom: '20px' }}>About Us</h1>
          <p>
            Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars. Our goal is to equip students with the knowledge, skills, and experiences they need to thrive in their academic pursuits and transition seamlessly into the professional realm.
          </p>
        </div>
        <img
          src="https://cdn.discordapp.com/attachments/1205756212445192263/1205772571379769464/10.jpg?ex=65d99637&is=65c72137&hm=93b4336bbd16fc3dfb3e6ed21bdc3801a5daf7f5ba3698050ba8f3696c2d69fd&"
          alt="Placeholder"
          style={{ width: '500px', height: '450px', marginLeft: '60px', marginRight: '100px' }}
        />
      </div>
    </div>
  </div>


);
const StatisticsSection = () => (
  <div className='statisticsSection'>
    <div className="statisticItem" style={{ width: '200px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>1000+ <br></br>Students</div>
      <div className="statisticLine" style={{ left: '97%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div className="statisticItem" style={{ width: '270px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>50+ <br></br>Sections</div>
      {/* <div className="statisticLine" style={{ left: '10%', transform: 'translateX(-50%)' }}></div> */}
    </div>
    <div className="statisticItem" style={{ width: '270px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>20+ <br></br>Events</div>
      <div className="statisticLine" style={{ left: '0%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div className="statisticItem" style={{ width: '270px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>5+ <br></br>Classes</div>
      <div className="statisticLine" style={{ left: '0%', transform: 'translateX(-50%)' }}></div>
    </div>
  </div>
);


const Home = () => (
  <div className="app">
    <NavBar />
    <MainContent />
    <AboutSection />
    <StatisticsSection />   <br />   <br />
    <Footer />
  </div>
);

export default Home;