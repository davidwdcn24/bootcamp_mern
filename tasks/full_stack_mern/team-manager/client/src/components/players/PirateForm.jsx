import React, { useState } from 'react'

const PirateForm = (props) => {
    const { pirate, errors, save } = props;
    const [pirateForm, setPirateForm] = useState(pirate._id || {
        name: "",
        imageUrl: "",
        treasureChest: 0,
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    });
    const crewPosition = ["First Mate", "Quarter Master", "Boatswain", "Powder Monkey"];

    const handleSubmit = (evt) => {
        evt.preventDefault();
        save(pirateForm);
    }

    return (
        <div className="row view-body">
            <form onSubmit={handleSubmit} className="container-fluid">
                <div className="row">
                    {errors.map((err, index) => <p key={index}
                        className="fw-bold font-monospace">{err}</p>)}
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="txtName" className="form-label">Pirate name:</label>
                            <input type="text"
                                className="form-control"
                                id="txtName"
                                placeholder="Ingrese el nombre del pirata."
                                value={pirateForm.name || ""}
                                onChange={(evt) => setPirateForm({ ...pirateForm, name: evt.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="txtImageUrl" className="form-label">Image Url:</label>
                            <input type="text"
                                className="form-control"
                                id="txtImageUrl"
                                placeholder="Ingrese la url de la imagen del pirata."
                                value={pirateForm.imageUrl || ""}
                                onChange={(evt) => setPirateForm({ ...pirateForm, imageUrl: evt.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="txtTreasureChests" className="form-label"># of Treasure Chests:</label>
                            <input type="number"
                                className="form-control"
                                id="txtTreasureChests"
                                placeholder="Ingrese el número de cofres del tesoro."
                                value={pirateForm.treasureChest || 0}
                                onChange={(evt) => setPirateForm({ ...pirateForm, treasureChest: evt.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="txtCatchPhrase" className="form-label">Pirate Catch Phrases:</label>
                            <input type="text"
                                className="form-control"
                                id="txtCatchPhrase"
                                placeholder="Ingrese una frase del pirata."
                                value={pirateForm.catchPhrase || ""}
                                onChange={(evt) => setPirateForm({ ...pirateForm, catchPhrase: evt.target.value })} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="sltCrewPosition" className="form-label">Crew Position:</label>
                            <select id="sltCrewPosition"
                                className="form-select"
                                defaultValue={pirateForm.crewPosition || ""}
                                onChange={(evt) => setPirateForm({ ...pirateForm, crewPosition: evt.target.value })}>
                                <option value="">Seleccione una opcion...</option>
                                {
                                    crewPosition.map((value, index) => {
                                        return (<option key={index} value={value}>{value}</option>);
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id="chkPedLeg"
                                    checked={pirateForm.pegLeg}
                                    onChange={(evt) => setPirateForm({ ...pirateForm, pegLeg: evt.target.checked })} />
                                <label className="form-check-label" htmlFor="chkPedLeg">
                                    Peg Leg
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id="chkEyePatch"
                                    checked={pirateForm.eyePatch}
                                    onChange={(evt) => setPirateForm({ ...pirateForm, eyePatch: evt.target.checked })} />
                                <label className="form-check-label" htmlFor="chkEyePatch">
                                    Eye Patch
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id="chkHookHand"
                                    checked={pirateForm.hookHand}
                                    onChange={(evt) => setPirateForm({ ...pirateForm, hookHand: evt.target.checked })} />
                                <label className="form-check-label" htmlFor="chkHookHand">
                                    Hook Hand
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type='submit'
                                className='btn btn-primary ms-3 me-3'
                                style={{ width: "150px" }}>Add Pirate</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default PirateForm