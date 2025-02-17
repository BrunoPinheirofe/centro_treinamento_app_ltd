import FormBase from "./FormBase";

export default function RegisterForm({onSubmit}) {

    const fields = [{
        name: "matricula",
        label: "Matrícula",
        type: "text",
        rules: { required: "Campo obrigatório"}
    },
        {
            name: "email",
            label: "E-mail",
            type: "text",
            rules: { required: "Campo obrigatório", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "E-mail inválido" } },
        },
        {
            name: "password",
            label: "Senha",
            type: "password",
            rules: { required: "Campo obrigatório", },
        },
        {
            name: "confirmPassword",
            label: "Confirmar Senha",
            type: "password",
            rules: { required: "Campo obrigatório", },
        },

    ]


    return (
        <FormBase fields={fields} onSubmit={onSubmit} buttonTitle="Entrar" mode = "dark"/>
    )
}