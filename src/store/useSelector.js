import { useSelector } from "react-redux";


export const useData = () => useSelector(({data})=>data)
export const useModal = () => useSelector(({modal})=>modal)