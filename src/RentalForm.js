import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_c16ep8h';
const TEMPLATE_ID = 'template_mnggp6p';
const PUBLIC_KEY = '1BkGsMDM2a7oF8Cfr';

export const RentalForm = () => {
  const [vehicleHasCrossbars, setVehicleHasCrossbars] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
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
      <label>Full Name</label>
      <input type="text" name="name" />
      <label>Phone Number</label>
      <input type="tel" name="phone" />
      <label>Pick Up Date</label>
      <input type="datetime-local" name="pickupDateTime" />
      <label>Return Date</label>
      <input type="datetime-local" name="returnDateTime" />

      <h2>Vehicle Information</h2>
      <label>Vehicle Year (e.g. 2005)</label>
      <input type="text" name="vehicleYear" />
      <label>Vehicle Make (e.g. Honda, Toyota, Ford, BMW)</label>
      <input type="text" name="vehicleMake" />
      <label>Vehicle Model (e.g. Civic, Prius, F150, 325i)</label>
      <input type="text" name="vehicleModel" />
      <label>
        Does your vehicle have roof rails and cross bars?
        <input
          type="checkbox"
          name="vehicleHasCrossbars"
          value={vehicleHasCrossbars}
          onChange={setVehicleHasCrossbars}
        />
      </label>

      <label>Additional Information</label>
      <textarea name="additionalInfo" />

      <input type="submit" value="Send" disabled={!vehicleHasCrossbars} />
    </form>
  );
};

export default RentalForm;
