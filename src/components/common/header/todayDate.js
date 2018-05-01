import React from 'react';

import moment from 'moment';

const TodayDate = ({title, icon}) => (
  <div className="todayDate">
  	<strong>{moment().format("DD")}</strong>
    <p>{moment().format("MMM YYYY")}<br />{moment().format('dddd, h:mm:ss a')}</p>
  </div>
)

export default TodayDate;
