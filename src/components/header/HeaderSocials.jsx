import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https:/linkedin.com" rel="noreferrer" target='_blank'><BsLinkedin /></a>
            <a href="https:/github.com" rel="noreferrer" target='_blank'><FaGithub /></a>
            <a href="https:/instagram.com" rel="noreferrer" target='_blank'><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials