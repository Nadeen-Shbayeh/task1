// src/data/profileData.ts

export interface UserData {
    name: string;
    email: string;
    location: string;
    phone: string;
    rating: number;
    description: string;
  }
  
  // Sample user data
  const profileData: UserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, NY",
    phone: "+1 234 567 8900",
    rating: 4.5,
    description: "Experienced lawyer specializing in corporate law."
  };
  
  // Function to simulate loading user data
  export const loadUserData = async (): Promise<UserData | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileData); // Simulating a delay before resolving
      }, 1000); // Simulating 1 second delay
    });
  };
  
  export default profileData;
  