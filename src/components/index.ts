import { lazy } from "react";
import HomePage from "./home/HomePage";

const Formsubmission = lazy(() => import("./form-submission/Formsubmission"))
const JokesGenerator = lazy(() => import("./jokes-generator/JokesGenerator"))
const PasswordValidator = lazy(() => import("./password-validator/PasswordValidator"))
const IPfinder = lazy(() => import("./ip-finder/IPfinder"))

export {
    HomePage,
    Formsubmission,
    JokesGenerator,
    PasswordValidator,
    IPfinder
}