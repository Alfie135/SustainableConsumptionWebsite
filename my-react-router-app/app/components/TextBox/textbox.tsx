import './textbox.css';

type Props = React.PropsWithChildren<{
  className?: string;
  left?: number | string;
  top?: number | string;
}>;

export default function TextBox({children, className, left, top }: Props) {
     const style: React.CSSProperties = {
        position: (left != null || top != null) ? "absolute" : undefined,
        left: left == null ? undefined : (typeof left === "number" ? `${left}px` : left),
        top: top == null ? undefined : (typeof top === "number" ? `${top}px` : top),
    };

    return (
        <div className={`textBox textbox ${className ?? ""}`} style={style}>
            {children}
        </div>
    );
}