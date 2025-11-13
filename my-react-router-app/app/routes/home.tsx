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
  SubTitleText: string;
  SubSubTitleText: string;
  TitleTextBoxText: string;

  Row1Text1Title: string;
  Row1Text1Description: string;
  Row1Text2Title: string;
  Row1Text2Description: string;
  Row1Text3Title: string;
  Row1Text3Description: string;

  Row2Title?: string;

  Row2Text1Title: string;
  Row2Text1Description: string;
  Row2Text2Title: string;
  Row2Text2Description: string;
  Row2Text3Title: string;
  Row2Text3Description: string;
}
const defaultTextData: TextData = {
  MainTitle: "",
  SubTitleText: "",
  SubSubTitleText: "",
  TitleTextBoxText: "",

  Row1Text1Title: "",
  Row1Text1Description: "",
  Row1Text2Title: "",
  Row1Text2Description: "",
  Row1Text3Title: "",
  Row1Text3Description: "",

  Row2Title: "",

  Row2Text1Title: "",
  Row2Text1Description: "",
  Row2Text2Title: "",
  Row2Text2Description: "",
  Row2Text3Title: "",
  Row2Text3Description: "",
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
        SubTitleText={Text.SubTitleText}
        FloatingText={Text.SubSubTitleText}
        TextBoxText={Text.TitleTextBoxText}
        ImageHeight={360}
        BackgroundPhoto="http://localhost:3000/GrassField.jpg" />

      <div className="textboxRow">
        <Container title={Text.Row1Text1Title} description={Text.Row1Text1Description} />
        <Container title={Text.Row1Text2Title} description={Text.Row1Text2Description}/>
        <Container title={Text.Row1Text3Title} description={Text.Row1Text3Description}/>
      </div>
      <div className="NavBar2">
        <NavBar
          TitleText={Text.Row2Title ?? ""}
          ImageHeight={180}
          BackgroundPhoto="http://localhost:3000/Landfill.jpg" />
      </div>
      <div className="textboxRow">
        <Container title={Text.Row2Text1Title} description={Text.Row2Text2Description} />
        <Container title={Text.Row2Text2Title} description={Text.Row2Text2Description} />
        <Container title={Text.Row2Text3Title} description={Text.Row2Text3Description} />
      </div>
    </div>
  );
}

