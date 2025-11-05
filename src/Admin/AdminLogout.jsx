import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutAdmin = async () => {
      try {
        await signOut(auth);
        localStorage.removeItem('isAdmin'); 
        alert("Admin logged out successfully!");
        navigate("/admin/login");
      } catch (error) {
        console.error("Logout Error:", error);
        alert("Error while logging out. Try again!");
      }
    };

    logoutAdmin();
  }, [navigate]);

  return (
    <div className="text-center mt-5">
      <h4>Logging you out...</h4>
    </div>
  );
}

export default AdminLogout;
