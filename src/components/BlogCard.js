import React from 'react';

const Card = ({ headerImage, tagColor, tagText, title, description, userName, timeAgo }) => (
  <div className="card1">
    <div className="card__header1">
      <img src={headerImage} alt="card__image" className="card__image" width="600" />
    </div>
    <div className="card__body1">
      <span className={`tag tag-${tagColor}`}>{tagText}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <div className="card__footer1">
      <div className="user">
        
        <div className="user__info">
          <h5>{userName}</h5>
          <small>{timeAgo}</small>
        </div>
      </div>
    </div>
  </div>
);

const Container = () => {
  return (
    <div className="container1">
      <div className="text-center header-color">
        <h1 id="Blog">Welcome to Our Blog</h1>
        <p>Discover the latest updates and insights on various topics right here.</p>
      </div>
      <Card
        headerImage="https://source.unsplash.com/600x400/?computer"
        tagColor="blue"
        tagText="Technology"
        title="Leading Tech Frontiers: The World's Most Advanced Cities"
        description="Venture into the heart of innovation where cutting-edge technology seamlessly integrates into daily life. These cities not only pioneer advancements in tech but also redefine living standards, proving that the future is here and now. "
        
        userName="Jane Doe"
        timeAgo="2h ago"
      />
      <Card
        headerImage="https://source.unsplash.com/600x400/?food"
        tagColor="brown"
        tagText="Food"
        title="Delicious Food"
        description="Exploring the symphony of flavors, each dish offers a unique journey into culinary artistry. From spicy to sweet, every bite is a discovery of refined tastes and fresh ingredients, meticulously crafted to delight your senses and inspire your palate."
       
        userName="Jony Doe"
        timeAgo="Yesterday"
      />
      <Card
        headerImage="https://source.unsplash.com/600x400/?car,automobile"
        tagColor="red"
        tagText="Automobile"
        title="Race to Your Heart's Content: Scenic Drives to Explore"
        description="Embark on a thrilling journey through some of the world’s most breathtaking landscapes. Behind the wheel, every turn brings a new discovery, from towering mountains to serene coastlines. Our curated routes are designed for those who crave adventure and the freedom of the open road. "
        
        userName="John Doe"
        timeAgo="2d ago"
      />
    </div>
  );
};

export default Container;
