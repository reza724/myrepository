
// 3
// function keydown(event){
//     console.log(event)

// }

// function clicked(event){
//     console.log(event)
// }
// function mouseOver(event){
//     console.log(event)
//     event.target.innerHTML='sss'
// }


// function mouseOut(event){
//     console.log(event);
//     event.target.innerHTML="چرا  رفتی دوستم"
// }

//section 14
// function validatename(event){
//     if (event.target.value.length<3 ){
//         alert('حداقل سه کارکتر وارد کیند')
//     }
// }
// function keydown(event){
//     console.log(event)

// }
// var text=`slldlldldlddl
// sjsljflslfjl` 
// console.log(text[0])


//section15
// var array1 =['apple','bananas'];
// array1.push('x1','x2');

// array1.forEach(function(value,index){
//     console.log(value);
//     console.log(index);
// });
// console.log(array1.join('|'))
// var array1=[25, 26 , 86,54];
// var array2=array1.filter(function (x) {
//     return x>40;
    
// });
// var array3= array1.map(function (value) {
//     return value * 2 ;
    
// })
// console.log(array1.sort())
// console.log(array1.sort(function(a,b){
//     return b-a;
// }))
// console.log(array2,array3)

//section 16

// var x=new Date(2019,10,20,23)

// console.log(x)
// var y=new Date('2020-01-02');
// console.log(y)

//section 17
// function test(){
//     console.log(new Date());
// };
// var x=setTimeout(test, 5000);

// function clockrunner(){
//      var d=new Date();
//      hour=d.getHours();
//      minute=d.getMinutes();
//      second=d.getSeconds();
//      var p='AM';
//      if (hour>12){
//         p='PM';
//         hour=hour-12;
//      }
//      if (hour<10){
//         hour='0'+hour;
//      }
//      var clock=hour+':'+minute+':'+second + p;
//      document.getElementById('clockdisplay').textContent=clock;
//      setTimeout(clockrunner,1000)
//     };
// clockrunner();



//section 18 in calcuator


//section 19

// var testarray=[1,2,5];
// var copyarray=[...testarray];
// console.log(copyarray);
// function x(a=1,b){
//     console.log(a,b)
// }
// x(1,5)
// function y(b,a=1){
//     console.log(a)
// }
// y(5)
// سطح متوسط


//section 2
// let x=0;
// let circle=animate.childNodes[1]

// function animatefunc() {
//     setTimeout(movecircle, 50);
// }

// function movecircle() {
//     x ++;
//     circle.style.transform = `translate3d(${x}px, 0, 0)`;

//     if (x<=130){
//         setTimeout(movecircle,10)
//     }

// }

// let intid=setInterval(function() {
//     x ++;
//     if (x==130){
//         clearInterval(intid)}
//         circle.style.transform = `translate3d(${x}px, 0, 0)`;
// }, 10);


//section 6

// console.log(mydiv.className) just standard
// console.log(mydiv.getAttribute('class')) both of standard and not standard
// mydiv.setAttribute('b','e')
// console.log(mydiv.getAttribute('b'))

// section 7 workwith dom 
// let parent=mydiv 
// let newelement=document.createElement('ul')
// newelement.className='mylist'
// newelement.innerHTML='<li id="first"> first </li> <li id="second"> second </li>'

// parent.append(newelement)
// function creato(where){
//     if (!(where in newelement)){
//         alert('not good');
//         return
//     }
//     let li=document.createElement('li')
//     li.innerHTML='new item'
//     newelement[where](li)
//     setTimeout(function rem() {
//         li.remove()
        
//     },15000)

// }
// function btul(){ 
//     creato(prompt('enter where to add?'));

// }



