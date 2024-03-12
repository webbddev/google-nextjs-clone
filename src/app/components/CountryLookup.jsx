// 'use client';

// import { useEffect, useState } from 'react';

// export default function CountryLookup() {
//   const [country, setCountry] = useState('United Kingdom');

//   useEffect(() => {
//     const getCountry = async () => {
//       try {
//         const res = await fetch(
//           `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
//         );
//         const data = await res.json();
//         if (!data.country) return;
//         setCountry(data.country);
//       } catch (error) {
//         console.error('Error fetching IP lookup:', error);
//       }
//     };
//     getCountry();
//   }, []);

//   return <div>{country}</div>;
// }

'use client';

import { useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United Kingdom');

  // Fetch country information when the component mounts
  const getCountry = async () => {
    try {
      const res = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      );
      const data = await res.json();
      // console.log(data);
      if (!data.country) return;
      setCountry(data.country);
    } catch (error) {
      console.error('Error fetching IP lookup:', error);
    }
  };

  // Call the function immediately after rendering
  getCountry();

  return <div>{country}</div>;
}
