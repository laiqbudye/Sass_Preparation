1. Variables

  variable is just like JS variable in which we can store a value & can reuse it later anywhere in our file.
  

  - prefixed with '$'
  e.g: $primary-color: blue
  
  {
    color: $primary-color;
  }





2. Nesting

  sass let us to nest css selectors.
  
  normal css:-

  nav ul {
    list-style: none;
  }

  nav li {
    display: inline-block;
  }

  nav a {
    text-decoration: none;
  }



  nesting using Scss
  
  nav {
    
    ul {
      list-style: none;
    }
    
    li {
      display: inline-block;
    }
    
    a {
      text-decoration: none;
    }
  
  }
