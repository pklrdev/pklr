import { createClient } from "@/utils/supabase/server";
import { getUserProfile } from "@/data/profiles/queries";
import { Panel } from "@/app/components/Panel";
import { redirect } from "next/navigation";

function OnTheWaitlist() {
    return (
        <Panel>
            <h2>You&apos;re on the wait list</h2>
            <p>
                You have been registered on the wait list. You will be notified
                when we are ready to let you in.
            </p>
        </Panel>
    );
}

function NotOnTheWaitlist() {
    return (
        <Panel>
            <h2>Get on the wait list</h2>
            <p>
                Just sign up for an account and you will be notified when we are
                ready to let you in.
            </p>
            <p>
                <a href="/signup">Sign up</a>
            </p>
        </Panel>
    );
}

export default async function Waitlist() {
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    let onWaitlist = false;

    if (data.user != null) {
        const profile = await getUserProfile(data.user.id);

        if (!profile.on_waitlist) {
            redirect("/");
        }

        onWaitlist = profile.on_waitlist;
    }

    return <main>{onWaitlist ? <OnTheWaitlist /> : <NotOnTheWaitlist />}</main>;
}
