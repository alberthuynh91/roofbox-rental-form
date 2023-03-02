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
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
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
  console.log(`what is vehicleHasCrossbars: `, vehicleHasCrossbars);
  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <h1>Roofbox Rental Form</h1>
      <h2>Rental Information</h2>
      <Field label="Full Name" type="text" name="name" />
      <Field label="Phone Number" type="text" name="phone" />
      <Field label="Pick Up Date" type="datetime-local" name="pickupDateTime" />
      <Field label="Return Date" type="datetime-local" name="returnDateTime" />
      <h2>Vehicle Information</h2>
      <Field label="Vehicle Year (e.g. 2005)" type="text" name="vehicleYear" />
      <Field
        label="Vehicle Make (e.g. Honda, Toyota, Ford, BMW)"
        type="text"
        name="vehicleMake"
      />
      <Field
        label="Vehicle Model (e.g. Civic, Prius, F150, 325i)"
        type="text"
        name="vehicleModel"
      />
      <Field
        label="Does your vehicle have roof rails and cross bars?"
        type="checkbox"
        name="vehicleHasCrossbars"
        value={vehicleHasCrossbars}
        onChange={(e) => setVehicleHasCrossbars(e.target.checked)}
      />
      <Field
        label="Additional Information"
        type="textarea"
        name="additionalInfo"
      />
      <Field type="submit" value="Send" disabled={!vehicleHasCrossbars} />
    </form>
  );
};

export default RentalForm;
