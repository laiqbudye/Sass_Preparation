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







3. Modules

  we dont have to write complete sass code in one file, we can split it to multiple files.
  when we want to use another module in current module we can use @use rule. This rule loads another sass file as a module which means we can refer to its variable, mixins in your
  sass file with a namespace based on filename.
  
  
  // _base.scss
    $font-stack:    Helvetica, sans-serif;
    $primary-color: #333;

    body {
      font: 100% $font-stack;
      color: $primary-color;
    }


   // styles.scss
    @use 'base';

    .inverse {
      background-color: base.$primary-color;
      color: white;
    }
