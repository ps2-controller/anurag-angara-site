import React from 'react';
import banners from './../../styles/banners';
import github from './../../Assets/GitHub.svg';
import twitter from './../../Assets/Twitter.svg';
import blog from './../../Assets/Blog.svg';
import linkedin from './../../Assets/LinkedIn.svg';

import cssStyles from './Footers.module.css';

export default function Footer(){

  const GitHub = github;
  const Twitter = twitter;
  const Blog = blog;
  const LinkedIn = linkedin

  const data = [
    {
      'Name': 'GitHub',
      'Url': 'https://github.com/ps2-controller'
    },
    {
      'Name': 'Twitter',
      'Url': 'https://github.com/ps2-controller'
    },
    {
      'Name': 'Blog',
      'Url': 'https://medium.com/@anuragangara'
    },
    {
      'Name': 'LinkedIn',
      'Url': 'https://www.linkedin.com/in/anurag-angara-6863a483/'
    }
  ]

  const footerItems = data.map((d, index) => {
    console.log(eval(d.Name))
  return (
  <a
  key={d.Name}
  href={d.Url}
  target={"_blank"}
  >
    <img 
    key={d.Name}
    src={eval(d.Name)}
    alt={d.Name}
    style={
      {
        paddingTop: '30px',
        paddingRight: '30px'
      }
    }
    />
  </a>
  )})

  return(
    <div
      style={Object.assign({}, banners.footer, {
        alignItems: 'center',
        maxWidth: '100%',
        height: 'auto'
      })}   
    >   
    <div
      className={cssStyles.footer}
    >
      {footerItems}
    </div>
  </div>
  )
}