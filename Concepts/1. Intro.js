
Sass - syntactically awesome style sheets

It is a CSS preprocessor which allows us to use advanced features that CSS natively do not supports.

sass files has .scss exention.


preprocessor - is a software program which will take the scss/less code as a input & convert that into native css file.

// Setup of scss

we need to install sass to work with scss
    - npm install sass


    
to compile SCSS file to CSS file
    - sass  target_file.scss   destination_file.css



to watch changes in SCSS file & compile automatically
    - sass  --watch  scss/style.scss  css/style.css

here, --watch flag will watch for changes on style.scss & will automatically compile to new style.css file
