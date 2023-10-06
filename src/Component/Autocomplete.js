// export const Autocomplete =()=>{
//     return(
//         <div>
//             Autocomplete
//         </div>
//     )
// }


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MapShow from './MapShow';
import Iframe from 'react-iframe';
import { useState } from 'react';

export default function ComboBox() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (event, value) => setSelectedOptions(value);

    const handleSubmit = () => console.log(selectedOptions);

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={stateName}
                onChange={handleChange}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Location" />}
            />
            <button onClick={handleSubmit}>Submit!</button>
            {/* <MapShow /> */}
            
            <Iframe
                url={selectedOptions.url}
                height='200px'
            />
        </>

    );
}

const stateName = [
    { label: "Andhra Pradesh",url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7861224.716756586!2d75.46012920894341!3d15.830895476080578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3546f8ae93d47f%3A0x33d1bbbe95adcd83!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1696408884338!5m2!1sen!2sin" },
    { label: "Arunachal Pradesh",url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606785.476918647!2d94.47883335!3d28.016789749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374043466a1c7227%3A0x76b56e552f9a92f2!2sArunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1696409942988!5m2!1sen!2sin" },
    { label: "Assam", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670406.05039935!2d92.8582383!3d26.05380505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374516c94c312d63%3A0xd11a73bb736719fb!2sAssam!5e0!3m2!1sen!2sin!4v1696410081160!5m2!1sen!2sin" },
    { label: "Bihar", url:""},
    { label: "Chhattisgarh", url:"" },
    { label: "Goa" , url:""},
    { label: "Gujarat" , url:""},
    { label: "Haryana" , url:""},
    { label: "Himachal Pradesh", url:"" },
    { label: "Jharkhand" , url:""},
    { label: "Karnataka" , url:""},
    { label: "Kerala" , url:""},
    { label: "Madhya Pradesh", url:"" },
    { label: "Maharashtra" , url:""},
    { label: "Manipur" , url:""},
    { label: "Meghalaya" , url:""},
    { label: "Mizoram" , url:""},
    { label: "Nagaland" , url:""},
    { label: "Odisha" , url:""},
    { label: "Punjab" , url:""},
    { label: "Rajasthan" , url:""},
    { label: "Sikkim" , url:""},
    { label: "Tamil Nadu" , url:""},
    { label: "Telangana", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888715.6162926923!2d76.63650007116114!3d17.858601490846414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3350db9429ed43%3A0x63ef7ba741594059!2sTelangana!5e0!3m2!1sen!2sin!4v1696410595271!5m2!1sen!2sin" },
    { label: "Tripura" , url:""},
    { label: "Uttarakhand" , url:""},
    { label: "Uttar Pradesh" , url:""},
    { label: "West Bengal" , url:""},
];
