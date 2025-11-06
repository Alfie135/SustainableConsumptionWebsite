import './NavBar.css';
import test from 'public/GrassField.jpg';

export default function FakeNavBar() {
    return (
        <div className="FakeNavBar">
            <img className="FakeNavBar_image" src={test} alt="Test image" />
            <div className="FakeNavBar_content"> <h1>What is Responsible Consumption?</h1>
            </div>
        </div>
    );
}