import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h) return;

    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(1));

    let status = "";
    if (bmiValue < 18.5) status = "Kurus";
    else if (bmiValue < 25) status = "Normal";
    else if (bmiValue < 30) status = "Gemuk";
    else status = "Obesitas";

    setCategory(status);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Kalkulator BMI</h2>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Berat badan (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            placeholder="Tinggi badan (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={calculateBMI}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Hitung
          </button>
        </div>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">BMI Anda: <span className="font-bold">{bmi}</span></p>
            <p className="text-indigo-600 font-semibold">{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
