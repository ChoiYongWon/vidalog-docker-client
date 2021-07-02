import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
    authenticate : boolean
}

  const HomeRouter = (props: Props) => {

    const history = useHistory()
    

    return (
            <>
                {
                    (props.authenticate) ? 'HELLO HOME' : history.push("/auth")
                }
            </>
    )
  }

  export default HomeRouter