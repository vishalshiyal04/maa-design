// import React, { useState } from 'react';
// import { FaLock, FaSignInAlt } from 'react-icons/fa';

// export default function AdminLogin({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); setError('');
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/login', {
//         method: 'POST', headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await response.json();
//       if (data.success) onLogin(data.token);
//       else setError(data.message);
//     } catch (err) { setError("Server error. Check backend."); } 
//     finally { setLoading(false); }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl">
//         <div className="text-center mb-8">
//           <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"><FaLock /></div>
//           <h2 className="text-3xl font-extrabold text-[#0a1930]">Admin Access</h2>
//         </div>
//         {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 font-bold text-center border border-red-200">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-4 py-3" placeholder="Your Email ID"/>
//           <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-4 py-3" placeholder="••••••••"/>
//           <button type="submit" disabled={loading} className="w-full bg-[#0a1930] text-white font-bold py-4 rounded-xl transition-all">
//             {loading ? 'Verifying...' : <><FaSignInAlt /> Login to Dashboard</>}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }