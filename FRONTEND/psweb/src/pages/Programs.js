import React from 'react';
import '../Style/Program.css';
import '../pages/Login';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';






const SingleImageSection = () => (
  <div>
    <img className="Image" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&" alt="Single Image" />
  </div>
);




const ProgramSection = ({ title, imageUrl, content, isImageOnRight }) => {
  const containerStyle = {
    className: 'programSection',
    style: {
      flexDirection: isImageOnRight ? 'row-reverse' : 'row',
    },
  };

  return (
    <div style={containerStyle.style} className={containerStyle.className}>
      <img src={imageUrl} alt={title} className='image' />
      <div className='overlay'>
        <div className='text'>Overlay Text</div>
      </div>
      <div className='content'>
        <h2 className='programTitle'>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};





const Missions = () => (
  <div className="app">
    <div>
      <NavBar />
      <SingleImageSection />
      <ProgramSection

        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&"

      />
      <ProgramSection

        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752927391756/4.png?ex=65e2c1fb&is=65d04cfb&hm=91d0af329371855d57f1068b84ee24174da1c0c9372079b6cf2af7dd058c3ae5&"

      />
      <ProgramSection

        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&"

      />
      <ProgramSection

        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752927391756/4.png?ex=65e2c1fb&is=65d04cfb&hm=91d0af329371855d57f1068b84ee24174da1c0c9372079b6cf2af7dd058c3ae5&"

      />
      <Footer />
    </div>
  </div>
);

export default Missions;