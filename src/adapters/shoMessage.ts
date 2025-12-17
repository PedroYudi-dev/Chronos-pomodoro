import { toast } from "react-toastify"

export const showMessage = {
    sucess: (msg: string) =>  toast.success(msg),
    error: (msg: string) =>  toast.error(msg),
    warning: (msg: string) =>  toast.warn(msg),
    warn: (msg: string) =>  toast.warning(msg),
    info: (msg: string) =>  toast.info(msg),
    dismiss: () => toast.dismiss()
}