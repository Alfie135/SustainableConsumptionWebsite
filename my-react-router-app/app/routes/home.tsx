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
      <div className="textboxRow">
        <Container title="Title1" description="Description1" />
        <Container title="Title2" description="Description2" />
        <Container title="Title3" description="Description3" />
        <Container title="Title4" description="Description4" />
        <Container title="Title5" description="Description5" />
        <Container title="Title6" description="Description6" />
        <Container title="Title7" description="Description7" />
        <Container title="Title8" description="Description8" />
        <Container title="Title9" description="Description9" />
        <Container title="Title10" description="Description10" />
      </div>
    </div>
  );
}

