import './NavBar.css';
import TextBox from '~/components/TextBox/textbox';

interface NavBarProps {
    TitleText: string;
    SubTitleText?: string;
    FloatingText?: string;
    TextBoxText?: string;
    ImageHeight: number;
    BackgroundPhoto: string;
}

export default function NavBar(props: NavBarProps) {
        const { FloatingText, TitleText, SubTitleText, TextBoxText, ImageHeight, BackgroundPhoto } = props;
        const style = {
            height: ImageHeight + 'px',
            backgroundImage: `url(${BackgroundPhoto})`,
        }
    return (
        <div className={"NavBarMain"} style={style}>

            {TitleText ? <div><h2 className="TitleText InfrontOfImage boxBackground">{TitleText}</h2></div> :<></>}
            {SubTitleText ? <h2 className="subTitleText InfrontOfImage">{SubTitleText}</h2>:<></>}

            {FloatingText ? <div className="NavBar_content InfrontOfImage"> <h1>{FloatingText}</h1></div> :<></>}
            {TextBoxText ? <TextBox className="textBoxWide InfrontOfImage" backgroundColor='transparent'>{TextBoxText}</TextBox> :<></>}
        </div>
    );
}