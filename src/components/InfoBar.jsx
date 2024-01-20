function InfoBar() {
    return (
        <>
        <footer>
            <nav className="infoBar grid-flow-col gap-2 flex items-center h4 p-1 bg-secondary pl-20">
                <p>Get to know us on</p>
                <a href="">
                    <img className="infobar-icon"
                    src="/imagesNew/qb.png"
                    alt="Quick Books">
                </img>
                </a>
                    <a href="">
                        <img className="infobar-icon"
                            src="/imagesNew/freshbook.png"
                            alt="Fresh Books">
                        </img>
                    </a>
                    <a href="">
                        <img className="infobar-icon"
                            src="/imagesNew/xero.png"
                            alt="Xero">
                        </img>
                    </a>
                    <a href="">
                        <img className="infobar-icon"
                            src="/imagesNew/computerease.png"
                            alt="Computer Ease">
                        </img>
                    </a>
                    <a href="">
                        <img className="infobar-icon"
                            src="/imagesNew/sage.png"
                            alt="Sage">
                        </img>
                    </a>
            </nav>
                
        </footer>
      
        </>
    )
    
}

export default InfoBar