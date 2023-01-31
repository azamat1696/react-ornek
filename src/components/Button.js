import classNames from "classnames";
const Button = ({disable,text,variant='default'})  => {
    return (
        <>
        <button disabled={disable} type="submit" className={classNames({
            'btn  p-4 m-2 h-10 flex items-center rounded': true,
            'bg-red-600 text-white': variant === 'danger',
            'bg-green-600 text-white': variant === 'success',
            'bg-yellow-300 text-yellow-800': variant === 'warning',
        })}>{text}</button>
    {/*<button type="button" className="...">*/}
    {/*    Options*/}
    {/*</button>*/}
    </>
    )
}

export default Button
