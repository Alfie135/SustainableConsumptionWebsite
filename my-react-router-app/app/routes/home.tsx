import Counter from "../components/Counter/counter";
import type { Route } from "./+types/home";
import Server from "~/components/server";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <Counter />
    <Server />
  </div>;
}
