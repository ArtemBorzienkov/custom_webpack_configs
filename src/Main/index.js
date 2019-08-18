import React from 'react'

import articleList from '../ArticleBucket';
import '../styles.css'

const Main = () => {
  return (
    <div className='main-page'>
      {articleList.map(a => (
        <div className='article-block' key={a.id}>
          <div className='block-title'>{a.title}</div>
          <div className='block-text'>
            <img src={a.pictures} alt=''/>
            <span>{a.text}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main