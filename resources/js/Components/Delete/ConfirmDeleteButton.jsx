import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import DangerButton from "../Button/DangerButton";

export default function ConfirmDeleteButton({ id, routeName }) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você não poderá reverter esta ação!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3b82f6",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Sim, Excluir!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route(routeName, id), {
                    onSuccess: ({ props }) => {
                        Swal.fire({
                            title: "Excluído!",
                            text: props.flash.success,
                            icon: "success"
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Erro!",
                            text: "Ocorreu um erro ao tentar exluir o registro.",
                            icon: "error",
                        });
                    }
                });
            }
        });
    }

    return (
        <DangerButton
            className="ms-1 text-sm"
            onClick={handleDelete}
        >
            Apagar
        </DangerButton>
    );
}