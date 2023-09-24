import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from '@clerk/nextjs'
import { fetchUser} from '@/lib/actions/user.actions'
import { redirect } from "next/navigation";
async function Page(){

    const user = await currentUser();
    if(!user) return  null;

    // const userInfo = await fetchUser(user.id)
    const userInfo = {}

    // if(userInfo?.onboarded) redirect("/")

    const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
    }
    return(
        <main className="flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto">
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">Complete your profile to use Threads</p>

            <section className="p-10 mt-9 bg-dark-2">
                <AccountProfile
                user={userData}
                btnTitle="Continue"
                 />
            </section>
        </main>
    )
}

export default Page