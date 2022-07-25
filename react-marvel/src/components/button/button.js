import "./style.scss";

function Button( {children, className, component: Component, theme, ...restProps}) {
    return(
        <Component className={`botao  ${className}`} {...restProps}>
            {children}
        </Component>  
    )
}

Button.defaultProps = {
    component:'a',
    className:''
   
}
export default Button;