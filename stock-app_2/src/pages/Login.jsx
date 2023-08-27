import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/matrial/Typograghy"
import LockIcon from "@mui/material/Lock"
import image from "../assets/results.svg"
import {Link, useNavigate} from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import {Formik, Form} from "formik"
import {object, string} from "yup"
import {login} from "../hooks/authApiCall"

const Login = () => {
    const navigate = useNavigate()

    //? harici validasyon şeması
    const loginSchema = object({
        email: string()
         .email("Lutfen valid bir email giriniz"),
         .required("Bu alan zorunludur"),
        password: string()
        .required("Bu alan zorunludur")
    })
}