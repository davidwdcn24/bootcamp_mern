import React from 'react';

const Player = (props) => {

    const tossCoin = () => {
        return Math.random() > 0.5 ? "heads" : "tails";
    }

    const fiveHeads = () => {
        return new Promise ( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;

            while (headsCount < 5) {
                // Si ya llega a 100 devuelve error.
                if (attempts > 100)
                    break;

                attempts++;

                let result = tossCoin();

                if(result === "heads")
                    headsCount++;
                else
                    headsCount = 0;
            }

            if (attempts > 100)
                reject("El límite para conseguir el resultado llegó a su fin.");
            else
                resolve(`It took ${attempts} tries to flip five "heads".`);
        });
    }

    const handleClick = () => {
        fiveHeads()
            .then((res) => {
                console.log(res);
                props.setMsg(res);
            })
            .catch((err) => {
                console.log(err);
                props.setMsg(err);
            });
        
        console.log("When does this run now?");
    }

    return (
        <div className='container-fluid mt-3'>
            <button className='btn btn-primary' onClick={handleClick}>Lanzar</button>
        </div>
    );
}

export default Player;