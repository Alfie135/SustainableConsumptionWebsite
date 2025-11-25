import { getText } from "~/helpers/requests";
import { Button } from 'antd';
import "./button.css"

interface LanguageButtonProps {
    top: number,
    language: "English" | "Español",
    setText: React.Dispatch<React.SetStateAction<any>>
}

export default function LanguageButton (props:LanguageButtonProps){
    const {top, language, setText} = props;
    async function fetchData() {
          const ServerText = await getText(language);
          setText(ServerText);
        }
    return <div className="LanguageButtonContainer" style={{top:top}}><Button onClick={fetchData} className="LanguageButton">{language}</Button></div>
}