// import { useState } from "react";
// export default function ContactForm() {
//   const [emailError, setEmailError] = useState("");
//   const [messageError, setMessageError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//       if (!emailRegex.test(e.target.email.value)) {
//         setEmailError("Please enter a valid email address");
//       } else {
//         setEmailError("");
//       }
//       if (e.target.message.value.length === 0) {
//         setMessageError("Message required");
//       } else {
//         setMessageError("");
//       }
//       if (emailRegex.test(e.target.email.value) && e.target.message.value.length > 0) {
//         alert("Message sent!");
//       }
//       e.target.reset();
//   };
//   return (
//     <>
//     <h1>Contact Me</h1>
//     <div className="container mx-auto mt-8">
//       <form className="flex flex-col p-10 gap-2 w-full bg-secondary" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           className="input input-bordered w-full max-w-sm self-center"
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           className="input input-bordered w-full max-w-sm"
//         />
//         <span>{emailError}</span>
//         <textarea
//           className="input w-full h-32 textarea-bordered max-w-sm"
//           placeholder="Message"
//           name="message"
//         ></textarea>
//         <span>{messageError}</span>

//         <div className="self-center">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//       </div>
//       </>
//   );
// }
