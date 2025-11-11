import './NavBar.css';
import TextBox from '~/components/TextBox/textbox';

interface NavBarProps {
    TitleText?: string;
    SubTitleText?: string;
    FloatingText?: string;
    className?: string;
    TextBoxText?: string;
}

export default function NavBar(props: NavBarProps) {
        const { FloatingText, TitleText, SubTitleText, className, TextBoxText } = props;
    return (
        <div className={`NavBarMain ${className ?? ""}`}>

            {TitleText ? <div><h2 className="TitleText InfrontOfImage boxBackground">{TitleText}</h2></div> :<></>}
            {SubTitleText ? <h2 className="subTitleText InfrontOfImage">{SubTitleText}</h2>:<></>}

            {FloatingText ? <div className="NavBar_content InfrontOfImage"> <h1>{FloatingText}</h1></div> :<></>}
            {TextBoxText ? <TextBox className="textBoxWide InfrontOfImage" backgroundColor='transparent'>{TextBoxText}</TextBox> :<></>}
        </div>
    );
}