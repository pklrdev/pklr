import { signin } from "./actions";
import { TextEntry } from "@/app/components/TextEntry";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { GithubSignin } from "@/app/components/GithubSignin";
import { Panel } from "@/app/components/Panel";
import { Separator } from "@/app/components/Separator";

export default async function SignInPage() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (data?.user !== null) {
        redirect("/");
    }

    return (
        <main>
            <Panel>
                <GithubSignin />
                <Separator orientation="horizontal" />
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
            </Panel>
        </main>
    );
}
