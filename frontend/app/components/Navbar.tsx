import Image from 'next/image'; // This should be at the top of your file
import styles from './NavBar.module.css';
import LogoIcon from '../svg/Logo';
import SearchIcon from '../svg/Search';
import UnitedIcon from '../svg/United';
import ArowIcon from '../svg/Arrow';
import NotificationIcon from '../svg/Notification'; // Import your notification icon
import personImage from '../assets/person.png';
import { UserData } from '../data/profileData'; // Import UserData type if needed

interface NavbarProps {
  userData: UserData | null; // Define the props for the Navbar
}


const  Navbar: React.FC<NavbarProps> =({ userData }) => {
  return (
    <nav className={styles.navbar}>
     

      <div className={styles.searchAndLanguage}>
      <span className={styles.logoIcon}>
        <LogoIcon />
      </span>
        <div className={styles.searchContainer}>
       
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>

        <button className={styles.languageButton}>
          <span className={styles.flagIcon}>
            <UnitedIcon />
          </span>
          ENG
          <span className={styles.dropdownArrow}>
            <ArowIcon />
          </span>
        </button>

        <span className={styles.notificationIcon}>
          <NotificationIcon />
        </span>
        
        <div className={styles.profileContainer}>
        <Image
        src={personImage}
        alt="Profile"
        width={40} // Specify the width
        height={40} // Specify the height
        className={styles.profileImage} // Use className for styling
        />

      <div className={styles.profileInfo}>
        <span className={styles.profileName}>{userData?.name || "Guest"}</span>
        <span className={styles.profileRole}>Software Engineer</span>
      </div>
    </div>
      </div>

    </nav>
  );
};

export default Navbar;
