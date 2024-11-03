"use client";

import { useState } from 'react';
import styles from './style/RegisterPage.module.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { UserData } from './types'; 

const RegisterPage = () => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    location: '',
    phone: '',
    email: '',
    description: '',
    rating: undefined, 
  });
  const [showPopup, setShowPopup] = useState({ visible: false, message: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? Number(value) : value, // Convert rating to a number
    }));
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFormComplete = Object.values(formData).every((field) => field?.toString().trim() !== '');
    if (!isFormComplete) {
      setShowPopup({ visible: true, message: 'Please complete all form fields before continuing.' });
      return;
    }
  
    try {
      // Check if the email is already registered
      const emailCheckResponse = await axios.get(`http://localhost:8000/api/check-email/${formData.email}/`);
      if (emailCheckResponse.data.is_registered) { // Adjusted key based on your response
        setShowPopup({ visible: true, message: 'This email is already registered.' }); // Show popup for already registered email
        return;
      }
  
      console.log("Form Data to be sent:", formData); // Log the form data
      const response = await axios.post('http://localhost:8000/api/register/', formData);
  
      if (response.status === 201) {
        const userID = response.data.userID;
        router.push(`/profile?userID=${userID}`);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Registration failed:", error.message);
        if (error.response) {
          console.error("Error response:", error.response.data);
        }
      } else if (error instanceof Error) {
        console.error("An unexpected error occurred:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };
  

  const handleClosePopup = () => {
    setShowPopup({ visible: false, message: '' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <form className={styles.form} onSubmit={handleContinue}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={20} 
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Rating:</label>
          <input
            type="number"
            name="rating"
            value={formData.rating === undefined ? '' : formData.rating} // Convert to empty string if undefined
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>Register</button>
          <button type="button" className={styles.button} onClick={handleContinue}>
            Continue
          </button>
        </div>
      </form>

      {showPopup.visible && (
        <div className={styles.popup}>
          <p className={styles.popupMessage}>{showPopup.message}</p>
          <button onClick={handleClosePopup} className={styles.popupButton}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
