import TextBox from "../TextBox/textbox";

interface ContainerProps { // Props for the Container component
    title: string;
    description: string; 
}

export default function Container(props: ContainerProps) { // Container component

    const {title, description} = props; 

    return <div className="textboxColumn"> 
        <TextBox className="textBoxTitle">{title}</TextBox> 
        <TextBox>{description}</TextBox>
    </div>

}