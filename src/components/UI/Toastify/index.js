import { toast } from 'react-toastify'
const options = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 100
}
export const Success = (message) => {
    toast.success(message,options)
}

export const Error = (message) => {
    toast.error(message,options)
}

export const Warning = (message) => {
    toast.warn(message,options)
}
