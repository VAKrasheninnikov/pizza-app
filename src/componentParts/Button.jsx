import React from "react";
import classNames from "classnames";

function Button({click, className, outline, children}) {
    return (
        <button
            onClick={click}
            className={classNames('button', className,
                {
                    'button--outline': outline,
                },
            )}>{children}
        </button>
    )
}

export default Button;
