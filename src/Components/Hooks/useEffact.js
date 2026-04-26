// import React, { useEffect, useState } from 'react';
// import './useState.css';

// const UseEffact = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount((prev) => prev + 1);
 

//   useEffect(() => {
//     console.log('useEffect called');
//   }, [count]);


//   return (
//     <section className="counter-page">
//       <div className="counter-wrapper">
//         {/* <h1 className="counter-title">my data</h1> */}
//         <p className="counter-value">{count}</p>

//         <div className="counter-actions">
//           <button type="button" className="counter-btn counter-btn--primary" onClick={increment} disabled={count >= 10}>
//             INCR
//           </button>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UseEffact;