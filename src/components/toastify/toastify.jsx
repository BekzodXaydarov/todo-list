import { useEffect } from "react"
import { useToastify } from "../../store/useSelector"
import "./toastify.css"
import { useDispatch } from "react-redux"
import { CloseToastify } from "../../store/Slices/toastify.slice"

const Toastify = () => {
    const { isActive, type, text } = useToastify()
    const dispatch = useDispatch()
    useEffect(() => {
        if (isActive) {
            let time = setTimeout(() => {
                dispatch(CloseToastify({}))
            }, 1000)

            return () => clearTimeout(time)
        }
    }, [isActive])
    return (
        <div className={`toastify ${isActive ? "active" : ""} ${type}`}>{text}</div>
    )
}

export default Toastify