import { signin } from "./actions";
import { TextEntry } from "@/app/components/TextEntry";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { GithubSignin } from "@/app/components/GithubSignin";

export default async function SignInPage() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (data?.user !== null) {
        redirect("/");
    }

    return (
        <main>
            <GithubSignin />
            <form action={signin}>
                <TextEntry
                    description="Email"
                    inputType="email"
                    fieldName="email"
                    required
                />
                <TextEntry
                    description="Password"
                    inputType="password"
                    fieldName="password"
                    required
                />
                <button type="submit">Sign in</button>
            </form>
        </main>
    );
}
