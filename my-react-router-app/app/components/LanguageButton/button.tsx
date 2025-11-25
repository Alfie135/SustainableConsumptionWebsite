import { getText } from "~/helpers/requests";
import { Button } from 'antd';
import "./button.css"

interface LanguageButtonProps { // Props for LanguageButton component
    top: number,
    language: "English" | "Español",
    setText: React.Dispatch<React.SetStateAction<any>>
}

export default function LanguageButton (props:LanguageButtonProps){ // LanguageButton component
    const {top, language, setText} = props;
    async function fetchData() { // Fetch text data based on selected language
          const ServerText = await getText(language);
          setText(ServerText);
        }
    return <div className="LanguageButtonContainer" style={{top:top}}><Button onClick={fetchData} className="LanguageButton">{language}</Button></div> // Render button with onClick to fetch data
}