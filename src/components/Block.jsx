


function Block({ on, size }) {


    return (
        <div className={`${on ? 'block-active' : 'block'}`} style={{ width: `${size}px`, height: `${size}px` }}>



        </div>

    )
}

export default Block