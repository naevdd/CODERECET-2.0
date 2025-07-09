import Card from "../components/card";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="bg-custom-black p-12 md:p-16 flex flex-col items-center min-h-screen md:pt-32 pt-20"
    >
      <h1 className="text-custom-white font-seasons_r text-center text-5xl md:text-7xl mb-8 md:mb-0">
        FREQUENTLY <span className="text-custom-yellow">ASKED QUESTIONS</span>.
      </h1>
      <div className="lg:flex lg:flex-row flex-col my-auto items-center gap-1 group">
        <Card
          defaultText="What is the theme of the hackathon?"
          flippedText="The theme is 'Open Innovation', which means you are free to do the project on any topic that would generally impact the society positively."
          extraClasses="lg:mx-[4vw]"
        />
        <Card
          defaultText="Should the project be Free and Open Source?"
          flippedText="Yes. The project should be Free and Open Source."
          extraClasses="lg:-ml-[480px] lg:mx-[4vw]"
        />
        <Card
          defaultText="But... I’ve never participated in a hackathon"
          flippedText="That’s okay! We welcome hackers of all skill levels. We’ll have workshops and mentors to help you learn and build something awesome."
          extraClasses="lg:-ml-[480px] lg:mx-[4vw]"
        />
        <Card
          defaultText="How many prizes can a team acquire?"
          flippedText="A team can only win one prize."
          extraClasses="lg:-ml-[480px] lg:mx-[4vw]"
        />
        <Card
          defaultText="How many members can be there in a team?"
          flippedText="Each team has to consist of 2-4 members."
          extraClasses="lg:-ml-[480px] lg:mx-[4vw]"
        />
        <Card
          defaultText="Is there any prerequisites for this hackathon?"
          flippedText="Not at all! We encourage you to give it a shot even if you consider yourself a beginner-level programmer."
          extraClasses="lg:-ml-[480px] lg:mx-[4vw]"
        />
      </div>
    </div>
  );
};

export default Gallery;
