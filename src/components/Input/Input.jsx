import { InputSpace } from "../Input/InputStyled.jsx";

export function Input({ type, placeholder, name, register }) {
    return <InputSpace type={type} placeholder={placeholder} name={name} {...register(name)} />;
}
