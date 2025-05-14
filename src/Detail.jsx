import React from "react";

function Detail() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Apa itu BMI?</h2>
      <p className="text-gray-700 leading-relaxed">
        BMI (Body Mass Index) adalah ukuran yang digunakan untuk menilai apakah berat badan seseorang ideal terhadap tinggi badannya. 
        Rumus perhitungan BMI adalah:
      </p>
      <div className="my-4 p-4 bg-indigo-100 rounded-lg text-indigo-800 font-semibold">
        BMI = Berat (kg) / (Tinggi (m) × Tinggi (m))
      </div>
      <p className="text-gray-700 leading-relaxed">
        Kategori:
        <ul className="list-disc ml-6 mt-2">
          <li>BMI &lt; 18.5 → Kurus</li>
          <li>18.5 ≤ BMI &lt; 25 → Normal</li>
          <li>25 ≤ BMI &lt; 30 → Gemuk</li>
          <li>BMI ≥ 30 → Obesitas</li>
        </ul>
      </p>
    </div>
  );
}

export default Detail;
