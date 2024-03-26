import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getUserProfile } from "@/data/profiles/queries";

export default async function Home() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/waitlist");
    }

    const profile = await getUserProfile(data.user.id);
    if (profile.on_waitlist) {
        redirect("/waitlist");
    }

    return (
        <main>
            <p>Content goes here</p>
        </main>
    );
}
