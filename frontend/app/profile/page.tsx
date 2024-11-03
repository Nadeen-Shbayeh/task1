"use client"; // Ensure this component is treated as a Client Component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './style/Profile.module.css';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LinkIcon from '../svg/Link';
import MapIcon from '../svg/Map';
import PhoneIcon from '../svg/Phone';
import MailIcon from '../svg/Mail';
import Image from 'next/image'; 
import logoImage from '../assets/logo.png';

const Profile = () => {
  const router = useRouter();
  const [userID, setUserID] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('Basic Information'); // State to track active section

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('userID');
    if (id) setUserID(id);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userID) return;
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/${userID}/`);
        setUserData(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (userID) fetchUserData();
  }, [userID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Helper function to render active section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Basic Information':
        return (
          <div className={styles.basicInfoContainer}>
            <p>Basic Information</p>
            <div className={styles.infoRow}>
              <div className={styles.infoBox}>
                <div className={styles.infoContent}>
                <Image
                  src={logoImage}
                  alt="Profile"
                  width={40} // Specify the width
                  height={40} // Specify the height
                  className={styles.logo} // Use className for styling
                  />
                  <div className={styles.nameAndRating}>
                    <p className={styles.name}>Tran & Sorelle</p>
                    <div className={styles.ratingBox}>
                      <span className={styles.starIcon}>⭐</span>
                      <span className={styles.rating}> {userData.rating} Rating</span>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.websiteButton}>
                   
                    Website Link
                    <span className={styles.linkicon}>
                      <LinkIcon />
                    </span>
                  </a>
                </div>
              </div>
              <div className={styles.infoBox}> 
                <div className={styles.infoContent2}>
                <div className={styles.contactDetails}>
                  <div className={styles.iconWithText}>
                    <span className={styles.locationIcon}><MapIcon /></span>
                    <p className={styles.label}>Location</p>
                  </div>
                      <p className={styles.value}>{userData.location}</p>
                   
                  </div>
                  <div className={styles.contactDetails}>
                  <div className={styles.iconWithText}>
                    <span className={styles.phoneIcon}><PhoneIcon /></span> 
                    <p className={styles.label}>Phone Number</p>
                    </div>
                      
                      <p className={styles.value}>{userData.phone}</p>
                   
                  </div>
                  <div className={styles.contactDetails}>
                  <div className={styles.iconWithText}>
                    <span className={styles.emailIcon}><MailIcon /></span>
                    <p className={styles.label}>Email Address</p>
                    
                    </div>
                      <p className={styles.value}>{userData.email}</p>
                    
                  </div>
                </div>
              </div>

              <div className={styles.infoBox}>
              <div className={styles.contactDetails}>
                      <p className={styles.label}>Description</p>
                      <p className={styles.value}>{userData.description}</p>
                    </div>
              </div>
            </div>
          </div>
        );
      case 'Specilization':
        return <p>Specilization</p>;
      case 'Lawyer Team':
        return <p>Lawyer Team</p>;
      case 'Reviews':
        return <p>Reviews</p>;
      case 'Case Information':
        return <p>Case Information</p>;
        case 'Financial Information':
          return <p>financial information</p>;
      case 'Communication':
        return <p>communication</p>;
      case 'Documents':
        return <p>Documents</p>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Navbar userData={userData} />    
      <div className={styles.mainContent}>
        <Sidebar />
        <div className={styles.profilecontainer}>
          <div className={styles.profileContent}>
            <h1 className={styles.heading}>Profile</h1>
            <p className={styles.subHeading}>Manage your details and personal preference here</p>
            <div className={styles.profilebody}>
              <div className={styles.sidenav}>
                <button onClick={() => setActiveSection('Basic Information')} className={activeSection === 'Basic Information' ? styles.activeButton : ''}>Basic Information</button>
                <button onClick={() => setActiveSection('Specilization')} className={activeSection === 'Specilization' ? styles.activeButton : ''}>Specilization</button>
                <button onClick={() => setActiveSection('Lawyer Team')} className={activeSection === 'Lawyer Team' ? styles.activeButton : ''}>Lawyer Team</button>
                <button onClick={() => setActiveSection('Reviews')} className={activeSection === 'Reviews' ? styles.activeButton : ''}>Reviews</button>
                <button onClick={() => setActiveSection('Case Information')} className={activeSection === 'Case Information' ? styles.activeButton : ''}>Case Information</button>
                <button onClick={() => setActiveSection('Financial Information')} className={activeSection === 'Financial Information' ? styles.activeButton : ''}>Financial Information</button>
                <button onClick={() => setActiveSection('Communication')} className={activeSection === 'Communication' ? styles.activeButton : ''}>Communication</button>
                <button onClick={() => setActiveSection('Documents')} className={activeSection === 'Documents' ? styles.activeButton : ''}>Documents</button>
                

              </div>
              <div className={styles.content}>
                {renderSectionContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
