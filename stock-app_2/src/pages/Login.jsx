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
        .min(8, "En az 8 karakter girilmelidir")
        .max(16, "En fazla 16 karakter girilmelidir")
        .matches(/\d+/, "En az bir rakam içermelidir")
        .matches(/[a-z]/, "En az bir küçük harf içermelidir")
        .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
        .matches(/[!,?{}><%&$#])

    })
}