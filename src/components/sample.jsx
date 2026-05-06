// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Sample() {
//   // https://randomuser.me/api/?results=20

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("https://randomuser.me/api/?results=20");
//         console.log("response", res?.data?.results[0]);
//         setData(res?.data?.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const filterUsers = data.filter((item) => item?.gender === "female");
//   console.log("filterUsers", filterUsers);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "20px",
//         padding: "20px",
//       }}
//     >
//       {filterUsers.map((user, index) => (
//         <div
//           key={index}
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             borderRadius: "8px",
//             width: "300px",
//           }}
//         >
//           <img
//             src={user.picture.large}
//             alt="Profile"
//             style={{ width: "100px", height: "100px", borderRadius: "50%" }}
//           />
//           <h3>
//             {user.name.title} {user.name.first} {user.name.last}
//           </h3>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Gender:</strong> {user.gender}
//           </p>
//           <p>
//             <strong>Phone:</strong> {user.phone}
//           </p>
//           <p>
//             <strong>Cell:</strong> {user.cell}
//           </p>
//           <p>
//             <strong>Location:</strong> {user.location.city},{" "}
//             {user.location.state}, {user.location.country}
//           </p>
//           <p>
//             <strong>Age:</strong> {user.dob.age}
//           </p>
//           <p>
//             <strong>Nationality:</strong> {user.nat}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
