import React, { useEffect, useState } from "react";
import LineGraph from "../../components/LineGraph/LineGraph";
import styles from "./styles.module.css";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Transactions Over Time',
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Transaction Value',
      },
    },
  },
};


const Tranzaction = {
  "Transaction": {
    "Jan,2024": 22797.95,
    "Feb": 19879.05,
    "Mar": 23495.6,
    "Apr": 20975.1,
    "May": 22613.75,
    "Jun": 21046.95,
    "Jul": 22870.6,
    "Aug": 20986.25,
    "Sep": 22574.35,
    "Oct": 20524.35,
    "Nov": 19935.35,
    "Dec": 22524.35,
    "Jan,2025": 22426.29,
    "Feb,2025": 21478.23,
    "Mar,2025": 23930.17,
    "Apr,2025": 21382.11,
    "May,2025": 22834.05,
    "Jun,2025": 24285.99,
  },
};

const strategy_data = [
  {
    "name": "Provide discounts",
    "action": "Offer 3-5% discounts for top 3 least categories over $50",
    "expected_change": "Increase sales in these categories by 15%",
    "projected_impact": {
      "Jan,2024": 22797.95,
      "Feb": 19879.05,
      "Mar": 23495.6,
      "Apr": 20975.1,
      "May": 22613.75,
      "Jun": 21046.95,
      "Jul": 22870.6,
      "Aug": 20986.25,
      "Sep": 22574.35,
      "Oct": 28088.35,
      "Nov": 27126.35,
      "Dec": 25524.35,
      "Jan,2025": 27435.12,
      "Feb,2025": 26122.65,
      "Mar,2025": 28930.17,
      "Apr,2025": 27382.11,
      "May,2025": 26231.54,
      "Jun,2025": 28285.99
    }
  },
  {
    "name": "Member Loyalty Programs",
    "action": "Offer double reward points on purchases above $30 for Members. ",
    "expected_change": "Increase member retention and sales by 10%",
    "projected_impact": {
      "Jan,2024": 22797.95,
      "Feb": 19879.05,
      "Mar": 23495.6,
      "Apr": 20975.1,
      "May": 22613.75,
      "Jun": 21046.95,
      "Jul": 22870.6,
      "Aug": 20986.25,
      "Sep": 22574.35,
      "Oct": 26088.35,
      "Nov": 25453.21,
      "Dec": 27121.17,
      "Jan,2025": 27938.28,
      "Feb,2025": 27128.91,
      "Mar,2025": 28930.17,
      "Apr,2025": 27382.11,
      "May,2025": 26231.54,
      "Jun,2025": 29381.99
    }
  },
  {
    "name": "Boost Beverages Sales",
    "action": "Bundle this products at a 10% discount or buy 2, get 1 free offers",
    "expected_change": "Boost sales in low-performing category by 11.5%",
    "projected_impact": {
      "Jan,2024": 22797.95,
      "Feb": 19879.05,
      "Mar": 23495.6,
      "Apr": 20975.1,
      "May": 22613.75,
      "Jun": 21046.95,
      "Jul": 22870.6,
      "Aug": 20986.25,
      "Sep": 22574.35,
      "Oct": 23124.65,
      "Nov": 22756.12,
      "Dec": 24524.35,
      "Jan,2025": 25426.29,
      "Feb,2025": 23218.23,
      "Mar,2025": 25130.17,
      "Apr,2025": 24382.11,
      "May,2025": 25124.05,
      "Jun,2025": 27267.51
    }
  },
  {
    "name": "Seasonal Campaigns",
    "action": "Push high-demand categories like Household and Food with a 5-9% holiday discount",
    "expected_change": "Sell additional units within 1 month",
    "projected_impact": {
      "Jan,2024": 22797.95,
      "Feb": 19879.05,
      "Mar": 23495.6,
      "Apr": 20975.1,
      "May": 22613.75,
      "Jun": 21046.95,
      "Jul": 22870.6,
      "Aug": 20986.25,
      "Sep": 22574.35,
      "Oct": 20524.35,
      "Nov": 19535.35,
      "Dec": 27524.35,
      "Jan,2025": 25721.29,
      "Feb,2025": 21478.23,
      "Mar,2025": 28930.17,
      "Apr,2025": 21382.11,
      "May,2025": 22834.05,
      "Jun,2025": 24285.99
    }
  }
]

const StrategyDashboard = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToDataset = (json, label, color) => {
    const labels = Object.keys(json);
    const datasetData = Object.values(json);

    return {
      labels,
      dataset: {
        label,
        data: datasetData,
        borderColor: color,
        backgroundColor: `${color}33`,
        tension: 0.4,
        fill: true,
      },
    };
  };

  useEffect(() => {
    const defaultData = convertToDataset(Tranzaction.Transaction, "Transactions", "#0083b0");
    setData({
      labels: defaultData.labels,
      datasets: [defaultData.dataset],
    });
  }, []);

  const handleStrategyChange = (e) => {
    setLoading(true);
    const strategyName = e.target.value;

    setTimeout(() => {
      if (strategyName === "default") {
        const defaultData = convertToDataset(Tranzaction.Transaction, "Transactions", "#0083b0");
        setData({
          labels: defaultData.labels,
          datasets: [defaultData.dataset],
        });
        setSelectedStrategy(null);
      } else {
        const strategy = strategy_data.find((item) => item.name === strategyName);
        if (strategy) {
          const strategyData = convertToDataset(strategy.projected_impact, strategy.name, "#007D57");
          const defaultData = convertToDataset(Tranzaction.Transaction, "Transactions", "#0083b0");

          setData({
            labels: defaultData.labels,
            datasets: [defaultData.dataset, strategyData.dataset],
          });
          setSelectedStrategy(strategy);
        }
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.income_page}>
      {selectedStrategy && !loading && (
        <div className={styles.strategyDetails}>
          <p>
            <strong>Action</strong> 
            <hr />
            {selectedStrategy.action}
          </p>
          <p>
            <strong>Expected Change</strong> 
            <hr />
            {selectedStrategy.expected_change}
          </p>
        </div>
      )}
      <div className={styles.graph_border}>
        {loading ? (
          <div className={styles.loader}>Loading...</div>
        ) : (
          <div className={styles.graph}>
            <LineGraph options={options} data={data} />
          </div>
        )}
        <div>
          <select
            name="strategy-select"
            id="strategy-select"
            className={styles.select}
            onChange={handleStrategyChange}
          >
            <option value="default">Default Transaction</option>
            {strategy_data.map((strategy, index) => (
              <option key={index} value={strategy.name}>
                {strategy.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StrategyDashboard;
