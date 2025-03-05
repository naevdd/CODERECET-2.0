import Card from "../components/card";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-custom-black p-8 flex flex-col items-center min-h-screen md:pt-20 pt-10">
      <h1 className="text-custom-white font-seasons_r text-left text-4xl md:text-7xl">
        FREQUENTLY <span className="text-custom-yellow">ASKED QUESTIONS</span>.
      </h1>
      <div className="md:flex md:flex-row flex-col my-auto items-center gap-1 group">
        <Card
          defaultText="No one really asked these questions."
          flippedText="answer"
        />
        <Card
          defaultText="Are there any prerequisites for this hackathon?"
          flippedText="answer"
          extraClasses="md:-ml-96"
        />
        <Card
          defaultText="How many members can be there in a team?"
          flippedText="answer"
          extraClasses="md:-ml-96"
        />
        <Card
          defaultText="How many prizes can a team acquire?"
          flippedText="answer"
          extraClasses="md:-ml-96"
        />
        <Card
          defaultText="Have never participated in a hackathon?"
          flippedText="answer"
          extraClasses="md:-ml-96"
        />
      </div>
    </div>
  );
};

export default Gallery;
