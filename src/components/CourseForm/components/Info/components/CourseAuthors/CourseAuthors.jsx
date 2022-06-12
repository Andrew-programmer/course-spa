import React from 'react';

export const CourseAuthors = ({authorsList}) => {
  return(
      <div className={'abled-authors-list from-section'}>
        <h3 className={'authors-list-container-header'}>Course authors</h3>
        <span className={'authors-list'} data-testid={'current-authors-list'}>{authorsList.join(', ')}</span>
      </div>
  )
}
