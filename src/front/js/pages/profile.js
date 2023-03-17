import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
    const { store, actions } = useContext(Context);

    return(
        <div className="profile">
            <h2>You must first login to view this page.</h2>
        </div>
    );

};