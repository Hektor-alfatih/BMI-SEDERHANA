import React from "react";

function Detail() {
  return (
    <div className="p-6 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700 hover:text-indigo-900 transition duration-300">
        Apa itu Hidup sehat?
      </h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
         Hidup sehat adalah kunci utama untuk menjaga kebugaran tubuh dan
        pikiran. Dengan mengatur pola makan seimbang, rutin berolahraga, cukup
        tidur, dan menjaga kesehatan mental, kita dapat meningkatkan kualitas
        hidup. Mulailah dari langkah kecil, seperti minum air putih yang cukup
        dan hindari makanan olahan. Kebiasaan sehat hari ini adalah investasi
        untuk masa depan yang lebih baik.:
      </p>
      <div className="my-6 p-4 bg-indigo-100 rounded-lg text-indigo-800 font-semibold text-center shadow hover:scale-105 transition-transform duration-300">
        BMI = Berat (kg) / (Tinggi (m) × Tinggi (m))
      </div>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Kategori:
      </p>
      <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
        <li className="hover:text-indigo-700 transition">BMI &lt; 18.5 → Kurus</li>
        <li className="hover:text-indigo-700 transition">18.5 ≤ BMI &lt; 25 → Normal</li>
        <li className="hover:text-indigo-700 transition">25 ≤ BMI &lt; 30 → Gemuk</li>
        <li className="hover:text-indigo-700 transition">BMI ≥ 30 → Obesitas</li>
      </ul>
      <img src="/assets/obts.jpg" alt="contoh obsts" />
    </div>
  );
}

export default Detail;
