"use client";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

async function signInWithGithub() {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: `${window.location.origin}/auth/callback`,
        },
    });

    if (error) {
        redirect("/error");
    }
}

export function GithubSignin() {
    return (
        <button onClick={() => signInWithGithub()}>Sign in with GitHub</button>
    );
}
