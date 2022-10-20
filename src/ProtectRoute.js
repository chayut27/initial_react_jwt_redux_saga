import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuth }) => {
    // const location = useLocation();
    const dispatch = useDispatch();
    const action = (type, payload) => dispatch({ type, payload });

    useEffect(() => {

        if (!isAuth()) {
            action('LOGOUT')
        } else {
            action('SET_CURRENT_USER')
        }

    }, []);


    return children;
};