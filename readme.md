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
