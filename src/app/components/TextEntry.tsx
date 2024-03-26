import { HTMLInputTypeAttribute } from "react";
import styles from "./TextEntry.module.css";

type TextEntryProps = {
    description: string;
    inputType: HTMLInputTypeAttribute;
    fieldName: string;
    required?: boolean;
};

export function TextEntry(props: TextEntryProps) {
    return (
        <div className={styles.textentry}>
            <label htmlFor={"TextEntry-" + props.fieldName}>
                {props.description}
            </label>
            <input
                id={"TextEntry-" + props.fieldName}
                type={props.inputType}
                name={props.fieldName}
                required={props.required}
                placeholder={props.description}
            />
        </div>
    );
}
