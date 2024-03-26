import { signup } from "./actions";
import { TextEntry } from "@/app/components/TextEntry";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Panel } from "@/app/components/Panel";

export default async function SignUpPage() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (data?.user !== null) {
        redirect("/");
    }

    return (
        <main>
            <Panel>
                <form action={signup}>
                    <TextEntry
                        description="Your name"
                        inputType="text"
                        fieldName="fullname"
                        required
                    />
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
                    <button type="submit">Sign up</button>
                </form>
            </Panel>
        </main>
    );
}
