    import { useContext } from "react";
    import { AuthContext } from "../providers/AuthProvider";

    // Custom hook to consume AuthContext
    export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error(
        "useAuth hook was called outside of context, make sure your app is wrapped with AuthProvider"
        );
    }

    return authContext;
    };
