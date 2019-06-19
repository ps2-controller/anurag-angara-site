import React, { useState } from 'react';
import banners from './../../styles/banners';
import github from './../../Assets/GitHub.svg';
import twitter from './../../Assets/Twitter.svg';
import blog from './../../Assets/Blog.svg';
import linkedin from './../../Assets/LinkedIn.svg';

export default function Footer(){

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

  let GitHub = github;
  let Twitter = twitter;
  let Blog = blog;
  let LinkedIn = linkedin

  const footerItems = data.map((d, index) => {
    console.log(eval(d.Name))
  return (
  <a
  href={d.Url}
  target={"_blank"}
  >
    <img 
    key={d.Name}
    src={eval(d.Name)}
    alt={d.Name}
    style={
      {
        paddingTop: '30px'
      }
    }
    />
  </a>
  )})

  return(
    <div
      style={Object.assign({}, banners.footer, {
        alignItems: 'center'
      })}   
    >   
    <div
      style={
        {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          paddingLeft: '500px',
          paddingRight: '500px',
        }
      }
    >
      {footerItems}
    </div>
  </div>
  )
}