import React from 'react'

export default function Projects() {
  return (
    <div className='projects'>


    <div className='project'>   
        <a href='https://math-calculator-gnzv-git-master-ondeyomatoke.vercel.app/'>
          <div>
            <img src='/images/mathCalci.png' alt='mathCalci' className='mathCalciimage'/>
            <p className='heading5'> Facilitating math calculations</p>
          </div>
        </a>
      </div>


      <div className='project'>
        <a href='https://gift-card-git-master-ondeyomatoke.vercel.app/'>
          <div>
            <img src='/images/giftcard.png' alt='giftcardimage' className='giftcardimage'/>
            <p className='heading5'>I'm working on this giftcard project with my two friends, a designer and backend dev.<br/>
              Once complete, users will be able to redeem their giftcards for cash.                
            </p>
          </div>
        </a>
      </div>

      <div className='project'>
        <a href='https://a-todo-list-git-master-ondeyomatoke.vercel.app/'>
          <div>
            <img src='/images/todo.png' alt='todolist' className='todoimage'/>
            <p className='heading5'>If you like to have an organized day, this toDo List project you will 
              be interested in. 
            </p>
          </div>
        </a>
      </div>

      <div className='project'>
        <a href='https://bmi-calculator-git-master-ondeyomatoke.vercel.app/'>
          <div>
            <img src='/images/bmi.png' alt='bmicalci' className='bmiimage'/>
            <p className='heading5'>This calculator project is for users on a weight management journey who would like<br/>
             to track their progress. Its very simple to use.
            </p>
          </div>
        </a>
      </div>

      <div className='project'>
        <a href='https://updated-clock-git-master-ondeyomatoke.vercel.app/'>
          <div>
            <img src='/images/clock.png' alt='clock' className='clockimage'/>
            <p className='heading5'>This clock was one of my very first projects. To help grasp JS projects.</p>
          </div>
        </a>
      </div>

      <div className='project'>
        <a href='https://facebook-landing-page-git-master-ondeyomatoke.vercel.app/'>
          <div>
            <img src='/images/facebook.png' alt='fbpage' className='fbimage'/>
            <p className='heading5'>This is a facebook landing page project. 
            I used it to practice HTML and CSS.</p>
          </div>
        </a>
      </div>
    </div>
  )
}
