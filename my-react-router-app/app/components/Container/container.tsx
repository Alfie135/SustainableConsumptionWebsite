import TextBox from "../TextBox/textbox";

interface ContainerProps {
    title: string;
    description: string;
}

export default function Container(props: ContainerProps) {

    const {title, description} = props;

    return <div className="textboxColumn">
        <TextBox className="textBoxTitle">{title}</TextBox>
        <TextBox>{description}</TextBox>
    </div>

}