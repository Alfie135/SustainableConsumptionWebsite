import type { Route } from "./+types/home";
import "./home.css"
import TextBox from "~/components/TextBox/textbox";
import NavBar from "~/components/NavBar/NavBar";
import Container from "~/components/Container/container";
import { useEffect, useState } from "react";
import { getText } from "~/helpers/requests";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

interface TextData {
  MainTitle: string; 
}
const defaultTextData: TextData = {
  MainTitle: "",
};

export default function Home() {
  const [Text, setText] = useState<TextData>(defaultTextData);
  useEffect(() => {
    async function fetchData() {
      const ServerText = await getText();
      setText(ServerText);
    }

    fetchData();
  }, []);

  return (
    <div className="mainview">
      <button className="LanguageButton">English</button>
      <button style={{ top: 25 }} className="LanguageButton">Español</button>
      <NavBar
        TitleText={Text.MainTitle}
        SubTitleText="Ways you can be more eco friendly:"
        FloatingText="What is responsible consumption?"
        TextBoxText="The UN defines sustainable production and consumption as: 'the use of services and related products, which respond to basic needs and bring a better quality of life while minimising the use of natural resources and toxic materials as well as the emissions of waste and pollutants over the life cycle of the service or product so as not to jeopardise the needs of future generation.' In a 'developed' country such as the United Kingdom, this can apply to things such as how we purchase, consume and waste food, and how we can reduce our use of single-use plastics for example with how paper straws have become common place and plastic straws are no longer used. Or more recently, bottle caps now being attached to the bottle to reduce waste. Responsible consumption is all about making choices that are better for the environment and society as a whole. Changing how we consume products and services encourages companies to produce goods in a more sustainable way, reducing their environmental impact and promoting social responsibility."
        ImageHeight={360}
        BackgroundPhoto="http://localhost:3000/GrassField.jpg" />

      <div className="textboxRow">
        <Container title="Buying from sustainable sources" description="Purchasing Sustainably (fair trade, organic etc)" />
        <Container title="Purchasing food about to be wasted" description="Apps like TGTG, Olio" />
        <Container title="Reducing your use of single use plastic" description="Explanation of examples" />
      </div>
      <div className="NavBar2">
        <NavBar
          TitleText="What benefits does having responsible consumption have?"
          ImageHeight={180}
          BackgroundPhoto="http://localhost:3000/Landfill.jpg" />
      </div>
      <div className="textboxRow">
        <Container title="Benefits of purchasing sustainably" description="Explanation (more investment in sustainable practices of food production due to increased demand etc)" />
        <Container title="Apps benefit to you, businesseses & environment" description="Why these apps are good, how they help you, businesses & environment" />
        <Container title="Benefits of reducing single use plastic" description="Environmental benefits, production benefits (recycleable plastic etc)" />
      </div>
      <div className="textboxRow">
        <Container title="Benefits of purchasing sustainably" description="Explanation (more investment in sustainable practices of food production due to increased demand etc)" />
        <Container title="Apps benefit to you, businesseses & environment" description="Why these apps are good, how they help you, businesses & environment" />
        <Container title="Benefits of reducing single use plastic" description="Environmental benefits, production benefits (recycleable plastic etc)" />
      </div>
    </div>
  );
}

