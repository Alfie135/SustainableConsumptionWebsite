import Counter from "../components/Counter/counter";
import type { Route } from "./+types/home";
import Server from "~/components/server";
import "./home.css"
import TextBox from "~/components/TextBox/textbox";
import NavBar from "~/components/NavBar/NavBar";
import FakeNavBar from "~/components/NavBar/FakeNavBar";
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
      <NavBar/>
      <FakeNavBar></FakeNavBar>
      <TextBox className="textBoxWide">Title description</TextBox>
      <div className="textboxRow">

        <Container title="Title1" description="Description1"/>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

        <div className="textboxColumn">
          <TextBox className="textBoxTitle">Title2</TextBox>
          <TextBox className="textBox">Description2</TextBox>
        </div>

      </div>
    </div>
    );
}

