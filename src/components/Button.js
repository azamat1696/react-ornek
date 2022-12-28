import classNames from "classnames";
const Button = ({text,variant='default'})  => {
    return (
        <>
        <button type="button" className={classNames({
            'btn  p-4 m-2 h-10 flex items-center rounded': true,
            'bg-red-600': variant === 'danger',
            'bg-green-600 text-white': variant === 'success',
            'bg-yellow-300 text-yellow-800': variant === 'warning',
        })}>{text}</button>
    <button type="button" className="...">
        Options
    </button>
    </>
    )
}

export default Button
