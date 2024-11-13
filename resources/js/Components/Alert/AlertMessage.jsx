import { useEffect } from "react";
import Swal from "sweetalert2";

export default function AlertMessage({ message }) {
    const hasSuccess = message.success ? true : false;
    const hasError = message.error ? true : false;

    useEffect(() => {
        if (hasSuccess) {
            Swal.fire({
                title: "Sucesso!",
                text: message.success,
                icon: "success",
                confirmButtonColor: "#22c55e",
            });
        }
        if (hasError) {
            Swal.fire({
                title: "Erro!",
                text: message.error,
                icon: "error",
                confirmButtonColor: "#ef4444",
            });
        }
    }, [message, hasSuccess, hasError]);

    return null;
}