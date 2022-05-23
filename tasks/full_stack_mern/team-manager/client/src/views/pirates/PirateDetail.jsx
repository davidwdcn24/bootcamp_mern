import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import piratesApi from "../../apis/pirates.api";
import PirateUpdateBoolean from '../../components/pirates/PirateUpdateBoolean';
import Header from '../Header';

const PirateDetail = () => {
    const params = useParams();
    const { getPirate } = piratesApi;
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        getPirate({ id: params.id })
            .then(response => {
                setPirate({ ...response.data });
            })
            .catch(error => {
                console.log("Error get product: ", error);
                setPirate({});
            });
    }, []);

    const updatePirateDom = (pirateUpdated) => {
        setPirate(pirateUpdated);
    }

    return (
        <div className='view'>
            <Header title={pirate.name} screen={"details"} />
            <div className="row view-body">
                <div className="col-5 text-center">
                    <div className="mt-4">
                        <img src={pirate.imageUrl}
                            style={{ width: "90%" }}
                            alt={`Imagen del pirata ${pirate.name}`}
                            title={`Imagen del pirata ${pirate.name}`} />
                    </div>
                    <div className="view-phrase mt-3">
                        <span>{`"${pirate.catchPhrase}"`}</span>
                    </div>
                </div>
                <div className="col-7">
                    <div className='card mt-4'>
                        <div className="card-body">
                            <div className="row mb-3 text-center"><h2>About</h2></div>
                            <div className="row mb-3">
                                <div className="col-5"><samp>Position:</samp></div>
                                <div className="col-7"><samp>{pirate.crewPosition}</samp></div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5"><samp>Treasures:</samp></div>
                                <div className="col-7"><samp>{pirate.treasureChest}</samp></div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5"><samp>Peg Leg:</samp></div>
                                <div className="col-4"><samp>{pirate.pegLeg ? 'Yes' : 'No'}</samp></div>
                                <div className="col-3">
                                    <PirateUpdateBoolean data={pirate} field={"pegLeg"} success={updatePirateDom}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5"><samp>Eye Patch:</samp></div>
                                <div className="col-4"><samp>{pirate.eyePatch ? 'Yes' : 'No'}</samp></div>
                                <div className="col-3">
                                    <PirateUpdateBoolean data={pirate} field={"eyePatch"} success={updatePirateDom}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5"><samp>Hook Hand:</samp></div>
                                <div className="col-4"><samp>{pirate.hookHand ? 'Yes' : 'No'}</samp></div>
                                <div className="col-3">
                                    <PirateUpdateBoolean data={pirate} field={"hookHand"} success={updatePirateDom}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PirateDetail