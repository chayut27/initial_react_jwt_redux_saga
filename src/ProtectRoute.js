import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const ProtectedRoute = ({ children, isAuth }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const action = (type, payload) => dispatch({ type, payload });

    if (!isAuth()) {
        action('LOGOUT')
        return <Navigate to="/login" replace={true} state={{ from: location }} />;
    }

    action('SET_CURRENT_USER')

    return children;
};