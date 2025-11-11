import Counter from "../components/Counter/counter";
import type { Route } from "./+types/home";
import Server from "~/components/server";
import "./home.css"
import TextBox from "~/components/TextBox/textbox";
import NavBar from "~/components/NavBar/NavBar";
import Container from "~/components/Container/container";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="mainview">
      <NavBar
        TitleText="What is responsible consumption?"
        SubTitleText="Ways you can be more eco friendly:"
        FloatingText="What is responsible consumption?"
        TextBoxText="Responsible Consumption definition"
        ImageHeight={360}
        BackgroundPhoto="public/GrassField.jpg"/>
        
      <div className="textboxRow">
        <Container title="Buying from sustainable sources" description="Purchasing Sustainably" />
        <Container title="Purchasing food about to be wasted" description="Apps like TGTG, Olio" />
        <Container title="Reducing your use of single use plastic" description="Explanation of examples" />
      </div>
      <div className="NavBar2">
        <NavBar
          TitleText="What benefits does having responsible consumption have?"
          ImageHeight={180}
          BackgroundPhoto="public/LandFill.jpg" />
      </div>
      <div className="textboxRow">
        <Container title="Benefits of purchasing sustainably" description="Explanation (more investment in sustainable practices of food production due to increased demand etc)" />
        <Container title="Apps benefit to you, businesseses & environment" description="Why these apps are good, how they help you, businesses & environment" />
        <Container title="Benefits of reducing single use plastic" description="Environmental benefits, production benefits (recycleable plastic etc)" />
      </div>
    </div>
  );
}

