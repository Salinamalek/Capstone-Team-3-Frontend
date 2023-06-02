import { useRecruiterProvider } from "../../Providers/RecruiterProvider"

export default function () {
    const { setRecruiterID} = useRecruiterProvider()
    return (
        <div>
            This is the recruiter profile
            <button onClick={() => setRecruiterID(2)}>
                click me
            </button>
        </div>
    )
}