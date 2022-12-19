import React from 'react';
import OrderStatistic from './OrderStatistic';
import SalesStatistics from './SalesStatistics';

const StatisticSection = () => {
     
      return (
        <div className="grid grid-cols-4 gap-6 mt-16 ">
          <div className='col-span-2'>
            <SalesStatistics />
          </div>
          <div>
            <OrderStatistic />
          </div>
          <div>
            <OrderStatistic />
          </div>
        </div>
      );
};

export default StatisticSection;