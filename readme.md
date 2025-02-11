 *** Vite ( also a bundler )  ***
 // khud hi sara setup krr dega
 npm create vite@latest  : vite ko apne project me leaana 
 // abb index.html , package.json(dependencies mention hongi react and react-dom),  .gitignore file, js file 'src' ke andrr hai jisska extention .jsx kiya hai innhone // prr .jsx ke tho 2 file hai // check from html ki apni main file konsi hai

prr abhi tho node-module nhi aaya(mtlb abhi hmmne dependenices ko install nhi kiya hai) : BY npm install
// npm install: package.json file ko dhunde ga jo vite-project me store hai // therefore go in vite project by 'cd vite-project' // now apply npm install // abb node_modules create hojae ga, jissme react, react-dom, bebel store hoga

npm run dev // iss command se aapka project start hojae ga

// aapko koi project mila hai , aapko nhi pata isse kaise run krna hai??
aap jao package.json ke aandrr >> script me
npm run dev or start // to run code // dev ya start me se koi ek hoga
npm run build // to get production ready code
// 'npm run' se command start hogi
// ye issliye hai kyoki kaai brr commannd bohot baadi hoti hai // jaise 'vite build' ko hmmne 'build' se save krr rakha hai , therefore hmme sirf 'npm run build' likhna padhta hai
// abb hmm 'npm run _____' se uss command ko run krrva skte hnn



 dependencies 2 types ki hoti hn 
 1) jo normal vali dependencies // issko hmm production me bhi daalte hn
 2) devDependencies // ye dependencies sirf development me kaam aati hai// parcel, bevel,vite // production me daalne ki jarurtt nhi hai


// mee chata ki parcel as a dev dependency aaye // use -D
// npm install -D parcel  // abb parcel as a dev dependency aaye ga



// JSX : with the help of {} , we can write JS expression in JSX and we cannot write JS Statement inside {} i.e we cannot write let x = 2; in {}

//difference between Expression and statement
Expression vo hai jo output lake de(kuch result lake de) // jinki jaagha kuch aaske
Expression :  array, string, number , object.name(isski koi value hogi) etc
statement : let x = 3, object etc




//**** difference between framework and liberary??? ****
LIBERARY: A library is a collection of functions, classes, or methods that you can call to perform specific tasks. When you use a library, you are in control of the flow of the application. You decide when and where to call the library functions.

FRAMEWORK: A framework, on the other hand, provides a structure or skeleton for building applications. The framework is in control of the flow, and your code fills in the details. This is often referred to as the "Inversion of Control" (IoC) principle.


Library: A tool you use to perform specific tasks. You control when and how to use it.

Framework: A structure that dictates how your application should be built. It controls the flow and calls your code when necessary.

Parcel is a tool (specifically, a bundler/build tool). It is not a library or framework because: 1) It doesn't provide reusable functions or components like a library.
         2) It doesn't dictate the structure or architecture of your application like a framework.
         3) It focuses on the build process, making it a utility tool for developers.

JSX is neither a library, nor a framework, nor a tool. Instead, JSX is a syntax extension for JavaScript


// difference between npm vs npx ??
*** npm ***
npm is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages (libraries or tools) from the npm registry.
Installs packages into the node_modules directory.
Requires packages to be installed before they can be used.
Use npm when:
1) You need to install packages for your project.
2) You want to manage dependencies or run scripts defined in package.json.

npm: Like a librarian who helps you find and store books (packages) in your library (project).


*** npx ***
npx is a tool that comes bundled with npm (version 5.2.0 and above). It is used to execute Node.js packages without needing to install them globally or locally.
Running packages directly from the npm registry.
Use npx when:
1) You want to run a package temporarily without installing it.
2) You need to execute a one-off command or tool (e.g., scaffolding a project).

npx: Like a delivery service that brings you a book (package) when you need it, without requiring you to keep it permanently.