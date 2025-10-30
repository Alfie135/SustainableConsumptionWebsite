import Counter from "../components/Counter/counter";
import type { Route } from "./+types/home";
import Server from "~/components/server";
import "./home.css"
import NavBar from "~/components/NavBar/NavBar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="mainview">
      <NavBar></NavBar>
      <Counter/>
      <Server/>
    </div>)
}

