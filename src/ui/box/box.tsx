import {FC, HTMLAttributes} from "react";

const Box: FC<HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => {
  return <div {...props}>{children}</div>
}

export default Box