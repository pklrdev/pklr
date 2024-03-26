import { getUserProfile } from "@/data/profiles/queries";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function PackagesListPage() {
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
            <h1>Coming Soon</h1>
        </main>
    );
}
