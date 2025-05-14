import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h) return;

    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(1));

    let status = '';
    if (bmiValue < 18.5) status = 'Kurus';
    else if (bmiValue < 25) status = 'Normal';
    else if (bmiValue < 30) status = 'Gemuk';
    else status = 'Obesitas';

    setCategory(status);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Kalkulator BMI</h2>
      <input
        type="number"
        placeholder="Berat (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      /><br /><br />
      <input
        type="number"
        placeholder="Tinggi (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      /><br /><br />
      <button onClick={calculateBMI}>Hitung</button>
      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>Kategori:</strong> {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
