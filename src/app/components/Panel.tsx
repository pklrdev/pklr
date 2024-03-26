import { ReactNode } from "react";
import styles from "./Panel.module.css";

type PanelProps = {
    children: ReactNode;
};

export function Panel(props: PanelProps) {
    return <div className={styles.panel}>{props.children}</div>;
}
