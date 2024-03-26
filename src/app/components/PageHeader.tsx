import { createClient } from "@/utils/supabase/server";
import styles from "./PageHeader.module.css";
import Image from "next/image";
import { HeaderUserWidget } from "@/app/components/HeaderUserWidget";
import { Separator } from "@/app/components/Separator";
import { Fragment } from "react";

import { createHash } from "crypto";

function hashEmail(email?: string) {
    if (email === undefined) {
        return "00000000000000000000000000000000";
    }

    return createHash("sha256").update(email).digest("hex");
}

export default async function PageHeader() {
    const supabase = createClient();

    const { data } = await supabase.auth.getUser();

    return (
        <header className={styles.pageheader}>
            <div className={styles.contents}>
                <a href="/" className={styles.logo}>
                    <Image
                        className={styles.logo}
                        src="/pklr.svg"
                        alt="Pklr Logo"
                        width={34}
                        height={36}
                        priority
                    />
                    <h1>Pklr</h1>
                </a>
                <div className={styles.grow}></div>
                <div className={styles.rightSection}>
                    {data?.user === null ? (
                        <Fragment>
                            <a href="/signin">Sign in</a>
                            <Separator orientation="vertical" />
                            <a href="/signup">Sign up</a>
                        </Fragment>
                    ) : (
                        <HeaderUserWidget
                            name={
                                data?.user.user_metadata["fullName"] as string
                            }
                            emailHash={hashEmail(data?.user.email)}
                        />
                    )}
                </div>
            </div>
        </header>
    );
}
