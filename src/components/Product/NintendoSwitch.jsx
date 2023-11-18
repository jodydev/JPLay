import CardGame from "./CardGame"

function NintendoSwitch({gameNintendo}) {
    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col-4">

                    <div className="container set-bg col-sx-nintendo rounded-4 transition shadow-lg w-75 my-5 py-3">
                            <img src="/src/assets/img/nintendo/switch.png" className=" w-100 p-4"/>                        
                    </div>

                    <div className="container set-bg col-sx-nintendo my-5 rounded-4 transition shadow-lg w-75">
                            <img src="/src/assets/img/nintendo/logo.png" className=" w-100 p-4"/>
                    </div>

                </div>

                <div className="col-8">

                    <div className="container w-100 px-5">

                        
                
                            <CardGame gameNintendo={gameNintendo} />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default NintendoSwitch;