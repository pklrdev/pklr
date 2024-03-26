import { createClient } from "@/utils/supabase/server";
import { Profile } from "@/data/profiles/type";

export async function getUserProfile(userId: string) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", userId);

    if (error) {
        throw new Error("Problem trying to fetch user profile");
    }

    return data[0] as Profile;
}
