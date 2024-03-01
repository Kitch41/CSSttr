# CSS to the rescue
This is a repository for my school project. (Stef Keuken)

In this readme i will be describing my project and my improvements along the way

## My Idea

The idea i had when i was starting this project was a control panel that controls a firework show. This way i can combine 2 things into 1. I made some sketches to display what i was trying to do

<img src="/docs/images/console-close.jpg" width="400" height="200"><img src="/docs/images/idea-console-fireworks.jpg" width="400" height="200">


## My first demo

After i made my sketches i started coding a bit to try and get a feel for what i wanted. I quickly made some nice radiobuttons i am going to use for changing the amount of fireworks being launched.

Then i tried to build a good looking lever using animations, But after a very long time when i finally finished it i heard from sanne there was another way easier way of doing it that looked better aswell. So below i will show my code before the change.

<a href="https://codepen.io/Kitch41/pen/eYoObJK?editors=1100">Link</a>

<details>
  <summary>The Code for the lever (old)</summary>

  ``` css

/* ============================*/
/* ===========Lever============*/
/* ============================*/


/* ===========Label============*/

section > ul > li:nth-child(1) > label {
  position: relative;
  display: inline-block;
  height: 150px;
  width: 80px;

}

/* ===========Checkbox============*/

section > ul > li:nth-child(1) > label input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* ===========Slider============*/

section > ul > li:nth-child(1) > label span {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: 0 0 2px 5px darkgrey inset;
}

section > ul > li:nth-child(1) > label span:before {
  position: absolute;
  content: "";
  width: 50px;
  height: 50px;
  top: -35px;
  left: 19%;
  margin-top: 13px;
  background-color: red;
  box-shadow: 0 0 6px black inset;
  -webkit-transition: 2s;
  transition: 2s;
  border-radius: 50%;
  z-index: 1;
}

section > ul > li:nth-child(1) > label span:after {
  position: absolute;
  content: "";
  width: 15px;
  height: 70px;
  top: 0;
  left: 40%;
  margin-top: 13px;
  background-color: darkgrey;
  box-shadow: 0 0 6px black inset;
  -webkit-transition: 2s;
  transition: 2s;
  z-index: 0;
  border-radius: 10px;
}

section > ul > li:nth-child(1) > label > input:focus + span {
  box-shadow: 0 0 2px 5px darkgrey inset;
}

section > ul > li:nth-child(1) > label > input:checked + span:before {
  -webkit-transform: translatey(150px);
  -ms-transform: translatey(150px);
  transform: translatey(150px);
}

section > ul > li:nth-child(1) > label > input:checked + span:after {
  animation: flip 2s forwards;
  
}

section > ul > li:nth-child(1) > label > input:not(:checked) + span:after {
  animation: reverseFlip 2s forwards;
  
}

section > ul > li:nth-child(1) > label > div {
  width: 10em;
  height: 10em;
  
}

@keyframes flip {
  0% {
    height: 70px;
    top: 0;
  }
  

  20% {
    height: 50px;
    top: 20px;
  }
  
  33% {
    height: 0;
    top: 55px;
  }
  
  37% {
    height: 30px;
    top: 55px;
  }
 
  
  70% {
    height: 70px;
    top: 55px;
  }
 
    100% {
    height: 70px;
    top: 55px;
  }
  
}

@keyframes reverseFlip {
  0% {
    height: 70px;
    top: 55px;
  }
  
  5% {
    height: 70px;
    top: 55px;
  }

  40% {
    height: 0px;
    top: 55px;
  }

  41% {
    height: 20px;
    top: 50px;
  }
  
  70% {
    height: 70px;
    top: 0;
  }
  

  100% {
    height: 70px;
    top: 0;
  }
}


```
  
</details>

<details>
  <summary>The Code for the lever (new)</summary>

  ``` css


```
  
</details>



