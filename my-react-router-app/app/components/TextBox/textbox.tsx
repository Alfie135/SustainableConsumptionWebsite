import './textbox.css';

type Props = React.PropsWithChildren<{ // Props for the TextBox component
  className?: string;
//   left?: number;
//   top?: number | string;
  backgroundColor?: string;
}>;

export default function TextBox(props : Props) { // TextBox component

    const {className, backgroundColor, children} =  props; 
    // const {className, left, top, backgroundColor, children} =  props;

     const style: React.CSSProperties = {
        // position: (left != null || top != null) ? "absolute" : undefined,
        // left: left == null ? undefined : `${left}px`,
        // top: top == null ? undefined : (typeof top === "number" ? `${top}px` : top),
        backgroundColor: backgroundColor == null ? undefined : backgroundColor,
    };

    return (
        <div className={`textBox textbox ${className ?? ""}`} style={style}>
            {children}
        </div>
    );
}