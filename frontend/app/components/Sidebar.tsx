import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

import DashboardIcon from '../svg/Dashboard';
import SettingsIcon from '../svg/Settings';
import ProfileIcon from '../svg/Profile';
import DriveIcon from '../svg/Drive';
import LFOIcon from '../svg/LFO';
import CalendarIcon from '../svg/Calendar';
import ChatIcon from '../svg/Chat';
import LogoutIcon from '../svg/Logout';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.contentWrapper}>
        <div className={styles.welcomeMessage}>Welcome to Legistai!</div>
        <ul className={styles.menuList}>
          <li className={pathname === '/dashboard' ? styles.active : ''}>
            <Link href="/dashboard">
              <span className={styles.icon}>
                <DashboardIcon />
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/drive">
              <span className={styles.icon}>
                <DriveIcon />
              </span>
              Drive
            </Link>
          </li>
          <li className={pathname === '/profile' ? styles.active : ''}>
            <Link href="/profile">
              <span className={styles.icon}>
                <ProfileIcon />
              </span>
              Profile
            </Link>
          </li>
          <li>
            <Link href="/calendar">
              <span className={styles.icon}>
                <CalendarIcon />
              </span>
              Calendar
            </Link>
          </li>
          <li>
            <Link href="/lfo">
              <span className={styles.icon}>
                <LFOIcon />
              </span>
              Law Firm Options
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <span className={styles.icon}>
                <SettingsIcon />
              </span>
              Settings
            </Link>
          </li>
          <li className={`${styles.chatButton}`}>
            <Link href="/chat">
              <span className={styles.icon}>
                <ChatIcon />
              </span>
              Start New Chat
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.logout}>
        <Link href="/logout">
          <span className={styles.icon}>
            <LogoutIcon />
          </span>
          Log Out
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
