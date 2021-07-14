import React, { useState } from 'react';
import s from './Pagination.module.css';

type PropsType = {
  totalUsersCount: number
  usersCount: number
  currentPage: number
  onPageChanged: (portions: number) => void
}

const Pagination: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersCount) + 11;
    let totalPagesCount = [];
    for (let i = 1; i <= pagesCount; i++) {
        totalPagesCount.push(i);
    }

    let portionCount = 5; // размер порции(видимости) страниц
    let portionPages = Math.ceil(pagesCount / portionCount);// сколько всего приций страниц
    let [currentPortion, setCurrentPortion] = useState(1);
    let leftPortionCount = (currentPortion - 1) * portionCount + 1;//начальная позиция 
    let rightPortionCount = currentPortion * portionCount;// конечная позиция порции страниц
    return <div className={s.pagination}>
        {/* <span>Pages:</span> */}
        {currentPortion > 1 && <button onClick={ ()=>{ setCurrentPortion(currentPortion-1) } }>НАЗАД</button>}
        {
          totalPagesCount
            .filter(p => p >= leftPortionCount && p <= rightPortionCount)
              .map((p) => {
                return <span onClick={() => { props.onPageChanged(p) }} key={p} className={`${props.currentPage === p ? s.selected : s.no_selected} ${s.cursor}`}>{p}</span>
          })
        }
        {<button onClick={ ()=>{ if(currentPortion < portionPages){setCurrentPortion(currentPortion+1)} } }>ДАЛЕЕ</button>}
      </div>
}

export default Pagination;