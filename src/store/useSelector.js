import { useSelector } from "react-redux";


export const useData = () => useSelector(({ data }) => data)
export const useModal = () => useSelector(({ modal }) => modal)
export const useToastify = () => useSelector(({ toastify }) => toastify)
export const useColor = () => useSelector(({color})=>color)