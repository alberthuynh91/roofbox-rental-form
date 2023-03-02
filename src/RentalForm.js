import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Field from './Field';

// Email template https://dashboard.emailjs.com/admin/templates/9viugun

export const RentalForm = () => {
  const [vehicleHasCrossbars, setVehicleHasCrossbars] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.process.env.REACT_APP_SERVICE_ID,
        process.env.process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Successfully submitted', result.text);
        },
        (error) => {
          console.log('Error submitting', error.text);
        }
      );
  };
  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <h1>Roofbox Rental Form</h1>
      <h2>Rental Information</h2>
      <Field label="Full Name" type="text" name="name" />
      <Field label="Phone Number" type="text" name="phone" />
      <Field label="Pick Up Date" type="datetime-local" name="pickupDateTime" />
      <Field label="Return Date" type="datetime-local" name="returnDateTime" />
      <h2>Vehicle Information</h2>
      <Field
        label="Vehicle Year"
        type="text"
        name="vehicleYear"
        placeholder="Year your vehicle was made? (e.g. 2005)"
      />
      <Field
        label="Vehicle Make"
        type="text"
        name="vehicleMake"
        placeholder="Company which manufactured your vehicle? (e.g. Honda, Toyota, Ford, BMW)"
      />
      <Field
        label="Vehicle Model"
        type="text"
        name="vehicleModel"
        placeholder="Specific model of your vehicle? (e.g. Civic, Prius, F150, 325i)"
      />
      <Field
        label="Please check box to confirm your vehicle has roof rails and cross bars? (If not, then installation of roofbox isn't possible)"
        type="checkbox"
        name="vehicleHasCrossbars"
        value={vehicleHasCrossbars}
        onChange={(e) => setVehicleHasCrossbars(e.target.checked)}
      />
      <Field
        label="Additional Information"
        type="textarea"
        name="additionalInfo"
        placeholder="Please add any additional information about your reservation"
      />
      <Field type="submit" value="Send" disabled={!vehicleHasCrossbars} />
    </form>
  );
};

export default RentalForm;
