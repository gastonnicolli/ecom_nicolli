import { react } from "@babel/types";

export const FinishShopping = (buyer, items, total) => {
    return(
        <div className="container-md">
            <h1>Compra realizada</h1>
            <h2>Comprador</h2>
            <div className="row">
                <p>`Nombre: {buyer.name}`</p>
            </div>
        </div>
    )
}