import React from 'react';

const Card = ({ id, header, openLabel, leftContent, rightContent, footerLink }) => (
  <div className="card" id={`card-${id}`}>
    <input type="checkbox" className="open-card" id={`open-card-${id}`} defaultChecked />
    <label className="open-card-label" htmlFor={`open-card-${id}`} data-open-label={openLabel}></label>
    <input type="checkbox" className="card-toggle" id={`card-toggle-${id}`} />
    <label className="card-toggle-label" htmlFor={`card-toggle-${id}`}></label>
    <div className="card-image"></div>
    <div className="card-header">
      <h2>{header}</h2>
    </div>
    <div className="card-content left-content">
      <h3>{leftContent.title}</h3>
      <p>{leftContent.text1}</p>
      <p>{leftContent.text2}</p>
    </div>
    <div className="card-content right-content">
      <h3>{rightContent.title}</h3>
      <p>{rightContent.text1}</p>
      <p>{rightContent.text2}</p> 
    </div>
    <div className="card-footer">
      <a href={footerLink.url}>{footerLink.text}</a>
    </div>
  </div>
);



const App = () => (
  <div>
   <h1 className="text-center mt-5 mb-5 header-color" id="destinations">Choose your destination</h1>
    <div className="card-container">
    <Card id="1" header="Discover the Andes" openLabel="Perú"
      leftContent={{ title: "Machu Picchu", text1: "Discover Machu Picchu, an ancient Incan city set high in the Andes Mountains of Peru.", text2: "Explore its mystical terraces and structures that soar above the Sacred Valley." }}
      rightContent={{ title: "Rainbow Mountain", text1: "Visit Rainbow Mountain, Vinicunca, known for its striking, naturally colorful sandstone layers, a result of mineral deposits.", text2: "A challenging hike leads to this stunning site where the mountain's vibrant stripes offer." }}
      footerLink={{ url: "#more", text: "Explore Peru" }} />

    <Card id="2" header="Island of Enchantment" openLabel="Puerto Rico"
      leftContent={{ title: "El Yunque", text1: "Explore El Yunque, the only tropical rainforest in the U.S. National Forest System. Located in the heart of Puerto Rico.", text2: "Enjoy hiking through vibrant green landscapes, encountering stunning waterfalls and the melodious sounds of the native coquí frogs." }}
      rightContent={{ title: "Old San Juan", text1: "Wander the cobblestone streets of Old San Juan, where history resonates at every turn through its Spanish colonial architecture.", text2: "This historic district is celebrated for its colorful buildings and warm hospitality, making it a pulsating heart of Puerto Rican culture." }}
      footerLink={{ url: "#more", text: "Discover Puerto Rico" }} />

    <Card id="3" header="Land of the Rising Sun" openLabel="Japan"
      leftContent={{ title: "Mount Fuji", text1: "Mount Fuji, Japan's tallest peak, is not only a national symbol but also a site of pilgrimage and artistic inspiration. Its iconic conical form is visible from Tokyo.", text2: "Perfect for day trips, the area offers climbing routes." }}
      rightContent={{ title: "Kyoto's Temples", text1: "Kyoto, once the capital of Japan, is famed for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.", text2: "Visit temples like Kinkaku-ji, the Golden Pavilion, and Fushimi Inari-taisha." }}
      footerLink={{ url: "#more", text: "Explore Japan" }} />

    <Card id="4" header="European Charm" openLabel="Italy"
      leftContent={{ title: "Dolomites", text1: "Experience the breathtaking Dolomites, a stunning mountain range located in the northern Italian Alps.", text2: "Ideal for hiking, skiing, and photography, the Dolomites attract outdoor enthusiasts from around the world." }}
      rightContent={{ title: "Amalfi Coast", text1: "Explore the Amalfi Coast, known for its extraordinary beauty and picturesque.", text2: "Stroll through charming streets, enjoy exquisite Italian cuisine, and soak in the stunning views that have inspired artists and writers for decades." }}
      footerLink={{ url: "#more", text: "Discover Italy" }} />

    <Card id="5" header="African Wilderness" openLabel="Kenya"
      leftContent={{ title: "Mount Kenya", text1: "Ascend Mount Kenya, Africa's second highest peak. This majestic mountain is known for its glacier-clad summits and alpine moorlands.", text2: "Home to rare species of flora and fauna, Mount Kenya offers unique trekking experiences in a breathtaking natural setting." }}
      rightContent={{ title: "Masai Mara", text1: "Experience the Masai Mara, famous for its annual migration of over two million wildebeest, zebra, and gazelle.", text2: "Apart from the migration, the Masai Mara is a superb year-round destination for wildlife viewing, offering encounters with the Big Five and more in their natural habitat." }}
      footerLink={{ url: "#more", text: "Explore Kenya" }} />

    <Card id="6" header="Nordic Adventures" openLabel="Norway"
      leftContent={{ title: "Lofoten Islands", text1: "Discover the Lofoten Islands, where dramatic scenery meets Arctic waters. These islands are known for their distinctive jagged peaks, sheltered bays, and untouched beaches.", text2: "Ideal for nature lovers, the Lofoten Islands offer opportunities for hiking, fishing, and kayaking." }}
      rightContent={{ title: "Pulpit Rock", text1: "Climb to Pulpit Rock, Preikestolen, which offers one of the most famous views in Norway. Perched over 600 meters above the Lysefjord.", text2: "The hike to Pulpit Rock is accessible and provides panoramic views of the surrounding fjords and landscapes that are simply unforgettable." }}
      footerLink={{ url: "#more", text: "Discover Norway" }} />

    </div>
  </div>
);

export default App;
