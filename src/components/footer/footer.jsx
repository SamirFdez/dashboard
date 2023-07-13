import { Navbar, Col } from 'react-bootstrap'
import footerStyles  from "./footer.module.css"


export const Footer = function() {

    return (   
        <>
            <Navbar>
                <div className= { footerStyles.div }> 
                    Copyright © 2023 Signos Framework. All rights reserved.
                </div>
            </Navbar>
        </>
 )

}   