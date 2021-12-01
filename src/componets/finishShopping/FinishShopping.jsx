
export const FinishShopping = ({buyer, items, total, cant}) => {
    console.log('total: ' + total)
    return(
        <div className="container-md">
            <h1>Compra realizada</h1>
            <h3>Datos de la operación</h3>
            <hr />
            <div className="row">
                <p>{`Nombre:  ${ buyer.name }` }</p>
                <p>{`Total comprado:   ${total} $ `}</p>
                <p>{`Cantidad de productos comprados:   ${items.length}`}</p>
                <p>{`Cantidad de items comprados:   ${cant}`}</p>
            </div>
        </div>
    )
}