import styles from "./Separator.module.css";

type SeparatorProps = {
    orientation: "horizontal" | "vertical";
};

export function Separator(props: SeparatorProps) {
    if (props.orientation == "horizontal") {
        return <hr className={styles.horizontal} />;
    }

    return <span className={styles.vertical} />;
}
