import React from 'react';
import Saba from './images/avatar_saba.svg';
import Clare from './images/avatar_clare.svg';
import Xinhao from './images/avatar_xinhao.svg';
import Minhaj from './images/avatar_minhaj.svg';
import Lina from './images/avatar_lina.svg';
import Suliyat from './images/avatar_suliyat.svg';
import Dela from './images/avatar_dela.svg';

function Team(props) {
    return (
    <div className="teamContainer">
        <h2>About Us</h2>
        <h3>Meet The Entire Team</h3>
        <p>Scedule_N has created with this consideration that everyone could feel better in using their time if they can learn about their time management type based on personality and be provided with specific advice. So here we all get together to make it real. Scedule_N is the result of teamwork between three Tracks: WD, DS and UX. 
        </p><div className="teamImages">
        <figure><img src={Minhaj} /><figcaption>WD</figcaption><figcaption>Minhaj Azmi</figcaption></figure>
        <figure><img src={Suliyat} /><figcaption>WD</figcaption><figcaption>Suliyat Opeyemi</figcaption></figure>
        <figure><img src={Lina} /><figcaption>WD</figcaption><figcaption>Angelina Blumenthal</figcaption></figure>
        <figure><img src={Xinhao} /><figcaption>DS</figcaption><figcaption>Xinhao Wang</figcaption></figure>
        <figure><img src={Dela} /><figcaption>DS</figcaption><figcaption>E. Delali Aggor</figcaption></figure>
        </div>
        <div className="teamImages">
        <figure><img src={Clare} /><figcaption>UX</figcaption><figcaption>Clare Dunn</figcaption></figure>
        <figure><img src={Saba} /><figcaption>UX</figcaption><figcaption>Saba Rezzadeh Harati</figcaption></figure>
        </div>
        <h3>Our Mission</h3>
        <p>Our mission is to help people improve their knowledge about themselves regarding time management to be more productive and use their time better in line with their personality and situation.
        </p>
      </div>
      )
}

export default Team;

