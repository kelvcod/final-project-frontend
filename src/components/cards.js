import React from 'react';

const cards = () => {
    return (
        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
                        <img src="https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607_1280.jpg"/>
                        <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    
  </div>
    )
}

export default cards
