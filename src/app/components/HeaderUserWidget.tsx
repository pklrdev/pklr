"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeaderUserWidget.module.css";

export function HeaderUserWidget({
    name,
    emailHash,
}: Readonly<{
    name: string;
    emailHash: string;
}>) {
    const [menuToggled, setMenuToggled] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setMenuToggled(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className={styles.profilemenucontainer}>
            <button onClick={() => setMenuToggled(!menuToggled)}>
                <img
                    src={`https://gravatar.com/avatar/${emailHash}?s=36&d=identicon`}
                    height={36}
                    width={36}
                    alt="profile image"
                />
            </button>
            {menuToggled ? (
                <div className={styles.menudropdown} ref={ref}>
                    <a href="/auth/signout">Sign out</a>
                </div>
            ) : null}
        </div>
    );
}
