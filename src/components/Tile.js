import React from 'react';


function Tile(props) {

    const gotP = props.ptekst
    const gotImg = props.image


    return (
        <>
            <section>
                {/*{ voorwaarde ? doe dan dit : anders dit*/
                    props.image ? <img src={props.image} alt={props.alt}/>
                        : <>
                            <h2>{props.title}</h2>
                            {props.children}
                        </>
                }
            </section>
        </>
    );

};

export default Tile;
// Eerst had ik het statisch, wat goed werkt en mag alleen dynamisch is fijner om aan te leren was het advies!/
// <section >
//     <h2>{props.title}</h2>
//     <img src={props.image} alt={props.alt}/>
//     <p>{props.ptekst}</p>
// </section>
//
//

