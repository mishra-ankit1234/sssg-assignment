import React, { useContext, useState } from 'react';
import { InputNumber, Button, Typography } from 'antd';
import { DataContext } from '../context/DataContext';

const { Title } = Typography;

const PricingCalculator = () => {
  const { data } = useContext(DataContext);
  const [basePrice, setBasePrice] = useState(10);
  const [pricePerCreditLine, setPricePerCreditLine] = useState(2);
  const [pricePerCreditScorePoint, setPricePerCreditScorePoint] = useState(1);
  const [subscriptionPrices, setSubscriptionPrices] = useState([]);

  const calculatePrices = () => {
    const prices = data.map((item) => {
      const creditScore = parseFloat(item.CreditScore) || 0;
      const creditLines = parseInt(item.CreditLines) || 0;
      return basePrice + (pricePerCreditLine * creditLines) + (pricePerCreditScorePoint * creditScore);
    });
    setSubscriptionPrices(prices);
  };

  return (
    <div>
      <Title level={3}>Subscription Pricing Calculator</Title>
      <div style={{ marginBottom: '20px' }}>
        <InputNumber
          addonBefore="Base Price"
          value={basePrice}
          onChange={setBasePrice}
        />
        <InputNumber
          addonBefore="Price per Credit Line"
          value={pricePerCreditLine}
          onChange={setPricePerCreditLine}
        />
        <InputNumber
          addonBefore="Price per Credit Score Point"
          value={pricePerCreditScorePoint}
          onChange={setPricePerCreditScorePoint}
        />
      </div>
      <Button type="primary" onClick={calculatePrices}>Calculate Prices</Button>
      <div className="subscription-price">
        {subscriptionPrices.length > 0 && subscriptionPrices.map((price, index) => (
          <div key={index}>Subscription Price {index + 1}: ${price.toFixed(2)}</div>
        ))}
      </div>
    </div>
  );
};

export default PricingCalculator;
