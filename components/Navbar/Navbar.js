// export default function Navbar({ user, logout }) {
//   return (
//     <div>
//       {user?.value && <button onClick={logout}>Logout</button>}
//       {!user?.value && <button>Login</button>}
//     </div>
//   );
// }
// import { useContext } from "react";
// import { UserContext } from "../UserContext";

// export default function Navbar() {
//   const { user, logout } = useContext(UserContext);

//   return (
//     <div>
//       {user?.value && <button onClick={logout}>Logout</button>}
//       {!user?.value && <button>Login</button>}
//     </div>
//   );
// }
import { useUser } from "../UserContext";
export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <div>
      {user?.value && <button onClick={logout}>Logout</button>}
      {!user?.value && <button>Login</button>}
    </div>
  );
}
