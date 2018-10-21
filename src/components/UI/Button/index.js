import React from 'react'
import { Button } from 'reactstrap'
const MainButton = (props) => (
    <Button onClick={props.handle} color={props.color} >
        {props.children}
    </Button>
)

export default MainButton