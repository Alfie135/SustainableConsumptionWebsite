import './NavBar.css';
import TextBox from '~/components/TextBox/textbox';

export default function NavBar() {
    return (
        <div className="NavBar">

            <h2 className="TitleText InfrontOfImage">Responsible Consumption</h2>
            <h2 className="subTitleText InfrontOfImage">Ways you can be more eco friendly</h2>

            <div className="NavBar_content InfrontOfImage"> <h1>What is Responsible Consumption?</h1></div>
            <TextBox className="textBoxWide InfrontOfImage" backgroundColor='transparent'>Title description</TextBox>
        </div>
    );
}