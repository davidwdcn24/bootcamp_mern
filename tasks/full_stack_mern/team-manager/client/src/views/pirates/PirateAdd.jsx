import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import piratesApi from "../../apis/pirates.api";
import PirateForm from '../../components/pirates/PirateForm';
import Header from '../Header';

const PirateAdd = () => {
    const { addPirate } = piratesApi;
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createPirate = (pirate) => {
        addPirate(pirate)
            .then(response => {
                setErrors([]);
                Swal.fire({
                    title: "Datos grabados exitosamente.",
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/pirates", {});
                    }
                });
            })
            .catch(error => {
                console.log("Error: ", error);
                const errorResponse = error.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
    return (
        <div className="view">
            <Header title="Add Pirate" screen="add" />
            <PirateForm pirate={{}} errors={errors} save={createPirate} />
        </div>
    )
}

export default PirateAdd