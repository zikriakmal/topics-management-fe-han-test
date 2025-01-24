import { useEffect } from "react";
import { useNavigate } from "react-router";

const TopicsPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/login")
    }, [])

    return (
        <div>
            <p>Topics Page</p>
        </div>
    )
}

export default TopicsPage;