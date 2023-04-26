import Card from "./Card";

const Home = ({characters,onClose}) => {
  return (
    <div>
      {
        characters.map(({id,name,species,gender,image,origin,index}) => {
          return <Card
          
            key={index}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            onClose={() => onClose(id)}
          
          />
        })
      }
    </div>
  );
};

export default Home;
